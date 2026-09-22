import SegmentedControl from '../SegmentedControl/SegmentedControl'

const AUDIENCES = [
  { id: 'business', label: 'Cégeknek' },
  { id: 'private', label: 'Magánszemélyeknek' },
]

/**
 * Célcsoport-váltó: a hero és a csomagok tartalmát váltja cég / magánszemély között.
 */
export default function AudienceToggle({ value, onChange, className = '', label = 'Célcsoport' }) {
  return (
    <SegmentedControl
      options={AUDIENCES}
      value={value}
      onChange={onChange}
      label={label}
      stackOnMobile
      className={className}
    />
  )
}
