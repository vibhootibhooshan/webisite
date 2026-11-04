import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { whatsappLink } from './config/site'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function Layout() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const el = hash && document.getElementById(hash.slice(1))
    if (el) el.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:m-2 focus:rounded focus:bg-white focus:p-2">Skip to content</a>
      <Header />
      <main id="main" className="flex-1"><Outlet /></main>
      <Footer />
      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
        className="fixed bottom-4 right-4 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] shadow-md shadow-black/20 transition-transform hover:scale-105 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14">
        <img src="https://cdn.simpleicons.org/whatsapp/white" alt="" width="26" height="26" className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </div>
  )
}

// Shared by the browser (BrowserRouter) and the build-time pre-renderer (StaticRouter).
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return <BrowserRouter><AppRoutes /></BrowserRouter>
}
