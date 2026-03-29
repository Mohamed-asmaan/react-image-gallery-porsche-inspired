/**
 * Reusable card: receives all display data via props from the parent.
 */
export default function ImageCard({
  imageUrl,
  title,
  description,
  alt,
  catalogIndex,
}) {
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
