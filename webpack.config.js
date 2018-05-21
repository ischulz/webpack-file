const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[hash].bundle.js',
		path: path.resolve(__dirname, 'dist')
    },
    module: {}
}