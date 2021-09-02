const WebfontPlugin = require("webfont-webpack-plugin").default
const CopyPlugin = require("copy-webpack-plugin")

const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  reactStrictMode: true,

  webpack(config, options) {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.join(__dirname, "static-files"),
            to: path.join(__dirname, "public")
          },
        ],
      }),
    )

    config.plugins.push(
      new WebfontPlugin({
        files: path.resolve(__dirname, "./static-files/images/tech-icons/*.svg"), // Input Files
        dest: path.resolve(__dirname, "./public/fonts/tech-icons"), // Output Dir
        fontName: "font-tech", // Font Name
        fileName: "index", // Font File Name
        templateClassName: "tech-icon", // Font Pre Class
        template: "css", // File Output Type
      }),
    )

    return config
  }
}
