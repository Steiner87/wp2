module.exports = {
    // …
    module: {
        rules: [{
                test: /\.js$/i,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['env'] },
                }],
            },

            // Loaders for other file types can go here
        ],
    },
    // …
};