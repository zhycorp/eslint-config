/* eslint-disable sort-keys */
/* eslint-env node */
const path = require("path");

module.exports = {
    extends: [path.join(__dirname, "..", "index.js"), path.join(require.resolve("@hazmi35/eslint-config/typescript")), path.join(__dirname, "..", "rules.json")],
    rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/member-ordering": [
            "error",
            {
                default: [
                    "signature",
                    "public-instance-field",
                    "protected-instance-field",
                    "private-instance-field",
                    "instance-field",
                    "public-constructor",
                    "protected-constructor",
                    "private-constructor",
                    "constructor",
                    "public-instance-method",
                    "protected-instance-method",
                    "private-instance-method",
                    "instance-method",
                    "public-static-field",
                    "protected-static-field",
                    "private-static-field",
                    "static-field",
                    "public-static-method",
                    "protected-static-method",
                    "private-static-method",
                    "static-method"
                ]
            }
        ]
    }
};
