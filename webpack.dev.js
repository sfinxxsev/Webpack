const path =require('path');

const developmentWebpackConfig = {
    devServer: {
        index: 'index.html',
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        clientLogLevel: 'info',
        filename: 'bundle.js',
        hot: true,
        writeToDisk:true,
        open: 'chrome'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    formatter: require("eslint/lib/formatters/stylish"),
                }
            }
        ]
    }
};

module.exports = developmentWebpackConfig;

