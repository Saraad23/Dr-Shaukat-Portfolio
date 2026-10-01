# Dr Shaukat Portfolio

A portfolio website built with Next.js for Dr. Shaukat Hussain.

    npm install
    npm run dev      # http://localhost:3000

- Text, links, contact details and social accounts: `app/content.js`
- Layout: `app/page.js`; header, footer and icons in `app/components/`
- Colours and spacing: CSS variables at the top of `app/globals.css`
- Photos live in `public/images/`; set them in `app/content.js` as `site.photo` (hero), `about.photo` and `careWell.photo`, each as `[file, description]` (set `site.photo` to `null` to show the "SH" monogram)
- TODO: set `careWell.url` in `app/content.js` (the "Visit the Care Well website" button appears once it is set); add certificates, case studies (with consent)
