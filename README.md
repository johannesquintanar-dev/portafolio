# Johannes Quintanar — Portfolio v2.0

## 🚀 New Features

### 🎨 3 Themes
- **Dark** — High contrast dark with violet accent (default)
- **Light** — Clean professional light mode
- **Colorful** — Deep navy with coral/yellow gradient accents

Theme preference is saved in `localStorage`.

### 📄 CV Modal with Language Detection
- Clicking **Resume/Currículum** opens an in-page modal with an iframe preview
- **EN** → loads `assets/cv/Jonas Johannes Castillo Quintanar CV.pdf`  
- **ES** → loads the Spanish version of the CV (configure in `js/i18n.js` under `cv-path` for `es`)
- Download and "open in new tab" buttons included
- Press `Esc` or click outside to close

### 📱 Mobile Fixes
- Resume button now shows **icon-only on mobile** (saves space)
- Hamburger menu fully functional with overlay
- Nav links open as full-width mobile menu
- All sections properly responsive at 600px and 900px

### ✨ New Sections Added
1. **Skills with progress bars** — animated on scroll
2. **Certifications** grid with status badges
3. **Soft skills / Professional badges**
4. **Improved Journey timeline** with pulse animation on current item
5. **Contact cards** — clickable email/GitHub/LinkedIn cards
6. **Scroll progress bar** at top of page
7. **Active nav link highlighting** on scroll

---

## 📁 File Structure

```
portafolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── i18n.js        ← translations + CV path per language
│   └── script.js      ← all interactivity
└── assets/
    ├── images/        ← your existing screenshots
    └── cv/
        ├── Jonas Johannes Castillo Quintanar CV.pdf        ← EN version
        └── Jonas Johannes Castillo Quintanar CV-ES.pdf     ← add ES version here
```

---

## 🌐 Spanish CV Setup

In `js/i18n.js`, find the `es` object and update `"cv-path"`:

```js
es: {
  // ...
  "cv-path": "assets/cv/Jonas Johannes Castillo Quintanar CV-ES.pdf"
}
```

If you only have one CV file, both languages will point to the same file (current default).

---

## 💡 More Pro Suggestions

To make this portfolio even more impressive, consider adding:

1. **Testimonials section** — A quote from your team lead at Generation México
2. **GitHub contribution graph** — Embed via GitHub API or a badge
3. **Blog/Articles** — Even 2-3 short posts shows thought leadership
4. **Live demo links** — Deploy projects to Vercel/Netlify and add live buttons
5. **Open to work banner** — Can be toggled on/off via JS
6. **Contact form** — Use Formspree or EmailJS (no backend needed)
7. **Google Analytics** — Track portfolio visits
8. **meta OG tags** — Already have description, add og:image for LinkedIn shares
9. **Favicon** — Add a custom favicon with your initials
10. **Achievement counters** — Animated numbers (years, projects, etc.)

---

## 🔧 Deployment (GitHub Pages)

1. Replace files in your repo with these updated versions
2. Go to **Settings → Pages → Source: main / root**
3. Your portfolio will be live at `https://johannesquintanar-dev.github.io/portafolio/`

---

Built with ❤️ — Johannes Quintanar 2026