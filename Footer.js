import Brand from './Brand';
import Icon from './Icon';
import { site, nav, socials, approach } from '../content';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <a className="brand" href="/#top"><Brand site={site} /></a>
          <p className="tagline">{approach.quote}</p>
          <p className="follow">Follow Care Well</p>
          <ul className="social">
            {socials.map(([label, href, icon]) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Care Well on ${label}`} title={label}>
                  <Icon name={icon} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2>Explore</h2>
          <ul className="footer-links">
            {nav.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}
          </ul>
        </nav>

        <div>
          <h2>Visit</h2>
          <address>
            <strong>{site.clinic}</strong>
            {site.address.map((line) => <span key={line}>{line}</span>)}
          </address>
          <a className="text-link" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
            Get directions <Icon name="arrow-up-right" size={16} />
          </a>
        </div>

        <div>
          <h2>Contact</h2>
          <ul className="footer-contact">
            <li><a href={site.whatsapp} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={18} /> WhatsApp {site.phone}</a></li>
            <li><a href={site.phoneHref}><Icon name="phone" size={18} /> Call {site.phone}</a></li>
          </ul>
        </div>
      </div>

      <div className="wrap">
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {site.name} · {site.clinic}, {site.city}</p>
          <p>{site.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
