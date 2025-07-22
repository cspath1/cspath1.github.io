# BP Programmatic Marketing

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Overview

BP Programmatic Marketing is a project that aims to provide a platform for BP to manage their programmatic marketing campaigns.

The first function of the application is a job feed monitor that runs every 30 minutes by default.

It will fetch XML job feeds based on advertisers configured in MongoDB. It will then parse the XML, update and save the jobs to MongoDB, and send email notifications to an internal email address.

This is the first project using the new [bp_mono_repo](https://bitbucket.org/boostpoint/bp_mono_repo/src/master/) starter project. It may be useful to reference that project's [README](https://bitbucket.org/boostpoint/bp_mono_repo/src/master/README.md) for additional context. At the time of writing, [bp_mono_repo](https://bitbucket.org/boostpoint/bp_mono_repo/src/master/) is very early in development. As we develop [bp_prog_marketing](https://bitbucket.org/boostpoint/bp_prog_marketing/src/main/) (this repo) take note of useful developments that would be useful to include in the starter.

## Installation

The following instructions assume you are running macOS. If you are using a different operating system, you will need to adjust the commands accordingly.

### Prequisites

- [NPM](https://www.npmjs.com/) - Ensure you have been added to the boostpoint npm organization so you can install private packages

  ```bash
  npm login
  ```

- [Homebrew](https://brew.sh/)
- [pnpm](https://pnpm.io/)  
  `corepack enable pnpm`
- [Node.js (v20)](https://nodejs.org/en)
- [Fern](https://buildwithfern.com/docs/getting-started):

  ```bash
  pnpm add -g fern-api
  ```

- [MongoDB (v6)](https://www.mongodb.com/docs/manual/installation/)

  ```bash
  brew tap mongodb/brew
  brew update
  brew install mongodb-community@6.0
  ```

- [Redis](https://redis.io/)

  ```bash
  brew install redis
  redis-server

  ```

- [Turbo](https://turbo.build/repo/docs)

  ```bash
  pnpm add -g turbo

  ```

### Install Dependencies

Install the project dependencies by running the following command from root:

```bash
pnpm install
```

### Configure Environment Variables

You will want to create a `.env.local` file in the root of the project. This file will contain environment variables that are specific to your local environment. You can copy the `.env` file and rename it to `.env.local`. This file is ignored by Git, so you can safely add any sensitive information to it without worrying about it being committed to the repository.

```bash
cp .env .env.local
```

This file is pretty well documented and you can see more information about it in the [Configuration](#configuration) section below.

### Configure the Database

This is something that isn't relevant _yet_, but will be in the future. We will want to revisit and document this whenever there is a production version of the database that we want to copy locally. We will want a db setup script similar to [bp_create](https://bitbucket.org/boostpoint/bp_create/src/master/).

### Run fern generator

Run the fern generator to generate type interfaces for the API, the OpenAPI spec, and a browser-sdk (unused at the moment).

```bash
pnpm generate
```

If you make changes to the fern definitions, you will need to re-run this command to update the generated files.

### Start the Development Server

Start the development server by running the following command from root:

```bash
pnpm dev
```

View redis queues
http://[domain]:[port]/queues/

### Setup in VS Code

If you are using VS Code, you can open the project workspace in `.vscode/bp_prog_marketing.code-workspace`.

This will automatically setup multiple roots for the project, which will allow you to use the VS Code debugger to debug both the API and the UI at the same time.

You can also leverage the Jest plugin to run tests directly from VS Code from the Test Explorer. Note that this is why the workspace is setup with multiple roots, because the Jest plugin requires a single root to be setup for the project.

## Usage

Currently there is no UI, so the only way to interact with the project is through the API. For now there are only scheduled functions triggered on a cron schedule. See the [Configuration](#configuration) section to see some of the available controls, or review the `.env` file for more details.

## Technology Stack

Some tech/tools we use for this project include:

- [Typescript](https://www.typescriptlang.org/) - Primary language
- [NestJS](https://nestjs.com/) - for the API
- [MongoDB](https://www.mongodb.com/) - Database
- [Jest](https://jestjs.io/) - for unit testing
- [Supertest](https://github.com/ladjs/supertest) - for e2e testing
- [Fern](https://buildwithfern.com/docs/getting-started) - for generating type interfaces, OpenAPI specs, and a browser-sdk
- [Commitizen](https://commitizen-tools.github.io/commitizen/) - for writing conventional commit messages
- [Commitlint](https://commitlint.js.org/#/) - for enforcing conventional commit messages
- [Husky](https://typicode.github.io/husky/#/) - for running pre-commit and pre-push hooks
- [Prettier](https://prettier.io/) - for code formatting
- [ESLint](https://eslint.org/) - for linting
- [Migrate Mongo](https://github.com/seppevs/migrate-mongo) - for database migrations
- [Release-it](https://github.com/release-it/release-it) - for automating releases
- [Turborepo](https://turbo.build/repo/docs) - for managing the monorepo
- [dotenv](https://github.com/motdotla/dotenv) - for managing environment variables

Where possible when solving problems in the `api` app, aim to use NestJS solutions. For example, NestJS has a built in task scheduling solution that we are using for the job feed monitor. See the [NestJS Task Scheduling documentation](https://docs.nestjs.com/techniques/task-scheduling) for more details.

NestJS includes various guides on ["Fundamentals"](https://docs.nestjs.com/fundamentals), ["Techniques"](https://docs.nestjs.com/techniques) and ["Recipes"](https://docs.nestjs.com/recipes) that are worth reviewing. For example, the [Logging](https://docs.nestjs.com/techniques/logger) and [Testing](https://docs.nestjs.com/fundamentals/testing) guides are worth reviewing.

We have a few concepts that have not been implemented yet but the support and infrastructure is there to support them. These include:

- e2e testing
- database migrations
- CI/CD
- Release automation
- UI

## Project Structure

This project is a monorepo that uses [Turborepo](https://turbo.build/repo/docs). It is based off of the [bp_mono_repo](https://bitbucket.org/boostpoint/bp_mono_repo) monorepo starter project.

### Apps and Packages

**[apps](./apps)**

- [job-feed-processor-api](./apps/job-feed-processor-api) - The Job Feed Processor API app
- [discovery-api](./apps/discovery-api/) - The Discovery API app
- [web](./apps/web/) - The Web app

**[packages](./packages)**

- [browser-sdk](./packages/browser-sdk) - Browser SDK generated by Fern
- [config-eslint](./packages/config-eslint) - ESLint configuration (`.eslintrc.js`)
- [config-fern](./packages/config-fern) - Fern configuration (`fern.config.js`)
- [config-prettier](./packages/config-prettier) - Prettier configuration (`.prettierrc`)
- [config-release-it](./packages/config-release-it) - Release-it configuration (`release-it.js`)
- [config-typescript](./packages/config-typescript) - Typescript configuration (`tsconfig.json`)
- [db](./packages/db) - Database migrations
- [open-api](./packages/open-api) - OpenAPI spec generated by Fern
- [types](./packages/types) - Shared types generated by Fern

### API App

The components in the API app are organized by modules. Under the `src` folder, you will find a `modules` folder. Each module is a folder that contains a `module.ts` file. The idea of grouping modules by feature is a common pattern in NestJS. See the [NestJS Modules documentation](https://docs.nestjs.com/modules) for more details.

There is some slight custom variation in that we have one `common` module that contains shared components that are used by multiple modules. For example, the `common` module contains common models, interfaces, enums, and eventually shared services used across modules.

Modules _can_ depend on other modules as well, but ideally we want to be careful to avoid circular dependencies.

The structure is generally then:

**`src/module/<module_name>`**

- `<module_name>.module.ts` - The module file that defines the module and its dependencies
- `/controllers` - Controllers for the module (if any)
- `/services` - Services for the module (if any)
- `/models` - Models for the module (if any)
- `/interfaces` - Interfaces for the module (if any)
- `/enums` - Enums for the module (if any)

This isn't an exhaustive guide, but is to communicate the idea that rather than grouping by type, we are grouping by feature, and then by type within the feature.

Jest unit tests can be found as siblings to the source file. For example, the `JobFeedProcessorService`, found at `/modules/job-feed-processor/job-feed-processor.service.ts`, has its tests at `/modules/job-feed-processor/job-feed-processor.service.spec.ts` as a sibling.

End-to-end tests can be found in the `test` folder at the root of the project and have a `.e2e-spec.ts` suffix.

The main entry point for the application is the [main.ts](./apps/job-feed-discovery-api/src/main.ts) file. This is where the application is bootstrapped and the NestJS application is created.

### VS Code Workspaces

The VS Code workspace is setup with multiple roots to allow you to use the VS Code debugger to debug both the API and the UI at the same time.

Using the workspace, you will notice 3 distinct roots:

**`root`**

This is the root of the monorepo. This is where you will find the `.vscode` folder and the `bp_prog_marketing.code-workspace` file, the root `package.json` file, the `node_modules` folder, the `.env` and `.env.local` files. This is also where the `apps` and `packages` folders are located, but they are hidden from this VS Code workspace root because they are the other roots.

**`api`**

This is the root of the API app. This is where you will find the `src` folder, the `test` folder, the `tsconfig.json` file, and the `nest-cli.json` file.

**`packages`**

This is the root of the packages. This is where you will find the `config-` packages, the `fern` generated packages, the `db` package for database migrations.

Note that if you decide to add additional apps (such as a UI app) or additional packages, you will need to add them to the workspace since `/apps` and `/packages` are hidden from the root workspace. See the `.vscode/bp_prog_marketing.code-workspace` file for an example of how to add additional roots to the workspace.

## Configuration

This project also uses dotenv to manage environment variables. The `.env` file contains the default environment variables. The `.env.local` file contains environment variables that are specific to your local environment. This file is ignored by Git, so you can safely add any sensitive information to it without worrying about it being committed to the repository.

So for configuring various features for this project or for your different environments, you will want to reference the `.env` file and the `.env.local` file. For this project we have centralized the `.env` to the root of the project instead of having it in each package. This is because we want to be able to reference the same environment variables in multiple packages. For example, we want to be able to reference the database connection details in the API app as well as in the database migrations.

We also use the `.env` environment variables to configure feature flags. For example, we have a feature flag for the job feed monitor. This allows us to turn the job feed monitor on or off without having to change any code. We can simply change the value of the `JOB_FEED_MONITOR_ENABLED` environment variable. This is only read once when the application starts, so if you change the value of the environment variable while the application is running, it will not have any effect until the application is restarted.

Checkout the [.env](./.env) file for more details about the available environment variables. Each variable is documented with a comment describing its purpose.

There are additional configurations for various tools and tech are centralized in the project under the `/packages` folder in packages prefixed with `config-`. For example, for the global typescript configuration, see `/packages/config-typescript`. For prettier configuration, see `/packages/config-prettier`. For eslint configuration, see `/packages/config-eslint`.

### Configurations for running locally

Where possible I suggest setting default environment variable values in `.env` so that local configuration is not required.

I believe at this time a fresh clone of the repo will work without any additional configuration. Some default assumptions are made for database naming and URLs. You can create your own overrides for any of the defaults in your own `.env.local`.

However, if you want to run the job feed monitor, you will need to configure the following environment variables:

```bash
FEATURE_MONITOR_JOB_FEEDS_ENABLED=true
```

If you want to enable and test real email notifications, you will need to configure the following environment variables:

```bash
MJ_APIKEY_PRIVATE=<private_key> # Talk to a team member to get this
FEATURE_MJ_SENDING_ENABLED=true
```

The first use case of this project is the Job Feed Monitor. This is a headless scheduled task that runs on a interval configurable by setting the environment variable `MONITOR_JOB_FEEDS_CRON_EXPRESSION`. The default value is `0 */30 * * * *` which means every 30 minutes.

Since the process is headless, logging and visbility is important. Currently this project is setup to use the basic Logger that comes with NestJS by default.

The project makes use of the log levels and are configurable via the `API_LOG_LEVEL` environment variable. The default is `log`. You can set this to `debug` to get more detailed logs or `verbose` to get even more detailed logs.

Example:

```bash
# The log level for the API. By default set to "log". Can also be set to "debug" or "verbose".
# If unset, the default value will be "log".
# "warning", "error", and "fatal" will always be logged.
# See apps/job-feed-processor-api/src/main.ts for usage.
# https://docs.nestjs.com/techniques/logger
JOB_FEED_PROCESSOR_API_LOG_LEVEL=log
```

You may want to improve this further with a more robust logging solution. For example, you may want to use [Winston](https://github.com/winstonjs/winston) with the NestJS `Logger` interface, but configured for multiple transports like file or service logging.

## Testing

To run tests, run the following command from root:

```bash
pnpm test
```

You can also run and debug tests directly from VS Code using the Jest plugin and the Test Explorer.

Additionally, the infrastructure is there to run e2e tests with supertest. None of these have been added yet.

To run e2e tests, run the following command from root:

```bash
pnpm test:e2e
```

## Deployment

This is not setup yet, but will need to be implemented.

We want to use release-it to automate the release process. The configuration is present but untested.

## Contributing

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages. This allows us to automate the release process and generate changelogs.

We also use [Commitizen](https://commitizen-tools.github.io/commitizen/) to help us write conventional commit messages.

This repo is [Commitizen Friendly](https://github.com/commitizen/cz-cli?tab=readme-ov-file#making-your-repo-commitizen-friendly)
You can run `npm run commit` to run the Commitizen CLI to help you write your commit messages, or `cz` if installed globally.

The project includes commitlint and husky to enforce conventional commits. If you try to commit code that does not follow the conventional commit format, you will get an error message and the commit will be rejected.

There is also a pre-push hook that runs the tests before pushing to the remote. If the tests fail, the push will be rejected.

## FAQs / Troubleshooting

Some common questions and issues that may arise during development. If you encounter an issue that is not listed here, please add it to the list.

**Q: What should I do if I encounter database connection issues?**

**A:** First, verify that mongo is running locally. Check your `.env` or `.env.local` to ensure that the database connection details (such as host, port, username, and password) are correct. If the problem continues, consult the database logs for more detailed error messages.

## Future Improvements

This section is a place to document ideas for documenting known issues and future improvements in a central way. If you have an idea for a feature or improvement, or are aware of a known issue, please add it to the list.

### Known Issues

- CI/CD is not setup yet
- Release-it is not setup (or at least tested) yet

### Ideas for Improvement

- It may eventually make sense to consider queueing for the job feed monitor. This would allow us to process the job feeds in the background and not block the main thread. This would also allow us to scale the job feed monitor more easily.
  - We could use a queueing system like [Bull](https://github.com/OptimalBits/bull), which is a Redis-based queue for Node.js. We could use the [NestJS Bull](https://docs.nestjs.com/techniques/queues) module to integrate Bull with NestJS. The infrastructure is already declared as a dependency for this project and we already configured it in [bp_create](https://bitbucket.org/boostpoint/bp_create) as well, so it's not completely novel infrastructure.
