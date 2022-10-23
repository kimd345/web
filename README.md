This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Pre-configurations

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

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
