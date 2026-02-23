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
        ? "bg-white/95 backdrop-blur-md shadow-xl py-3 border-b border-primary/10" 
        : "bg-white/40 backdrop-blur-sm py-5"
    )} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.4)',
      backdropFilter: 'blur(10px)',
      boxShadow: isScrolled ? '0 10px 30px -10px rgba(0,0,0,0.1)' : 'none',
      padding: isScrolled ? '0.75rem 1.5rem' : '1.25rem 1.5rem',
      borderBottom: isScrolled ? '1px solid rgba(230, 57, 70, 0.1)' : 'none'
    }}>
      <div className="container" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src={logo} alt="Lev Chedva Logo" style={{ height: '45px', width: 'auto' }} />
          <div className="text-2xl font-black text-primary" style={{ 
            fontSize: '1.5rem', 
            fontWeight: 900, 
            color: 'var(--primary)',
            letterSpacing: '-0.02em'
          }}>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-primary transition-all duration-300 font-bold text-sm tracking-wide" style={{
              color: 'var(--text)',
              fontSize: '0.9rem',
              fontWeight: 700,
              opacity: 0.8,
              transition: 'all 0.3s ease'
            }}>
              {link.name}
            </a>
          ))}
          <button onClick={toggleLanguage} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white hover:bg-primary-dark transition-all shadow-lg shadow-primary/20" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            borderRadius: '0.75rem',
            backgroundColor: 'var(--primary)',
            color: 'white',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(230, 57, 70, 0.2)'
          }}>
            <Globe size={18} />
            <span className="font-bold text-xs">{i18n.language === 'he' ? 'ENGLISH' : 'עברית'}</span>
          </button>
        </div>

        {/* Mobile Toggle - Disabled for now as per simplified design */}
        {/* <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ display: 'none' }}>
        </button> */}
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
