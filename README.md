# AI SaaS Platform with Next.js 13, React, Tailwind, Prisma, Stripe, Clerk, OpenAPI, Replicate, PlanetScale, MySQL, TypeScript & Crisp

Credits: [Antonio Erdeljac](https://github.com/AntonioErdeljac)

Features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Clerk Authentication (Email, Google, UserName)
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Image Generation Tool (Open AI)
- Video Generation Tool (Replicate AI)
- Conversation Generation Tool (Open AI)
- Music Generation Tool (Replicate AI)
- Page loading state
- Stripe monthly subscription
- Free tier with API limiting
- POST, DELETE, and GET routes in route handlers (app/api)
- Fetch data in server react components by directly accessing database
- Handle relations between Server and Child components!
- Reuseable layouts
- Folder structure in Next 13 App Router
- Beutiful Landing Page with Testimonials

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/nayak-nirmalya/ai-saas.git
```

### Run with yarn zero install

```shell
yarn dev
```

### Install packages

```shell
yarn install
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL=
```

### Setup Prisma

Add MySQL Database (PlanetScale)

```shell
npx prisma db push

```

### Start the app

```shell
yarn dev
```

## Available commands

Running commands with yarn `yarn [command]`

| command         | description                                   |
| :-------------- | :-------------------------------------------- |
| `dev`           | Starts a development instance of the app      |
| `prisma studio` | Start Prisma studio GUI to view/edit database |
| `lint`          | Run lint check                                |
| `build`         | Start building app for deployment             |
| `start`         | Run build version of app                      |
