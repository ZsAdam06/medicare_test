import styles from './SegmentedControl.module.css'

/**
 * Pirula alakú választó: az egyik opció mindig aktív.
 * Az AudienceToggle és az összehasonlító táblázat mobil csomagválasztója is ezt használja.
 */
export default function SegmentedControl({
  options,
  value,
  onChange,
  label,
  size = 'M',
  tone = 'light',
  stackOnMobile = false,
  className = '',
}) {
  return (
    <div
      className={[
        styles.control,
        styles[`size${size}`],
        styles[`tone${tone === 'dark' ? 'Dark' : 'Light'}`],
        stackOnMobile && styles.wrap,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role="group"
      aria-label={label}
    >
      {options.map((option) => {
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
