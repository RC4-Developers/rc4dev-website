# Troubleshooting

## What is this page?

This page is for commonly encountered issues when setting up this repository.

## `yarn install` fails

Here are some common issues when running `yarn install`:

* `yarn` is not installed. Please refer to the [README](README.md) for a link to install `yarn`.
* You did not `cd` into this repository.
* You are using `npm` instead of `yarn`. `npm` is a separate package manager and should not be used in tandem
  with `yarn`.

If you face any other issues, do refer to online searches or kindly contact an experienced developer.

## WSL2

If you're setting up this repository on WSL2, there are a couple of things to note:

* If `git cloning` this repository, do so in `//wsl$` folder. According
  to [this](https://stackoverflow.com/questions/65359786/hot-reload-stopped-working-after-adjusting-environment-for-work-requirements)
  , hot reloading doesn't work properly when running NextJS in a Windows directory, through WSL2.
* Linter (ESlint) may not work properly when using WSL2. If you encounter an issue like "Specify a path to the ESLint
  package...", check out [this fix](https://youtrack.jetbrains.com/issue/WEB-52564). In summary, ensure your NodeJS
  installation uses WSL2's (under **Settings | Languages & Frameworks | JavaScript | Code Quality Tools | ESLint and
  Settings | Languages & Frameworks | Node.js and NPM**) and not Windows OS.

## Prettier

* Please point your `prettier` package to the one within `node_modules`. This is to ensure that the version
  of `prettier`
  used is the same as the one used by the linter. For example, if you are using IntelliJ, you can do so by going to **
  Settings | Languages & Frameworks |
  JavaScript
  | Prettier** and setting the **Prettier package** to `node_modules/prettier`.