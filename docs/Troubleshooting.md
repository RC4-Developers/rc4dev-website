# Troubleshooting

## What is this page?

This page is for commonly encountered issues when setting up this repository.

## WSL2

If you're setting up this repository on WSL2, there are a couple of things to note:

* If `git cloning` this repository, do so in `//wsl$` folder. According
  to [this](https://stackoverflow.com/questions/65359786/hot-reload-stopped-working-after-adjusting-environment-for-work-requirements)
  , hot reloading doesn't work properly when running NextJS in a Windows directory, through WSL2.
* Linter (ESlint) may not work properly when using WSL2. If you encounter an issue like "Specify a path to the ESLint
  package...", check out [this fix](https://youtrack.jetbrains.com/issue/WEB-52564). In summary, ensure your NodeJS
  installation uses WSL2's (under **Settings | Languages & Frameworks | JavaScript | Code Quality Tools | ESLint and
  Settings | Languages & Frameworks | Node.js and NPM**) and not Windows OS.