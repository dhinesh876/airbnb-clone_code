import React, { useState, useRef } from 'react';
import { asset } from '../utils/asset';

const MicroStar = () => (
  <span style={{ display: 'inline-block', width: '10px', height: '10px', verticalAlign: '-1px' }}>
    <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
      <path fillRule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path>
    </svg>
  </span>
);

export default function NearbyStays() {
  const [page, setPage] = useState(1);
  const trackRef = useRef(null);

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

  const handleNext = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: trackRef.current.clientWidth, behavior: 'smooth' });
      setPage(2);
    }
  };

  const handlePrev = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -trackRef.current.clientWidth, behavior: 'smooth' });
      setPage(1);
    }
  };

  return (
    <section className="app-divider-wide">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '22px', lineHeight: '26px', fontWeight: 500, margin: 0 }}>More stays nearby</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '14px', color: 'var(--muted2)', marginRight: '6px' }}>{page} / 2</span>
          <button
            style={{ width: '32px', height: '32px', border: '1px solid #b0b0b0', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: page === 1 ? 0.3 : 1 }}
            disabled={page === 1}
            onClick={handlePrev}
            aria-label="Previous stays"
          >
            ‹
          </button>
          <button
            style={{ width: '32px', height: '32px', border: '1px solid #b0b0b0', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: page === 2 ? 0.3 : 1 }}
            disabled={page === 2}
            onClick={handleNext}
            aria-label="Next stays"
          >
            ›
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', scrollBehavior: 'smooth', scrollbarWidth: 'none', paddingBottom: '4px' }} ref={trackRef}>
        {stays.map((stay, idx) => (
          <div key={idx} style={{ flex: '0 0 calc((100% - 80px)/5)', minWidth: 0 }}>
            <img
              src={stay.img}
              alt={stay.title}
              loading="lazy"
              style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '12px', display: 'block' }}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = stay.fb;
              }}
            />
            <div style={{ fontSize: '14px', fontWeight: 500, marginTop: '8px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{stay.title}</div>
            <div style={{ fontSize: '13px', marginTop: '4px' }}>
              {stay.price} &nbsp; <MicroStar /> {stay.rating}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}