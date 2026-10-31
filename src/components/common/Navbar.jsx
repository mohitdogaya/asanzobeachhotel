import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "../../data/navigationData";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }
    const updateScrollState = () => setScrolled(window.scrollY > 64);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, [isHome]);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header
      className={`header ${isHome ? `header-home ${scrolled ? "is-scrolled" : ""}` : ""}`}
    >
      <div className="nav-pill">
        <Link to="/" className="brand" aria-label="Asanzo Beach Hotel home">
          <img src="/images/asanzo-logo.webp" alt="Asanzo Beach Hotel" />
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-controls="primary-navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={open ? "nav nav-open" : "nav"}
        >
          {navigation
            .filter(([, path]) => path !== "/contact")
            .map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {label}
              </NavLink>
            ))}
          <Link
            className="nav-contact mobile-contact"
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Contact <ArrowUpRight size={14} />
          </Link>
        </nav>
        <div className="nav-actions">
          <Link className="nav-contact desktop-contact" to="/contact">
            Contact <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
      {open && (
        <button
          className="menu-backdrop"
          aria-label="Close navigation"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
