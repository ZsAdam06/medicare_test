import { useEffect, useRef, useState } from 'react'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import {
  emptyQuote,
  quoteCopy,
  quoteFields,
  quotePackages,
  quoteSources,
} from '../../data/quote'
import styles from './QuoteForm.module.css'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE = /^[+\d][\d\s\-()/]{5,}$/

const validators = {
  contact: (v) => (v.trim() ? null : 'Kérjük, adja meg a nevét.'),
  company: (v) => (v.trim() ? null : 'Kérjük, adja meg a cég nevét.'),
  email: (v) =>
    !v.trim()
      ? 'Kérjük, adja meg az e-mail-címét.'
      : EMAIL.test(v.trim())
        ? null
        : 'Az e-mail-cím formátuma nem megfelelő.',
  phone: (v) =>
    !v.trim()
      ? 'Kérjük, adja meg a telefonszámát.'
      : PHONE.test(v.trim())
        ? null
        : 'A telefonszám formátuma nem megfelelő.',
  headcount: (v) =>
    !String(v).trim()
      ? 'Kérjük, adja meg a munkavállalói létszámot.'
      : Number(v) >= 10
        ? null
        : 'Csoportos ajánlatot minimum 10 főtől tudunk küldeni.',
}

const summaryLabels = {
  contact: 'Név',
  phone: 'Telefonszám',
  email: 'E-mail-cím',
  company: 'Cégnév',
  site: 'Cég telephelye',
  headcount: 'Munkavállalói létszám',
  people: 'Biztosítottak száma',
  packages: 'Kiválasztott csomagok',
  source: 'Honnan ismeri a Medicare-t?',
  message: 'Üzenet',
}

