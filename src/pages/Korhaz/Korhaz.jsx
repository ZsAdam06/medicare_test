import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  claim,
  contact,
  cta,  doctors,
  footer,
  hero,
  heroVideo,
  journey,
  media,
  nav,
  packages,
  quote,
  specialties,
  ticker,
} from '../../data/korhaz'
import BookingBar from './BookingBar'
import ScrollVideo from './ScrollVideo'
import styles from './Korhaz.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.inner} ${styles.headerInner}`}>
        <a href="#top" className={styles.logo}>
          <img src={media.logoWhite} alt="Medicare Magánkórház és Klinika" width="196" height="29" />
        </a>
        <nav className={styles.nav} aria-label="Fő navigáció">
          <ul>
            {nav.map((item) => (
              <li key={item.label}>
                <a href={item.hash}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.headerActions}>
          <a className={styles.sos} href={`tel:${contact.emergency.replace(/\s/g, '')}`}>
            <span className={styles.sosDot} aria-hidden="true" />
            Sürgősségi 0–24
          </a>
          <Link className={styles.btnMint} to="/korhaz/idopontok">
            Időpontfoglalás
          </Link>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    // Csökkentett mozgásigény esetén megáll a videó, és a poszterkép marad.
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => {
      if (query.matches) video.pause()
      else video.play().catch(() => {})
    }
    apply()
    query.addEventListener('change', apply)
    return () => query.removeEventListener('change', apply)
  }, [])

  return (
    <section className={styles.hero} aria-labelledby="korhaz-title">
      <video
        ref={videoRef}
        className={styles.heroVideo}
        poster={media.heroPoster}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className={styles.heroShade} aria-hidden="true" />

      <Header />

      <div className={`${styles.inner} ${styles.heroInner}`}>
        <p className={styles.eyebrowMint}>{hero.eyebrow}</p>
        <h1 id="korhaz-title" className={styles.heroTitle}>
          {hero.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className={styles.heroLead}>{hero.lead}</p>

        <BookingBar
          suggestions={hero.searchSuggestions}
          specialties={hero.specialties}
          slots={hero.slots}
        />

      </div>
    </section>
  )
}

function Ticker() {
  const row = (
    <ul className={styles.tickerRow}>
      {ticker.map((item) => (
        <li key={item}>
          {item}
          <span className={styles.tickerDot} aria-hidden="true" />
        </li>
      ))}
    </ul>
  )

  return (
    <div className={styles.ticker}>
      {row}
      <div aria-hidden="true">{row}</div>
    </div>
  )
}

