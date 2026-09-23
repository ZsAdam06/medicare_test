import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ScrollVideo.module.css'

/**
 * Scroll-driven video scrubber komponens.
 * Ahogy a felhasználó lefelé/felfelé görget a szekcióban, a videó pontosan követi a görgetést (scrubbing),
 * miközben informatív szövegek és vizuális jelzések mutatják be a diagnosztikai folyamatot.
 */
export default function ScrollVideo({ videoSrc, poster }) {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return

    let targetTime = 0
    let rafId = null
    let isSeeking = false

    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      const totalScroll = rect.height - window.innerHeight
      if (totalScroll <= 0) return

      const scrolled = -rect.top
      const currentProgress = Math.min(Math.max(scrolled / totalScroll, 0), 1)
      setProgress(currentProgress)

      if (video.duration && !isNaN(video.duration)) {
        targetTime = currentProgress * video.duration
      }
    }

    // Sima interpoláció (lerp) rAF segítségével a folyamatos, darabosodás-mentes lejátszáshoz
    const tick = () => {
      if (video.duration && !isNaN(video.duration)) {
        const diff = targetTime - video.currentTime
        if (Math.abs(diff) > 0.02 && !isSeeking) {
          isSeeking = true
          video.currentTime += diff * 0.25
        }
      }
      rafId = requestAnimationFrame(tick)
    }

    const onSeeked = () => {
      isSeeking = false
    }

    // A videó hossza csak a metaadatok betöltése után ismert – akkor számolunk újra.
    const handleLoadedMetadata = () => onScroll()
    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    if (video.readyState >= 1) handleLoadedMetadata()

    video.addEventListener('seeked', onSeeked)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    onScroll()
    rafId = requestAnimationFrame(tick)

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('seeked', onSeeked)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  // Az aktuális fázis meghatározása a progress alapján (0: Bevezetés, 1: Vizsgálat, 2: Eredmények)
  const phase = progress < 0.33 ? 0 : progress < 0.67 ? 1 : 2

  return (
    <section ref={sectionRef} className={styles.scrollSection} aria-label="Interaktív diagnosztikai bemutató">
      <div className={styles.stickyWrapper}>
        <video
          ref={videoRef}
          className={styles.video}
          src={videoSrc}
          poster={poster}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        {/* Finom rétegezett sötétítő gradientek a prémium olvashatóságért */}
        <div className={styles.shadeOverlay} aria-hidden="true" />
        <div className={styles.radialGlow} aria-hidden="true" />

        {/* Tartalom réteg a videó felett */}
        <div className={styles.contentContainer}>
          <div className={styles.inner}>
            {/* 1. fázis: Bevezetés */}
            <div
              className={`${styles.card} ${phase === 0 ? styles.cardVisible : styles.cardHidden}`}
              aria-hidden={phase !== 0}
            >
              <div className={styles.badgeRow}>
                <span className={styles.badgeNumber}>02</span>
                <span className={styles.badgeText}>Képalkotó Diagnosztika</span>
                <span className={styles.liveIndicator}>
                  <span className={styles.liveDot} /> Interaktív
                </span>
              </div>
              <h2 className={styles.title}>
                Lásson a felszín alá: <span className={styles.highlight}>3D MRI diagnosztika</span>
              </h2>
              <p className={styles.description}>
                A modern képalkotás milliméteres pontosságot ad. Görgessen lefelé, és a videó követi a mozdulatát.
              </p>
              <div className={styles.scrollPrompt}>
                <span className={styles.mouseIcon}>
                  <span className={styles.mouseWheel} />
                </span>
                <span>Görgessen a videó vezérléséhez</span>
              </div>
            </div>

            {/* 2. fázis: Részletesség és technológia */}
            <div
              className={`${styles.card} ${phase === 1 ? styles.cardVisible : styles.cardHidden}`}
              aria-hidden={phase !== 1}
            >
              <div className={styles.badgeRow}>
                <span className={styles.badgeNumber}>02.2</span>
                <span className={styles.badgeText}>3 Tesla Mágneses Tér</span>
              </div>
              <h2 className={styles.title}>
                Nagyfelbontású szeletképek <span className={styles.highlight}>másodpercek alatt</span>
              </h2>
              <p className={styles.description}>
                Csúcskategóriás készülékünkkel akár 50%-kal rövidebb a gépben töltött idő, részletgazdag lágyrész-kontraszt mellett.
              </p>
              <div className={styles.specsRow}>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>0,5 mm</span>
                  <span className={styles.specLabel}>Rétegvastagság</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>–50%</span>
                  <span className={styles.specLabel}>Zajszint és idő</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>0–24</span>
                  <span className={styles.specLabel}>Azonnali elérhetőség</span>
                </div>
              </div>
            </div>

            {/* 3. fázis: Eredmény és foglalás */}
            <div
              className={`${styles.card} ${phase === 2 ? styles.cardVisible : styles.cardHidden}`}
              aria-hidden={phase !== 2}
            >
              <div className={styles.badgeRow}>
                <span className={styles.badgeNumber}>02.3</span>
                <span className={styles.badgeText}>Gyors kiértékelés</span>
              </div>
              <h2 className={styles.title}>
                Lelet és szakorvosi konzultáció <span className={styles.highlight}>5 napon belül</span>
              </h2>
              <p className={styles.description}>
                Radiológus szakorvosaink azonnal megkezdik a kiértékelést, a leletet kezelőorvosával közösen tekintheti át.
              </p>
              <div className={styles.actionRow}>
                <Link to="/korhaz/idopontok" className={styles.ctaButton}>
                  Időpontot keresek <span aria-hidden="true">→</span>
                </Link>
                <a href="#arak" className={styles.secondaryLink}>
                  Árak és vizsgálati csomagok
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Alsó vezérlő és progress sáv */}
        <div className={styles.statusBar}>
          <div className={styles.progressContainer}>
            <div className={styles.progressBar} style={{ width: `${Math.round(progress * 100)}%` }} />
          </div>
          <div className={styles.statusMeta}>
            <div className={styles.phaseIndicator}>
              <span className={phase === 0 ? styles.activeDot : styles.dot} />
              <span className={phase === 1 ? styles.activeDot : styles.dot} />
              <span className={phase === 2 ? styles.activeDot : styles.dot} />
              <span className={styles.phaseLabel}>
                {phase === 0 ? 'Bevezetés' : phase === 1 ? 'Képalkotás' : 'Összegzés'} ({Math.round(progress * 100)}%)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
