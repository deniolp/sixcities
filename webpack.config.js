const {join} = require(`path`);

const path = join(__dirname, `public`);

const entry = `./src/index.js`;
const output = {
  filename: `bundle.js`,
  path,
};

const contentBase = path;
const compress = false;
const hot = true;
const port = 1338;
const historyApiFallback = true;
const devServer = {contentBase, compress, hot, port, historyApiFallback};

const babelizing = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [`babel-loader`],
};
const rules = [babelizing];

const resolve = {
  extensions: [`.js`, `.jsx`],
};

module.exports = {
  entry,
  output,
  devServer,
  module: {rules},
  resolve,
  devtool: `source-map`,
};
