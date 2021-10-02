const WebfontPlugin = require("webfont-webpack-plugin").default
const CopyPlugin = require("copy-webpack-plugin")

const optimizedImages = require('next-optimized-images')

const path = require("path");

/** @type {import('next').NextConfig} */
const config = {
  trailingSlash: true,
  reactStrictMode: true,

  images: {
    disableStaticImages: true
  },

  responsive: {
    adapter: require('responsive-loader/sharp'),
    sizes: [640, 960, 1200, 1800],
  },

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

module.exports = optimizedImages(config)
