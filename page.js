// Layout only: the words, links and lists all come from content.js.
import Icon, { Sprig } from './components/Icon';
import { site, hero, about, why, journey, education, travel, focus, approach, research, knowledge, recognition, careWell, consultation, contact } from './content';

const pad = (i) => String(i + 1).padStart(2, '0');
const roman = ['I', 'II', 'III', 'IV', 'V', 'VI'];
// ﷺ isn't in the Latin fonts; its own span keeps the fallback Arabic glyph light and legible.
const honorific = (text) => text.split('ﷺ').flatMap((part, i) => (i ? [<span key={i} className="honorific">{'ﷺ'}</span>, part] : [part]));

function Heading({ n, label, title, lead }) {
  return (
    <div className="heading reveal">
      <p className="eyebrow"><b>{n}</b><span>{label}</span></p>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

function Note({ children }) {
  return <p className="note reveal"><Icon name="info" size={18} />{children}</p>;
}

export default function Home() {
  return (
    <>
      <section className="hero dark">
        <div className="wrap hero-grid">
          <div>
            <p className="kicker rise"><i aria-hidden="true" />{hero.kicker}</p>
            <h1 className="rise d1">{hero.title} <em>{hero.accent}</em></h1>
            <p className="lead rise d2">{hero.lead}</p>
            <ul className="hero-tags rise d3">{hero.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            <div className="actions rise d4">
              <a className="btn btn-gold" href={site.whatsapp} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={20} /> Message on WhatsApp</a>
              <a className="btn btn-ghost" href="#journey">View the journey <Icon name="arrow-down" size={18} /></a>
            </div>
          </div>

          <div className={site.photo ? 'hero-art has-photo rise d2' : 'hero-art rise d2'}>
            <div className="arch">
              <div className="arch-inner">
                {site.photo ? <img className="arch-photo" src={site.photo[0]} alt={site.photo[1]} /> : (
                  <>
                    <Sprig className="arch-sprig" />
                    <span className="arch-mark" aria-hidden="true">{site.initials}</span>
                    <span className="arch-caption" aria-hidden="true">{site.clinic} · {site.city}</span>
                  </>
                )}
              </div>
            </div>
            <div className="float" aria-hidden="true">
              <span className="float-ico"><Icon name={hero.badge[2]} size={20} /></span>
              <span><small>{hero.badge[0]}</small><strong>{hero.badge[1]}</strong></span>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap split">
          <div>
            <Heading n="01" label={about.label} title={about.title} />
            {about.photo && <figure className="frame reveal"><img src={about.photo[0]} alt={about.photo[1]} loading="lazy" /></figure>}
          </div>
          <div className="prose reveal">
            <p className="intro">{about.lead}</p>
            {about.text.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </section>

      <section id="why" className="alt">
        <div className="wrap">
          <Heading n="02" label={why.label} title={why.title} />
          <ol className="reasons">
            {why.text.map((p, i) => <li key={p} className="reveal"><span>{roman[i]}</span><p>{p}</p></li>)}
          </ol>
        </div>
      </section>

      <section id="journey">
        <div className="wrap split">
          <div className="sticky"><Heading n="03" label={journey.label} title={journey.title} /></div>
          <ol className="timeline">
            {journey.steps.map((s, i) => <li key={s} className="reveal"><span className="step">{pad(i)}</span><p>{s}</p></li>)}
          </ol>
        </div>
      </section>

      <section id="education" className="dark">
        <div className="wrap">
          <Heading n="04" label={education.label} title={education.title} />
          <div className="edu-grid">
            <ul className="degrees">
              {education.degrees.map(([d, u, y]) => (
                <li key={d} className="reveal"><strong>{d}</strong><span>{u}</span><span className="year">{y}</span></li>
              ))}
            </ul>
            <div className="teach reveal">
              <span className="ico-badge"><Icon name="graduation-cap" size={26} /></span>
              <h3>{education.teaching.title}</h3>
              <p>{education.teaching.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="international">
        <div className="wrap">
          <Heading n="05" label={travel.label} title={travel.title} />
          <ul className="visits">
            {travel.visits.map(([c, d, y]) => (
              <li key={c} className="card reveal">
                <div className="visit-top"><span className="ico-ring"><Icon name="plane" size={20} /></span><span className="visit-year">{y}</span></div>
                <h3>{c}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ul>
          <div className="also reveal">
            <p><Icon name="globe" size={18} />{travel.alsoLabel}</p>
            <ul className="chips">{travel.also.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        </div>
      </section>

      <section id="focus" className="alt">
        <div className="wrap">
          <Heading n="06" label={focus.label} title={focus.title} lead={focus.lead} />
          <ul className="focus-grid">
            {focus.areas.map((f) => <li key={f} className="reveal"><span className="leaf"><Icon name="leaf" size={22} /></span><h3>{f}</h3></li>)}
          </ul>
          <Note>{focus.note}</Note>
        </div>
      </section>

      <section id="approach" className="dark approach">
        <div className="wrap reveal">
          <Sprig className="approach-sprig" />
          <p className="quote">{approach.quote.split(/(?<=\.)\s+/).map((line) => <span key={line}>{line}</span>)}</p>
          <p className="approach-text">{approach.text}</p>
        </div>
      </section>

      <section id="research">
        <div className="wrap">
          <Heading n="07" label={research.label} title={research.title} lead={research.lead} />
          <ul className="cards cards-4">
            {research.topics.map(([t, d], i) => (
              <li key={t} className="card reveal"><span className="num">{pad(i)}</span><h3>{honorific(t)}</h3><p>{d}</p></li>
            ))}
          </ul>
          <Note>{research.note}</Note>
        </div>
      </section>

      <section id="knowledge" className="alt">
        <div className="wrap">
          <Heading n="08" label={knowledge.label} title={knowledge.title} />
          <ul className="tiles">
            {knowledge.topics.map(([t, icon]) => (
              <li key={t} className="tile reveal"><span className="tile-ico"><Icon name={icon} size={22} /></span><h3>{t}</h3></li>
            ))}
          </ul>
        </div>
      </section>

      <section id="recognition">
        <div className="wrap split">
          <Heading n="09" label={recognition.label} title={recognition.title} />
          <div className="reveal">
            <div className="award">
              <span className="award-ico"><Icon name="award" size={30} /></span>
              <div><h3>{recognition.award.title}</h3><p>{recognition.award.text}</p></div>
            </div>
            <p className="award-text">{recognition.text}</p>
          </div>
        </div>
      </section>

      <section id="carewell" className="dark carewell">
        <div className="wrap">
          <div className="carewell-top">
            <Heading n="10" label={careWell.label} title={careWell.title} lead={careWell.lead} />
            {careWell.photo && <figure className="frame reveal"><img src={careWell.photo[0]} alt={careWell.photo[1]} loading="lazy" /></figure>}
          </div>
          <ul className="cards cards-3">
            {careWell.pillars.map(([t, d, icon]) => (
              <li key={t} className="card reveal"><span className="ico-ring"><Icon name={icon} size={22} /></span><h3>{t}</h3><p>{d}</p></li>
            ))}
          </ul>
          {careWell.url && (
            <a className="btn btn-gold" href={careWell.url} target="_blank" rel="noopener noreferrer">{careWell.cta} <Icon name="arrow-up-right" size={18} /></a>
          )}
        </div>
      </section>

      <section id="consultation">
        <div className="wrap">
          <div className="callout reveal">
            <span className="callout-ico"><Icon name="globe" size={42} /></span>
            <Heading n="11" label={consultation.label} title={consultation.title} lead={consultation.text} />
          </div>
        </div>
      </section>

      <section id="contact" className="dark contact">
        <div className="wrap split">
          <div>
            <Heading n="12" label={contact.label} title={contact.title} lead={contact.focus} />
            <div className="actions reveal">
              <a className="btn btn-gold" href={site.whatsapp} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={20} /> Message on WhatsApp</a>
              <a className="btn btn-ghost" href={site.phoneHref}><Icon name="phone" size={18} /> Call now</a>
            </div>
          </div>
          <ul className="contact-card reveal">
            <li>
              <span className="ico-ring"><Icon name="map-pin" size={20} /></span>
              <div>
                <small>Clinic</small>
                <strong>{site.clinic}</strong>
                <p>{site.address.join(', ')}</p>
                <a className="text-link" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions <Icon name="arrow-up-right" size={16} /></a>
              </div>
            </li>
            <li>
              <span className="ico-ring"><Icon name="whatsapp" size={20} /></span>
              <div><small>WhatsApp</small><a href={site.whatsapp} target="_blank" rel="noopener noreferrer">{site.phone}</a></div>
            </li>
            <li>
              <span className="ico-ring"><Icon name="phone" size={20} /></span>
              <div><small>Phone</small><a href={site.phoneHref}>{site.phone}</a></div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
