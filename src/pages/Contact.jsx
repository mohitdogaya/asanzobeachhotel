import { Mail, MapPin, Phone, Waves } from "lucide-react";
import { hotel } from "../data/hotelData";
import { directionsUrl } from "../utils/constants";
import Eyebrow from "../components/common/Eyebrow";
import PageIntro from "../components/common/PageIntro";
export default function Contact() {
  return (
    <>
      <PageIntro
        number="05"
        title={
          <>
            We’re here
            <br />
            <em>to help.</em>
          </>
        }
        intro="For room enquiries and questions about your stay, contact the hotel reception directly."
      />
      <section className="contact-layout section-pad">
        <div className="contact-details">
          <div className="contact-detail">
            <span className="contact-icon">
              <MapPin />
            </span>
            <div>
              <h2 className="contact-label">Visit</h2>
              <p>{hotel.address}</p>
              <a
                className="text-link"
                href={directionsUrl(hotel.address)}
                target="_blank"
                rel="noreferrer"
              >
                Get directions ↗
              </a>
            </div>
          </div>
          <div className="contact-detail">
            <span className="contact-icon">
              <Phone />
            </span>
            <div>
              <h2 className="contact-label">Call reception</h2>
              <a href={`tel:${hotel.phoneLink}`}>{hotel.phone}</a>
            </div>
          </div>
          <div className="contact-detail">
            <span className="contact-icon">
              <Mail />
            </span>
            <div>
              <h2 className="contact-label">Email</h2>
              <a href={`mailto:${hotel.email}`}>{hotel.email}</a>
            </div>
          </div>
          <div className="contact-distance">
            <Waves />
            <span>{hotel.beachDistance}</span>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            title="Map showing Asanzo Beach Hotel in Pattaya"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(hotel.address)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={directionsUrl(hotel.address)}
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps ↗
          </a>
        </div>
      </section>
      <section className="contact-bottom">
        <Eyebrow>No online reservations</Eyebrow>
        <p>
          Room prices are informational. To ask about a stay, please contact
          reception directly.
        </p>
        <a href={`tel:${hotel.phoneLink}`} className="button">
          Call reception <Phone size={16} />
        </a>
      </section>
    </>
  );
}
