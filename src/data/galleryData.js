// We import image files so Vite gives us a real URL string after build (hashing, correct paths).
// You could use a string URL instead for remote images, e.g. imageUrl: "https://...".
import img1 from "../assets/images/img-1.avif";
import img2 from "../assets/images/img-2.avif";
import img3 from "../assets/images/img-3.avif";
import img4 from "../assets/images/img-4.avif";
import img5 from "../assets/images/img-5.avif";
import img6 from "../assets/images/img-6.avif";
import img7 from "../assets/images/img-7.avif";
import img8 from "../assets/images/img-8.avif";
import img9 from "../assets/images/img-9.avif";
import img10 from "../assets/images/img-10.avif";

// alt = screen readers; title/description = visible copy on the card
export const galleryImageItems = [
  {
    imageUrl: img1,
    title: "Gallery 01",
    description: "Opening frame. Composition and negative space.",
    alt: "Personal gallery photo 1",
  },
  {
    imageUrl: img2,
    title: "Gallery 02",
    description: "Contrast and line. Emphasis on structure.",
    alt: "Personal gallery photo 2",
  },
  {
    imageUrl: img3,
    title: "Gallery 03",
    description: "Minimal detail. Focus on form.",
    alt: "Personal gallery photo 3",
  },
  {
    imageUrl: img4,
    title: "Gallery 04",
    description: "Color balance across the scene.",
    alt: "Personal gallery photo 4",
  },
  {
    imageUrl: img5,
    title: "Gallery 05",
    description: "Depth and layering in the frame.",
    alt: "Personal gallery photo 5",
  },
  {
    imageUrl: img6,
    title: "Gallery 06",
    description: "Texture and light interaction.",
    alt: "Personal gallery photo 6",
  },
  {
    imageUrl: img7,
    title: "Gallery 07",
    description: "Night tones and highlight control.",
    alt: "Personal gallery photo 7",
  },
  {
    imageUrl: img8,
    title: "Gallery 08",
    description: "Street geometry and perspective.",
    alt: "Personal gallery photo 8",
  },
  {
    imageUrl: img9,
    title: "Gallery 09",
    description: "Mid series study. Rhythm and spacing.",
    alt: "Personal gallery photo 9",
  },
  {
    imageUrl: img10,
    title: "Gallery 10",
    description: "Closing frame. Summary of the set.",
    alt: "Personal gallery photo 10",
  },
];
