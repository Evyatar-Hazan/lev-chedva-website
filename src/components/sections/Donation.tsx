import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Building2, Smartphone, Heart, Package } from 'lucide-react';

const Donation: React.FC = () => {
  const { t } = useTranslation();

  const options = [
    { 
      icon: <Building2 className="w-8 h-8" />, 
      title: "העברה בנקאית", 
      desc: "העברה ישירה לחשבון שלנו",
      color: "from-blue-500 to-cyan-400",
      bgColor: "rgba(59, 130, 246, 0.08)",
      borderColor: "border-blue-200",
      details: [
        { label: "בנק", value: "מזרחי טפחות" },
        { label: "סניף", value: "479" },
        { label: "חשבון", value: "166555" },
        { label: "עבור", value: "לב חדוה" }
      ]
    },
    { 
      icon: <Smartphone className="w-8 h-8" />, 
      title: "ביט / PayBox", 
      desc: "תרומה מהירה וקלה",
      color: "from-green-500 to-emerald-400",
      bgColor: "rgba(34, 197, 94, 0.08)",
      borderColor: "border-green-200",
      phone: "054-5420068",
      action: "שלחו SMS"
    },
    { 
      icon: <Heart className="w-8 h-8" />, 
      title: "נדרים פלוס", 
      desc: "תרומה דרך פלטפורמת נדרים",
      color: "from-purple-500 to-pink-400",
      bgColor: "rgba(168, 85, 247, 0.08)",
      borderColor: "border-purple-200",
      url: "https://www.matara.pro/nedarimplus/online/?mosad=7005008",
      action: "בקרו באתר"
    },
    { 
      icon: <Package className="w-8 h-8" />, 
      title: "תרומת ציוד רפואי", 
      desc: "צרו קשר עבור תרומת ציוד",
      color: "from-red-500 to-orange-400",
      bgColor: "rgba(239, 68, 68, 0.08)",
      borderColor: "border-red-200",
      phone: "054-5420068",
      action: "שלחו הודעה"
    }
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {options.map((opt: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -15, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.3 }}
              className="glass-card flex flex-col items-center text-center h-full"
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                padding: '2.5rem',
                borderRadius: '1.5rem',
                border: `2px solid ${opt.borderColor ? (opt.borderColor === 'border-blue-200' ? '#bfdbfe' : opt.borderColor === 'border-green-200' ? '#bbf7d0' : opt.borderColor === 'border-purple-200' ? '#e9d5ff' : '#fecaca') : 'rgba(255, 255, 255, 0.5)'}`,
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <motion.div 
                whileHover={{ scale: 1.15, rotate: 5 }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${opt.color} shadow-lg flex items-center justify-center mb-6`}
                style={{ 
                  width: '4rem', 
                  height: '4rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ fontSize: '2rem', color: 'white' }}>
                  {opt.icon}
                </div>
              </motion.div>
              <h3 className="text-lg font-bold mb-2 text-text">{opt.title}</h3>
              <p className="text-text/70 mb-6 text-sm flex-grow">{opt.desc}</p>
              
              {opt.details && (
                <div className="text-sm text-text/75 mb-6 w-full text-right p-4 rounded-xl" style={{ fontSize: '0.875rem', lineHeight: '1.6', backgroundColor: opt.bgColor, borderLeft: `4px solid ${['#3b82f6', '#22c55e', '#a855f7', '#ef4444'][i]}` }}>
                  {opt.details.map((detail: any, idx: number) => (
                    <div key={idx} className="mb-2 flex justify-between items-center">
                      <span>{detail.value}</span>
                      <span className="font-semibold mx-2">:</span>
                      <span className="font-semibold" style={{ color: ['#3b82f6', '#22c55e', '#a855f7', '#ef4444'][i] }}>
                        {detail.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              
              {opt.phone && (
                <div className="text-sm font-mono p-4 rounded-xl w-full mb-6 border" style={{ 
                  fontSize: '0.95rem', 
                  direction: 'ltr',
                  backgroundColor: opt.bgColor,
                  borderColor: ['#3b82f6', '#22c55e', '#a855f7', '#ef4444'][i],
                  color: ['#3b82f6', '#22c55e', '#a855f7', '#ef4444'][i]
                }}>
                  {opt.phone}
                </div>
              )}
              
              {opt.url ? (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={opt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto px-6 py-3 bg-gradient-to-r ${opt.color} text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all`}
                >
                  {opt.action}
                </motion.a>
              ) : opt.phone ? (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://wa.me/972${opt.phone.replace('-', '')}?text=${encodeURIComponent('שלום, אני רוצה ללמוד על אפשרויות תרומה')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto px-6 py-3 bg-gradient-to-r ${opt.color} text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all`}
                >
                  {opt.action}
                </motion.a>
              ) : (
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-auto px-6 py-3 bg-gradient-to-r ${opt.color} text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all`}
                >
                  {opt.action || 'בחרו'}
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Donation;
