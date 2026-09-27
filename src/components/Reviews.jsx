

import { useState } from 'react';
import { asset } from '../utils/asset';

const CategoryIcons = {
  cleanliness: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'currentColor' }}>
      <path d="M24 0v6h-4.3c.13 1.4.67 2.72 1.52 3.78l.2.22-1.5 1.33a9.05 9.05 0 0 1-2.2-5.08c-.83.38-1.32 1.14-1.38 2.2v4.46l4.14 4.02a5 5 0 0 1 1.5 3.09l.01.25.01.25v8.63a3 3 0 0 1-2.64 2.98l-.18.01-.21.01-12-.13A3 3 0 0 1 4 29.2L4 29.02v-8.3a5 5 0 0 1 1.38-3.45l.19-.18L10 12.9V8.85l-4.01-3.4.02-.7A5 5 0 0 1 10.78 0H11zm-5.03 25.69a8.98 8.98 0 0 1-6.13-2.41l-.23-.23A6.97 6.97 0 0 0 6 21.2v7.82c0 .51.38.93.87 1H7l11.96.13h.13a1 1 0 0 0 .91-.88l.01-.12v-3.52c-.34.04-.69.06-1.03.06zM17.67 2H11a3 3 0 0 0-2.92 2.3l-.04.18-.01.08 3.67 3.1h2.72l.02-.1a4.29 4.29 0 0 1 3.23-3.4zM30 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 0h-2.33v2H22zm8-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM20 20.52a3 3 0 0 0-.77-2l-.14-.15-4.76-4.61v-4.1H12v4.1l-5.06 4.78a3 3 0 0 0-.45.53 9.03 9.03 0 0 1 7.3 2.34l.23.23A6.98 6.98 0 0 0 20 23.6z"></path>
    </svg>
  ),
  accuracy: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'currentColor' }}>
      <path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm7 7.59L24.41 12 13.5 22.91 7.59 17 9 15.59l4.5 4.5z"></path>
    </svg>
  ),
  checkin: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'currentColor' }}>
      <path d="M16.84 27.16v-3.4l-.26.09c-.98.32-2.03.51-3.11.55h-.7A11.34 11.34 0 0 1 1.72 13.36v-.59A11.34 11.34 0 0 1 12.77 1.72h.59c6.03.16 10.89 5.02 11.04 11.05V13.45a11.3 11.3 0 0 1-.9 4.04l-.13.3 7.91 7.9v5.6H25.7l-4.13-4.13zM10.31 7.22a3.1 3.1 0 1 1 0 6.19 3.1 3.1 0 0 1 0-6.2zm0 2.06a1.03 1.03 0 1 0 0 2.06 1.03 1.03 0 0 0 0-2.06zM22.43 25.1l4.12 4.13h2.67v-2.67l-8.37-8.37.37-.68.16-.3c.56-1.15.9-2.42.96-3.77v-.64a9.28 9.28 0 0 0-9-9h-.55a9.28 9.28 0 0 0-9 9v.54a9.28 9.28 0 0 0 13.3 8.1l.3-.16 1.52-.8v4.62z"></path>
    </svg>
  ),
  communication: (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'none', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
      <path d="m25.5 3.5c2.2091 0 4 1.79086 4 4v13.8333c0 2.2092-1.7909 4-4 4h-5.8192l-3.6808 4.5-3.6832-4.5h-5.8168c-2.20914 0-4-1.7908-4-4v-13.8333c0-2.20914 1.79086-4 4-4z" fill="none"></path>
    </svg>
  ),
  location: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'currentColor' }}>
      <path d="M30.95 3.81a2 2 0 0 0-2.38-1.52l-7.58 1.69-10-2-8.42 1.87A1.99 1.99 0 0 0 1 5.8v21.95a1.96 1.96 0 0 0 .05.44 2 2 0 0 0 2.38 1.52l7.58-1.69 10 2 8.42-1.87A1.99 1.99 0 0 0 31 26.2V4.25a1.99 1.99 0 0 0-.05-.44zM12 4.22l8 1.6v21.96l-8-1.6zM3 27.75V5.8l-.22-.97.22.97 7-1.55V26.2zm26-1.55-7 1.55V5.8l7-1.55z"></path>
    </svg>
  ),
  value: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '32px', width: '32px', fill: 'currentColor' }}>
      <path d="M16.17 2a3 3 0 0 1 1.98.74l.14.14 11 11a3 3 0 0 1 .14 4.1l-.14.14L18.12 29.3a3 3 0 0 1-4.1.14l-.14-.14-11-11A3 3 0 0 1 2 16.37l-.01-.2V5a3 3 0 0 1 2.82-3h11.35zm0 2H5a1 1 0 0 0-1 .88v11.29a1 1 0 0 0 .2.61l.1.1 11 11a1 1 0 0 0 1.31.08l.1-.08L27.88 16.7a1 1 0 0 0 .08-1.32l-.08-.1-11-11a1 1 0 0 0-.58-.28L16.17 4zM9 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
    </svg>
  )
};

