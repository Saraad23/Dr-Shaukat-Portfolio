'use client';

import { useEffect, useRef, useState } from 'react';
import Brand from './Brand';
import Icon from './Icon';

export default function Header({ site, nav }) {
  const menu = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  // Darken the bar once the page scrolls, and highlight the last section whose top has passed 40% of the screen.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 8);
      let current = '';
      for (const [, href] of nav) {
        const section = document.getElementById(href.split('#')[1]);
        if (section && section.getBoundingClientRect().top < window.innerHeight * 0.4) current = href;
      }
      setActive(current);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [nav]);

  // A modal <dialog> gives focus trapping, Escape-to-close and an inert page behind it for free.
  const openMenu = () => menu.current?.showModal();
  const closeMenu = () => menu.current?.close();

  return (
    <header className={scrolled ? 'site-header scrolled' : 'site-header'}>
      <div className="wrap bar">
        <a className="brand" href="/#top"><Brand site={site} /></a>
        <nav className="nav-links" aria-label="Main">
          {nav.map(([label, href]) => (
            <a key={href} href={href} className={active === href ? 'active' : undefined}>{label}</a>
          ))}
        </nav>
        <a className="btn btn-gold btn-sm header-cta" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
          <Icon name="whatsapp" size={18} /> WhatsApp
        </a>
        <button className="menu-btn" type="button" aria-label="Open menu" aria-haspopup="dialog" onClick={openMenu}>
          <Icon name="menu" size={22} />
        </button>
      </div>

      <dialog ref={menu} className="menu" aria-label="Menu">
        <div className="wrap menu-top">
          <span className="brand"><Brand site={site} /></span>
          <button className="menu-btn" type="button" aria-label="Close menu" onClick={closeMenu}>
            <Icon name="close" size={22} />
          </button>
        </div>
        <nav className="wrap menu-links" aria-label="Sections">
          <ol>
            {nav.map(([label, href], i) => (
              <li key={href}><a href={href} onClick={closeMenu}><span>{String(i + 1).padStart(2, '0')}</span>{label}</a></li>
            ))}
          </ol>
        </nav>
        <div className="wrap menu-foot">
          <a className="btn btn-gold" href={site.whatsapp} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={20} /> Message on WhatsApp</a>
          <a className="btn btn-ghost" href={site.phoneHref}><Icon name="phone" size={18} /> Call {site.phone}</a>
        </div>
      </dialog>
    </header>
  );
}
