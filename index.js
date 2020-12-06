/* eslint-env node */
const path = require("path");

module.exports = {
    extends: path.join(require.resolve("@hazmi35/eslint-config"), require(path.join(__dirname, "rules.json")))
};
