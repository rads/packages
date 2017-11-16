const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [path.join(__dirname, "helper.js")],
  output: {
    filename: "enzyme.bundled.js"
  },
  externals: {
    "react": "React",
    "react/lib/React": "React",
    "react-dom": "ReactDOM",
    "react-dom/server": "{}",
    "react-dom/test-utils": "React.addons.TestUtils",
    "react-addons-test-utils": "React.addons.TestUtils"
  }
};
