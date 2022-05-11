const webpack = require('webpack');

const resolveFallback = config => {
  Object.assign(config.resolve.fallback, {
    // buffer: require.resolve('buffer'),
    // crypto: require.resolve('crypto-browserify'),
    // stream: require.resolve('stream-browserify'),
    // url: require.resolve('url'),
    // os: require.resolve('os-browserify'),
    // http: require.resolve('stream-http'),
    // https: require.resolve('https-browserify'),
  });
};

module.exports = {
  dev: (config) => {
    // Override webpack 5 config from react-scripts to load polyfills
    if (!config.resolve) config.resolve = {};
    if (!config.resolve.fallback) config.resolve.fallback = {};
    resolveFallback(config);

    if (!config.plugins) config.plugins = [];
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ENV': JSON.stringify('dev'),
      })
    );
    config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser.js',
      })
    );

    if (!config.ignoreWarnings) config.ignoreWarnings = [];
    config.ignoreWarnings.push(/Failed to parse source map/);

    return config;
  },
  prod: (config) => {
    // Override webpack 5 config from react-scripts to load polyfills
    if (!config.resolve) config.resolve = {};
    if (!config.resolve.fallback) config.resolve.fallback = {};
    resolveFallback(config);

    if (!config.plugins) config.plugins = [];
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ENV': JSON.stringify('prod'),
      })
    );
    config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser.js',
      })
    );

    if (!config.ignoreWarnings) config.ignoreWarnings = [];
    config.ignoreWarnings.push(/Failed to parse source map/);

    return config;
  },
};
