import React, { useState } from 'react';

export default function Calendar() {
  const [selected, setSelected] = useState({ start: 18, end: 23 });

  return (
    <div className="app-divider">
      <div>
        <div style={{ marginBottom: '22px' }}>
          <div style={{ fontSize: '22px', fontWeight: 500 }}>5 nights in Candolim</div>
          <div style={{ fontSize: '14px', color: 'var(--muted2)', marginTop: '6px' }}>18 Oct 2026 - 23 Oct 2026</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 56px', position: 'relative' }}>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 500, textAlign: 'center', marginBottom: '18px' }}>October 2026</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: '6px', textAlign: 'center', fontSize: '12px', fontWeight: 500 }}>
              <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
              <div style={{ visibility: 'hidden', aspectRatio: 1 }}></div>
              <div style={{ visibility: 'hidden', aspectRatio: 1 }}></div>
              <div style={{ visibility: 'hidden', aspectRatio: 1 }}></div>
              <div style={{ visibility: 'hidden', aspectRatio: 1 }}></div>
              {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => {
                let bg = 'transparent';
                let col = '#222';
                let rad = '50%';
                if (selected.start && selected.end) {
                  if (d === selected.start || d === selected.end) {
                    bg = '#222'; col = '#fff';
                  } else if (d > selected.start && d < selected.end) {
                    bg = 'var(--grey200)'; rad = '0';
                  }
                }
                return (
                  <div key={d} style={{ aspectRatio: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', background: bg, color: col, borderRadius: rad }}>
                    {d}
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '16px', fontWeight: 500, textAlign: 'center', marginBottom: '18px' }}>November 2026</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: '6px', textAlign: 'center', fontSize: '12px', fontWeight: 500 }}>
              <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
              {Array.from({ length: 30 }, (_, i) => i + 1).map((d) => {
                const disabled = [18, 19, 20, 21, 22, 23, 24, 29, 30].includes(d);
                return (
                  <div key={d} style={{ aspectRatio: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: disabled ? '#ddd' : '#222', textDecoration: disabled ? 'line-through' : 'none' }}>
                    {d}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '18px' }}>
          <span style={{ width: '30px', height: '22px', border: '1px solid #b0b0b0', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 32 22" width="20" height="14" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="1" y="1" width="30" height="20" rx="3"></rect>
              <path d="M6 7h.01M11 7h.01M16 7h.01M21 7h.01M26 7h.01M6 12h.01M26 12h.01M9 16h14"></path>
            </svg>
          </span>
          <button style={{ background: 'none', border: 'none', fontWeight: 500, textDecoration: 'underline', fontSize: '14px' }} onClick={() => setSelected({ start: null, end: null })}>
            Clear dates
          </button>
        </div>
      </div>
    </div>
  );
}