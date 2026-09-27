import { asset } from '../utils/asset';


export default function Host() {
  const hostData = {
    name: "Mirashya Homes",
    role: "Host",
    reviews: "1,463",
    rating: "4.68★",
    yearsHosting: "2",
    bornDecade: "Born in the 80s",
    school: "Where I went to school: NICMAR GOA",
    responseRate: "100%",
    responseTime: "within an hour",
    avatar: asset("assets/image/host.png"),
    fallbackAvatar: "https://a0.muscache.com/im/pictures/user/User-457319955/original/6c65342a-2895-4663-883a-e9fa498a3b5a.jpeg",
    coHosts: [
      { name: "Sharath", type: "img", src: asset("assets/image/sharath.png"), fb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80" },
      { name: "Aman Dev Pahwa", type: "img", src: asset("assets/image/aman.png"), fb: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80" },
      { name: "Maria Karen Priyanka", type: "img", src: asset("assets/image/maria.png"), fb: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80" },
      { name: "Simran", type: "img", src: asset("assets/image/simran.png"), fb: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80" },
      { name: "Pallavi", type: "img", src: asset("assets/image/pallavi.png"), fb: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80" },
      { name: "Sanyukta", type: "img", src: asset("assets/image/sanyukta.png"), fb: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&auto=format&fit=crop&q=80" },
      { name: "Shruti", type: "letter", letter: "S", bg: "rgb(253, 231, 239)", color: "rgb(212, 53, 110)" },
      { name: "Amisha", type: "letter", letter: "A", bg: "rgb(231, 240, 253)", color: "rgb(58, 110, 204)" }
    ]
  };

  return (
    <section className="ab-host-sec">
      <h2 className="ab-host-sec__heading">Meet your host</h2>

      <div className="ab-host-sec__layout">

        <div className="ab-host-sec__left-col">
          <div className="ab-host-sec__card">

            <div className="ab-host-sec__card-profile">
              <div className="ab-host-sec__avatar-wrap">
                <img
                  src={hostData.avatar}
                  alt={hostData.name}
                  className="ab-host-sec__avatar-img"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = hostData.fallbackAvatar;
                  }}
                />
                <span className="ab-host-sec__verified-badge">
                  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                    <path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm7 7.59L24.41 12 13.5 22.91 7.59 17 9 15.59l4.5 4.5z" fill="currentColor"></path>
                  </svg>
                </span>
              </div>
              <div className="ab-host-sec__host-title">{hostData.name}</div>
              <div className="ab-host-sec__host-role">{hostData.role}</div>
            </div>

            <div className="ab-host-sec__card-stats">
              <div className="ab-host-sec__stat-block">
                <div className="ab-host-sec__stat-number">{hostData.reviews}</div>
                <div className="ab-host-sec__stat-label">Reviews</div>
              </div>
              <div className="ab-host-sec__stat-block">
                <div className="ab-host-sec__stat-number">{hostData.rating}</div>
                <div className="ab-host-sec__stat-label">Rating</div>
              </div>
              <div className="ab-host-sec__stat-block">
                <div className="ab-host-sec__stat-number">{hostData.yearsHosting}</div>
                <div className="ab-host-sec__stat-label">Years hosting</div>
              </div>
            </div>
          </div>

          <div className="ab-host-sec__bio-list">

            <div className="ab-host-sec__bio-item">
              <span className="ab-host-sec__bio-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}
                >
                  <path d="M16 0c5.9 0 11 5.28 11 11 0 4.85-3.23 9.27-9.55 13.28l2.2 2.92a1.13 1.13 0 0 1-.9 1.8H17v3h-2v-3h-1.75a1.13 1.13 0 0 1-.9-1.8l2.14-2.86C8.2 20.92 5 16.46 5 11A11 11 0 0 1 16 0zm0 25.67L15 27h2zM16 2a9 9 0 0 0-9 9c0 4.6 2.72 8.43 8.3 11.5l.38.21.28.14.3-.19c5.62-3.53 8.48-7.24 8.72-11.12l.02-.27V11c0-4.64-4.21-9-9-9z"></path>
                </svg>
              </span>
              <span>{hostData.bornDecade}</span>
            </div>

            <div className="ab-host-sec__bio-item">
              <span className="ab-host-sec__bio-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{ display: 'block', height: '100%', width: '100%', fill: 'currentColor' }}
                >
                  <path d="m31.47 10.12-15-8a1 1 0 0 0-.94 0l-15 8a1 1 0 0 0 0 1.76L4 13.73V23a1 1 0 0 0 .52.88l11 6a1 1 0 0 0 .96 0l11-6A1 1 0 0 0 28 23v-9.27l2-1.06V23h2V11a1 1 0 0 0-.53-.88zM26 22.4l-10 5.45-10-5.45V14.8l9.53 5.08a1 1 0 0 0 .94 0L26 14.8v7.6zm-10-4.54L3.12 11 16 4.13 28.88 11 16 17.87z"></path>
                </svg>
              </span>
              <span>{hostData.school}</span>
            </div>

          </div>
        </div>

        <div className="ab-host-sec__right-col">
          <div className="ab-host-sec__section-label">Co-Hosts</div>

          <div className="ab-host-sec__cohost-grid">
            {hostData.coHosts.map((cohost, index) => (
              <div key={index} className="ab-host-sec__cohost-card">
                {cohost.type === "img" ? (
                  <img
                    src={cohost.src}
                    alt={cohost.name}
                    className="ab-host-sec__cohost-avatar"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = cohost.fb;
                    }}
                  />
                ) : (
                  <div
                    className="ab-host-sec__cohost-monogram"
                    style={{ backgroundColor: cohost.bg, color: cohost.color }}
                  >
                    {cohost.letter}
                  </div>
                )}
                <span className="ab-host-sec__cohost-name">{cohost.name}</span>
              </div>
            ))}
          </div>

          <div className="ab-host-sec__section-label">Host details</div>
          <div className="ab-host-sec__metrics-copy">
            <div>Response rate: {hostData.responseRate}</div>
            <div style={{ marginTop: '4px' }}>Responds {hostData.responseTime}</div>
          </div>

          <button className="ab-host-sec__msg-btn" type="button">
            Message host
          </button>

          <div className="ab-host-sec__protection-notice">
            <span className="ab-host-sec__shield-icon">
              <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                <path d="m16 .8.56.37C20.4 3.73 24.2 5 28 5h1v12.5C29 25.57 23.21 31 16 31S3 25.57 3 17.5V5h1c3.8 0 7.6-1.27 11.45-3.83L16 .8zm-1 3a22.2 22.2 0 0 1-9.65 3.15L5 6.97V17.5c0 6.56 4.35 11 10 11.46zm2 0v25.16c5.65-.47 10-4.9 10-11.46V6.97l-.35-.02A22.2 22.2 0 0 1 17 3.8z" fill="currentColor"></path>
              </svg>
            </span>
            <span>
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}