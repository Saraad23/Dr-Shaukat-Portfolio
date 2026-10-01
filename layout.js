import './globals.css';
import { Cormorant_Garamond, Hanken_Grotesk } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import Icon from './components/Icon';
import { site, nav } from './content';

const display = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600'], style: ['normal', 'italic'], variable: '--font-display' });
const body = Hanken_Grotesk({ subsets: ['latin'], variable: '--font-body' });

const title = 'Dr. Shaukat Hussain | Consultant Physician (Homeo)';
const description = 'Research-minded Consultant Physician (Homeo) focused on chronic case consultation, health education and clinical learning. Care Well Clinic, Lahore.';

export const metadata = {
  title,
  description,
  openGraph: { title, description, siteName: site.name, locale: 'en_PK', type: 'website' },
};

export const viewport = { themeColor: '#14352A' };

export default function RootLayout({ children }) {
  return (
    // The font classes must sit on <html>: globals.css reads their variables in :root.
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header site={site} nav={nav} />
        <main id="main">{children}</main>
        <Footer />
        <a className="wa-float" href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          <Icon name="whatsapp" size={24} /><span>WhatsApp</span>
        </a>
      </body>
    </html>
  );
}
