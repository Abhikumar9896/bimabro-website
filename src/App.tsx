import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ScrollManager } from './components/ScrollManager'
import { AppShell } from './components/layout/AppShell'
import { AboutPage } from './pages/AboutPage'
import { CorporatePage } from './pages/CorporatePage'
import { HomePage } from './pages/HomePage'
import { RetailPage } from './pages/RetailPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path="retail" element={<RetailPage />} />
          <Route path="corporate" element={<CorporatePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
