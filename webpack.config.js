const path=require('path');
const plugins = require('./webpack.config/plugins');


const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

const config = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'build'),
    },
    plugins,
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    {
                        loader:'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    },
                ],
            },
        ],
    },
};

module.exports = (env, argv) => {
    switch (argv.mode) {
        case 'development':
            config.devtool = 'inline-sourse-map';
            config.devServer={
                contentBase: path.join(__dirname, 'public'),
            };
            return config;
        case 'production': return config;
        default: return config;
    }
};