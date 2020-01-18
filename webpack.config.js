const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const config = {
	entry: './src/index.tsx',
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
			components: path.join(__dirname, 'src', '/components')
		},
		extensions: [ '.tsx', '.ts', '.js' ]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader'
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
