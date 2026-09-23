import { Outlet, Route, Routes } from 'react-router-dom'
import ScrollManager from './components/ScrollManager/ScrollManager'
import { QuoteDialogProvider } from './components/QuoteDialog/QuoteDialogProvider'
import Header from './sections/Header/Header'
import Footer from './sections/Footer/Footer'
import Landing from './pages/Landing'
import Compare from './pages/Compare'
import NotReady from './pages/NotReady'
import Korhaz from './pages/Korhaz/Korhaz'
import IdopontKereso from './pages/Korhaz/IdopontKereso'
import KorhazNotReady from './pages/Korhaz/KorhazNotReady'
import { COMPARE_PATH } from './data/comparison'
import { KORHAZ_PATH } from './data/korhaz'
import { AUDIENCE_PATHS } from './data/routes'
import styles from './App.module.css'

/** A biztosítói oldalak közös kerete: fejléc + lábléc. */
function InsuranceLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <QuoteDialogProvider>
      <div id="top">
        <ScrollManager />
        <a href="#fotartalom" className={styles.skipLink}>
          Ugrás a tartalomra
        </a>
        <Routes>
          {/* A kórházi koncepció önálló arculattal, saját fejléccel és lábléccel fut. */}
          <Route path={KORHAZ_PATH} element={<Korhaz />} />
          <Route path={`${KORHAZ_PATH}/idopontok`} element={<IdopontKereso />} />
          <Route path={`${KORHAZ_PATH}/*`} element={<KorhazNotReady />} />
          <Route element={<InsuranceLayout />}>
            <Route path={AUDIENCE_PATHS.business} element={<Landing />} />
            <Route path={AUDIENCE_PATHS.private} element={<Landing />} />
            <Route path={COMPARE_PATH} element={<Compare />} />
            <Route path="*" element={<NotReady />} />
          </Route>
        </Routes>
      </div>
    </QuoteDialogProvider>
  )
}

