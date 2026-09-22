import AppLink from '../AppLink/AppLink'
import styles from './Button.module.css'

/**
 * Fő CTA gomb.
 * variant: primary | secondary | ghost | onDark
 *   – primary: világos háttéren
 *   – onDark: sötét (primary-900) szekciókban
 *   – ghost + inverted: fehér szövegű ghost gomb sötét háttéren
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'L',
  inverted = false,
  fullWidth = false,
  arrow = true,
  href,
  external = false,
  className = '',
  ...rest
}) {
  const classes = [
    styles.button,
    styles[variant],
    styles[`size${size}`],
    inverted && styles.inverted,
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <AppLink href={href} external={external} className={classes} {...rest}>
        {content}
      </AppLink>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  )
}
