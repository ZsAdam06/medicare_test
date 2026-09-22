import styles from './ServiceTile.module.css'

export default function ServiceTile({ title, site, href, image }) {
  return (
    <a
      className={styles.tile}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ backgroundImage: `url(${image})` }}
    >
      <span className={`t-h4 ${styles.title}`}>{title}</span>
      <span className={`t-body-s ${styles.site}`}>
        {site} <span aria-hidden="true">→</span>
        <span className="visually-hidden"> (új lapon nyílik meg)</span>
      </span>
    </a>
  )
}
