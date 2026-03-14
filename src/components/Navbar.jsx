import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, Languages, UserPlus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/logo.png';

const Navbar = ({ onComingSoon }) => {
    const { t, lang, toggleLanguage } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav.home'), href: '#' },
        { name: t('nav.products'), href: '#products' },
        { name: t('nav.dairy'), href: '#dairy' },
        { name: t('nav.gallery'), href: '#gallery' },
        { name: t('nav.contact'), href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 relative z-10 flex justify-between items-center">
                <div className="flex items-center">
                    <a href="#" className="group">
                        <div className={`p-2 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:scale-105 ${isScrolled ? 'bg-white h-20' : 'bg-white h-28'}`}>
                            <img src={logo} alt="Nidhi Fresh Basket" className="h-full w-auto object-contain" />
                        </div>
                    </a>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`font-medium transition-colors hover:text-primary drop-shadow-sm ${isScrolled ? 'text-text-main' : 'text-white'}`}
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border-2 transition-all font-bold text-sm ${isScrolled ? 'border-primary/20 text-text-main hover:bg-gray-100' : 'border-white/20 text-white hover:bg-white/10'}`}
                    >
                        <Languages size={18} />
                        {lang === 'en' ? 'English' : 'ಕನ್ನಡ'}
                    </button>

                    <a
                        href="www.nidhifreshbasket.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-5 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-primary-light transition-all shadow-md active:scale-95"
                    >
                        <UserPlus size={18} />
                        {t('nav.registerNow')}
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleLanguage}
                        className={`p-2 rounded-full border-2 ${isScrolled ? 'border-primary/20 text-text-main' : 'border-white/20 text-white'}`}
                    >
                        <Languages size={20} />
                    </button>
                    <button
                        className="p-2 rounded-lg"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X size={28} className={isScrolled ? 'text-text-main' : 'text-white'} />
                        ) : (
                            <Menu size={28} className={isScrolled ? 'text-text-main' : 'text-white'} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transition-transform duration-500 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-bold text-text-main hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Mobile Language Toggle */}
                    <button
                        onClick={() => {
                            toggleLanguage();
                            setMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-3 bg-gray-100 px-8 py-3 rounded-2xl font-bold text-text-main"
                    >
                        <Languages size={24} />
                        {lang === 'en' ? 'English' : 'ಕನ್ನಡ'}
                    </button>

                    <a
                        href="https://www.nidhifreshbasket.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="btn-primary px-10 py-4 text-xl flex items-center gap-3"
                    >
                        <UserPlus size={22} />
                        {t('nav.registerNow')}
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

