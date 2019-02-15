# express-boilerplate-js

Boilerplate for express web server in JS.

## How to use

- `git clone`
- add `.env` file or just rename `.env.exapmle` --> `.env`
- `npm start`

You will see this message:

`XXXX-XX-XX XX:XX:XX [info]: Server is listening on port 3000`

Congratulations! It works.

Feel free to access `127.0.0.1:3000` through browser/Postman to get greeting message form server.

## Features

This boilerplate using:

- **Express** [https://github.com/expressjs/express] as core framework

- **Winston** [http://github.com/winstonjs/winston] for logging

- **Jest** [https://github.com/facebook/jest] for testing

- **Dotenv** [https://github.com/motdotla/dotenv] for env loading

- **ESlint** [https://github.com/eslint/eslint] for code style

- **Prettier** [https://github.com/prettier/prettier] for code formatting

- **Husky** [https://github.com/typicode/husky] for git hooks

## FAQ

_Q:_ **Why another boring boilerplate?**

_A:_ Main idea is to create CLI for bootstrapping new project. Up-to-date boilerplates is a first step to this.

_Q:_ **Why no Typescript?**

_A:_ Typescript coming soon, it will be in separate repo or at CLI.

_Q:_ **Why ... [Winston/Jest/Husky]?**

_A:_ For now we use our common stack. We will try to make replacing one library with another as easy as possible (and we will add some choices for CLI).

## Contribution

While `CONTRIBUTING.md` still in progress feel free to make merge request, open some issues or contact me directly. Thanks!
