const path =require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const commonWebpackConfig = {
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    entry: './src/scripts/main.ts',
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin([{ from: './src/index.html'/*, to: '' */}])
    ],
    /*entry: './src/index.ts',*/
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
};

module.exports = commonWebpackConfig;
