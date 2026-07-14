import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronUp } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Projects', to: '/projects' },
  { label: 'Plans', to: '/plans' },
  { label: 'Team', to: '/team' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Get in Touch', to: '/contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${isHome ? 'navbar--transparent' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="logo">
            Alwayzz<span className="trademark">®</span>
          </Link>

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
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="drawer-footer">
          © {new Date().getFullYear()} Alwayzz. All rights reserved.
        </div>
      </div>
    </>
  )
}
