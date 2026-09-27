

import { useEffect, useState } from 'react';
import Amenities from './components/Amenities';
import BookingSidebar from './components/BookingSidebar';
import Calendar from './components/Calendar';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Host from './components/Host';
import Location from './components/Location';
import NearbyStays from './components/NearbyStays';
import Overview from './components/Overview';
import PhotoTour from './components/PhotoTour';
import Reviews from './components/Reviews';
import ThingsToKnow from './components/ThingsToKnow';
import TitleBar from './components/TitleBar';
import { listingData, tourSectionsData } from './data/listing';

export default function App() {
  const [photoTourOpen, setPhotoTourOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [activeTab, setActiveTab] = useState('photos');

  
  const showToast = (msg) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 2500);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  
  const handleToggleSave = () => {
    const nextSaved = !isSaved;
    setIsSaved(nextSaved);
    showToast(nextSaved ? 'Saved to wishlist' : 'Removed from wishlist');
  };

  
  const handleShare = () => {
    showToast('Share options');
  };

  
  const handleReserve = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    showToast("You won't be charged yet");

    const el = document.getElementById('bookingSticky');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  

  
  
  

  
  useEffect(() => {
    const handleScroll = () => {
      const photosSection = document.getElementById('photos');
      if (photosSection) {
        const photosBottom = photosSection.getBoundingClientRect().bottom;
        
        setShowStickyNav(photosBottom < 80);
      } else {
        setShowStickyNav(window.scrollY > 700);
      }

      
      const sections = ['photos', 'amenities', 'reviews', 'location'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveTab(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTab = (id) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <Header onReserveClick={handleReserve} />

      <div className={`ab-subnav-bar ${showStickyNav ? 'ab-subnav-bar--visible' : ''}`}>
        <div className="ab-subnav-bar__container">
          <nav className="ab-subnav-bar__tabs" aria-label="Section shortcuts">
            <button
              type="button"
              className={`ab-subnav-bar__tab ${activeTab === 'photos' ? 'ab-subnav-bar__tab--active' : ''}`}
              onClick={() => scrollToTab('photos')}
            >
              Photos
            </button>
            <button
              type="button"
              className={`ab-subnav-bar__tab ${activeTab === 'amenities' ? 'ab-subnav-bar__tab--active' : ''}`}
              onClick={() => scrollToTab('amenities')}
            >
              Amenities
            </button>
            <button
              type="button"
              className={`ab-subnav-bar__tab ${activeTab === 'reviews' ? 'ab-subnav-bar__tab--active' : ''}`}
              onClick={() => scrollToTab('reviews')}
            >
              Reviews
            </button>
            <button
              type="button"
              className={`ab-subnav-bar__tab ${activeTab === 'location' ? 'ab-subnav-bar__tab--active' : ''}`}
              onClick={() => scrollToTab('location')}
            >
              Location
            </button>
          </nav>

          <div className="ab-subnav-bar__action-group">
            <div className="ab-subnav-bar__price-summary">
              <span className="ab-subnav-bar__price-bold">{listingData.totalPrice || '₹28,499'}</span>
              <span className="ab-subnav-bar__nights-text"> for {listingData.totalNights || 5} nights</span>
              <div className="ab-subnav-bar__rating-badge">★ {listingData.rating || '4.95'} · {listingData.reviewCount || 19} reviews</div>
            </div>
            <button
              type="button"
              className="ab-subnav-bar__reserve-btn"
              onClick={handleReserve}
            >
              Reserve
            </button>
          </div>
        </div>
      </div>

      <main className="app-wrapper">
        <section id="photos">
          <TitleBar
            title={listingData.title}
            isSaved={isSaved}
            onToggleSave={handleToggleSave}
            onShare={handleShare}
          />
          <Gallery
            photos={listingData.photos}
            onOpenPhotoTour={() => setPhotoTourOpen(true)}
          />
        </section>
        <div className="app-two-column">
          <div className="app-left-content">
            <Overview listing={listingData} />
            <div id="amenities">
              <Amenities onOpenAll={() => setAmenitiesModalOpen(true)} />
            </div>
            <div id="calendar">
              <Calendar />
            </div>
          </div>

          <aside className="app-sidebar-track" id="bookingSticky">
            <div className="app-sidebar-sticky-box">
              <BookingSidebar listing={listingData} onReserveClick={handleReserve} />
            </div>
          </aside>
        </div>

        <hr className="ab-main-divider" />

        <div className="ab-below-content">
          <div id="reviews">
            <Reviews onOpenAll={() => setReviewsModalOpen(true)} />
          </div>
          <div id="location">
            <Location />
          </div>
          <Host host={listingData.host} />
          <ThingsToKnow />
          <NearbyStays />
        </div>
      </main>

      <div className={`ab-pill-toast ${toastMessage ? 'ab-pill-toast--visible' : ''}`} role="status">
        {toastMessage}
      </div>

      <PhotoTour
        isOpen={photoTourOpen}
        onClose={() => setPhotoTourOpen(false)}
        tourSections={tourSectionsData}
      />
    </div>
  );
}