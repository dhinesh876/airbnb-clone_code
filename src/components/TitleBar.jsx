

import { Heart, Share } from 'lucide-react';

export default function TitleBar({ title, isSaved, onToggleSave, onShare }) {
  return (
    <div className="ab-title-bar">
      <h1 className="ab-title-bar__heading">{title}</h1>

      <div className="ab-title-bar__actions">
        <button
          type="button"
          className="ab-title-bar__btn"
          onClick={onShare}
          aria-label="Share listing"
        >
          <Share className="w-4 h-4 text-[#222222]" />
          <span className="ab-title-bar__btn-label">Share</span>
        </button>

        <button
          type="button"
          className={`ab-title-bar__btn ${isSaved ? 'ab-title-bar__btn--saved' : ''}`}
          onClick={onToggleSave}
          aria-label={isSaved ? "Remove from wishlist" : "Save to wishlist"}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${isSaved ? 'text-[#ff385c] fill-[#ff385c]' : 'text-[#222222]'
              }`}
          />
          <span className="ab-title-bar__btn-label">
            {isSaved ? 'Saved' : 'Save'}
          </span>
        </button>
      </div>
    </div>
  );
}