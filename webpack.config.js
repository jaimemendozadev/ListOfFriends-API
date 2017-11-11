const path = require('path');
const entryPath = path.resolve(__dirname, 'dev/index.jsx');
const outputPath = path.resolve(__dirname, 'public');


const config = {
  entry: entryPath,
  output: {
    path: outputPath,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }  
}

module.exports = config;