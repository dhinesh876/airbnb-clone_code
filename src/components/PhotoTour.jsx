

import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const FALLBACK_ROOM_SVG =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 533' fill='%23f2f2f2'><rect width='800' height='533' fill='%23f0f2f5'/><path d='M360 230a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm-160 190h400l-120-140-100 110-60-70z' fill='%23b0b0b0'/><text x='50%' y='85%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='22' fill='%23717171'>Image preview</text></svg>";

export default function PhotoTour({ isOpen, onClose, tourSections }) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(null);

  
  const allPhotos = React.useMemo(() => {
    if (!Array.isArray(tourSections)) return [];
    const list = [];
    tourSections.forEach((sec) => {
      if (Array.isArray(sec.photos)) {
        sec.photos.forEach((photo, idx) => {
          list.push({
            id: typeof photo === 'object' ? (photo.id ?? list.length) : list.length,
            url: typeof photo === 'object' ? (photo.url || photo.src) : photo,
            fb: typeof photo === 'object' ? photo.fb : null,
            alt: typeof photo === 'object' ? (photo.alt || `${sec.title} image`) : `${sec.title} image ${idx + 1}`,
            roomTitle: sec.title,
            fullWidth: typeof photo === 'object' ? Boolean(photo.fullWidth) : (idx % 3 === 0)
          });
        });
      }
    });
    return list;
  }, [tourSections]);

  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setActivePhotoIdx(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  
  useEffect(() => {
    if (activePhotoIdx === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setActivePhotoIdx(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIdx, allPhotos.length]);

  if (!isOpen) return null;

  const scrollToRoom = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNext = () => {
    setActivePhotoIdx((prev) => (prev < allPhotos.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActivePhotoIdx((prev) => (prev > 0 ? prev - 1 : allPhotos.length - 1));
  };

  return (
    <div className="ab-tour-overlay">
      {activePhotoIdx !== null ? (
        
        <div className="ab-lightbox-view">
          <div className="ab-lightbox-view__top-header">
            <button
              type="button"
              className="ab-lightbox-view__grid-btn"
              onClick={() => setActivePhotoIdx(null)}
              aria-label="Back to photo tour grid"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <path
                  fillRule="evenodd"
                  d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
                />
              </svg>
            </button>

            <div className="ab-lightbox-view__room-name">
              {allPhotos[activePhotoIdx]?.roomTitle}
            </div>

            <div className="ab-lightbox-view__right-controls">
              <span className="ab-lightbox-view__index-tag">
                {activePhotoIdx + 1} of {allPhotos.length}
              </span>
              <button
                type="button"
                className="ab-lightbox-view__close-btn"
                onClick={() => setActivePhotoIdx(null)}
                aria-label="Close photo view"
              >
                <X className="w-5 h-5 text-[#222222]" />
              </button>
            </div>
          </div>

          <div className="ab-lightbox-view__canvas">
            <button
              type="button"
              className="ab-lightbox-view__arrow ab-lightbox-view__arrow--left"
              onClick={handlePrev}
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5 text-[#222222]" />
            </button>

            <div className="ab-lightbox-view__image-box">
              <img
                src={allPhotos[activePhotoIdx]?.url}
                alt={allPhotos[activePhotoIdx]?.alt}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = allPhotos[activePhotoIdx]?.fb || FALLBACK_ROOM_SVG;
                }}
              />
            </div>

            <button
              type="button"
              className="ab-lightbox-view__arrow ab-lightbox-view__arrow--right"
              onClick={handleNext}
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5 text-[#222222]" />
            </button>
          </div>
        </div>
      ) : (
        
        <div className="ab-tour-feed">

          <header className="ab-tour-feed__nav-header">
            <button
              type="button"
              className="ab-tour-feed__close-action"
              onClick={onClose}
              aria-label="Back to listing"
            >
              <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                <path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="ab-tour-feed__heading-title">Photo tour</div>

            <div className="ab-tour-feed__header-actions">
              <button type="button" className="ab-tour-feed__action-btn" aria-label="Share">
                <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                  <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9m11-15v17m-7-10 7-7 7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button type="button" className="ab-tour-feed__action-btn" aria-label="Save">
                <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                  <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z" fill="none" stroke="currentColor" strokeWidth="2.5" />
                </svg>
              </button>
            </div>
          </header>

          <div className="ab-tour-feed__scrollable-body">
            <div className="ab-tour-feed__inner-wrap">
              <nav className="ab-tour-feed__category-grid" aria-label="Photo categories">
                {tourSections.map((sec, i) => {
                  const firstPhoto = Array.isArray(sec.photos) ? sec.photos[0] : null;
                  const thumbSrc = typeof firstPhoto === 'object' ? firstPhoto?.url : firstPhoto;
                  const thumbFb = typeof firstPhoto === 'object' ? firstPhoto?.fb : null;

                  return (
                    <button
                      key={i}
                      type="button"
                      className="ab-tour-feed__category-btn"
                      onClick={() => scrollToRoom(sec.id || `tour-room-${i}`)}
                    >
                      <img
                        src={thumbSrc}
                        alt={sec.title}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = thumbFb || FALLBACK_ROOM_SVG;
                        }}
                      />
                      <span className="ab-tour-feed__category-text">{sec.title}</span>
                    </button>
                  );
                })}
              </nav>

              <div className="ab-tour-feed__room-blocks">
                {tourSections.map((sec, secIdx) => (
                  <section
                    key={sec.id || secIdx}
                    id={sec.id || `tour-room-${secIdx}`}
                    className="ab-tour-feed__section-item"
                  >
                    <div className="ab-tour-feed__section-info">
                      <h2 className="ab-tour-feed__section-title">{sec.title}</h2>
                      {sec.amenities && (
                        <div className="ab-tour-feed__section-amenities">{sec.amenities}</div>
                      )}
                    </div>

                    <div className="ab-tour-feed__photo-layout">
                      {Array.isArray(sec.photos) &&
                        sec.photos.map((photo, pIdx) => {
                          const pId = typeof photo === 'object' ? photo.id : `${secIdx}-${pIdx}`;
                          const pUrl = typeof photo === 'object' ? photo.url : photo;
                          const pFb = typeof photo === 'object' ? photo.fb : null;
                          const pAlt = typeof photo === 'object' ? photo.alt : `${sec.title} photo`;
                          const isFull = typeof photo === 'object' ? photo.fullWidth : pIdx % 3 === 0;

                          
                          const globalIdx = allPhotos.findIndex((p) => p.url === pUrl);

                          return (
                            <div
                              key={pId}
                              className={`ab-tour-feed__cell ${isFull ? 'ab-tour-feed__cell--full' : 'ab-tour-feed__cell--half'
                                }`}
                            >
                              <button
                                type="button"
                                className="ab-tour-feed__img-click"
                                onClick={() => setActivePhotoIdx(globalIdx !== -1 ? globalIdx : 0)}
                                aria-label={`Open photo in fullscreen`}
                              >
                                <img
                                  src={photo.url}
                                  alt={photo.alt}
                                  loading="lazy"
                                  onError={(e) => {
                                    
                                    if (photo.fb && e.currentTarget.src !== photo.fb) {
                                      e.currentTarget.src = photo.fb;
                                    } else {
                                      
                                      e.currentTarget.onerror = null;
                                      e.currentTarget.src = FALLBACK_ROOM_SVG;
                                    }
                                  }}
                                />
                              </button>
                            </div>
                          );
                        })}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}