# Field Notes

> A journal of observations, in the field of being alive and making things.

A Next.js 14 portfolio site framed as an editorial/zine-style design journal. Each project is reframed as an ethnographic "field note" — abstract, observations, what was taken from the field.

**Live:** _(add your Vercel URL here after deploy)_
**Source:** _(this repo)_

---

## What's in here

### Pages

| Route | Type | Description |
| --- | --- | --- |
| `/` | Static | Home — animated headline + index of field notes |
| `/about` | Static | Bio, the practice, typography colophon |
| `/now` | Static | "Now" page in the nownownow.com tradition |
| `/notes/[slug]` | **Route-generated (SSG via `generateStaticParams`)** | Dynamic page per field note. Six notes ship statically. |

That's **9+ pages total** — 3 static routes + 6 statically-generated dynamic routes, exceeding the assignment minimum of 3 with at least one route-generated page.

### Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** for styling
- **Framer Motion** for staggered word-reveal entrance animations
- **lucide-react** for icons
- **Google Fonts** — Fraunces (display), Newsreader (body), JetBrains Mono (metadata)

### Design choices

- Editorial / zine aesthetic — warm parchment (#F1ECDF) and ink (#1A1714), single ochre accent (#8E3F12)
- Paper-grain SVG noise overlay + soft vignette for atmospheric texture
- Custom cursor that grows over interactive elements
- Live local-time clock in the navigation
- Drop caps and `§` section markers in note bodies
- Staggered word-by-word reveal on hero headline
- Hover micro-interactions: link underlines that grow left-to-right, arrows that lift on hover

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To verify the build:

```bash
npm run build
```

---

## Deploy to Vercel (recommended — easiest for Next.js)

1. Push this folder to a new GitHub repo:
   ```bash
   cd field-notes
   git init
   git add .
   git commit -m "Initial commit: Field Notes"
   gh repo create field-notes --public --source=. --push
   # or, without gh CLI:
   # create a repo on github.com, then:
   git branch -M main
   git remote add origin https://github.com/<your-username>/field-notes.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
3. Import the `field-notes` repo.
4. Vercel auto-detects Next.js. Click **Deploy**. No env vars needed.
5. Copy the production URL — that's your live site link for the submission.

---

## Customizing

- **Add or edit field notes:** open `lib/notes.ts`. Each note is an object in the `fieldNotes` array. Add a new one and a new statically-generated page will appear at `/notes/<slug>` on the next build.
- **Change colors:** edit the theme tokens in `tailwind.config.ts`.
- **Change copy on /about or /now:** edit `app/about/page.tsx` and `app/now/page.tsx`.
- **Replace email:** search for `hello@example.com` and replace with your real address.

---

## File map

```
app/
  layout.tsx             root layout, fonts, cursor, nav, footer
  page.tsx               home — index of field notes
  globals.css            base styles, grain overlay, cursor, drop caps
  not-found.tsx          404
  about/
    page.tsx             about page
  now/
    page.tsx             now page
  notes/
    [slug]/
      page.tsx           ★ dynamic, route-generated page per field note
components/
  Cursor.tsx             custom cursor (client component)
  Clock.tsx              live local time in nav
  Navigation.tsx         top nav
  Footer.tsx             footer
lib/
  notes.ts               field note data + helper functions
```

---

Built for COGS Web Development, Spring 2026.