export default function Korhaz() {
  const [openDoctor, setOpenDoctor] = useState(null)

  return (
    <div className={styles.page} id="top">
      <main id="fotartalom">
        <Hero />
        <Ticker />

        <section className={styles.claim}>
          <div className={styles.inner}>
            <div className={styles.claimTop}>
              <h2 className={styles.display}>{claim.title}</h2>
              <p className={styles.claimText}>{claim.text}</p>
            </div>
            <dl className={styles.stats}>
              {claim.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className={styles.statValue}>{stat.value}</dt>
                  <dd className={styles.statLabel}>{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="szakteruletek" className={styles.specialties}>
          <div className={`${styles.inner} ${styles.specialtiesInner}`}>
            <div className={styles.specialtiesAside}>
              <p className={styles.eyebrowDark}>{specialties.eyebrow}</p>
              <h2 className={styles.display}>{specialties.title}</h2>
              <p className={styles.bodyMuted}>{specialties.text}</p>
              <img
                className={styles.specialtiesPhoto}
                src={media.konzultacio}
                alt="Orvos egy leletet mutat a páciensnek a rendelőben"
                loading="lazy"
              />
            </div>
            <ul className={styles.specialtyList}>
              {specialties.items.map((item) => (
                <li key={item.n}>
                  <a href="/korhaz/idopontok">
                    <span className={styles.specialtyNum}>{item.n}</span>
                    <span className={styles.specialtyBody}>
                      <span className={styles.specialtyName}>{item.name}</span>
                      <span className={styles.specialtyDesc}>{item.desc}</span>
                    </span>
                    <span className={styles.specialtyArrow} aria-hidden="true">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div id="diagnosztika">
          <ScrollVideo videoSrc="/media/mri_video.mp4" poster={media.mri} />
        </div>

        <section id="arak" className={styles.packages}>
          <div className={styles.inner}>
            <div className={styles.sectionHead}>
              <div>
                <p className={styles.eyebrowMint}>{packages.eyebrow}</p>
                <h2 className={styles.displayLight}>
                  {packages.title.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h2>
              </div>
              <a className={styles.linkMint} href="/korhaz/idopontok">
                {packages.link} <span aria-hidden="true">→</span>
              </a>
            </div>
            <ul className={styles.packageGrid}>
              {packages.items.map((pkg) => (
                <li key={pkg.name}>
                  <article
                    className={`${styles.packageCard} ${pkg.highlighted ? styles.packageCardHi : ''}`}
                  >
                    <p className={styles.packageEyebrow}>{pkg.eyebrow}</p>
                    <h3 className={styles.packageName}>{pkg.name}</h3>
                    <p className={styles.packagePrice}>
                      <span>{pkg.price}</span> <small>{pkg.unit}</small>
                    </p>
                    <ul className={styles.packageItems}>
                      {pkg.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <a className={styles.packageCta} href="/korhaz/idopontok">
                      Időpontot foglalok <span aria-hidden="true">→</span>
                    </a>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="orvosok" className={styles.doctors}>
          <div className={styles.inner}>
            <div className={styles.sectionHead}>
              <div>
                <p className={styles.eyebrowDark}>{doctors.eyebrow}</p>
                <h2 className={styles.display}>{doctors.title}</h2>
              </div>
              <a className={styles.linkDark} href="/korhaz/idopontok">
                {doctors.link} <span aria-hidden="true">→</span>
              </a>
            </div>
            <ul className={styles.doctorGrid}>
              {doctors.items.map((doctor, i) => (
                <li key={doctor.name}>
                  <article
                    className={styles.doctorCard}
                    onMouseEnter={() => setOpenDoctor(i)}
                    onMouseLeave={() => setOpenDoctor(null)}
                  >
                    <img src={doctor.photo} alt={doctor.name} loading="lazy" />
                    <h3 className={styles.doctorName}>{doctor.name}</h3>
                    <p className={styles.doctorField}>{doctor.field}</p>
                    <a
                      className={`${styles.doctorLink} ${openDoctor === i ? styles.doctorLinkOn : ''}`}
                      href="/korhaz/idopontok"
                    >
                      Időpont keresése <span aria-hidden="true">→</span>
                    </a>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="ellatas" className={styles.journey}>
          <div className={styles.inner}>
            <p className={styles.eyebrowMint}>{journey.eyebrow}</p>
            <ol className={styles.journeySteps}>
              {journey.steps.map((step) => (
                <li key={step.n}>
                  <span className={styles.journeyNum}>{step.n}</span>
                  <h3 className={styles.journeyTitle}>{step.title}</h3>
                  <p className={styles.journeyText}>{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.quote}>
          <div className={`${styles.inner} ${styles.quoteInner}`}>
            <img className={styles.quotePhoto} src={media.csapat} alt="" loading="lazy" />
            <figure>
              <blockquote className={styles.quoteText}>{quote.text}</blockquote>
              <figcaption>
                <span className={styles.eyebrowDark}>Páciensünk visszajelzése</span>
                <span className={styles.quoteAuthor}>
                  {quote.author} · {quote.detail}
                </span>
                <span className={styles.quoteNote}>{quote.note}</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.inner}>
            <div className={styles.ctaBanner}>
              <img className={styles.ctaImage} src={media.folyoso} alt="" loading="lazy" />
              <div className={styles.ctaShade} aria-hidden="true" />
              <div className={styles.ctaCopy}>
                <h2 className={styles.displayLight}>{cta.title}</h2>
                <p className={styles.bandText}>{cta.text}</p>
                <div className={styles.ctaButtons}>
                  <a className={styles.btnMint} href="/korhaz/idopontok">
                    Időpontfoglalás <span aria-hidden="true">→</span>
                  </a>
                  <a
                    className={styles.btnGhostLight}
                    href={`tel:${contact.emergency.replace(/\s/g, '')}`}
                  >
                    {contact.emergency}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.inner}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <img src={media.logoWhite} alt="Medicare Magánkórház és Klinika" width="196" height="29" />
              <address>
                {contact.address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
              <p className={styles.footerContact}>
                <a href={`tel:${contact.central.replace(/\s/g, '')}`}>{contact.central}</a>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
            </div>
            {footer.columns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <p className={styles.footerTitle}>{column.title}</p>
                <ul>
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="/korhaz/idopontok">{link}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <nav aria-label="Csoport">
              <p className={styles.footerTitle}>Csoport</p>
              <ul>
                {footer.group.map((site) => (
                  <li key={site}>
                    <a href={`https://${site}`} target="_blank" rel="noopener noreferrer">
                      {site}
                      <span className="visually-hidden"> (új lapon nyílik meg)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className={styles.footerBottom}>
            <p>© 2026 Medicare Magánkórház és Klinika · Koncepció demó, nem hivatalos oldal</p>
            <p>
              {footer.legal} · <Link to="/">Biztosítói koncepció</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
