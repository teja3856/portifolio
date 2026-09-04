import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Sparkles, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: isScrolled ? '12px 24px' : '20px 24px',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="glass-panel"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 24px',
          borderRadius: '9999px',
          border: isScrolled ? '1px solid var(--border-active)' : '1px solid var(--border-subtle)',
          boxShadow: isScrolled ? 'var(--shadow-md), var(--shadow-glow)' : 'var(--shadow-sm)',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontWeight: 800,
            fontSize: '1.25rem',
            fontFamily: 'var(--font-heading)',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'var(--accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 0 15px var(--accent-glow)',
            }}
          >
            <Code2 size={20} />
          </div>
          <span className="gradient-text">{PERSONAL_INFO.displayName}</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>.dev</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
          className="desktop-nav"
        >
          {navLinks.map(link => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  background: isActive ? 'var(--accent-gradient)' : 'transparent',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 14px var(--accent-glow)' : 'none',
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href={PERSONAL_INFO.resumeUrl}
            download="Teja_Santosh_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary desktop-cta"
            style={{ padding: '8px 16px', fontSize: '0.875rem' }}
          >
            <Download size={16} />
            Resume
          </a>

          <a href="#contact" className="btn btn-primary desktop-cta" style={{ padding: '8px 20px', fontSize: '0.875rem' }}>
            <Sparkles size={16} />
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            className="btn-icon mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="glass-panel"
          style={{
            position: 'absolute',
            top: '80px',
            left: '24px',
            right: '24px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            borderRadius: '20px',
            border: '1px solid var(--border-active)',
          }}
        >
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '12px 16px',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 600,
                color: activeSection === link.href.substring(1) ? 'var(--accent-primary)' : 'var(--text-primary)',
                background: activeSection === link.href.substring(1) ? 'rgba(79, 70, 229, 0.08)' : 'transparent',
              }}
            >
              {link.name}
            </a>
          ))}

          <a
            href={PERSONAL_INFO.resumeUrl}
            download="Teja_Santosh_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-secondary"
            style={{ width: '100%', marginTop: '4px' }}
          >
            <Download size={16} />
            Download Resume (PDF)
          </a>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '4px' }}
          >
            <Sparkles size={16} />
            Get In Touch
          </a>
        </div>
      )}

      {/* Mobile & Desktop Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav, .desktop-cta {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
