# Alex Mercer — Personal Portfolio

A clean, modern, and fully responsive personal portfolio website built with
semantic HTML5, modular CSS, and vanilla JavaScript — no frameworks, no build
tools, ready to open in any browser.

---

## Project Structure

```
portfolio/
├── index.html          # Main HTML — all sections, semantic markup
│
├── css/
│   ├── base.css        # CSS variables, reset, typography, shared utilities
│   ├── nav.css         # Navigation bar + mobile menu
│   ├── hero.css        # Hero section, blobs, profile card, chips
│   └── sections.css    # Marquee, Services, About, Projects,
│                       # Skills, Contact, Footer + responsive rules
│
├── js/
│   └── main.js         # All interactivity: scroll-reveal, nav, mobile
│                       # menu, form validation, bar animations
│
└── README.md           # This file
```

---

## Sections

| Section     | Description                                              |
|-------------|----------------------------------------------------------|
| **Hero**    | Full-width intro with animated blobs, profile card, CTA |
| **Marquee** | Infinite scrolling tech-stack ticker                     |
| **Services**| 4 service cards with gradient hover reveal               |
| **About**   | Bio + chronological experience timeline                  |
| **Projects**| Asymmetric 12-col grid with overlay hover effect         |
| **Skills**  | Grouped tech badges with accent hover                    |
| **Contact** | Social links + validated contact form                    |
| **Footer**  | Copyright + anchor links                                 |

---

## Design Tokens (css/base.css)

| Token            | Value       | Usage                     |
|------------------|-------------|---------------------------|
| `--bg`           | `#f7f6f3`   | Page background (warm off-white) |
| `--surface`      | `#ffffff`   | Cards and panels          |
| `--accent`       | `#5b4af7`   | Primary accent (violet)   |
| `--accent-light` | `#ede9ff`   | Tinted accent backgrounds |
| `--green`        | `#2ec27e`   | Success / availability    |
| `--amber`        | `#f5a623`   | Warm tag accent           |
| `--text`         | `#1a1814`   | Primary text              |
| `--text-2`       | `#6b6760`   | Secondary / muted text    |

---

## How to Run

No build step needed. Just open in a browser:

```bash
# Option 1: Open directly
open index.html

# Option 2: Serve locally (Python)
python3 -m http.server 3000

# Option 3: Serve locally (Node)
npx serve .
```

Then visit `http://localhost:3000`.

---

## Customisation Checklist

- [ ] Replace `Alex Mercer` with your name throughout `index.html`
- [ ] Update bio text in the **About** section
- [ ] Swap timeline entries with your real experience
- [ ] Replace project cards with your actual projects & links
- [ ] Update social links in the **Contact** section
- [ ] Swap emoji avatar (`👨‍💻`) with a real `<img>` tag + photo
- [ ] Update `<meta name="description">` in `<head>`
- [ ] Add your own favicon

---

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).
No polyfills required — uses only widely-supported CSS and JS APIs.
