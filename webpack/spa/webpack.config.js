const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    devServer: {
        contentBase: './public',
        port: 9000,
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    output: {
        filename: './assets/js/app.min.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: './assets/css/app.min.css' }),
        new CopyWebpackPlugin([
            { context: 'src/', from: '**/*.html', to: '[path][name].[ext]' },
            { context: 'src/', from: 'imgs/**/*', to: 'assets/imgs/[name].[ext]' },
        ])
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    }, // interpreta os @import, imgs, url()...
                    'sass-loader',
                ]
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    }
                }]
            }, {
                test: /.(ttf|otf|eot|svg|woff(2)?)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './assets/fonts',
                        // publicPath: '../fonts'
                    }
                }]
            }, {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                    }
                }]
            }
        ]
    }
}