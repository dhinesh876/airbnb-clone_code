
export default function Gallery({ photos, onOpenPhotoTour }) {
  return (
    <section className="gallery-board" id="galleryWrap" aria-label="Photos of this place">
      <div className="gallery-board__grid">
        {photos.slice(0, 5).map((img, idx) => (
          <button
            key={idx}
            className="gallery-board__tile"
            type="button"
            aria-label={img.title || `Photo ${idx + 1}`}
            onClick={onOpenPhotoTour}
          >
            <img
              src={img.url}
              alt=""
              decoding="async"
              loading={idx === 0 ? "eager" : "lazy"}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = img.fallback;
              }}
            />
          </button>
        ))}
      </div>
      <button className="gallery-board__btn" type="button" onClick={onOpenPhotoTour}>
        <span style={{ width: '15px', height: '15px', display: 'inline-block' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
            <path fillRule="evenodd" d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"></path>
          </svg>
        </span>
        <span>Show all photos</span>
      </button>
    </section>
  );
}