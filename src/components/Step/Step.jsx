import styles from './Step.module.css'

export default function Step({ index, title, description }) {
  return (
    <li className={styles.step}>
      <span className={`t-h4 ${styles.number}`} aria-hidden="true">
        {index}
      </span>
      <h3 className={`t-h4 ${styles.title}`}>
        <span className="visually-hidden">{index}. lépés: </span>
        {title}
      </h3>
      <p className={`t-body-m ${styles.description}`}>{description}</p>
    </li>
  )
}
