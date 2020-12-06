/* eslint-env node */
const { resolve } = require("path");

module.exports = {
    extends: resolve(require.resolve("@hazmi35/eslint-config")),
    rules: require(resolve(__dirname, "rules.json"))
};
