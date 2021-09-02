const esbuild = require('esbuild')

esbuild.build({
  entryPoints: ["src/index.js"],
  outbase: './src',
  outdir: './dist',

  platform: "node",
  target: ["node12"],

  bundle: false,
  minify: false,
  format: "cjs",

  watch: process.argv.includes("--watch") ? {
    onRebuild: (error, result) => {
      if (!error && result) {
        console.log(`${new Date().toLocaleString()} watch build succeeded\n`);
      }
    }
  } : false,
}).then(() => {
  console.log(`${new Date().toLocaleString()} build succeeded`);
  if (process.argv.includes("--watch")) console.log("")
}).catch(() => {
})
