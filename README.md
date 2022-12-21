# RC4Developer Website Repository

This repository contains NextJS code for the RC4Developers website!

A mockup of the site can be
found [here](https://www.figma.com/file/8vnjXFtweYX7AUJwDvU86P/Website-Mockup?node-id=0%3A1&t=NYlhpxd6dUdYEyC3-1).

Do checkout the `docs` directory for further readings and onboarding if you are a new developer!

## Getting Started

When running the codebase for the first time, you will need to install the dependencies. This can be done by running the
following command:

```bash
yarn install
```

After the dependencies are installed, you can run the codebase by running the following command:

### Run the development server

```bash
yarn dev
```

## Contributing to the Codebase

This codebase uses the [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) branching model. Please read
the [contributing guidelines](docs/Contributing.md) before contributing to the codebase.

After pushing to the codebase, Vercel will automatically deploy the codebase to a preview URL. You can find the preview
URL in the Vercel dashboard, or in the PR page.

NOTE: Githooks and GitHub Actions, which will include linting, will be added to the codebase in the future.

### Run linting and fix problems

```bash
yarn lint --fix
```

## Deployment on Vercel

This codebase uses
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
for deployment.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Additional Readings

Read [the reference](https://gist.github.com/pedrouid/71bb2d8b263731492dabfa302e7c6b67) used to
configure `eslintrc.json`. Alternatively, check out [References](docs/References.md) for further reading.