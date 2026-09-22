import { Route, Routes } from 'react-router-dom'
import ScrollManager from './components/ScrollManager/ScrollManager'
import { QuoteDialogProvider } from './components/QuoteDialog/QuoteDialogProvider'
import Header from './sections/Header/Header'
import Footer from './sections/Footer/Footer'
import Landing from './pages/Landing'
import Compare from './pages/Compare'
import NotReady from './pages/NotReady'
import { COMPARE_PATH } from './data/comparison'
import styles from './App.module.css'

export default function App() {
  return (
    <QuoteDialogProvider>
      <div id="top">
        <ScrollManager />
        <a href="#fotartalom" className={styles.skipLink}>
          Ugrás a tartalomra
        </a>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path={COMPARE_PATH} element={<Compare />} />
          <Route path="*" element={<NotReady />} />
        </Routes>
        <Footer />
      </div>
    </QuoteDialogProvider>
  )
}
