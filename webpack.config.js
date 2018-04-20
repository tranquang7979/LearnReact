module.exports = {
    //entry: './app/app.jsx',
    //entry: './app/app-note.jsx',
    entry: './app/app-note-nav.jsx',
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
            NoteForm: __dirname + '/app/comps/noteform.jsx',
            Main: __dirname + '/app/comps/main.jsx',
            Nav: __dirname + '/app/comps/nav.jsx',
            Transaction: __dirname + '/app/comps/transaction.jsx',
            Account: __dirname + '/app/comps/account.jsx',
            HomePage: __dirname + '/app/comps/homepage.jsx',
            SignIn: __dirname + '/app/comps/sign-in.jsx',
            AccountInfo: __dirname + '/app/comps/account-info.jsx',
            Notification: __dirname + '/app/comps/notification.jsx'
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