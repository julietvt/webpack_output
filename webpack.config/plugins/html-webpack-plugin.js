const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = new HtmlWebpackPlugin({
    title:'Webpack app',
    template: './src/index.html',
    meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
    },
});