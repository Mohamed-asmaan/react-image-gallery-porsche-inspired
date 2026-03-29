// One presentational component: no state, only props. Easier to test and reuse.
// figure + figcaption = semantic HTML tying image to its caption (good for a11y).
export default function ImageCard({
  imageUrl,
  title,
  description,
  alt,
  catalogIndex,
}) {
  // Index comes from the parent map() so we don't duplicate "which card am I?" inside data.
  const catalogNo = String(catalogIndex + 1).padStart(2, "0");

  return (
    <figure className="image-card gallery-piece">
      <div className="gallery-piece__frame">
        <img
          src={imageUrl}
          alt={alt}
          title={title}
          loading="lazy"
        />
      </div>
      <figcaption className="image-card__details">
        <span className="gallery-piece__no">No. {catalogNo}</span>
        <h3 className="image-card__title">{title}</h3>
        <p className="image-card__description">{description}</p>
      </figcaption>
    </figure>
  );
}
