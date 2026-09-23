import { useEffect, useId, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './BookingBar.module.css'

/** Kattintás a panelen kívül → bezárás. */
function useClickOutside(refs, onOutside) {
  useEffect(() => {
    const handler = (event) => {
      if (refs.every((ref) => ref.current && !ref.current.contains(event.target))) onOutside()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [refs, onOutside])
}

/**
 * Kereső mező javaslatlistával (combobox).
 * Az input marad fókuszban, az aktív találatot aria-activedescendant jelöli.
 */
function SearchField({ label, placeholder, suggestions, value, onChange }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const id = useId()
  const wrapRef = useRef(null)
  const listId = `${id}-lista`

  const matches = value.trim()
    ? suggestions.filter((s) => s.toLowerCase().includes(value.trim().toLowerCase()))
    : suggestions
  const filtered = matches.slice(0, 6)

  useClickOutside([wrapRef], () => setOpen(false))

  const choose = (item) => {
    onChange(item)
    setOpen(false)
  }

  const onKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (!open) {
        setOpen(true)
        setActive(0)
        return
      }
      setActive((i) => (i + 1) % Math.max(filtered.length, 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((i) => (i - 1 + filtered.length) % Math.max(filtered.length, 1))
    } else if (event.key === 'Enter' && open && filtered[active]) {
      event.preventDefault()
      choose(filtered[active])
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  return (
    <div className={`${styles.field} ${styles.fieldGrow}`} ref={wrapRef}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        type="text"
        className={styles.input}
        placeholder={placeholder}
        value={value}
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={open && filtered[active] ? `${id}-opt-${active}` : undefined}
        autoComplete="off"
        onChange={(e) => {
          onChange(e.target.value)
          setOpen(true)
          setActive(0)
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
      />
      {open && filtered.length > 0 && (
        <div className={styles.panel} id={listId} role="listbox" aria-label={label}>
          {filtered.map((item, i) => (
            <div
              key={item}
              id={`${id}-opt-${i}`}
              role="option"
              aria-selected={item === value}
              className={`${styles.option} ${i === active ? styles.optionActive : ''}`}
              onMouseEnter={() => setActive(i)}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => choose(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/** Saját legördülő (listbox): a natív select helyett, a panel stílusához igazítva. */
function SelectField({ label, options, value, onChange, width }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(() => Math.max(0, options.indexOf(value)))
  const id = useId()
  const wrapRef = useRef(null)
  const buttonRef = useRef(null)
  const listRef = useRef(null)
  const listId = `${id}-lista`

  useClickOutside([wrapRef], () => setOpen(false))

  useEffect(() => {
    if (open) listRef.current?.focus()
  }, [open])

  const close = ({ focusButton = true } = {}) => {
    setOpen(false)
    if (focusButton) buttonRef.current?.focus()
  }

  const choose = (index) => {
    onChange(options[index])
    setActive(index)
    close()
  }

  const onListKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActive((i) => (i + 1) % options.length)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((i) => (i - 1 + options.length) % options.length)
    } else if (event.key === 'Home') {
      event.preventDefault()
      setActive(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      setActive(options.length - 1)
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      choose(active)
    } else if (event.key === 'Escape' || event.key === 'Tab') {
      close()
    }
  }

  return (
    <div
      className={styles.field}
      style={width ? { '--field-width': `${width}px` } : undefined}
      ref={wrapRef}
    >
      <span className={styles.label} id={`${id}-cimke`}>
        {label}
      </span>
      <button
        type="button"
        ref={buttonRef}
        className={styles.trigger}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${id}-cimke ${id}-ertek`}
        onClick={() => {
          setActive(Math.max(0, options.indexOf(value)))
          setOpen((o) => !o)
        }}
      >
        <span id={`${id}-ertek`}>{value}</span>
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} aria-hidden="true">
          ▾
        </span>
      </button>
      {open && (
        <div
          className={`${styles.panel} ${styles.panelScroll}`}
          id={listId}
          role="listbox"
          ref={listRef}
          tabIndex={0}
          aria-labelledby={`${id}-cimke`}
          aria-activedescendant={`${id}-opt-${active}`}
          onKeyDown={onListKeyDown}
        >
          {options.map((option, i) => (
            <div
              key={option}
              id={`${id}-opt-${i}`}
              role="option"
              aria-selected={option === value}
              className={`${styles.option} ${i === active ? styles.optionActive : ''}`}
              onMouseEnter={() => setActive(i)}
              onClick={() => choose(i)}
            >
              {option}
              {option === value && (
                <span className={styles.check} aria-hidden="true">
                  ✓
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function BookingBar({ suggestions, specialties, slots }) {
  const [query, setQuery] = useState('')
  const [specialty, setSpecialty] = useState(specialties[0])
  const [slot, setSlot] = useState(slots[0])
  const navigate = useNavigate()

  return (
    <form id="foglalas" className={styles.bar} onSubmit={(e) => { e.preventDefault(); navigate('/korhaz/idopontok') }} aria-label="Időpontkeresés">
      <SearchField
        label="Mit keres?"
        placeholder="Panasz, vizsgálat vagy orvos"
        suggestions={suggestions}
        value={query}
        onChange={setQuery}
      />
      <SelectField
        label="Szakterület"
        options={specialties}
        value={specialty}
        onChange={setSpecialty}
        width={280}
      />
      <SelectField
        label="Időpont"
        options={slots}
        value={slot}
        onChange={setSlot}
        width={200}
      />
      <button type="submit" className={styles.submit}>
        Időpontot keresek <span aria-hidden="true">→</span>
      </button>
    </form>
  )
}
