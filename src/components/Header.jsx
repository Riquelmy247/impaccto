import { useState, useEffect } from 'react'
import { siteData } from '../data/siteData'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const links = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'diferenciais', label: 'Diferenciais' },
    { id: 'contato', label: 'Contato' },
  ]

  const whatsappUrl = `https://wa.me/${siteData.telefoneFormatado}`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('hero')
            }}
            className="flex items-center gap-2 group"
          >
            <img
              src="/logo.svg"
              alt=""
              className="h-10 w-auto object-contain"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <span
              className={`font-display font-bold text-xl transition-colors ${
                isScrolled ? 'text-primary-700' : 'text-white'
              } group-hover:text-accent-500`}
            >
              {siteData.nome}
            </span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-medium transition-colors hover:text-accent-500 ${
                  isScrolled ? 'text-primary-700' : 'text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-6 py-2.5 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-primary-700' : 'text-white'
            }`}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white rounded-lg shadow-xl mt-2 animate-fade-in">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left px-4 py-3 text-primary-700 font-medium hover:bg-primary-50 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-2 bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold px-6 py-3 rounded-full text-center transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
