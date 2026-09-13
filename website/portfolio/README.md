This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API routes, drizzle
- **Database**: PostgreSQL
- **Authentication**: JSON Web Tokens (JWT) using the `jose` library
- **Important packages**: ThreeJs(3d modles), lenis(smooth scroll)


## databse 
the data base is a postgress databese wich i made with drizzle ORM. The database structure can be found in the db/sschema.tsx here can you change the tables add tables. To push the changes you can use (npx drizzle-kit push) if this does not work use (npx drizzle-kit generate) + (npx drizzle-kit migrate)