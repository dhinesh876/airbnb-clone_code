

import { ChevronRight, Minus, Plus, Search } from 'lucide-react';
import { useState } from 'react';

export default function Location() {
  const [showFullHighlights, setShowFullHighlights] = useState(false);

  return (
    <section className="ab-loc-view" id="location">
      <h2 className="ab-loc-view__heading">Where you’ll be</h2>
      <div className="ab-loc-view__subheading">Candolim, Goa, India</div>

      <div className="ab-loc-view__map-board">
        <div className="ab-loc-view__terrain" />

        <button
          type="button"
          className="ab-loc-view__map-btn ab-loc-view__map-btn--search"
          aria-label="Search map location"
        >
          <Search className="w-4 h-4 text-[#222222]" />
        </button>

        <div className="ab-loc-view__zoom-cluster">
          <button
            type="button"
            className="ab-loc-view__map-btn ab-loc-view__map-btn--zoom"
            aria-label="Zoom in"
          >
            <Plus className="w-4 h-4 text-[#222222]" />
          </button>
          <button
            type="button"
            className="ab-loc-view__map-btn ab-loc-view__map-btn--zoom"
            aria-label="Zoom out"
          >
            <Minus className="w-4 h-4 text-[#222222]" />
          </button>
        </div>

        <div className="ab-loc-view__pin-anchor">
          <div className="ab-loc-view__pin-disc">
            <span className="ab-loc-view__pin-icon">
              <svg
                viewBox="8 9 15 15"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <path
                  d="M6 29h20M9 29V15l7-6 7 6v14M13 29v-7h6v7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="ab-loc-view__footnote">
        Exact location will be provided after booking.
      </div>

      <div className="ab-loc-view__section-title">
        Neighbourhood highlights
      </div>

      <p className="ab-loc-view__description">
        Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
        {showFullHighlights && (
          <span>
            {" "}The lively Candolim strip is only a short walk away, featuring world-class dining, water sport activities, local boutique shopping, and vibrant sunset beach bars.
          </span>
        )}
      </p>

      <button
        type="button"
        className="ab-loc-view__expand-btn"
        onClick={() => setShowFullHighlights(!showFullHighlights)}
      >
        <span>{showFullHighlights ? 'Show less' : 'Show more'}</span>
        <ChevronRight
          className={`w-4 h-4 transition-transform duration-200 ${showFullHighlights ? 'rotate-90' : ''
            }`}
        />
      </button>
    </section>
  );
}