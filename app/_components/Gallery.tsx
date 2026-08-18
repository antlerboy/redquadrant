/* eslint-disable @next/next/no-img-element */
import { galleryGroups, galleryImageUrl } from "../site-data";

export function Gallery() {
  return (
    <div className="gallery-groups">
      {galleryGroups.map((group) => (
        <section className="gallery-group" key={`${group.client}-${group.project}`}>
          <div className="gallery-heading">
            <p className="eyebrow">{group.client}</p>
            <h2>{group.project}</h2>
            <p>{group.format} · {group.year}</p>
          </div>
          <div className="gallery-grid">
            {group.images.map((image, index) => {
              const position = `${index + 1} of ${group.images.length}`;
              const description = `${group.format} for ${group.client}: ${group.project}, ${position}`;
              const src = galleryImageUrl(image.id, image.ext);
              return (
                <figure key={image.id}>
                  <a href={src} target="_blank" rel="noreferrer" aria-label={`Open ${description}`}>
                    <img src={src} alt={description} loading="lazy" />
                  </a>
                  <figcaption>
                    <span>{group.project}</span>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
