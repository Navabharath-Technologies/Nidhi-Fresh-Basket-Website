import React from 'react';
import { motion } from 'framer-motion';
import { TreePine, Heart, RefreshCw, Sun, ShieldCheck, UserCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Features = () => {
    const { t } = useLanguage();
    const features = [
        {
            icon: <TreePine size={32} />,
            title: t('featuresList.f1_title'),
            description: t('featuresList.f1_desc')
        },
        {
            icon: <Heart size={32} />,
            title: t('featuresList.f2_title'),
            description: t('featuresList.f2_desc')
        },
        {
            icon: <RefreshCw size={32} />,
            title: t('featuresList.f3_title'),
            description: t('featuresList.f3_desc')
        },
        {
            icon: <RefreshCw size={32} />,
            title: t('featuresList.f4_title'),
            description: t('featuresList.f4_desc')
        },
        {
            icon: <ShieldCheck size={32} />,
            title: t('featuresList.f5_title'),
            description: t('featuresList.f5_desc')
        },
        {
            icon: <UserCheck size={32} />,
            title: t('featuresList.f6_title'),
            description: t('featuresList.f6_desc')
        }
    ];

    return (
        <section className="section bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-main">{t('sections.features')}</h2>
                    <p className="text-xl text-text-muted">
                        {t('sections.featuresSubtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="p-10 rounded-2xl bg-bg-organic border-2 border-primary/20 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-text-main">{item.title}</h3>
                            <p className="text-text-muted leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
