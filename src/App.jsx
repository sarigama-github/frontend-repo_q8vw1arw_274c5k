import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SwapWidget from './components/SwapWidget'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-['Inter',_'Manrope',sans-serif]">
      <Navbar />
      <main>
        <Hero />
        <SwapWidget />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
