import { useEffect, useId, useRef } from 'react'
import Icon from '../Icon/Icon'
import styles from './Modal.module.css'

/**
 * Natív <dialog> alapú modal: a fókuszcsapda, az Esc és a háttér inertté tétele
 * a böngészőtől jön, nem kell utánozni.
 */
export default function Modal({ open, onClose, title, children, describedBy }) {
  const dialogRef = useRef(null)
  const lastFocused = useRef(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) {
      lastFocused.current = document.activeElement
      dialog.showModal()
      return
    }

    if (!open && dialog.open) {
      dialog.close()
      // Bezárás után a fókusz visszakerül a megnyitó vezérlőre.
      const trigger = lastFocused.current
      lastFocused.current = null
      if (trigger?.isConnected && trigger !== document.body) trigger.focus()
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    // A háttér görgetését a modal nyitva tartja meg.
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  // Háttérre kattintás zárja a modalt (a dialog maga tölti ki a teljes képernyőt).
  const handleClick = (event) => {
    if (event.target === dialogRef.current) onClose()
  }

  // A <dialog> magától is zár Esc-re; ez a kezelő azokat a böngészőket fedi le,
  // ahol az alapértelmezett viselkedés nem fut le.
  const handleKeyDown = (event) => {
    if (event.key !== 'Escape') return
    event.preventDefault()
    onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={titleId}
      aria-describedby={describedBy}
      onClose={onClose}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.panel}>
        <div className={styles.header}>
          <h2 id={titleId} className={`t-h3 ${styles.title}`}>
            {title}
          </h2>
          <button type="button" className={styles.close} onClick={onClose} aria-label="Bezárás">
            <Icon name="close" size={20} />
          </button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </dialog>
  )
}
