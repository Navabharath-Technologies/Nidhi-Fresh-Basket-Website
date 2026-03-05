import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import heroBg from '../assets/hero-bg.jpg';

const Hero = ({ onComingSoon }) => {
    const { t } = useLanguage();

    return (
        <section
            className="relative flex items-start overflow-hidden"
            style={{ height: '100vh', minHeight: '700px' }}
        >
            {/* Background Image */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'brightness(0.85)',
                    transform: 'scale(1.05)',
                }}
            />

            {/* Dark gradient overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 1,
                    background: 'linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 100%)',
                }}
            />

            {/* Content */}
            <div className="container mx-auto px-4 relative text-white" style={{ zIndex: 2, paddingTop: '140px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="max-w-2xl"
                >
                    <span className="inline-block px-4 py-1.5 rounded-sm text-xs md:text-sm font-extrabold mb-6 tracking-widest uppercase text-white shadow-sm"
                        style={{ background: 'rgba(124,151,68,0.6)', backdropFilter: 'blur(8px)', borderColor: 'rgba(255,255,255,0.1)', borderWidth: '1px' }}>
                        {t('hero.badge')}
                    </span>

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
                        {t('hero.title1')} <br />
                        <span className="text-[#96e05d] italic font-black">{t('hero.titleHighlight')}</span> <br />
                        {t('hero.title2')}
                    </h1>

                    <p className="text-base md:text-lg mb-10 font-medium leading-relaxed max-w-xl" style={{ color: '#f3f4f6' }}>
                        {t('hero.subtitle').split('.').filter(Boolean).map((sentence, index, array) => (
                            <React.Fragment key={index}>
                                {sentence.trim()}.
                                {index === 1 && <br />}
                                {index === 1 && <span className="block mt-1"></span>}
                            </React.Fragment>
                        ))}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#products"
                            className="bg-gradient-to-r from-[#87995a] to-[#8d4747] hover:opacity-90 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 text-lg shadow-lg"
                        >
                            {t('hero.exploreBasket')}
                            <ArrowRight size={20} />
                        </a>
                        <button
                            onClick={onComingSoon}
                            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-white transition-all transform hover:scale-105 active:scale-95 shadow-lg border border-white/20"
                            style={{
                                background: 'rgba(64, 82, 45, 0.4)',
                                backdropFilter: 'blur(12px)'
                            }}
                        >
                            <MessageCircle size={22} className="text-[#4ade80]" />
                            {t('buttons.comingSoon')}
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
