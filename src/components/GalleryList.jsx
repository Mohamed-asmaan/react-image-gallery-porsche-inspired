import { Fragment } from "react";
import ImageCard from "./ImageCard";

/**
 * Renders all cards from data using map().
 * Fragment avoids an extra wrapper DOM node around the cards.
 */
export default function GalleryList({ images }) {
  return (
    <Fragment>
      {images.map((item, index) => (
        <ImageCard
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
