const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    adelantas: './src/app/pages/adelantas/adelantas.js',
    banio: './src/app/pages/banio/banio.js',
    buen_final: './src/app/pages/buen_final/buen_final.js',
    calma: './src/app/pages/calma/calma.js',
    comedor: './src/app/pages/comedor/comedor.js',
    esperas: './src/app/pages/esperas/esperas.js',
    luchar: './src/app/pages/luchar/luchar.js',
    mal_final: './src/app/pages/mal_final/mal_final.js',
    que: './src/app/pages/que/que.js',
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "bundle"),
  },
  plugins: [new HtmlWebPackPlugin({
    template: './src/index.html',
    chunks: ['index']
  }),
  new HtmlWebPackPlugin({
    template: './src/app/pages/adelantas/adelantas.html',
    filename: 'adelantas.html',
    chunks: ['adelantas']
  }),
  new HtmlWebPackPlugin({
    template: './src/app/pages/banio/banio.html',
    filename: 'banio.html',
    chunks: ['banio']
  }),
  new HtmlWebPackPlugin({
    template: './src/app/pages/buen_final/buen_final.html',
    filename: 'buen_final.html',
    chunks: ['buen_final']
  }),
  new HtmlWebPackPlugin({
    template: './src/app/pages/calma/calma.html',
    filename: 'buen_final.html',
    chunks: ['buen_final']
  }),
  new HtmlWebPackPlugin({
    template: './src/app/pages/comedor/comedor.html',
    filename: 'comedor.html',
    chunks: ['comedor']
  }),
  new HtmlWebPackPlugin({
    template: './src/app/pages/esperas/esperas.html',
    filename: 'esperas.html',
    chunks: ['esperas']
  }),
  new HtmlWebPackPlugin({
    template: './src/app/pages/luchar/luchar.html',
    filename: 'luchar.html',
    chunks: ['luchar']
  }),
  new HtmlWebPackPlugin({
    template: './src/app/pages/mal_final/mal_final.html',
    filename: 'mal_final.html',
    chunks: ['mal_final']
  }),
  new HtmlWebPackPlugin({
    template: './src/app/pages/que/que.html',
    filename: 'que.html',
    chunks: ['que']
  })],
  devServer: {
    inline: false,
  },
  module: {
    rules: [
      {
        test: /\.(scss|less|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
