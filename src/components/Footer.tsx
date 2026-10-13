import { Link } from 'react-router-dom';
import { BUSINESS, SERVICES } from '../config';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__wordmark">{BUSINESS.name}</div>
            <p className="footer__desc">
              Professional tree care services for residential and commercial properties. 
              Safe, thorough, and considerate of your property from start to finish.
            </p>
            <p className="footer__desc" style={{ marginTop: '16px' }}>
              <strong style={{ color: 'rgba(242,240,233,0.85)' }}>{BUSINESS.phone}</strong>
              <br />
              {BUSINESS.email}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer__heading">Services</h4>
            <ul className="footer__links">
              {SERVICES.map(s => (
                <li key={s.id}>
                  <Link to={s.path}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="footer__heading">Company</h4>
            <ul className="footer__links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Project Gallery</Link></li>
              <li><Link to="/service-areas">Service Areas</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer__heading">Get In Touch</h4>
            <ul className="footer__links">
              <li>
                <a href={`tel:${BUSINESS.phone.replace(/[^+\d]/g, '')}`}>
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
              </li>
              <li style={{ marginTop: '16px' }}>
                <Link to="/contact" className="btn btn--outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff', fontSize: '0.8125rem' }}>
                  Request Estimate
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </span>
          <span className="footer__copy">
            {BUSINESS.address}
          </span>
        </div>
      </div>
    </footer>
  );
}
