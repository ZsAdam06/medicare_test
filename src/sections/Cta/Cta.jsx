import Button from '../../components/Button/Button'
import { contacts, telHref } from '../../data/content'
import styles from './Cta.module.css'

export default function Cta() {
  return (
    <section id="ajanlat" className={styles.section} aria-labelledby="cta-title">
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.copy}>
            <h2 id="cta-title" className={`t-h2 ${styles.title}`}>
              Kérjen ajánlatot cégének!
            </h2>
            <p className={`t-body-l ${styles.text}`}>
              Minimum 10 fős csoportos egészségbiztosításra. Kollégáink várják megkeresését!
            </p>
          </div>
          <div className={styles.buttons}>
            <Button href={`mailto:${contacts.email}?subject=Ajánlatkérés`} variant="onDark">
              Ajánlatot kérek
            </Button>
            <Button href={telHref(contacts.service.phone)} variant="ghost" inverted>
              {contacts.service.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
