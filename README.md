# RC4Developer Website Repository

This repository contains NextJS code for the RC4Developers website!

A mockup of the site can be
found [here](https://www.figma.com/file/8vnjXFtweYX7AUJwDvU86P/Website-Mockup?node-id=0%3A1&t=NYlhpxd6dUdYEyC3-1).

Do checkout the `docs` directory for further readings and onboarding if you are a new developer!

## Getting Started

Before we begin, make sure you have the following installed:

* [NodeJS](https://nodejs.org/en/download/)
* [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

After that, run `git clone` to clone this repository. For example, I would
run `git clone git@github.com:RC4-Developers/rc4dev-website.git`. After that, remember to `cd` into the project
directory, which changes your current working directory to the codebase.

When running the codebase for the first time (and everytime you pull from main branch OR change to a new branch) , you
will need to install/update the
dependencies. This can be done by running the
following command:

```bash
yarn install
```

After the dependencies are installed, you can run the codebase by running the following command:

### Run the development server

```bash
yarn dev
```

Running this command will launch a local server where you can view the webpage.

## Fixing Code Style

### Run linting and fix problems

Once in a while, you should run the linter to check for any problems in your code. A linter is a tool that analyzes code
to detect and flag programming errors, bugs, stylistic errors, and other issues. You can do so by running the
following command:

```bash
yarn lint --fix
```

Alternatively, you can configure your IDE to run the linter automatically when you save a file. Please refer to online
searches on how you may configure your IDE to do so.

### Running `prettier`

You should also run `prettier` to format your code. `prettier` helps to standardize how code is formatted across the
codebase. Please refer to online searches on how you may configure your IDE to run `prettier` automatically when you
save a file.

## Contributing to the Codebase

This codebase uses the [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) branching model. Please read
the [contributing guidelines](docs/Contributing.md) before contributing to the codebase.

NOTE: For new `git` users, do refer
to [this tutorial](https://www.youtube.com/watch?v=SWYqp7iY_Tc&ab_channel=TraversyMedia) on how to use `git`. Please
avoid downloading the zip file and working from there, as you will need to take additional steps to receive updates to
your local copy of the codebase!

After pushing to the codebase, Vercel will automatically deploy the codebase to a preview URL. You can find the preview
URL in the Vercel dashboard, or in the PR page.

NOTE: Githooks and GitHub Actions, which will include linting, will be added to the codebase in the future.

## Deployment on Vercel

This codebase uses
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
for deployment.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Additional Readings

Read [the reference](https://gist.github.com/pedrouid/71bb2d8b263731492dabfa302e7c6b67) used to
configure `eslintrc.json`. Alternatively, check out [References](docs/References.md) for further reading.