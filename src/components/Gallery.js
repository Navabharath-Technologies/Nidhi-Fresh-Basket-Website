import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import photo1 from '../assets/photo1.png';
import photo2 from '../assets/photo 2.png';
import photo3 from '../assets/photo 3.png';
import photo4 from '../assets/photo4.png';
import photo5 from '../assets/photo5.png';
import photo6 from '../assets/photo 6.png';

const Gallery = () => {
    const { t } = useLanguage();
    const images = [
        { url: photo1, span: 'col-span-1 row-span-2' },
        { url: photo2, span: 'col-span-1 row-span-1' },
        { url: photo3, span: 'col-span-2 row-span-1' },
        { url: photo4, span: 'col-span-1 row-span-1' },
        { url: photo5, span: 'col-span-1 row-span-1' },
        { url: photo6, span: 'col-span-2 row-span-1' },
    ];

    return (
        <section id="gallery" className="section bg-bg-organic">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">{t('sections.gallerySubtitle1') || 'View Authenticity'}</h4>
                    <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6">{t('sections.galleryTitle') || 'Our Fresh World'}</h2>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        {t('sections.galleryDesc') || 'Take a look at the real produce handled with care. From the farm to your basket.'}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[800px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`${img.span} relative overflow-hidden rounded-3xl group shadow-md hover:shadow-2xl transition-all duration-500`}
                        >
                            <img
                                src={img.url}
                                alt={`Fresh Produce ${index + 1}`}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
