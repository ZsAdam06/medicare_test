import styles from './AudienceToggle.module.css'

const AUDIENCES = [
  { id: 'business', label: 'Cégeknek' },
  { id: 'private', label: 'Magánszemélyeknek' },
]

/**
 * Célcsoport-váltó: a hero és a csomagok tartalmát váltja cég / magánszemély között.
 */
export default function AudienceToggle({ value, onChange, className = '', label = 'Célcsoport' }) {
  return (
    <div className={`${styles.toggle} ${className}`} role="group" aria-label={label}>
      {AUDIENCES.map((option) => {
        const active = option.id === value
        return (
          <button
            key={option.id}
            type="button"
            className={`${styles.option} ${active ? styles.active : ''}`}
            aria-pressed={active}
            onClick={() => onChange(option.id)}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
