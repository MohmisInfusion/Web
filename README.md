# Emmanuel Word Chapel — Kahawa Wendani

Static one-page website for Emmanuel Word Chapel.

> Teaching • Raising Disciples • Transforming Lives

## Project structure

```
.
├── index.html            # The whole site (single page, anchor navigation)
├── style.css             # All styling, CSS custom properties + responsive rules
├── script.js             # Mobile menu toggle, footer year
└── assets/
    └── images/           # hero.jpg, sermon.jpg, favicon.svg (see assets/images/README.md)
```

No build step, no dependencies. Fonts are loaded from Google Fonts.

## Running locally

Open `index.html` directly in a browser, or serve it:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploying with GitHub Pages

Settings → Pages → Build and deployment → *Deploy from a branch* → `main` / `/ (root)`.

> **Note on filenames:** GitHub Pages is case-sensitive. `index.html` links
> `style.css` and `script.js` in lowercase — keep them that way.

## Before publishing — content checklist

These placeholders are still in `index.html` and must be replaced:

- [ ] **Service times** — "Service time — update here" (Sunday) and "Time — update here" (Wednesday)
- [ ] **M-Pesa giving** — the `MPESA DETAILS` text in the Giving section needs the official Paybill/Till
- [ ] **Events** — update the three cards in the Upcoming Events section with current dates
- [ ] **Sermon link** — the "Watch Sermon →" link points to `#`
- [ ] **Ministry cards** — all seven link to `#`; point them at real pages or remove the links
- [ ] **Social links** — Facebook / YouTube / Instagram in the footer point to `#`
- [ ] **Gallery** — six "ADD PHOTO" tiles; swap in real photos
- [ ] **Images** — add `hero.jpg` and `sermon.jpg` to `assets/images/`

## Sections

Home · About · Services · Sermons · Ministries · Events · Give · Gallery · Contact

## Contact

📍 Kahawa Wendani · 📞 [0720 200 619](tel:+254720200619) · [WhatsApp](https://wa.me/254720200619)
