const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const path = require('path');

module.exports = withImages(withCSS({
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, './resources/js')
    return config
  }
}))
