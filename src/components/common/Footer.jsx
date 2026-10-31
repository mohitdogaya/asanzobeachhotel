import { Link } from "react-router-dom";
import { hotel } from "../../data/hotelData";

const exploreLinks = [
  ["Rooms", "/rooms"],
  ["About", "/about"],
  ["Amenities", "/amenities"],
  ["Gallery", "/gallery"],
];

export default function Footer() {
  return (
    <footer className="footer footer-ref">
      <div className="footer-ref-layout">
        <div className="footer-ref-intro">
          <Link to="/" className="footer-ref-name">
            Asanzo
          </Link>
          <span>Beach Hotel</span>
          <p>
            A considered Pattaya stay with space to settle in and slow down.
          </p>
          <Link to="/contact" className="footer-ref-cta">
            Contact reception <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="footer-ref-cards">
          <section className="footer-ref-card">
            <h2>Visit</h2>
            <div>
              <p>{hotel.address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.address)}`}
                target="_blank"
                rel="noreferrer"
              >
                Directions ↗
              </a>
            </div>
          </section>
          <section className="footer-ref-card">
            <h2>Contact</h2>
            <div>
              <a href={`tel:${hotel.phoneLink}`}>{hotel.phone}</a>
              <a href={`mailto:${hotel.email}`}>{hotel.email}</a>
              <Link to="/contact">Reception details ↗</Link>
            </div>
          </section>
          <nav className="footer-ref-card" aria-label="Explore">
            <h2>Explore</h2>
            <div>
              {exploreLinks.map(([label, path]) => (
                <Link key={path} to={path}>
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
      <div className="footer-ref-signature">
        <div className="footer-ref-wordmark" aria-hidden="true">
          Asanzo
        </div>
      </div>
      <div className="footer-ref-bottom">
        © {new Date().getFullYear()} Asanzo Beach Hotel. Considered stays,
        Pattaya.
      </div>
    </footer>
  );
}
