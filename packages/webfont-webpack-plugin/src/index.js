/*
MIT License

Copyright (c) 2017-present itgalaxy inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

https://github.com/itgalaxy/webfont-webpack-plugin
*/


import path from "path";
import Watchpack from "watchpack";
import fs from "fs-extra";
import nodify from "nodeify";
import webfont from "webfont";

// utils
const regex = (...args) => {
  let flags;
  const replacer = t => {
    flags = t
    return "" 
  }

  const text = String.raw(...args)
    .replace(/(?<=\/)[dgimsuy]*$/gm, replacer)
    .replace(/^\/(?=.+\/$)/gm, "")
    .replace(/\/$/, "")
  
  return new RegExp(text, flags)
}

export default class WebfontPlugin {
  constructor(options = {}) {
    if (!options.files) {
      throw new Error("Require `files` options");
    }

    if (!options.dest) {
      throw new Error("Require `dest` options");
    }

    this.options = Object.assign(
      {
        bail: null
      },
      options
    );
    this.pluginName = "WebfontPlugin";
    this.firstRun = true;
    this.watching = null;
    this.watcher = null;
    this.needRegenerate = true;
  }

  apply(compiler) {
    this.fileDependencies = [];
    this.contextDependencies = [];

    if (typeof this.options.bail !== "boolean" && compiler.options.bail) {
      this.options.bail = compiler.options.bail;
    }

    const hookFn = callback =>
      this.generate(error =>
        callback(error && this.options.bail ? error : null)
      );

    const beforeRunFn = (compilation, callback) => hookFn(callback);
    const watchRunFn = (watching, callback) => {
      this.watching = watching;

      if (this.firstRun) {
        return hookFn(() => {
          this.firstRun = false;
          this.needRegenerate = false;

          return callback();
        });
      }

      return callback();
    };
    const doneFn = () => {
      if (this.watching && !this.watching.closed) {
        const oldWatcher = this.watcher;

        this.watcher = new Watchpack(
          this.watching.watchFileSystem
            ? this.watching.watchFileSystem.watcherOptions
            : {}
        );
        this.watcher.watch(
          this.fileDependencies,
          this.contextDependencies,
          Date.now()
        );
        this.watcher.once("change", () => {
          if (!this.needRegenerate) {
            this.needRegenerate = true;
            hookFn(() => {
              this.needRegenerate = false;
            });
          }
        });

        if (oldWatcher) {
          oldWatcher.close();
        }
      }
    };
    const watchCloseFn = () => {
      if (this.watcher) {
        this.watcher.close();
      }
    };

    if (compiler.hooks) {
      compiler.hooks.beforeRun.tapAsync(this.pluginName, beforeRunFn);
      compiler.hooks.watchRun.tapAsync(this.pluginName, watchRunFn);
      compiler.hooks.done.tap(this.pluginName, doneFn);
      compiler.hooks.watchClose.tap(this.pluginName, watchCloseFn);
    } else {
      compiler.plugin("before-run", beforeRunFn);
      compiler.plugin("watch-run", watchRunFn);
      compiler.plugin("done", doneFn);
      compiler.plugin("watch-close", watchCloseFn);
    }
  }

  generate(callback) {
    const { options } = this;

    nodify(
      webfont(options).then(result => {
        const { fontName, template } = result.config;
        const dest = path.resolve(this.options.dest);
        const fileName = this.options.fileName ?? fontName;

        let destTemplate = dest;

        if (result.template) {
          if (this.options.destTemplate) {
            destTemplate = path.resolve(this.options.destTemplate);
          }

          if (result.usedBuildInTemplate) {
            destTemplate = path.join(destTemplate, `${fileName}.${template}`);
          } else {
            destTemplate = path.join(
              destTemplate,
              path.basename(template).replace(".njk", "")
            );
          }

          if (result.config.config) {
            const configFilePath = result.config.config;

            if (!this.fileDependencies.includes(configFilePath)) {
              this.fileDependencies.push(configFilePath);
            }
          }

          if (!result.usedBuildInTemplate) {
            const templateFilePath = result.config.template;

            if (!this.fileDependencies.includes(templateFilePath)) {
              this.fileDependencies.push(templateFilePath);
            }
          }

          result.glyphsData.forEach(glyphData => {
            const { srcPath } = glyphData;
            const srcDirname = path.dirname(srcPath);

            if (!this.contextDependencies.includes(srcDirname)) {
              this.contextDependencies.push(srcDirname);
            }
          });
        }

        return Promise.all(
          Object.keys(result).map(type => {
            if (
              type === "config" ||
              type === "usedBuildInTemplate" ||
              type === "glyphsData" ||
              type === "hash"
            ) {
              return Promise.resolve();
            }

            let content = result[type];
            let file = null;

            if (type !== "template") {
              file = path.resolve(dest, `${fileName}.${type}`);
            } else {
              file = destTemplate;
            }

            // replace font name in css to file name
            if (type === "template" && this.options.fileName) {
              content = content.replace(regex`${fontName}(?=\.)/gm`, fileName)
            }

            // replace css global icon class
            if (type === "template" && this.options.templateClassName) {
              const className = this.options.templateClassName
              content = content.replace(regex`\.${className}(?=\s)/gm`, `[class^="${className}"]`)
            }

            return fs.outputFile(file, content);
          })
        );
      }),
      error => callback(error)
    );
  }
}