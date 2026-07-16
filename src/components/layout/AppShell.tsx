import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function AppShell() {
  return (
    <div className="min-h-svh bg-page">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
