import React from 'react';
import { motion } from 'framer-motion';
import { Home, MessageCircle, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/logo.png';

const ComingSoon = ({ onBackToHome }) => {
    const { t } = useLanguage();
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full text-center"
            >
                <div className="mb-8 flex justify-center">
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); onBackToHome(); }}
                        className="p-4 bg-white rounded-2xl shadow-xl h-32 w-auto transition-transform duration-300 hover:scale-105"
                    >
                        <img src={logo} alt="Nidhi Fresh Basket" className="h-full w-auto object-contain" />
                    </a>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 p-4">
                        <Clock className="text-primary/10 w-24 h-24 -mr-8 -mt-8 rotate-12" />
                    </div>

                    <h1 className="text-4xl font-bold mb-4 text-text-main">
                        {t('nav.comingSoon')}
                    </h1>

                    <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>

                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        {t('comingSoon.desc')}
                    </p>

                    <div className="space-y-4">
                        <button
                            onClick={onBackToHome}
                            className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-2 group"
                        >
                            <Home size={20} className="group-hover:-translate-y-0.5 transition-transform" />
                            {t('comingSoon.backHome')}
                        </button>

                        <p className="text-sm text-gray-400">
                            {t('comingSoon.thankYou')}
                        </p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-gray-400 flex items-center justify-center gap-2 text-sm text-center"
                >
                    <span>{t('footer.rights')}</span>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ComingSoon;
