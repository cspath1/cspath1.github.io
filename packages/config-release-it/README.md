# @repo/release-it-config

The `@repo/release-it-config` package provides a shared release-it configuration for use across multiple projects. It defines how changelogs and version bumps are processed when the monorepo is merged into master.

## Getting Started

- Add `"@repo/release-it-config" : "workspace:*"` to your package's `package.json` file under the `devDependencies` key
- Add `module.exports = require("@repo/release-it-config");` to your package's `.release-it.js` file..
