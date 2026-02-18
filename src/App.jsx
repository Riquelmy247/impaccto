import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Differentials from './components/Differentials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Contact />
        <Footer />
      </main>
      <WhatsAppButton />
    </div>
  )
}

export default App
