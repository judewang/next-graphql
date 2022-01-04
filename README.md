This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Download evironment variables from Vercel

```bash
vc login
vc link
vc env pull .env.local
```

Add Firebase project id

```bash
firebase use --add
```

The `projects` within `.firebaserc` must have a key named `staging` for the Emulator to running correctly.

## Development

Setup Firebase emulator by adding this line to `.env.local`

```
FIRESTORE_EMULATOR_HOST=localhost:8080
```

Run Next dev server and Firebase Emulators concurrently.

```bash
yarn start
```
