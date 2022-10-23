This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and configured for scalable development with Storybook and TailwindCSS adopting most of the recommendations from this two-part guide ([part 1](https://dev.to/alexeagleson/how-to-build-scalable-architecture-for-your-nextjs-project-2pb7) & [part 2](https://dev.to/alexeagleson/how-to-build-a-fullstack-nextjs-application-with-storybook-tailwindcss-2gfa)) to our current frontend conventions on the NFT team at AnChain.

## Configuration

- ESLint
- Prettier
- Husky - git hooks
  - pre-commit eslint check
  - pre-push build check
- VSCode repo-specific settings
  - default formatter: Prettier VSCode extension
    - run fix and organize imports on file save
  - debugging [configuration](https://nextjs.org/docs/advanced-features/debugging) for client, server, and full stack
    - Cross-Env - easier cross-environment environment variables
    - set environment variables in terminal for both MacOS/Linux and Windows
- Storybook
-

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
