

import { ChevronDown } from 'lucide-react';
import { asset } from '../utils/asset';

export default function BookingSidebar({ listing, onReserveClick }) {
  return (
    <aside className="ab-booking-sidebar">
      <div className="ab-booking-sidebar__sticky-wrapper" id="bookingSticky">

        <div className="ab-discount-banner">
          <img
            src={asset("assets/image/discount.svg")}
            alt=""
            aria-hidden="true"
            className="ab-discount-banner__tag-icon"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = asset("assets/images/ui/discount.svg");
            }}
          />

          <div className="ab-discount-banner__text-wrap">
            <div className="ab-discount-banner__title">Get 10% off your next stay.</div>
            <a href="#terms" className="ab-discount-banner__terms-link">Terms apply</a>
          </div>

          <button className="ab-discount-banner__claim-btn" type="button">
            Claim
          </button>
        </div>

        <div className="ab-reservation-card">
          <div className="ab-reservation-card__header">
            <span className="ab-reservation-card__price-total">{listing.totalPrice}</span>
            <span className="ab-reservation-card__price-duration">for {listing.totalNights} nights</span>
          </div>

          <div className="ab-reservation-card__inputs-shell">
            <div className="ab-reservation-card__dates-row">
              <div className="ab-reservation-card__cell">
                <div className="ab-reservation-card__cell-label">CHECK-IN</div>
                <div className="ab-reservation-card__cell-value">{listing.checkIn}</div>
              </div>
              <div className="ab-reservation-card__cell ab-reservation-card__cell--border-left">
                <div className="ab-reservation-card__cell-label">CHECKOUT</div>
                <div className="ab-reservation-card__cell-value">{listing.checkOut}</div>
              </div>
            </div>

            <div className="ab-reservation-card__guest-row">
              <div>
                <div className="ab-reservation-card__cell-label">GUESTS</div>
                <div className="ab-reservation-card__cell-value">{listing.guests}</div>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>

          <div className="ab-reservation-card__cancellation-badge">
            Free cancellation before <b>{listing.freeCancellationDate}</b>
          </div>

          <button className="ab-reservation-card__submit-btn" type="button" onClick={onReserveClick}>
            Reserve
          </button>
          <div className="ab-reservation-card__disclaimer">
            You won't be charged yet
          </div>
        </div>

        {/* Report Listing */}
        <div className="ab-report-link">
          <a href="#report" className="ab-report-link__anchor">
            <span className="ab-report-link__icon">
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <path d="m7.5011 1c.5272 0 .9591.40794.99725.92537l.00275.07463v1h5.5c.31265 0 .5435.281645.4935.581075l-.01275.056285-.96125 3.36264.96125 3.36265c.08055.2818-.0967.5625-.36775.62465l-.0554.00945-.0576.00325h-5.5c-.5272 0-.9591-.40795-.99725-.92535l-.00275-.07465v-1h-5v6h-1v-14zm1 3h-1v4h1z" />
              </svg>
            </span>
            <span className="ab-report-link__text">Report this listing</span>
          </a>
        </div>

      </div>
    </aside>
  );
}