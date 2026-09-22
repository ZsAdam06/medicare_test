import { contacts, footer } from '../../data/content'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer id="kapcsolat" className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.columns}>
          <div className={styles.brand}>
            <p className={`t-h4 ${styles.brandName}`}>{footer.brand.name}</p>
            <address className={`t-body-s ${styles.address}`}>
              {footer.brand.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
              <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
            </address>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} className={styles.column} aria-label={column.title}>
              <p className={`t-caption ${styles.columnTitle}`}>{column.title}</p>
              <ul className={styles.links}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`t-body-s ${styles.link}`}
                      {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className={`t-body-s ${styles.bottom}`}>
          <p>{footer.copyright}</p>
          <ul className={styles.legal}>
            {footer.legal.map((item) => (
              <li key={item}>
                <a href="#" className={styles.legalLink}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
