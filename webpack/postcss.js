// module.exports = function() {
//     module: {
//         rules: [{
//             test: /\.css$/,
//             exclude: /node_modules/,
//             use: [{
//                     loader: 'style-loader',
//                 },
//                 {
//                     loader: 'css-loader',
//                     options: {
//                         importLoaders: 1,
//                     }
//                 },
//                 {
//                     loader: 'postcss-loader'
//                 },
//             ]
//         }]
//     }
// }
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// module.exports = {
//     module: {
//         rules: [{
//             test: /\.css$/,
//             use: ExtractTextPlugin.extract({
//                 fallback: 'style-loader',
//                 use: [
//                     { loader: 'css-loader', options: { importLoaders: 1 } },
//                     'postcss-loader'
//                 ]
//             })
//         }]
//     },
//     plugins: [
//         new ExtractTextPlugin('[name].css')
//     ]
// }

module.exports = (env) => {
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    { loader: 'postcss-loader', options: { plugins: (ctx) => [...plugins] } },
                ]
            },
            //...other loader rules { test: /\.ext$/ use: [..loaders] }
        ]
    }
}