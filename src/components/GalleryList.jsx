import { Fragment } from "react";
import ImageCard from "./ImageCard";

// Only job: take the array and map to cards. Split from Gallery so this file stays small.
// Fragment: no extra <div> around all cards (assignment asks for it; grid parent is .gallery-imgs).
export default function GalleryList({ images }) {
  return (
    <Fragment>
      {images.map((item, index) => (
        <ImageCard
          // Static list: index is OK. If items reorder/delete, use a stable id from data instead.
          key={index}
          catalogIndex={index}
          imageUrl={item.imageUrl}
          title={item.title}
          description={item.description}
          alt={item.alt}
        />
      ))}
    </Fragment>
  );
}
