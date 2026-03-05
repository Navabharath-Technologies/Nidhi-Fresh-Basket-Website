import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/logo.png';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-primary text-white pt-12 pb-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-12">
                    <div className="col-span-1 lg:col-span-1 lg:col-span-5">
                        <a href="#" className="flex items-center mb-6 w-fit group">
                            <div className="p-2 bg-white rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-105">
                                <img src={logo} alt="Nidhi Fresh Basket" className="h-24 w-auto object-contain" />
                            </div>
                        </a>
                        <p className="text-gray-200 mb-6 leading-relaxed max-w-sm">
                            {t('footer.desc')}
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/nidhifreshbasket?igsh=bDJ1MHZoeWpsY3hs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-10 h-10 bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] rounded-full flex items-center justify-center transition-colors duration-300 shadow-sm"
                            >
                                <Instagram size={20} className="text-white transition-all duration-300 group-hover:scale-110" />
                            </a>
                            <a
                                href="https://www.instagram.com/nidhifreshbasket?igsh=bDJ1MHZoeWpsY3hs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-10 h-10 bg-white/10 hover:bg-[#1877F2] rounded-full flex items-center justify-center transition-colors duration-300 shadow-sm border border-transparent hover:border-transparent"
                            >
                                <Facebook size={20} className="text-white transition-all duration-300 group-hover:fill-white group-hover:scale-110" />
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="text-xl font-bold mb-6">{t('footer.quickLinks')}</h4>
                        <ul className="space-y-4 text-gray-200">
                            <li><a href="#" className="hover:text-white transition-colors">{t('nav.home')}</a></li>
                            <li><a href="#products" className="hover:text-white transition-colors">{t('nav.products')}</a></li>
                            <li><a href="#dairy" className="hover:text-white transition-colors">{t('nav.dairy')}</a></li>
                            <li><a href="#gallery" className="hover:text-white transition-colors">{t('nav.gallery')}</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">{t('nav.contact')}</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-4">
                        <h4 className="text-xl font-bold mb-6">{t('footer.categories')}</h4>
                        <ul className="space-y-4 text-gray-200">
                            <li><a href="#products" className="hover:text-white transition-colors">{t('footer.freshFruits')}</a></li>
                            <li><a href="#products" className="hover:text-white transition-colors">{t('footer.dailyVegetables')}</a></li>
                            <li><a href="#products" className="hover:text-white transition-colors">{t('footer.seasonalSpecials')}</a></li>
                            <li><a href="#products" className="hover:text-white transition-colors">{t('footer.organicGreens')}</a></li>
                            <li><a href="#dairy" className="hover:text-white transition-colors">{t('footer.dairyProducts')}</a></li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Bottom Bar with Light Background for visibility */}
            <div className="mt-16 bg-white py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
                        <p className="text-text-muted text-sm text-center md:text-left font-medium">
                            {t('footer.rights')}
                        </p>
                        <p className="text-primary text-base font-bold italic tracking-wide text-center">
                            "{t('footer.quote')}"
                        </p>
                        <p className="text-text-muted text-sm font-medium text-center md:text-right">
                            {t('footer.poweredBy')} <a href="https://www.navabharathtechnologies.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors underline decoration-secondary/30 underline-offset-4">Navabharath Technologies</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
