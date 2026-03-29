import { Fragment } from "react";
import { galleryImageItems } from "../data/galleryData";
import GalleryList from "./GalleryList";

// Gallery = page section + copy. List logic stays in GalleryList (separation of concerns).
// Fragment groups intro + grid without wrapping them in another div (rubric / fewer wrappers).
export default function Gallery() {
  return (
    <section className="gallery" id="gallery" aria-labelledby="gallery-title">
      <Fragment>
        <div className="gallery-content">
          <p className="gallery__eyebrow">Personal project</p>
          <h1 id="gallery-title">Image gallery</h1>
          <p className="gallery__lead">
            A light, Porsche-inspired layout for my own photos. This site is not
            Porsche, not endorsed by Porsche, and not the press or dealer
            experience — just a student-style gallery theme.
          </p>
        </div>

        <div className="gallery-imgs">
          <GalleryList images={galleryImageItems} />
        </div>
      </Fragment>
    </section>
  );
}
