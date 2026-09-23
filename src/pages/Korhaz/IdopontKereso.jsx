import { useState } from 'react'
import { Link } from 'react-router-dom'
import { contact, doctors, footer, media, nav } from '../../data/korhaz'
import styles from './IdopontKereso.module.css'

const APPOINTMENTS = [
  {
    id: 1,
    name: 'Dr. Tánczos Tamás',
    specialty: 'Traumatológia',
    dateTime: '2026. szept. 25. 10:30',
    price: '29 900 Ft',
    room: 'Vision Towers · II. em. 204.',
  },
  {
    id: 2,
    name: 'Dr. Kárpáti Adél',
    specialty: 'Belgyógyászat',
    dateTime: '2026. szept. 25. 14:00',
    price: '24 500 Ft',
    room: 'Vision Towers · I. em. 112.',
  },
  {
    id: 3,
    name: 'Dr. Szekeres Gábor',
    specialty: 'Kardiológia',
    dateTime: '2026. szept. 26. 09:15',
    price: '34 900 Ft',
    room: 'Vision Towers · III. em. 308.',
  },
  {
    id: 4,
    name: 'Dr. Szeghy Szabolcs',
    specialty: 'Ortopédia',
    dateTime: '2026. szept. 26. 11:45',
    price: '27 500 Ft',
    room: 'Vision Towers · II. em. 215.',
  },
]

