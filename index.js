/* eslint-env node */
const path = require("path");

module.exports = {
    extends: path.join(require.resolve("@hazmi35/eslint-config")),
    rules: {
        "max-statements-per-line": ["warn", { max: 4 }]
    }
};