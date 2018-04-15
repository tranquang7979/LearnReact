module.exports = {
    //entry: './app/app.jsx',
    entry: './app/app-note.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        alias: {
            reducer: __dirname + '/app/reducer/reducer.js',
            store: __dirname + '/app/store-config.js',
            action: __dirname + '/app/action.js',
            List: __dirname + '/app/comps/list.jsx',
            Note: __dirname + '/app/comps/note.jsx',
            NoteForm: __dirname + '/app/comps/noteform.jsx'
        },
        extensions: ['*','.js','.jsx']
    },
    module:{
        rules:[
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /node_modules/
            }
        ]
    }
};