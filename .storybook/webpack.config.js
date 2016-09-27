// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://goo.gl/qPbSyX

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const Dotenv = require('dotenv-webpack');  // Makes it possible to set permanent env variables with .env file.

module.exports = {
  plugins: [
    // your custom plugins
    new Dotenv(),
  ],
  module: {
    loaders: [
      // add your custom loaders
      {
        test: /\.css$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]!postcss',
      },
    ],
  },
};
