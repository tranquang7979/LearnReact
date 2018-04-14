module.exports = {
    //entry: './app/app.jsx',
    entry: './app/app-note.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    module:{
        rules:[
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /node_modules/
            }
        ]
    }
};