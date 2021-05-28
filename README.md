# eslint-config
> An ESLint [shareable configuration](http://eslint.org/docs/developer-guide/shareable-configs.html) that used in Zhycorp's projects ✔

<div align="center">
<a href="https://www.npmjs.com/package/@zhycorp/eslint-config"><img src="https://img.shields.io/npm/v/@zhycorp/eslint-config?maxAge=3600" alt="NPM version" ><a/>
</div>

## Install

```bash
npm install -D @zhycorp/eslint-config
```
or with yarn
```bash
yarn add -D @zhycorp/eslint-config
```

## Usage

[Click here to see ESLint guide](https://eslint.org/docs/user-guide/configuring#using-a-shareable-configuration-package)

Example:
```json
{
    "extends": "@zhycorp/eslint-config"
}
```
or `"@zhycorp/eslint-config/node"` for Node environment


Example (TS):
```json
{
    "extends": "@zhycorp/eslint-config/typescript"
}
```
or `"@zhycorp/eslint-config/typescript/node"` for Node environment

## Note

Requires [ESLint](https://npmjs.com/package/eslint) version 7.27.0 or above

TypeScript config requires:
 * [@typescript-eslint/parser](https://npmjs.com/package/@typescript-eslint/parser) version 4.25.0 or above
 * [@typescript-eslint/eslint-plugin](https://npmjs.com/package/@typescript-eslint/eslint-plugin) version 4.25.0 or above
 * [typescript](https://npmjs.com/package/typescript) version 3.3.1 to 4.4.0
