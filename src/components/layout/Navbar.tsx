import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import logo from '../../assets/logoLevChedva.png';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'he' ? 'en' : 'he');
  };

  const navLinks = [
    { name: t('nav.home'), href: '#' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.activities'), href: '#gallery' },
    { name: t('nav.statistics'), href: '#stats' },
    { name: t('nav.donation'), href: '#donate' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled 
        ? "bg-white shadow-2xl py-3" 
        : "bg-white/90 backdrop-blur-md py-5 shadow-lg"
    )} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      backgroundColor: isScrolled ? '#ffffff' : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(12px)',
      boxShadow: isScrolled ? '0 15px 40px -10px rgba(0,0,0,0.15)' : '0 4px 20px -5px rgba(0,0,0,0.05)',
      padding: isScrolled ? '0.75rem 1.5rem' : '1.25rem 1.5rem',
      borderTop: '4px solid var(--primary)',
    }}>
      <div className="container" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src={logo} alt="Lev Chedva Logo" style={{ height: '55px', width: 'auto', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.05))' }} />
          <div className="text-3xl font-black text-primary" style={{ 
            fontSize: '1.75rem', 
            fontWeight: 900, 
            color: 'var(--primary)',
            letterSpacing: '-0.03em',
            lineHeight: 1
          }}>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="navbar-link" style={{
              color: 'var(--text)',
              fontSize: '0.95rem',
              fontWeight: 800,
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative'
            }}>
              {link.name}
            </a>
          ))}
          <button onClick={toggleLanguage} className="bg-primary hover:bg-primary-dark text-white" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.6rem 1.25rem',
            borderRadius: '0.75rem',
            backgroundColor: 'var(--primary)',
            color: 'white',
            fontWeight: 800,
            fontSize: '0.85rem',
            boxShadow: '0 8px 20px -6px rgba(230, 57, 70, 0.3)',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            <Globe size={18} />
            <span style={{ letterSpacing: '0.05em' }}>{i18n.language === 'he' ? 'ENGLISH' : 'עברית'}</span>
          </button>
        </div>
      </div>

      {/* Styled manually since I'm not using full Tailwind yet, just helpers */}
      <style>{`
        @media (max-width: 768px) {
          .hidden { display: none !important; }
        }
        @media (min-width: 769px) {
          .md\\:flex { display: flex !important; }
          .md\\:hidden { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
