# Full stack app starter template

A monorepo managed via Turborepo that has: 

Backend: tRPC backend running on a express server
Client: Expo app with typescript and nativewind setup

After going through multiple starter templates and spending a ton of time trying to get things to work, releasing this a starter for anyone(mostly me) to use

When upgrading packages, keep in mind,

- Any upgrades to Expo SDK might break many things, so make sure to install corresponding expo packages using `npx expo install --fix`
- When upgrading trpc, make sure to upgrade it in all places:
  - packages/api
  - apps/standalone-server
  - apps/my-app
- For some reason, nativewind did not work when installed via `npm`, so `yarn` should be preferred for adding/changing packages