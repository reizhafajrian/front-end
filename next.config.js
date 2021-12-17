/** @type {import('next').NextConfig} */

const path = require("path");
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      issuer: /\.[jt]sx?$/,
      use: ["babel-loader", "@svgr/webpack", "url-loader"],
    });

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["static.femaledaily.com", "image.femaledaily.com"],
  },
};
