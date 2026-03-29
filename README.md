# React image gallery

Vite + React. Data lives in `src/data/galleryData.js` (`galleryImageItems`). The list is rendered with `map()` in `GalleryList.jsx` into `ImageCard` components.

Porsche style theme for class, not affiliated with Porsche AG. Icons: Icons8 (follow their license).

## Run

```bash
npm install
npm run dev
```

Build: `npm run build` (output in `dist/`).

## Add an image

1. Put the file in `src/assets/images/`.
2. `import` it at the top of `galleryData.js`.
3. Push another object onto `galleryImageItems` (`imageUrl`, `title`, `description`, `alt`).

## Files (quick)

| File | Role |
|------|------|
| `galleryData.js` | Array only, single source of truth |
| `Gallery.jsx` | Section + passes data into `GalleryList` |
| `GalleryList.jsx` | `map()` + `Fragment` |
| `ImageCard.jsx` | One card; all fields via props |

Rubric: reusable card, array + map, props, split components, grid layout, responsive, Fragments. Details in code comments.
