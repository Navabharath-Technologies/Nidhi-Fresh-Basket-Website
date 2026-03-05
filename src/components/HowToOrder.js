import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Send, Truck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HowToOrder = () => {
    const { t } = useLanguage();
    const steps = [
        {
            icon: <MousePointer2 size={40} />,
            title: t('howToOrder.step1Title'),
            desc: t('howToOrder.step1Desc')
        },
        {
            icon: <Send size={40} />,
            title: t('howToOrder.step2Title'),
            desc: t('howToOrder.step2Desc')
        },
        {
            icon: <Truck size={40} />,
            title: t('howToOrder.step3Title'),
            desc: t('howToOrder.step3Desc')
        }
    ];

    return (
        <section className="section bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h4 className="text-primary font-bold tracking-widest uppercase text-lg mb-4">{t('sections.howToOrderSubtitle')}</h4>
                    <h2 className="text-4xl md:text-5xl font-bold text-text-main">{t('sections.howToOrder')}</h2>
                </div>

                <div className="relative">
                    {/* Connector Line for Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-24 h-24 bg-white border-4 border-primary rounded-full flex items-center justify-center text-primary mb-8 shadow-xl relative">
                                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                                        {index + 1}
                                    </div>
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-text-main">{step.title}</h3>
                                <p className="text-text-muted text-lg max-w-xs mx-auto">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToOrder;
