/* eslint-env node */
const path = require("path");

module.exports = {
    extends: path.join(require.resolve("@hazmi35/eslint-config")),
    rules: require(path.resolve(__dirname, "rules.json"))
};
