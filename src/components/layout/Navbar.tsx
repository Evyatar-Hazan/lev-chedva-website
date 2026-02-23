import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    { name: t('nav.statistics'), href: '#stats' },
    { name: t('nav.donation'), href: '#donate' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-md py-2" : "bg-transparent"
    )}>
      <div className="container flex items-center justify-between mx-auto" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="text-2xl font-bold text-primary" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
          לב חדווה
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-primary transition-colors font-medium">
              {link.name}
            </a>
          ))}
          <button onClick={toggleLanguage} className="flex items-center gap-2 px-3 py-1 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all">
            <Globe size={18} />
            <span className="font-bold">{i18n.language === 'he' ? 'EN' : 'עב'}</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ display: 'none' }}>
           {/* Mobile menu toggle logic here if needed */}
        </button>
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
