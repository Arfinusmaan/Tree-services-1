import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS, SERVICES } from '../config';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const isServicesActive = location.pathname === '/services' || SERVICES.some(s => s.path === location.pathname);

  const navClass = `nav ${scrolled ? 'nav--scrolled' : 'nav--top'}`;

  return (
    <>
      <nav className={navClass}>
        <div className="container nav__inner">
          <Link to="/" className="nav__wordmark">
            {BUSINESS.name}
          </Link>

          <ul className="nav__links">
            <li>
              <Link to="/" className={`nav__link ${location.pathname === '/' ? 'nav__link--active' : ''}`}>
                Home
              </Link>
            </li>

            {/* Services Dropdown */}
            <li
              className="nav__dropdown-wrapper"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link
                  to="/services"
                  className={`nav__link ${isServicesActive ? 'nav__link--active' : ''}`}
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  aria-expanded={servicesDropdownOpen}
                  aria-label="Toggle services menu"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '2px',
                  }}
                >
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: servicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    <path d="M1 1L5 5L9 1" />
                  </svg>
                </button>
              </div>

              {/* Dropdown Menu Panel */}
              <div
                className={`nav__dropdown-menu ${servicesDropdownOpen ? 'nav__dropdown-menu--open' : ''}`}
              >
                <div style={{ padding: '8px 0 12px 0', borderBottom: '1px solid var(--color-border)', marginBottom: '8px' }}>
                  <Link
                    to="/services"
                    className="nav__dropdown-item"
                    style={{ fontWeight: 700, color: 'var(--color-forest)' }}
                  >
                    All Services Overview →
                  </Link>
                </div>
                {SERVICES.map(svc => (
                  <Link
                    key={svc.id}
                    to={svc.path}
                    className={`nav__dropdown-item ${location.pathname === svc.path ? 'nav__dropdown-item--active' : ''}`}
                  >
                    <div>
                      <div style={{ fontWeight: 600 }}>{svc.title}</div>
                      <div style={{ fontSize: '12px', color: 'var(--color-charcoal-muted)', marginTop: '2px' }}>
                        {svc.shortDesc.slice(0, 58)}...
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link to="/gallery" className={`nav__link ${location.pathname === '/gallery' ? 'nav__link--active' : ''}`}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/about" className={`nav__link ${location.pathname === '/about' ? 'nav__link--active' : ''}`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/service-areas" className={`nav__link ${location.pathname === '/service-areas' ? 'nav__link--active' : ''}`}>
                Areas
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`nav__link ${location.pathname === '/contact' ? 'nav__link--active' : ''}`}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/contact" className="btn btn--primary nav__cta">
                Get Estimate
              </Link>
            </li>
          </ul>

          <button
            className="nav__burger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Backdrop Overlay */}
      <div
        className={`nav__mobile-backdrop ${mobileOpen ? 'nav__mobile-backdrop--open' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <aside className={`nav__mobile ${mobileOpen ? 'nav__mobile--open' : ''}`} aria-label="Mobile Navigation">
        <div className="nav__mobile-header">
          <Link to="/" className="nav__mobile-brand" onClick={() => setMobileOpen(false)}>
            {BUSINESS.name}
          </Link>
          <button
            className="nav__mobile-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="nav__mobile-links">
          <Link
            to="/"
            className={`nav__mobile-link ${location.pathname === '/' ? 'nav__mobile-link--active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            <span>Home</span>
            <span style={{ fontSize: '14px', color: 'var(--color-charcoal-muted)' }}>01</span>
          </Link>

          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 0',
                cursor: 'pointer',
              }}
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            >
              <Link
                to="/services"
                className={`nav__mobile-link ${isServicesActive ? 'nav__mobile-link--active' : ''}`}
                onClick={() => {
                  setMobileOpen(false);
                }}
                style={{ margin: 0, padding: 0 }}
              >
                <span>Services</span>
              </Link>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setServicesDropdownOpen(!servicesDropdownOpen);
                }}
                aria-expanded={servicesDropdownOpen}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  color: 'var(--color-forest)',
                  padding: '4px 8px',
                }}
              >
                {servicesDropdownOpen ? '−' : '+'}
              </button>
            </div>

            {servicesDropdownOpen && (
              <div className="nav__mobile-services-list">
                <Link
                  to="/services"
                  className="nav__mobile-service-item"
                  onClick={() => setMobileOpen(false)}
                  style={{ fontWeight: 700, color: 'var(--color-forest)' }}
                >
                  → All Services Catalog
                </Link>
                {SERVICES.map(svc => (
                  <Link
                    key={svc.id}
                    to={svc.path}
                    className="nav__mobile-service-item"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>•</span>
                    <span>{svc.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/gallery"
            className={`nav__mobile-link ${location.pathname === '/gallery' ? 'nav__mobile-link--active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            <span>Project Gallery</span>
            <span style={{ fontSize: '14px', color: 'var(--color-charcoal-muted)' }}>03</span>
          </Link>
          <Link
            to="/about"
            className={`nav__mobile-link ${location.pathname === '/about' ? 'nav__mobile-link--active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            <span>About Us</span>
            <span style={{ fontSize: '14px', color: 'var(--color-charcoal-muted)' }}>04</span>
          </Link>
          <Link
            to="/service-areas"
            className={`nav__mobile-link ${location.pathname === '/service-areas' ? 'nav__mobile-link--active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            <span>Service Areas</span>
            <span style={{ fontSize: '14px', color: 'var(--color-charcoal-muted)' }}>05</span>
          </Link>
          <Link
            to="/contact"
            className={`nav__mobile-link ${location.pathname === '/contact' ? 'nav__mobile-link--active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            <span>Contact & Estimate</span>
            <span style={{ fontSize: '14px', color: 'var(--color-charcoal-muted)' }}>06</span>
          </Link>
        </nav>

        <div className="nav__mobile-footer">
          <a href="tel:5550000000" className="nav__mobile-phone">
            <span>📞</span>
            <span>{BUSINESS.phone}</span>
          </a>
          <Link
            to="/contact"
            className="btn-modern btn-modern--forest"
            onClick={() => setMobileOpen(false)}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <span>Request Written Proposal</span>
            <span>→</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
