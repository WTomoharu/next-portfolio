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

    return config
  }
}
