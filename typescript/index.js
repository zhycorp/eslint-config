/* eslint-disable sort-keys */
/* eslint-env node */
const path = require("path");

module.exports = {
    extends: [path.join(__dirname, "..", "index.js"), path.join(require.resolve("@hazmi35/eslint-config/typescript"))],
    rules: {
        "@typescript-eslint/no-var-requires": "off"
    }
};