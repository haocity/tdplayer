var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'tdplayer.js',
    path: path.resolve(__dirname, 'dist')
  },module: {
        rules:[
            {
                test: /\.js$/,
                loader:"babel-loader",
                include: /src/,
                exclude: /node_modules/,
                options: {
                    presets: ['es2015']
                }
            },{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
				include: /src/,
                exclude: /node_modules/
			},{
                test: /\.(png|jpg)$/, 
                loader: 'url-loader',
                include: /src/,
                exclude: /node_modules/
            }

        ]
    }
};