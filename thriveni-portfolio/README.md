# Vemula Thriveni Portfolio (React + Vite)
## Run (Windows PowerShell)
    pnpm install
    pnpm dev
Build: `pnpm build` · Preview: `pnpm preview`
## Edit your content
- Personal info, photo settings, achievements & certifications, contact links: `src/data/portfolio.js`
- Projects (add real `github` / `demo` URLs): `src/data/projects.js`
- Skills: `src/data/skills.js`
## Replace the profile photo
1. Open `public/images/`  2. Replace/add `profile.jpeg`  3. Keep the name `profile.jpeg`  4. Refresh.
Adjust crop with `photo.position` (e.g. `center 35%`).
## Project images
`public/images/*.jpg` are cropped from your reference screenshot. Replace with real screenshots, same filenames.
## Deploy
Run `pnpm build`, then upload the `dist/` folder to Netlify, Vercel, or GitHub Pages. Navigation uses `#/` URLs, so no server rewrites are needed.
