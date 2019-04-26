const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

module.exports = (env, argv) => {
    const currentConfig = (argv.mode === 'development') ? devConfig : prodConfig;
    return webpackMerge(commonConfig, currentConfig);
};
