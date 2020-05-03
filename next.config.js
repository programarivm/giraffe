const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const path = require('path');

/* const withImagesAndCss = () => {
   withImages(withCSS())
}

module.exports = {
  withImagesAndCss,
  webpack(config) {
    config.resolve.modules.push('./')
    return config;
  }
} */

module.exports = withImages(withCSS({
    webpack(config) {
        config.resolve.modules.push(path.resolve('./resources/js'))
        return config
    }
}))
