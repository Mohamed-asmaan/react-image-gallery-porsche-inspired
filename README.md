# Dynamic Image Gallery (React)

A responsive image gallery built with **React** and **Vite**. Images, titles, and descriptions are driven by a **single data array**—add an object to the array and the UI updates without changing the card JSX.

> **Note:** This is a personal / learning project with a Porsche-inspired visual theme. It is **not** affiliated with Porsche AG. Trademarks belong to their owners.

---

## Features

- Reusable **`ImageCard`** component for each gallery item
- Central data file: **`galleryImageItems`** (`imageUrl`, `title`, `description`, `alt`)
- **`map()`** renders all cards from the array
- Props flow: **Gallery → GalleryList → ImageCard**
- **CSS Grid** layout: 1 column on small screens, **2 columns** from `560px` up
- **`object-fit: cover`** and **`object-position: center`** on images
- **React `Fragment`** used where multiple siblings are grouped without extra DOM wrappers

---

## Project structure

```
image-gallery/
├── index.html
├── package.json
├── vite.config.js
├── public/                 # static assets (favicons, etc.)
└── src/
    ├── main.jsx            # React root
    ├── App.jsx             # layout: header, main, footer
    ├── style.css
    ├── data/
    │   └── galleryData.js  # gallery array — edit here to add images
    └── components/
        ├── Header.jsx
        ├── Gallery.jsx     # section + intro + grid container
        ├── GalleryList.jsx # maps data → ImageCard (uses Fragment)
        └── ImageCard.jsx   # reusable card (props)
```

---

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)

### Install

```bash
npm install
```

### Run locally (development)

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Production build

```bash
npm run build
```

Output is in the `dist/` folder. Preview locally:

```bash
npm run preview
```

---

## How to add a new image

1. Add your image file under `src/assets/images/` (e.g. `img-11.avif` or `.jpg`).
2. At the top of `src/data/galleryData.js`, add:  
   `import img11 from "../assets/images/img-11.avif";`
3. Append a new object to **`galleryImageItems`**:

```js
{
  imageUrl: img11,
  title: "Your title",
  description: "Short description shown under the image.",
  alt: "Accessible description of the image",
},
```

Save the file—the new card appears automatically.

---

## Assignment / rubric alignment

| Requirement | Implementation |
|-------------|----------------|
| Reusable component for each image | `ImageCard.jsx` |
| Data as array of objects (URL, title, description) | `galleryData.js` → `galleryImageItems` |
| Render cards with `map()` | `GalleryList.jsx` |
| Pass data via props from parent to child | `Gallery` → `GalleryList` (`images`); `GalleryList` → `ImageCard` (individual props) |
| Clear component separation | `Gallery`, `GalleryList`, `ImageCard`, `Header`, `App` |
| Grid or flex + basic styling | CSS Grid (`.gallery-imgs`) + card styles in `style.css` |
| Responsive layout | 1 column default; 2 columns from `560px` |
| React Fragments where useful | `Fragment` in `Gallery.jsx` and `GalleryList.jsx` |

---

## Tech stack

- React 18
- Vite 6
- Plain CSS (no component framework)

---

## Credits

- Favicon / icons: [Icons8](https://icons8.com) (Porsche-style icons), used per their license terms.
- Porsche wordmark SVG used for non-commercial learning / fan styling only.

---

## License

This student project is provided for educational use. Respect third-party trademarks and icon licenses when reusing assets.
