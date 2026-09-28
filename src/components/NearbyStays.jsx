import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { asset } from '../utils/asset';

const MicroStar = () => (
  <span style={{ display: 'inline-block', width: '10px', height: '10px', verticalAlign: '-1px' }}>
    <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
      <path fillRule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path>
    </svg>
  </span>
);

const stays = [
  { title: "Beautiful Studio with a view to die for", price: "₹23,600", rating: "4.91", img: asset("assets/images/similar/s1.jpeg"), fb: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&auto=format&fit=crop&q=80" },
  { title: "NAQAB - 1bhk with private pool", price: "₹42,218", rating: "4.95", img: asset("assets/images/similar/s2.jpeg"), fb: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&auto=format&fit=crop&q=80" },
  { title: "Greentique Luxury Flat with plunge pool, Calangute", price: "₹44,506", rating: "4.94", img: asset("assets/images/similar/s3.jpeg"), fb: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=80" },
  { title: "The Tropical Studio | 5 mins to Beach", price: "₹22,824", rating: "4.96", img: asset("assets/images/similar/s4.jpeg"), fb: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&auto=format&fit=crop&q=80" },
  { title: "Luxury Casa Bella 1BHK with plunge pool, Calangute", price: "₹39,942", rating: "4.95", img: asset("assets/images/similar/s5.jpeg"), fb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=80" },
  { title: "Kanso by Earthen Window | Jacuzzi | Terrace | Pool", price: "₹45,648", rating: "5.0", img: asset("assets/images/similar/s6.jpeg"), fb: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&auto=format&fit=crop&q=80" },
  { title: "Luxury Apt | Private Pool | 6 Mins from Beach", price: "₹48,786", rating: "4.93", img: asset("assets/images/similar/s2.jpeg"), fb: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=80" },
  { title: "Serendipity Cottage - Calm Stay in Calangute-Baga.", price: "₹22,824", rating: "4.92", img: asset("assets/images/similar/s4.jpeg"), fb: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=80" }
];

const PER_VIEW = 5;
const TOTAL_PAGES = Math.ceil(stays.length / PER_VIEW);

export default function NearbyStays() {
  const [page, setPage] = useState(1);
  const trackRef = useRef(null);

  // Work out which "page" is showing from the scroll position
  const updatePage = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) return setPage(1);
    const ratio = el.scrollLeft / max;
    setPage(Math.round(ratio * (TOTAL_PAGES - 1)) + 1);
  }, []);

  useEffect(() => {
    updatePage();
    window.addEventListener('resize', updatePage);
    return () => window.removeEventListener('resize', updatePage);
  }, [updatePage]);

  const goToPage = (target) => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const left = TOTAL_PAGES > 1 ? (max * (target - 1)) / (TOTAL_PAGES - 1) : 0;
    el.scrollTo({ left, behavior: 'smooth' });
  };

  return (
    <section className="app-divider-wide ab-nearby">
      <div className="ab-nearby__head">
        <h2 className="ab-nearby__title">More stays nearby</h2>
        <div className="ab-nearby__controls">
          <span className="ab-nearby__counter">{page} / {TOTAL_PAGES}</span>
          <button
            type="button"
            className="ab-nearby__arrow"
            disabled={page === 1}
            onClick={() => goToPage(page - 1)}
            aria-label="Previous stays"
          >
            <ChevronLeft size={16} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            className="ab-nearby__arrow"
            disabled={page === TOTAL_PAGES}
            onClick={() => goToPage(page + 1)}
            aria-label="Next stays"
          >
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <div className="ab-nearby__track" ref={trackRef} onScroll={updatePage}>
        {stays.map((stay, idx) => (
          <div key={idx} className="ab-nearby__card">
            <img
              className="ab-nearby__img"
              src={stay.img}
              alt={stay.title}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = stay.fb;
              }}
            />
            <div className="ab-nearby__name">{stay.title}</div>
            <div className="ab-nearby__meta">
              {stay.price}
              <span className="ab-nearby__rating"><MicroStar /> {stay.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}