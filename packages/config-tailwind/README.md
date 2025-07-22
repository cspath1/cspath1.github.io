# @repo/tailwind-config

The `@repo/tailwind-config` package contains the Tailwind CSS configuration file for the monorepo.
This configuration file is used to customize the default styles provided by Tailwind CSS.

### Author: Cody Spath (cody.s@boostpoint.com)

### Getting Started

- Add `"@repo/tailwind-config": "workspace:*"` to your package's `package.json` file under the `devDependencies` key
- Add the following to your package's tailwind.config.js file:

```js
const sharedConfig = require("@boostpoint/tailwind-config");

// eslint-disable-next-line no-undef
module.exports = {
  presets: [sharedConfig]
};
```
