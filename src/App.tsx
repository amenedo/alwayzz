import { useState } from 'react'
import { ChevronUp } from 'lucide-react'

const TICKER_ITEMS = [
  'Brand Identity',
  'App Development',
  'Visual Design',
  'Creative Video',
  'Iconography',
]

const COMPANY_LOGOS = [
  { name: 'Airbnb', className: 'airbnb' },
  { name: 'Shopify', className: 'shopify' },
  { name: 'Notion', className: 'notion' },
  { name: 'Linear', className: 'linear' },
  { name: 'Webflow', className: 'webflow' },
  { name: 'Figma', className: 'figma' },
  { name: 'Slack', className: 'slack' },
  { name: 'Stripe', className: 'stripe' },
  { name: 'Vercel', className: 'vercel' },
  { name: 'Framer', className: 'framer' },
]

const NAV_LINKS = ['Projects', 'Plans', 'Team', 'FAQs', 'Get in Touch']

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  // Generate curved lines (20 left + 20 right)
  const leftLines = Array.from({ length: 20 }, (_, i) => ({
    id: `left-${i}`,
    width: 60 + i * 10,
    left: -30 - i * 0.8,
    delay: i * 0.25,
    isRight: false,
  }))

  const rightLines = Array.from({ length: 20 }, (_, i) => ({
    id: `right-${i}`,
    width: 60 + i * 10,
    right: -30 - i * 0.8,
    delay: i * 0.25,
    isRight: true,
  }))

  // Top horizontal lines for mobile (<810px)
  const topLines = Array.from({ length: 20 }, (_, i) => ({
    id: `top-${i}`,
    top: 6 + i * 6.5,
    delay: i * 0.25,
    widthPercent: 100,
  }))

  // Duplicated ticker items (4x for seamless)
  const tickerContent = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS]

  // Duplicated companies (4x)
  const trustedContent = [
    ...COMPANY_LOGOS,
    ...COMPANY_LOGOS,
    ...COMPANY_LOGOS,
    ...COMPANY_LOGOS,
  ]

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#" className="logo">
            Alwayzz<span className="trademark">®</span>
          </a>

          <button
            className="menu-btn"
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            Menu
            <ChevronUp size={16} />
          </button>
        </div>
      </nav>

      {/* Full-screen Drawer */}
      <div className={`drawer ${isMenuOpen ? 'open' : ''}`}>
        <button className="drawer-close" onClick={closeMenu} aria-label="Close menu">
          Close
        </button>

        <div className="drawer-nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={closeMenu}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="drawer-footer">
          © {new Date().getFullYear()} Alwayzz. All rights reserved.
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        {/* Background handled via ::before in CSS */}

        {/* Curved decorative lines - sides */}
        <div className="curved-lines">
          {leftLines.map((line) => (
            <div
              key={line.id}
              className="curved-line"
              style={{
                left: `${line.left}px`,
                width: `${line.width}px`,
                animationDelay: `${line.delay}s`,
              }}
            />
          ))}
          {rightLines.map((line) => (
            <div
              key={line.id}
              className="curved-line right"
              style={{
                right: `${line.right}px`,
                width: `${line.width}px`,
                animationDelay: `${line.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Top horizontal lines (mobile only) */}
        <div className="top-lines">
          {topLines.map((line) => (
            <div
              key={line.id}
              className="top-line"
              style={{
                top: `${line.top}px`,
                animationDelay: `${line.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="hero-content">
          {/* Ticker */}
          <div className="ticker">
            <div className="ticker-track">
              {tickerContent.map((item, index) => (
                <span key={index} className="ticker-item">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Title */}
          <h1 className="hero-title">
            Premium creative{' '}
            <span className="serif">alwayzz</span>
            <sup>®</sup> on demand.
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            A flexible design partnership for founders, brands, and agencies who want top craft delivered on their timeline.
          </p>

          {/* CTAs */}
          <div className="cta-row">
            <button className="btn-primary">View Plans</button>

            <a href="#get-in-touch" className="btn-book">
              <img
                src="https://framerusercontent.com/images/hfneFL6CHBi5BnNvCeOaqU9HqE4.png"
                alt="Avatar"
                className="avatar"
              />
              <div className="book-text">
                <span className="book-primary">Chat for 15 minutes</span>
                <span className="book-secondary">Pick a slot</span>
              </div>
              <span className="green-dot" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom progressive blur */}
        <div className="hero-blur" />
      </section>

      {/* Trusted By */}
      <section className="trusted">
        <div className="trusted-label">
          Partnered with top-tier companies globally
        </div>

        <div className="trusted-marquee">
          <div className="trusted-track">
            {trustedContent.map((company, index) => (
              <span
                key={`${company.name}-${index}`}
                className={`trusted-item ${company.className}`}
              >
                {company.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default App
