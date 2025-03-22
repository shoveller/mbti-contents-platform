# 1. Check Project Status

- Use the latest version of prettier as the formatter.
- Check if [prettier](https://www.npmjs.com/package/prettier) is installed in the project root's `package.json` and install it as a development dependency if not present.
- Below is the default `prettier.config.mjs` configuration. Add it if it doesn't exist.
  - Add Korean comments to prettier settings.
  - Add type definitions using jsdoc.

```javascript
/** @type {import('prettier').Config} */
export default {
  endOfLine: "lf",
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "none",
};
```

# 2. Install Additional Plugins

- Install the following latest plugins as development dependencies:
  - [@ianvs/prettier-plugin-sort-imports](https://www.npmjs.com/package/@ianvs/prettier-plugin-sort-imports)
  - [prettier-plugin-css-order](https://www.npmjs.com/package/prettier-plugin-css-order)
  - [prettier-plugin-classnames](https://www.npmjs.com/package/prettier-plugin-classnames)
- Apply the following `prettier.config.mjs` configuration:

```javascript
/** @type {import('prettier').Config} */
export default {
  endOfLine: "lf",
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "none",
  // import sort[s]
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-css-order",
    "prettier-plugin-classnames",
  ],
  endingPosition: "absolute-with-indent",
  importOrder: [
    "^react",
    "^@remix",
    "",
    "<BUILTIN_MODULES>",
    "<THIRD_PARTY_MODULES>",
    "",
    ".css$",
    ".scss$",
    "^[.]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  // import sort[e]
};
```

# 4. Add npm script

- Add the following npm script to `package.json`:

```json
{
  "format": "prettier --write \"**/*.{ts,tsx,cjs,mjs,json,html,css,js,jsx}\" --cache --config prettier.config.mjs"
}
```
