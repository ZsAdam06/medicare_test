import { useEffect, useRef, useState } from 'react'
import styles from './Stat.module.css'

const DURATION = 1200

/**
 * Statisztika-elem sötét háttérre, számláló animációval.
 * A value numerikus része animálódik, a suffix (pl. „+”) változatlan marad.
 */
export default function Stat({ value, suffix = '', label }) {
  const ref = useRef(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const node = ref.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!node || reduceMotion || !('IntersectionObserver' in window)) {
      setCurrent(value)
      return
    }

    let frame
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / DURATION, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCurrent(Math.round(value * eased))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    observer.observe(node)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return (
    <div ref={ref} className={styles.stat}>
      <span className={styles.value} aria-hidden="true">
        {current.toLocaleString('hu-HU')}
        {suffix}
      </span>
      <span className="visually-hidden">
        {value.toLocaleString('hu-HU')}
        {suffix}
      </span>
      <span className={`t-body-m ${styles.label}`}>{label}</span>
    </div>
  )
}
