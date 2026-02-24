import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="glass-card p-8 md:p-16 grid md:grid-cols-2 gap-16" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', padding: '4rem' }}>
          <div>
            <h2 className="text-4xl font-extrabold mb-8 text-text">{t('contact.title')}</h2>
            <div className="space-y-8" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-text/50 font-bold uppercase tracking-wider">טלפון</div>
                  <div className="text-xl font-bold">054-5420068</div>
                </div>
              </div>
              <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-text/50 font-bold uppercase tracking-wider">אימייל</div>
                  <div className="text-xl font-bold">office@lev-chedva.org</div>
                </div>
              </div>
              <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="w-12 h-12 rounded-xl bg-text/10 text-text flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-text/50 font-bold uppercase tracking-wider">כתובת</div>
                  <div className="text-xl font-bold">ירושלים, ישראל</div>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="grid grid-cols-2 gap-4" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">{t('contact.name')}</label>
                <input type="text" className="p-4 rounded-xl border-2 border-text/5 bg-bg/50 focus:border-primary outline-none transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">{t('contact.phone')}</label>
                <input type="tel" className="p-4 rounded-xl border-2 border-text/5 bg-bg/50 focus:border-primary outline-none transition-all" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">{t('contact.email')}</label>
              <input type="email" className="p-4 rounded-xl border-2 border-text/5 bg-bg/50 focus:border-primary outline-none transition-all" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">{t('contact.message')}</label>
              <textarea rows={4} className="p-4 rounded-xl border-2 border-text/5 bg-bg/50 focus:border-primary outline-none transition-all"></textarea>
            </div>
            <button className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
              <Send size={20} />
              {t('contact.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
