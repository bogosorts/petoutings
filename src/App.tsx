import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import HomePageV2 from './pages/HomePageV2'
import FlyerPage from './pages/FlyerPage'
import AboutPage from './pages/AboutPage'
import FAQPage from './pages/FAQPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="min-h-screen bg-sand-50 flex flex-col">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <main className="flex-grow">
              <HomePageV2 />
            </main>
            <Footer />
          </>
        } />
        <Route path="/old" element={
          <>
            <Header />
            <main className="flex-grow">
              <HomePage />
            </main>
            <Footer />
          </>
        } />
        <Route path="/flyer" element={<FlyerPage />} />
        <Route path="/about" element={
          <>
            <Header />
            <main className="flex-grow">
              <AboutPage />
            </main>
            <Footer />
          </>
        } />
        <Route path="/faq" element={
          <>
            <Header />
            <main className="flex-grow">
              <FAQPage />
            </main>
            <Footer />
          </>
        } />
        <Route path="/services" element={
          <>
            <Header />
            <main className="flex-grow">
              <ServicesPage />
            </main>
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Header />
            <main className="flex-grow">
              <ContactPage />
            </main>
            <Footer />
          </>
        } />
      </Routes>
    </div>
  )
}

export default App