const MicroStar = () => (
  <span style={{ display: 'inline-block', width: '10px', height: '10px' }}>
    <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}>
      <path fillRule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path>
    </svg>
  </span>
);

export default function Reviews() {
  const [expanded, setExpanded] = useState({});
  const toggle = (id) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  
  const chips = [
    { label: "Comfort", count: 6, img: asset("assets/image/comfort.png") },
    { label: "Accuracy", count: 5, img: asset("assets/image/accuracy.png") },
    { label: "Hot tub", count: 5, img: asset("assets/image/hot-tub.png") },
    { label: "Condition", count: 4, img: asset("assets/image/condition.png") },
    { label: "Hospitality", count: 8, img: asset("assets/image/hospitality.png") },
    { label: "Cleanliness", count: 4, img: asset("assets/image/cleanliness.png") },
    { label: "Amenities", count: 2, img: asset("assets/image/amenities.png") },
    { label: "Decor", count: 2, img: asset("assets/image/decor.png") },
    { label: "Indoor spaces", count: 2, img: asset("assets/image/indoor-spaces.png") },
    { label: "Location", count: 2, img: asset("assets/image/location.png") },
  ];

  return (
    <section className="section-separator-wide" id="reviews">
      <div style={{ textAlign: 'center', padding: '8px 0 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <img
            src={asset("assets/image/laurel-left.png")}
            alt=""
            style={{ height: '110px', width: 'auto', display: 'block' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div style={{ fontSize: '100px', fontWeight: 500, letterSpacing: '-.03em' }}>4.95</div>
          <img
            src={asset("assets/image/laurel-right.png")}
            alt=""
            style={{ height: '110px', width: 'auto', display: 'block' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>
        <div style={{ fontSize: '22px', fontWeight: 500, marginTop: '8px' }}>Guest favourite</div>
        <div style={{ fontSize: '15px', maxWidth: '420px', margin: '8px auto 0', lineHeight: 1.35, color: 'var(--muted2)' }}>
          This home is a guest favourite based on ratings, reviews and reliability
        </div>
        <button style={{ marginTop: '14px', fontSize: '14px', fontWeight: 500, textDecoration: 'underline', background: 'none', border: 'none' }}>
          How reviews work
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(6, 1fr)', gap: 0, padding: '8px 0 40px' }}>
        <div style={{ padding: '0 24px' }}>
          <div style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px' }}>Overall rating</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {[
              { num: 5, fill: "95%" },
              { num: 4, fill: "5%" },
              { num: 3, fill: "0%" },
              { num: 2, fill: "0%" },
              { num: 1, fill: "0%" }
            ].map(row => (
              <div key={row.num} style={{ display: 'grid', gridTemplateColumns: '8px 1fr', gap: '10px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#222' }}>{row.num}</span>
                <div style={{ height: '4px', background: 'var(--line-soft)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', background: '#222', width: row.fill }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: '0 24px', borderLeft: '1px solid var(--line)' }}>
          <div style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px' }}>Cleanliness</div>
          <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>5.0</div>
          <div style={{ width: '32px', height: '32px', color: '#222' }}>{CategoryIcons.cleanliness}</div>
        </div>

        <div style={{ padding: '0 24px', borderLeft: '1px solid var(--line)' }}>
          <div style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px' }}>Accuracy</div>
          <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>5.0</div>
          <div style={{ width: '32px', height: '32px', color: '#222' }}>{CategoryIcons.accuracy}</div>
        </div>

        <div style={{ padding: '0 24px', borderLeft: '1px solid var(--line)' }}>
          <div style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px' }}>Check-in</div>
          <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>5.0</div>
          <div style={{ width: '32px', height: '32px', color: '#222' }}>{CategoryIcons.checkin}</div>
        </div>

        <div style={{ padding: '0 24px', borderLeft: '1px solid var(--line)' }}>
          <div style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px' }}>Communication</div>
          <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>5.0</div>
          <div style={{ width: '32px', height: '32px', color: '#222' }}>{CategoryIcons.communication}</div>
        </div>

        <div style={{ padding: '0 24px', borderLeft: '1px solid var(--line)' }}>
          <div style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px' }}>Location</div>
          <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>4.8</div>
          <div style={{ width: '32px', height: '32px', color: '#222' }}>{CategoryIcons.location}</div>
        </div>

        <div style={{ padding: '0 24px', borderLeft: '1px solid var(--line)' }}>
          <div style={{ fontSize: '14px', fontWeight: 500, marginBottom: '12px' }}>Value</div>
          <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>4.8</div>
          <div style={{ width: '32px', height: '32px', color: '#222' }}>{CategoryIcons.value}</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', scrollBehavior: 'smooth', scrollbarWidth: 'none', padding: '4px 0 30px' }}>
        {chips.map((chip, idx) => (
          <button key={idx} style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--line)', borderRadius: '16px', padding: '13px 18px 13px 14px', fontSize: '14px', fontWeight: 500, background: '#fff' }} type="button">
            <img
              style={{ width: '20px', height: '20px', objectFit: 'contain', display: 'block', flexShrink: 0 }}
              src={chip.img}
              alt={chip.label}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            {chip.label} <span style={{ color: 'var(--muted2)', fontWeight: 400 }}>{chip.count}</span>
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px 80px', paddingBottom: '40px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: "rgb(247, 237, 226)", color: "rgb(193, 133, 42)", display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px', fontWeight: 500 }}>A</div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 500 }}>Amit</div>
              <div style={{ fontSize: '13px', color: 'var(--muted2)' }}>2 months on Airbnb</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', marginBottom: '6px' }}>
            <span style={{ display: 'flex', gap: '1px' }}>{[...Array(5)].map((_, i) => <MicroStar key={i} />)}</span>
            <span>·</span><span>1 week ago</span>
          </div>
          <div style={{ fontSize: '15px', lineHeight: 1.4 }}>Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.</div>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: "rgb(231, 240, 253)", color: "rgb(58, 110, 204)", display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px', fontWeight: 500 }}>A</div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 500 }}>Aheesh</div>
              <div style={{ fontSize: '13px', color: 'var(--muted2)' }}>3 years on Airbnb</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', marginBottom: '6px' }}>
            <span style={{ display: 'flex', gap: '1px' }}>{[...Array(5)].map((_, i) => <MicroStar key={i} />)}</span>
            <span>·</span><span>2 weeks ago</span>
          </div>
          <div style={{ fontSize: '15px', lineHeight: 1.4, display: expanded['rev2'] ? 'block' : '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.
          </div>
          <button style={{ background: 'none', border: 'none', padding: 0, marginTop: '8px', fontSize: '15px', fontWeight: 500, textDecoration: 'underline' }} onClick={() => toggle('rev2')}>
            {expanded['rev2'] ? "Show less" : "Show more"}
          </button>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: "rgb(253, 231, 239)", color: "rgb(212, 53, 110)", display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px', fontWeight: 500 }}>S</div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 500 }}>Samiksha</div>
              <div style={{ fontSize: '13px', color: 'var(--muted2)' }}>8 months on Airbnb</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', marginBottom: '6px' }}>
            <span style={{ display: 'flex', gap: '1px' }}>{[...Array(5)].map((_, i) => <MicroStar key={i} />)}</span>
            <span>·</span><span>May 2026</span>
          </div>
          <div style={{ fontSize: '15px', lineHeight: 1.4 }}>the host nitish was really great help</div>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: "rgb(239, 234, 247)", color: "rgb(139, 111, 196)", display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px', fontWeight: 500 }}>V</div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 500 }}>Vedant</div>
              <div style={{ fontSize: '13px', color: 'var(--muted2)' }}>4 years on Airbnb</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', marginBottom: '6px' }}>
            <span style={{ display: 'flex', gap: '1px' }}>{[...Array(5)].map((_, i) => <MicroStar key={i} />)}</span>
            <span>·</span><span>May 2026</span>
          </div>
          <div style={{ fontSize: '15px', lineHeight: 1.4, display: expanded['rev4'] ? 'block' : '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine.
            The highlight of our stay was definitely the jacuzzi. It was clean, well-kept, and the perfect place to relax after a day of exploring Goa. It added a luxurious touch to our vacation and made our experience even more memorable.
            The property was exactly as described, well-equipped, and offered a peaceful atmosphere. We would highly recommend this place to anyone looking for a comfortable, clean, and relaxing stay in Goa. Looking forward to visiting again!
          </div>
          <button style={{ background: 'none', border: 'none', padding: 0, marginTop: '8px', fontSize: '15px', fontWeight: 500, textDecoration: 'underline' }} onClick={() => toggle('rev4')}>
            {expanded['rev4'] ? "Show less" : "Show more"}
          </button>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: "rgb(247, 237, 226)", color: "rgb(193, 133, 42)", display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px', fontWeight: 500 }}>V</div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 500 }}>Vaibhav S</div>
              <div style={{ fontSize: '13px', color: 'var(--muted2)' }}>3 years on Airbnb</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', marginBottom: '6px' }}>
            <span style={{ display: 'flex', gap: '1px' }}>{[...Array(5)].map((_, i) => <MicroStar key={i} />)}</span>
            <span>·</span><span>May 2026</span>
          </div>
          <div style={{ fontSize: '15px', lineHeight: 1.4 }}>Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.</div>
        </div>

        {/* Review 6: Mohd */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: "rgb(231, 240, 253)", color: "rgb(58, 110, 204)", display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px', fontWeight: 500 }}>M</div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 500 }}>Mohd</div>
              <div style={{ fontSize: '13px', color: 'var(--muted2)' }}>5 years on Airbnb</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', marginBottom: '6px' }}>
            <span style={{ display: 'flex', gap: '1px' }}>{[...Array(5)].map((_, i) => <MicroStar key={i} />)}</span>
            <span>·</span><span>May 2026</span>
          </div>
          <div style={{ fontSize: '15px', lineHeight: 1.4 }}>Great place. Exactly as described in the listing.</div>
        </div>
      </div>

      {/* <button style={{ border: '1px solid #222', background: '#fff', borderRadius: '12px', padding: '13px 23px', fontSize: '16px', fontWeight: 500 }} type="button">
        Show all 19 reviews
      </button> */}
      <button
        type="button"
        style={{
          border: '1px solid #222222',
          background: '#ffffff',
          borderRadius: '8px',
          padding: '13px 23px',
          fontSize: '16px',
          fontWeight: 500,
          color: '#222222',
          cursor: 'pointer',
          marginTop: '24px',
          marginBottom: '48px' /* Moves the horizontal line further down */
        }}
      >
        Show all 19 reviews
      </button>
    </section>
  );
}