const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // Extrai CSS em arquivos separados
                    'css-loader' 
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({ filename: 'index.css' }) 
    ]
};