export default function IdopontKereso() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('Mind')
  const [bookedAppointment, setBookedAppointment] = useState(null)

  const specialties = ['Mind', 'Traumatológia', 'Belgyógyászat', 'Kardiológia', 'Ortopédia']

  const filteredAppointments =
    selectedSpecialty === 'Mind'
      ? APPOINTMENTS
      : APPOINTMENTS.filter((item) => item.specialty === selectedSpecialty)

  const getDoctorPhoto = (doctorName) => {
    const doc = doctors.items.find((d) => d.name === doctorName)
    return doc?.photo
  }

  return (
    <div className={styles.page}>
      {/* Fejléc a kórház logójával és navigációs felépítésével */}
      <header className={styles.header}>
        <div className={`${styles.inner} ${styles.headerInner}`}>
          <Link to="/korhaz" className={styles.logo} aria-label="Vissza a kórház főoldalára">
            <img
              src={media.logoWhite}
              alt="Medicare Magánkórház és Klinika"
              width="196"
              height="29"
            />
          </Link>

          <nav className={styles.nav} aria-label="Fő navigáció">
            <ul>
              {nav.map((item) => (
                <li key={item.label}>
                  <a href={`/korhaz${item.hash}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.headerActions}>
            <a className={styles.sos} href={`tel:${contact.emergency.replace(/\s/g, '')}`}>
              <span className={styles.sosDot} aria-hidden="true" />
              Sürgősségi 0–24
            </a>
            <Link to="/korhaz" className={styles.btnBackHeader}>
              <span aria-hidden="true">←</span> Vissza a kórházhoz
            </Link>
          </div>
        </div>
      </header>

      {/* Főtartalom */}
      <main className={styles.main}>
        <div className={styles.inner}>
          {/* Felső navigációs sáv & Vissza gomb */}
          <div className={styles.topBar}>
            <Link to="/korhaz" className={styles.backLink}>
              <span aria-hidden="true">←</span> Vissza a kórház oldalra
            </Link>
            <nav className={styles.breadcrumbs} aria-label="Morzsamenü">
              <Link to="/korhaz">Kórház</Link>
              <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
              <span className={styles.breadcrumbCurrent}>Szabad időpontok</span>
            </nav>
          </div>

          <div className={styles.pageHeader}>
            <p className={styles.eyebrow}>Online előjegyzés · Vision Towers</p>
            <h1 className={styles.title}>Elérhető vizsgálati időpontok</h1>
            <p className={styles.lead}>
              Válassza ki a megfelelő szakorvost és időpontot. Az időpontfoglalás azonnal rögzítésre
              kerül, a visszaigazolást perceken belül megküldjük.
            </p>
          </div>

          {/* Szűrő / Booking Bar terület kiválasztott értékekkel */}
          <div className={styles.filterBar} role="region" aria-label="Keresési feltételek">
            <div className={styles.filterInfoList}>
              <div className={styles.filterItem}>
                <span className={styles.filterLabel}>Keresett szakterület</span>
                <span className={styles.filterValue}>
                  <span className={styles.filterDot} aria-hidden="true" />
                  {selectedSpecialty === 'Mind' ? 'Összes szakterület' : selectedSpecialty}
                </span>
              </div>

              <div className={styles.filterDivider} aria-hidden="true" />

              <div className={styles.filterItem}>
                <span className={styles.filterLabel}>Kiválasztott időszak</span>
                <span className={styles.filterValue}>
                  Legközelebbi szabad időpontok (2026. szept. 25–26.)
                </span>
              </div>

              <div className={styles.filterDivider} aria-hidden="true" />

              <div className={styles.filterItem}>
                <span className={styles.filterLabel}>Helyszín</span>
                <span className={styles.filterValue}>
                  Budapest · Vision Towers (Váci út 29-31.)
                </span>
              </div>
            </div>

            <div className={styles.filterBadge}>
              <span className={styles.filterBadgeCount}>{filteredAppointments.length}</span>
              szabad időpont
            </div>
          </div>

          {/* Gyors szűrőgombok */}
          <div className={styles.quickFilters} role="tablist" aria-label="Szakterület szűrés">
            <span className={styles.quickFilterTitle}>Szakterület:</span>
            {specialties.map((spec) => (
              <button
                key={spec}
                type="button"
                role="tab"
                aria-selected={selectedSpecialty === spec}
                className={`${styles.chip} ${selectedSpecialty === spec ? styles.chipActive : ''}`}
                onClick={() => setSelectedSpecialty(spec)}
              >
                {spec}
              </button>
            ))}
          </div>

          {/* Találati kártyák listája */}
          <div className={styles.resultsGrid} role="list" aria-label="Időpont találatok">
            {filteredAppointments.map((item) => {
              const photo = getDoctorPhoto(item.name)

              return (
                <article key={item.id} className={styles.resultCard} role="listitem">
                  <div className={styles.doctorCol}>
                    <div className={styles.avatarWrap}>
                      {photo ? (
                        <img
                          src={photo}
                          alt=""
                          className={styles.avatar}
                          width="64"
                          height="64"
                          loading="lazy"
                        />
                      ) : (
                        <div className={styles.avatarPlaceholder} aria-hidden="true">
                          {item.name.split(' ').map((n) => n[0]).join('')}
                        </div>
                      )}
                      <span className={styles.statusIndicator} title="Elérhető" aria-hidden="true" />
                    </div>

                    <div className={styles.doctorMeta}>
                      <h2 className={styles.doctorName}>{item.name}</h2>
                      <span className={styles.specialtyBadge}>{item.specialty}</span>
                      <p className={styles.locationText}>{item.room}</p>
                    </div>
                  </div>

                  <div className={styles.slotCol}>
                    <span className={styles.slotLabel}>Időpont</span>
                    <div className={styles.slotValue}>
                      <span className={styles.slotIcon} aria-hidden="true">📅</span>
                      <span>{item.dateTime}</span>
                    </div>
                    <span className={styles.slotBadge}>
                      <span className={styles.slotBadgeDot} aria-hidden="true" />
                      Azonnal foglalható
                    </span>
                  </div>

                  <div className={styles.priceCol}>
                    <span className={styles.priceLabel}>Vizsgálati díj</span>
                    <span className={styles.priceValue}>{item.price}</span>
                  </div>

                  <div className={styles.actionCol}>
                    <button
                      type="button"
                      className={styles.btnBook}
                      onClick={() => setBookedAppointment(item)}
                    >
                      Foglalás <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </main>

      {/* Foglalási visszajelző modális */}
      {bookedAppointment && (
        <div
          className={styles.modalBackdrop}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-booking-title"
          onClick={() => setBookedAppointment(null)}
        >
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalIcon} aria-hidden="true">✓</div>
            <h2 id="modal-booking-title" className={styles.modalTitle}>
              Időpont lefoglalva
            </h2>
            <p className={styles.modalText}>
              A választott vizsgálati időpontot ideiglenesen zároltuk. A részleteket tartalmazó
              megerősítést e-mailben is továbbítottuk.
            </p>

            <div className={styles.modalSummaryCard}>
              <div className={styles.modalSummaryRow}>
                <span className={styles.modalSummaryLabel}>Szakorvos:</span>
                <span className={styles.modalSummaryValue}>{bookedAppointment.name}</span>
              </div>
              <div className={styles.modalSummaryRow}>
                <span className={styles.modalSummaryLabel}>Szakterület:</span>
                <span className={styles.modalSummaryValue}>{bookedAppointment.specialty}</span>
              </div>
              <div className={styles.modalSummaryRow}>
                <span className={styles.modalSummaryLabel}>Időpont:</span>
                <span className={styles.modalSummaryValue}>{bookedAppointment.dateTime}</span>
              </div>
              <div className={styles.modalSummaryRow}>
                <span className={styles.modalSummaryLabel}>Helyszín:</span>
                <span className={styles.modalSummaryValue}>{bookedAppointment.room}</span>
              </div>
              <div className={styles.modalSummaryRow}>
                <span className={styles.modalSummaryLabel}>Vizsgálati díj:</span>
                <span className={styles.modalSummaryValue}>{bookedAppointment.price}</span>
              </div>
            </div>

            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={() => setBookedAppointment(null)}
              autoFocus
            >
              Rendben, bezárás
            </button>
          </div>
        </div>
      )}

      {/* Lábléc */}
      <footer className={styles.footer}>
        <div className={styles.inner}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <img
                src={media.logoWhite}
                alt="Medicare Magánkórház és Klinika"
                width="170"
                height="25"
              />
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
              <nav key={column.title} className={styles.footerNav} aria-label={column.title}>
                <p className={styles.footerTitle}>{column.title}</p>
                <ul>
                  {column.links.map((item) => {
                    const label = typeof item === 'string' ? item : item.label
                    const to = typeof item === 'string' ? '/korhaz/fejlesztes-alatt' : item.to
                    const isHash = to.includes('#')
                    return (
                      <li key={label}>
                        {isHash ? (
                          <a href={to}>{label}</a>
                        ) : (
                          <Link to={to}>{label}</Link>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </nav>
            ))}

            <nav className={styles.footerNav} aria-label="Csoport">
              <p className={styles.footerTitle}>Csoport</p>
              <ul>
                {footer.group.map((site) => (
                  <li key={site}>
                    <a href={`https://${site}`} target="_blank" rel="noopener noreferrer">
                      {site}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={styles.footerBottom}>
            <p>© 2026 Medicare Magánkórház és Klinika · Koncepció demó, nem hivatalos oldal</p>
            <p>
              {Array.isArray(footer.legal) ? (
                footer.legal.map((item, idx) => (
                  <span key={item.label}>
                    <Link to={item.to}>{item.label}</Link>
                    {idx < footer.legal.length - 1 ? ' · ' : ''}
                  </span>
                ))
              ) : (
                footer.legal
              )}
              {' · '}
              <Link to="/korhaz">Kórház főoldal</Link> ·{' '}
              <Link to="/">Biztosítói koncepció</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
