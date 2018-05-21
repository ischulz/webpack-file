const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[hash].bundle.js',
		path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
				exclude: /node-modules/,
				use: ["babel-loader"]
            },
            {
				test: /\.s?[ac]ss$/,
				use: [
					MiniCSSExtractPlugin.loader, 
					"css-loader",
					"sass-loader",
				]
            },
            {
				test: /\.svg$/,
				use: {loader: 'svg-url-loader',
				options: {
					limit: 1000 * 1024,
					enforce: 'pre',
					noquotes: true,
				}}
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					'file-loader'
				],
			},
        ]
    },
    plugins: [
		new HtmlWebpackPlugin({template: "./src/index.html"}),
		new CleanWebpackPlugin(['dist']),
		new MiniCSSExtractPlugin({
			filename: "[name].[hash].css",
			chunkFilename: "[id].css"
		})
	],
}