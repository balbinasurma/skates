const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const config = {
	entry: [ '@babel/polyfill', './src/index.jsx' ],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Balbina Surma - Strona Oficjalna',
			template: 'public/index.html'
		}),
		new Dotenv()
	],
	devServer: {
		port: 3000,
		historyApiFallback: true,
		noInfo: true,
		hot: true,
		// hotOnly: true,
		clientLogLevel: 'none'
	},
	resolve: {
		alias: {
			functions: path.join(__dirname, 'src', '/functions'),
			components: path.join(__dirname, 'src', '/components'),
			types: path.join(__dirname, 'src', '/types'),
			generic: path.join(__dirname, 'src', '/components/generic'),
			routes: path.join(__dirname, 'src', '/routes')
		},
		extensions: [ '.jsx', '.js' ]
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/i,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [ 'file-loader' ]
			}
		]
	}
}

module.exports = (env, argv) => {
	config.mode = argv.mode
	return config
}
