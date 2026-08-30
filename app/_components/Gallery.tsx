/* eslint-disable @next/next/no-img-element */
import { galleryGroups, galleryImageUrl } from "../site-data";

export function Gallery() {
  return (
    <div className="gallery-groups">
      {galleryGroups.map((group) => (
        <section className="gallery-group" key={`${group.client}-${group.project}`}>
          <header className="gallery-heading">
            <h2>{group.client}</h2>
            <p>{group.project}</p>
            <p>{group.format}{group.year ? ` · ${group.year}` : ""}</p>
          </header>
          <div className={`gallery-grid gallery-grid-${Math.min(group.images.length, 4)}`}>
            {group.images.map((image, index) => {
              const position = `${index + 1} of ${group.images.length}`;
              const description = `${group.client} — ${group.project}; ${group.format}, ${group.year}; image ${position}`;
              const src = galleryImageUrl(image.id, image.ext);
              return (
                <figure key={image.id}>
                  <a href={src} target="_blank" rel="noreferrer" aria-label={`Open ${description}`}>
                    <img src={src} alt={description} loading="lazy" />
                  </a>
                </figure>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