export default function QuoteForm({ audience, preselectedPackage, onClose }) {
  const copy = quoteCopy[audience]
  const steps = quoteFields[audience]
  const packageOptions = quotePackages[audience]

  const [step, setStep] = useState(0)
  const [values, setValues] = useState(() => ({
    ...emptyQuote,
    packages: preselectedPackage
      ? packageOptions.filter((option) => option.includes(preselectedPackage))
      : [],
  }))
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const headingRef = useRef(null)
  const firstErrorField = useRef(null)

  useEffect(() => {
    headingRef.current?.focus()
  }, [step, sent])

  const setValue = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => (prev[name] ? { ...prev, [name]: null } : prev))
  }

  const validateStep = (index) => {
    const stepErrors = {}

    if (index < steps.length) {
      steps[index].forEach((field) => {
        const validate = validators[field.name]
        if (field.required && validate) {
          const error = validate(values[field.name])
          if (error) stepErrors[field.name] = error
        }
      })
    } else if (!values.consent) {
      stepErrors.consent = 'Az adatkezelés elfogadása nélkül nem tudjuk feldolgozni a kérését.'
    }

    setErrors(stepErrors)
    const firstInvalid = Object.keys(stepErrors)[0]
    if (firstInvalid) {
      firstErrorField.current = firstInvalid
      // A hibás mezőre visszük a fókuszt, hogy a képernyőolvasó felolvassa a hibát.
      setTimeout(() => document.getElementById(`quote-${firstInvalid}`)?.focus(), 0)
      return false
    }
    return true
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validateStep(step)) return
    if (step < steps.length) {
      setStep(step + 1)
      return
    }
    // Koncepció demó: az adatok nem kerülnek sehova, csak visszaigazolást mutatunk.
    setSent(true)
  }

  if (sent) {
    return (
      <div className={styles.success}>
        <span className={styles.successIcon} aria-hidden="true">
          <Icon name="calendar-check" size={28} />
        </span>
        <h3 ref={headingRef} tabIndex={-1} className={`t-h3 ${styles.successTitle}`}>
          Köszönjük, megkaptuk a kérését!
        </h3>
        <p className={`t-body-m ${styles.successText}`}>
          Kollégáink két munkanapon belül felveszik Önnel a kapcsolatot a megadott
          elérhetőségeken. Ez egy koncepció demó, ezért az űrlap adatai nem kerülnek elküldésre.
        </p>
        <Button onClick={onClose} arrow={false}>
          Bezárás
        </Button>
      </div>
    )
  }

  const isReview = step === steps.length
  const fields = isReview ? [] : steps[step]

  const summaryRows = Object.entries(summaryLabels)
    .filter(([name]) => {
      const value = values[name]
      return Array.isArray(value) ? value.length > 0 : String(value ?? '').trim() !== ''
    })
    .map(([name, label]) => ({
      label,
      value: Array.isArray(values[name]) ? values[name].join(', ') : values[name],
    }))

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <ol className={styles.stepper}>
        {copy.steps.map((label, i) => (
          <li
            key={label}
            className={`${styles.step} ${i === step ? styles.stepCurrent : ''} ${
              i < step ? styles.stepDone : ''
            }`}
            aria-current={i === step ? 'step' : undefined}
          >
            <span className={styles.stepNumber} aria-hidden="true">
              {i < step ? '✓' : i + 1}
            </span>
            <span className={`t-body-s ${styles.stepLabel}`}>{label}</span>
          </li>
        ))}
      </ol>

      {/* A lépésjelző már mutatja a lépés nevét, ezért a címsor csak a
          képernyőolvasóknak és a fókuszkezelésnek szól. */}
      <h3 ref={headingRef} tabIndex={-1} className="visually-hidden">
        {`${copy.steps[step]} – ${step + 1}. lépés a(z) ${copy.steps.length} lépésből`}
      </h3>

      {step === 0 && <p className={`t-body-s ${styles.lead}`}>{copy.lead}</p>}

      {isReview ? (
        <>
          <dl className={styles.summary}>
            {summaryRows.map((row) => (
              <div key={row.label} className={styles.summaryRow}>
                <dt className={`t-body-s ${styles.summaryLabel}`}>{row.label}</dt>
                <dd className={`t-body-m ${styles.summaryValue}`}>{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.consent}>
            <input
              id="quote-consent"
              type="checkbox"
              className={styles.checkbox}
              checked={values.consent}
              onChange={(e) => setValue('consent', e.target.checked)}
              aria-invalid={errors.consent ? 'true' : undefined}
              aria-describedby={errors.consent ? 'quote-consent-error' : undefined}
            />
            <label htmlFor="quote-consent" className={`t-body-s ${styles.consentLabel}`}>
              Hozzájárulok, hogy a Medicare Biztosító a megadott adataimat az ajánlatkérés
              céljából kezelje. <span aria-hidden="true">*</span>
            </label>
          </div>
          {errors.consent && (
            <p id="quote-consent-error" className={`t-body-s ${styles.error}`}>
              {errors.consent}
            </p>
          )}
        </>
      ) : (
        <div className={styles.fields}>
          {fields.map((field) => (
            <Field
              key={field.name}
              field={field}
              value={values[field.name]}
              error={errors[field.name]}
              onChange={setValue}
              packageOptions={packageOptions}
            />
          ))}
        </div>
      )}

      <div className={styles.actions}>
        {step > 0 ? (
          <Button
            type="button"
            variant="ghost"
            size="M"
            arrow={false}
            onClick={() => setStep(step - 1)}
          >
            Vissza
          </Button>
        ) : (
          <Button type="button" variant="ghost" size="M" arrow={false} onClick={onClose}>
            Mégse
          </Button>
        )}
        <Button type="submit" size="M">
          {isReview ? 'Ajánlatot kérek' : 'Tovább'}
        </Button>
      </div>
    </form>
  )
}

function Field({ field, value, error, onChange, packageOptions }) {
  const id = `quote-${field.name}`
  const errorId = `${id}-error`
  const hintId = `${id}-hint`
  const describedBy = [error && errorId, field.hint && hintId].filter(Boolean).join(' ') || undefined

  if (field.type === 'packages') {
    return (
      <fieldset className={styles.fieldset}>
        <legend className={`t-body-s ${styles.legend}`}>{field.label}</legend>
        <ul className={styles.chips}>
          {packageOptions.map((option) => {
            const checked = value.includes(option)
            return (
              <li key={option}>
                <label className={`${styles.chip} ${checked ? styles.chipChecked : ''}`}>
                  <input
                    type="checkbox"
                    className="visually-hidden"
                    checked={checked}
                    onChange={(e) =>
                      onChange(
                        field.name,
                        e.target.checked
                          ? [...value, option]
                          : value.filter((item) => item !== option),
                      )
                    }
                  />
                  <span aria-hidden="true" className={styles.chipMark}>
                    {checked ? '✓' : '+'}
                  </span>
                  {option}
                </label>
              </li>
            )
          })}
        </ul>
      </fieldset>
    )
  }

  return (
    <div className={`${styles.field} ${field.type === 'textarea' ? styles.fieldWide : ''}`}>
      <label htmlFor={id} className={`t-body-s ${styles.label}`}>
        {field.label}
        {field.required && (
          <>
            <span aria-hidden="true"> *</span>
            <span className="visually-hidden"> (kötelező)</span>
          </>
        )}
      </label>

      {field.type === 'textarea' ? (
        <textarea
          id={id}
          className={styles.input}
          rows={4}
          value={value}
          onChange={(e) => onChange(field.name, e.target.value)}
        />
      ) : field.type === 'select' ? (
        <select
          id={id}
          className={styles.input}
          value={value}
          onChange={(e) => onChange(field.name, e.target.value)}
        >
          <option value="">Kérjük, válasszon!</option>
          {quoteSources.map((source) => (
            <option key={source} value={source}>
              {source}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={field.type}
          className={styles.input}
          value={value}
          min={field.min}
          placeholder={field.placeholder}
          autoComplete={field.autoComplete}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={describedBy}
          onChange={(e) => onChange(field.name, e.target.value)}
        />
      )}

      {field.hint && (
        <p id={hintId} className={`t-body-s ${styles.hint}`}>
          {field.hint}
        </p>
      )}
      {error && (
        <p id={errorId} className={`t-body-s ${styles.error}`}>
          {error}
        </p>
      )}
    </div>
  )
}
