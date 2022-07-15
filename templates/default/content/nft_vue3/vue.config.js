const path = require('path');
const HotHashWebpackPlugin = require('hot-hash-webpack-plugin');
const WebpackBar = require('webpackbar');
const resolve = (dir) => path.join(__dirname, '.', dir);
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    productionSourceMap: false,
    publicPath: './',
    outputDir: 'tommy',
    assetsDir: 'assets',
    indexPath:'../../index.html',
    devServer: {
        proxy: 'http://localhost/forpy_git/',
        port: 9999,
        host: '0.0.0.0',
        https: false,
        open: true
    },

    publicPath: process.env.NODE_ENV === 'production'
        ? './phpcms/templates/default/content/nft_vue3/tommy/'
        : '/',
    configureWebpack: {
        plugins: [
            // Generates an `index.html` file with the <script> injected.
            /*new HtmlWebpackPlugin(
                Object.assign(
                    {
                        filename: '../../index.html',
                        minify: {
                            removeComments: false,
                            collapseWhitespace: false,
                            removeRedundantAttributes: false,
                            useShortDoctype: false,
                            removeEmptyAttributes: false,
                            removeStyleLinkTypeAttributes: false,
                            keepClosingSlash: false,
                            minifyJS: false,
                            minifyCSS: false,
                            minifyURLs: false,
                        },
                    }
                )
            ),*/


        ]
    }
};
