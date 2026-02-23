import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CreditCard, Heart, Gift } from 'lucide-react';

const Donation: React.FC = () => {
  const { t } = useTranslation();

  const options = [
    { icon: <Heart className="text-primary" />, title: "תרומה חד פעמית", desc: "עזרו לנו לתמוך בעוד משפחה השבוע." },
    { icon: <Gift className="text-secondary" />, title: "תרומה חודשית", desc: "הבטיחו את המשכיות הפעילות שלנו לאורך זמן." },
    { icon: <CreditCard className="text-text" />, title: "הקדשת פעילות", desc: "הנציחו אדם יקר או חגגו אירוע משמח בתרומה." },
  ];

  return (
    <section id="donate" className="section-padding bg-primary/5">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-extrabold mb-4 text-text">{t('donation.title')}</h2>
          <p className="text-xl text-text/70">{t('donation.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {options.map((opt, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-10 flex flex-col items-center text-center"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2.5rem' }}
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6" style={{ width: '4rem', height: '4rem', background: 'white', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                {opt.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{opt.title}</h3>
              <p className="text-text/70 mb-8">{opt.desc}</p>
              <button className="mt-auto px-6 py-3 bg-text text-white rounded-xl font-bold hover:bg-primary transition-all">בחרו בסכום</button>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-5 bg-primary text-white rounded-2xl font-bold shadow-xl shadow-primary/20 text-xl"
          style={{ padding: '1.25rem 2.5rem', background: 'var(--primary)', color: 'white', borderRadius: '1rem', fontWeight: 'bold', fontSize: '1.25rem' }}
        >
          {t('donation.cta')}
        </motion.button>
      </div>
    </section>
  );
};

export default Donation;
