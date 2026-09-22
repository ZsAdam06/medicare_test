import { Route, Routes } from 'react-router-dom'
import ScrollManager from './components/ScrollManager/ScrollManager'
import Header from './sections/Header/Header'
import Footer from './sections/Footer/Footer'
import Landing from './pages/Landing'
import NotReady from './pages/NotReady'
import styles from './App.module.css'

export default function App() {
  return (
    <div id="top">
      <ScrollManager />
      <a href="#fotartalom" className={styles.skipLink}>
        Ugrás a tartalomra
      </a>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotReady />} />
      </Routes>
      <Footer />
    </div>
  )
}
