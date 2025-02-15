const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    mode: 'production', // none, development, production
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'dist'), 
        },
        port: 9020,
        // hot: true, // Se quiser HMR habilitado, pode ativar aqui
      },
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
        new MiniCssExtractPlugin({ filename: 'index.css' }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html' // Usa seu HTML personalizado
        })// Gera automaticamente um arquivo HTML com a configuração do Webpack
    ]
};
