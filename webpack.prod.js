const common = require("./webpack.common.js");
const { merge } = requre("webpack-merge");

module.exports = merge(common, {
    mode: "production",
});
