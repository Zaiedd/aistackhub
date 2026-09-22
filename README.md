# AIStackHub — starter project

A static Astro blog for AI-tool reviews, organized into 4 sections:
`/ai-for-students/`, `/ai-for-developers/`, `/ai-for-business/`, `/comparisons/`.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Add a new article

1. Create a new `.md` file inside `src/content/posts/`.
2. Copy the frontmatter from `best-ai-tools-summarizing-research-papers.md` and change:
   - `title`, `description`, `date`
   - `section` — must be exactly one of: `ai-for-students`, `ai-for-developers`, `ai-for-business`, `comparisons`
3. Write the article body in Markdown below the frontmatter.
4. Save. The post appears automatically on the homepage and its section page —
   no other file needs to change.

Use the `<div class="verdict">...</div>` block (see the example article) for your
final recommendation — it's styled to stand out and is the part people screenshot.

## Deploy to Cloudflare Pages (free)

1. Push this folder to a GitHub repository.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. You'll get a free `your-project-name.pages.dev` URL immediately.
5. Every time you push a new article to GitHub, Cloudflare rebuilds and redeploys
   automatically — no manual upload needed.

## Before applying to Google AdSense

- Replace the placeholder text in `src/pages/about/`, `src/pages/contact/`, and
  `src/pages/privacy-policy/` with real content (a real email, a real privacy
  policy generated at termly.io or privacypolicygenerator.info).
- Have at least 15-20 published, non-draft articles — thin sites get rejected.
- Update `astro.config.mjs` → `site:` with your real domain once you have one.

## Project structure

```
src/
  content/posts/        ← every article is one .md file here
  content/config.ts     ← schema for post frontmatter (don't need to touch this often)
  layouts/               ← BaseLayout (all pages), PostLayout (articles)
  components/            ← Header, Footer
  pages/                 ← homepage + one index.astro per section
  styles/global.css      ← all design tokens and styles live here
```
