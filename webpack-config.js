const path = require( 'path' );
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );


const config = {
	// entry: {
	// 	frontend: './src/front/front-index.js',
	// 	admin: './src/admin/admin-index.js'
	// },
	entry: { app: './src/index.js' },

	output: {
		filename: '[name].js',
		path: path.resolve( __dirname, 'assets' )
	},

	devServer: {
		contentBase: './dist',
		port: process.env.PORT || 9000,
		hot: true,
		historyApiFallback: true,
	  },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
		  }),
	 ]
}

module.exports = config;