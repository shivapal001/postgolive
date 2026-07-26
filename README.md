# PostHire Careers

A premium, dark-themed careers site for PostHire's founding-team hiring push, built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui conventions, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project setup notes

This project already follows the shadcn/ui structure:

- `components.json` configures the CLI (aliases, Tailwind paths, base color).
- Primitives live in `components/ui/` — this is the **default and expected path** for shadcn components. Keeping it there matters because the CLI, and any teammate familiar with shadcn conventions, will look there first; scattering primitives elsewhere breaks `npx shadcn@latest add <component>` and makes the project harder for new contributors to navigate.
- Feature/page sections live in `components/sections/`.
- Shared logic (the `cn` class-merge helper) lives in `lib/utils.ts`.

If you're dropping this into a fresh repo that doesn't have Tailwind/TypeScript/shadcn set up yet:

```bash
npx create-next-app@latest posthire-careers --typescript --tailwind --app
cd posthire-careers
npx shadcn@latest init
```

Then copy this project's `app/`, `components/`, `lib/`, and `data/` folders in, and add the dependencies listed in `package.json` (Framer Motion, lucide-react, the Radix primitives, `class-variance-authority`, `clsx`, `tailwind-merge`, `tailwindcss-animate`).

## Structure

```
app/
  layout.tsx        Root layout, fonts (Inter + JetBrains Mono), SEO metadata
  page.tsx           Assembles all sections
  globals.css        Design tokens, glass/gradient utility classes
  sitemap.ts, robots.ts

components/
  ui/                shadcn-style primitives (button, card, input, select, accordion...)
    kinetic-grid.tsx          Interactive canvas grid used as the hero background —
                              warps toward the cursor and ripples on click, scoped
                              to its parent section (not the full viewport)
    morphic-background.tsx   Original gooey particle background (kept, unused by default)
    google-play-badge.tsx    Reusable "coming soon on Google Play" badge
  sections/          One component per page section (navbar, hero, about, why-join,
                      open-roles, hiring-process, app-status, application-form, faq, footer)

data/
  roles.ts           Single source of truth for the 10 open roles
```

## Wiring up the application form

The form now submits for real. `components/sections/application-form.tsx`
POSTs a `FormData` payload (all fields + the resume file) to
`app/api/apply/route.ts`, which emails the full application — including the
resume as an attachment — to `webloom.in00@gmail.com` using
[Resend](https://resend.com) (no Gmail App Password / 2FA needed).

### One-time setup to make emails actually send

1. Go to https://resend.com and sign up for a free account (you can sign up
   with `webloom.in00@gmail.com` or any email — this account just holds the
   API key, it doesn't need to match the inbox that receives applications).
2. In the Resend dashboard: **API Keys → Create API Key**. Copy the key
   (starts with `re_...`).
3. Copy `.env.local.example` to `.env.local` and fill in:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
   APPLICATIONS_TO_EMAIL=webloom.in00@gmail.com
   ```
4. Restart `npm run dev` (or redeploy) after adding/changing env vars.

**Important — Resend's sandbox sending limit:** until you verify your own
domain on Resend, emails are sent from `onboarding@resend.dev` and Resend
will only deliver them to **the email address you signed up to Resend
with**. So for testing, sign up to Resend using `webloom.in00@gmail.com`
itself. Once you're ready to receive applications from real applicants at
scale (or verify sending from your own domain like `careers@posthire.app`),
add a domain under **Domains** in the Resend dashboard, verify its DNS
records, then set:
```
RESEND_FROM_EMAIL=PostHire Careers <careers@yourdomain.com>
```

Once set, every submitted application arrives in `webloom.in00@gmail.com` with:
Full name, Email, LinkedIn, Portfolio/GitHub, Role, Hours/week, and the
motivation text in the email body — plus the uploaded resume as a file
attachment.

If `RESEND_API_KEY` isn't set, the form will show an error to the applicant
instead of silently failing.

**Deploying:** if you host on Vercel or similar, add the same env vars
(`RESEND_API_KEY`, `APPLICATIONS_TO_EMAIL`) in your hosting provider's
Environment Variables settings — `.env.local` is only read locally.

## Design tokens

- **Palette**: background `#08060E`, surface glass `rgba(255,255,255,0.04–0.06)`,
  brand gradient `#7C5CFF → #3E8EFF`, foreground `#F5F3FF`, muted `#948DB0`.
- **Type**: Inter for all UI text; JetBrains Mono for small uppercase labels,
  eyebrows, and metadata (role tags, step numbers) to give structural content
  a distinct "data" voice.
- **Signature element**: an interactive kinetic grid (`kinetic-grid.tsx`) in the
  hero — the grid warps toward the cursor and ripples outward on click, echoing
  the idea of a network of connections (brands and creators) reacting to a
  single point of contact.
