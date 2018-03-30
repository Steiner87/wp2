const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const devserver = require('./webpack/devserver');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const postcss = require('./webpack/postcss');
const babel = require('./webpack/babel');
const optimizecss = require('./webpack/optimizecss');
const autoprefixer = require('autoprefixer');

const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

const common = merge([{
        entry: {
            'index': PATHS.src + '/pages/index/index.js',
            // 'blog': PATHS.src + '/pages/blog/blog.js'
        },
        output: {
            path: PATHS.build,
            filename: 'js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.src + '/pages/index/index.pug'
            }),
            // new HtmlWebpackPlugin({
            //     filename: 'blog.html',
            //     chunks: ['blog', 'common'],
            //     template: PATHS.src + '/pages/blog/blog.pug'
            // }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            }),
        ],
    },
    pug(),
    images()
]);

module.exports = function(env) {
    if (env === 'production') {
        return merge([
            common,
            extractCSS(),
            uglifyJS()
        ]);
    }
    if (env === 'development') {
        return merge([
            common,
            devserver(),
            sass(),
            css(),
            postcss(),
        ])
    }
};