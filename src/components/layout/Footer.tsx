import React from 'react';
import { Heart, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-text text-white py-16 px-6" style={{ background: 'var(--text)', color: 'white', padding: '4rem 1.5rem' }}>
      <div className="container grid md:grid-cols-4 gap-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
        <div className="col-span-1 md:col-span-1" style={{ gridColumn: 'span 1' }}>
          <div className="text-2xl font-bold text-primary mb-6" style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>לב חדווה</div>
          <p className="text-white/60 mb-8" style={{ color: 'rgba(255, 255, 255, 0.6)', marginBottom: '2rem' }}>
            עמותה רשומה בישראל הפועלת למען שיפור רווחתם הנפשית של החולים והקשישים.
          </p>
          <div className="flex gap-4" style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><Facebook size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><Instagram size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">ניווט מהיר</h4>
          <ul className="space-y-4 text-white/60" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li><a href="#" className="hover:text-primary transition-colors">בית</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">אודות</a></li>
            <li><a href="#activities" className="hover:text-primary transition-colors">פעילות</a></li>
            <li><a href="#donate" className="hover:text-primary transition-colors">תרומה</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">צור קשר</h4>
          <ul className="space-y-4 text-white/60" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li>טלפון: 050-1234567</li>
            <li>אימייל: office@lev-chedva.org</li>
            <li>כתובת: ירושלים, ישראל</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">לתרומה מהירה</h4>
          <p className="text-white/60 mb-6" style={{ color: 'rgba(255, 255, 255, 0.6)', marginBottom: '1.5rem' }}>סרקו את הקוד או לחצו על הכפתור.</p>
          <button className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all">לתרומה</button>
        </div>
      </div>

      <div className="container mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-sm" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center', color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.875rem' }}>
        <p>© {new Date().getFullYear()} עמותת לב חדווה. כל הזכויות שמורות. נבנה באהבה <Heart size={12} className="inline text-primary" fill="currentColor" style={{ display: 'inline', color: 'var(--primary)' }} /> על ידי Antigravity</p>
      </div>
    </footer>
  );
};

export default Footer;
