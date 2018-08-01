const path = require('path');

module.exports = {
	entry: './src/index.ts',
	devtool: 'eval',
	mode: "development",
	module: {
		rules: [
		{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/
		}
		]
	},
	optimization: {
		// We no not want to minimize our code.
		minimize: false
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		host: '0.0.0.0',
		contentBase: path.join(__dirname, 'dist'),
		// compress: true,
		port: 1111
	}
};