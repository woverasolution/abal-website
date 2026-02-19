This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Blog + Sanity Setup

This project now includes:

- A public blog index at `/blog`
- Dynamic post pages at `/blog/[slug]`
- Embedded Sanity Studio at `/studio`

### 1. Add environment variables

Create `.env.local` using `.env.example`:

```bash
cp .env.example .env.local
```

Fill in:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET` (usually `production`)
- `NEXT_PUBLIC_SANITY_API_VERSION` (date format, e.g. `2025-01-01`)
- `NEXT_PUBLIC_SANITY_STUDIO_TITLE` (optional display title)
- `SANITY_REVALIDATE_SECRET` (long random string, server-side only)

### 2. Run locally

```bash
npm install
npm run dev
```

Then open:

- `http://localhost:3000/blog`
- `http://localhost:3000/studio`

### 3. Create content in Studio

In `/studio`, create:

- `Author`
- `Category` (optional)
- `Post` with title, slug, main image, author, and body

Publish a post and it will appear on `/blog`.

### 4. Set up on-demand revalidation (Production)

This project includes a signed webhook endpoint at `/api/revalidate`.

In Sanity Manage, create a webhook with:

- URL: `https://YOUR_DOMAIN/api/revalidate`
- Method: `POST`
- API version: `v2021-03-25` (or latest)
- Trigger on: `create`, `update`, `delete`
- Filter:

```groq
_type in ["post", "author", "category"]
```

- Projection:

```groq
{
  "_type": _type,
  "slug": slug.current
}
```

- Secret: same value as `SANITY_REVALIDATE_SECRET` in your deployment environment

When content changes, the webhook revalidates `/blog` and the affected `/blog/[slug]` page.

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
