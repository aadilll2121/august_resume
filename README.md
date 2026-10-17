# Aadil Vahora — Electrical engineering portfolio

A complete static portfolio following the layout and visual style requested from https://www.keivalya.com/: centred circular profile photo, a light background, teal project highlights, compact experience and education timelines, project rows, and a light/dark switch. All professional content belongs to Aadil's portfolio; no reference-site biography, project claims, images, or tracking scripts are included.

## Open the website

Unzip the download and open `dist/index.html`. No installation, build command, API key, or external service is required. Keep all files inside `dist` together.

## Files to edit

| File | Purpose |
| --- | --- |
| `dist/index.html` | Name, profile, projects, experience, education, skills, and links |
| `dist/styles.css` | Layout, light/dark colours, mobile sizes, hover effects |
| `dist/bookman.css` | Bookman font stack and bundled font fallback |
| `dist/theme-init.js` | Restores the saved colour theme before the first paint |
| `dist/app.js` | Accessible theme switch, preference storage, current year |
| `dist/assets/project/` | Original ETAP report, poster, expo photo, and poster-derived previews |
| `dist/assets/fonts/` | Bookman-family fallback fonts and licences |
| `vercel.json` | Static deployment configuration, output directory `dist` |
| `netlify.toml` | Static deployment configuration for Netlify |

## Bookman Old Style

The first-choice font throughout the site is **Bookman Old Style**. If it is installed on a visitor's device, the browser uses that exact font. Otherwise, the site loads the included **TeX Gyre Bonum**, a Bookman-family fallback, locally. This keeps the site usable on phones and computers without Bookman Old Style installed.

The package does not contain Microsoft's proprietary Bookman Old Style font files. For exact Bookman Old Style on every device, add appropriately licensed webfont files and update the `src` entries in `dist/bookman.css`. Font sources and licences are documented in `ASSETS.md`.

## Features

- The reference's centred, narrow-column portfolio format, adapted to Aadil's electrical engineering content.
- Light mode by default; an accessible switch remembers the visitor's dark-mode preference. The switch works with keyboard activation and when local storage is blocked.
- A circular portrait displayed from the supplied exhibition photo. The original image is unchanged.
- One featured ETAP project at Elcon Engineers, with exactly one **Click here to view the report** link.
- An expandable exhibition section containing the original photo and original poster link. Both can be opened at full size.
- Experience and education timeline cards, two additional project entries, technical skills, and working LinkedIn/GitHub links.
- Native expandable project details that work without JavaScript.
- Responsive mobile layout, visible keyboard focus, reduced-motion support, and print styling.
- No external font/CDN requests, analytics, or tracking.

## Quick edits — Hinglish

1. **Naam / experience / skills:** `dist/index.html` mein edit karo.
2. **Profile photo:** `.profile-portrait` original exhibition photo ko CSS se display karta hai. Alag portrait lagana ho toh image ka `src` badlo aur `styles.css` mein crop settings adjust karo.
3. **Report / poster:** `dist/assets/project/` mein files hain. Links featured project mein sirf ek jagah hain.
4. **Colour:** `styles.css` ke top par light aur dark colour variables hain.
5. **Font:** `bookman.css` mein font preferences aur bundled fallback hain.
6. **Project details:** HTML ke `<details>` blocks edit karo; JavaScript change karne ki zaroorat nahi.

## Vercel

This package does not itself change the original `aadilresume.vercel.app` project.

1. Put this package's contents in the Git repository connected to your Vercel project.
2. Keep `vercel.json` at the repository root.
3. Commit and push. The static output directory is `dist`; there is no build step.
4. If manual Vercel settings conflict, use the repository root, static/Other framework, and output directory `dist`.

## Netlify

Upload the **dist folder** to Netlify Drop. For a Git-connected project, the included `netlify.toml` selects `dist` as the publish directory.

## Content and validation

Professional details are retained from Aadil's supplied portfolio and ETAP documents. The report, poster, and original exhibition photo are unchanged. Organisation initials in the timeline are text labels, not official logos. No publications, awards, or outcomes from the reference portfolio have been attributed to Aadil.

JavaScript syntax, theme behavior, blocked-storage handling, local file links, navigation targets, original-file integrity, and package structure are checked. Full browser visual QA was unavailable in the implementation environment.
