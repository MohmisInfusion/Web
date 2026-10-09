# Emmanuel Word Chapel — Kahawa Wendani

Static one-page website for Emmanuel Word Chapel.

> Teaching • Raising Disciples • Transforming Lives

## Project structure

```
.
├── index.html            # The whole site (single page, anchor navigation)
├── style.css             # All styling, CSS custom properties + responsive rules
├── script.js             # Mobile menu, sermon video, scroll-spy nav, footer year
├── 404.html              # Shown when a visitor hits a URL that doesn't exist
├── robots.txt            # Tells search engines they may index the site
├── sitemap.xml           # Lists the site's pages for search engines
└── assets/
    └── images/           # hero.jpg, sermon.jpg, favicon.svg (see assets/images/README.md)
```

No build step, no dependencies. Fonts are loaded from Google Fonts.

> **If the site ever moves to a custom domain,** update the URL in three
> places: `robots.txt`, `sitemap.xml`, and the `og:url` / `canonical` /
> structured-data block in `index.html`.

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

## Publishing a sermon video

1. Upload the sermon to the Chapel's YouTube channel
2. Copy the video ID from the watch URL — it's the part after `v=`
   (`https://www.youtube.com/watch?v=**dQw4w9WgXcQ**`)
3. In `index.html`, find `<figure class="sermon-media" data-video-id="">`
4. Paste the ID between the quotes: `data-video-id="dQw4w9WgXcQ"`

That's the only change needed. The play button then loads the video in place.
Until an ID is added, the button shows a short "not online yet" note.

**Sermon poster:** save it as `assets/images/sermon.jpg`. Crop out any blank
side bars first — the card shows the whole image without cropping, so empty
margins just make the poster appear smaller.

## Before publishing — content checklist

These placeholders are still in `index.html` and must be replaced:

- [ ] **Service times** — "Service time — update here" (Sunday) and "Time — update here" (Wednesday)
- [ ] **M-Pesa giving** — the `MPESA DETAILS` text in the Giving section needs the official Paybill/Till
- [ ] **Events** — update the three cards in the Upcoming Events section with current dates
- [ ] **Sermon video** — add the YouTube ID to `data-video-id` (see above)
- [ ] **Ministry cards** — all seven link to `#`; point them at real pages or remove the links
- [ ] **Social links** — Facebook / YouTube / Instagram in the footer point to `#`
- [ ] **Gallery** — six "ADD PHOTO" tiles; swap in real photos
- [ ] **Images** — add `hero.jpg` and `sermon.jpg` to `assets/images/`

## Sections

Home · About · Services · Sermons · Ministries · Events · Give · Gallery · Contact

## Contact

📍 Kahawa Wendani · 📞 [0720 200 619](tel:+254720200619) · [WhatsApp](https://wa.me/254720200619)
