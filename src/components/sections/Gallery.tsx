import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
];

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="section-padding bg-text/5">
      <div className="container">
        <div className="flex justify-between items-end mb-12" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h2 className="text-4xl font-extrabold text-text mb-2">{t('gallery.title')}</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: false }}
              className="aspect-square rounded-2xl overflow-hidden shadow-lg"
              style={{ aspectRatio: '1/1', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
            >
              <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
