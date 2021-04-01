const path = require('path');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = function override(config, env) {
  config.plugins = config.plugins.map((plugin) => {
    return plugin;
  });
  return config;
};
