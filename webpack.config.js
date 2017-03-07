var path = require('path');
module.exports = {
    devtool: 'sourcemap',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/build/', //webpack result served from
        filename: 'app.bundle.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                //exclude: /(node_modules|bower_components|\.vscode)/,
                loader: 'babel'
            }, {
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}