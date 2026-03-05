import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = ({ onComingSoon }) => {
    const { t } = useLanguage();

    return (
        <section id="contact" className="section bg-white">
            <div className="container mx-auto px-4">
                <div>
                    <div>
                        <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">{t('sections.contactUs') || 'Contact Us'}</h4>
                        <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-8">{t('sections.contact') || 'Get in Touch'}</h2>
                        <p className="text-lg text-text-muted mb-12 leading-relaxed">
                            {t('sections.contactDesc') || "Have questions or want to place a custom order? Reach out to us directly or visit our local distribution point. We're here to help you get the best nutrition."}
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-bg-organic rounded-2xl flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{t('sections.ourLocation')}</h3>
                                    <p className="text-text-muted">{t('sections.address')}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-bg-organic rounded-2xl flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{t('sections.phoneNumber')}</h3>
                                    <p className="text-text-muted">+91 98654 45868</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-bg-organic rounded-2xl flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{t('sections.emailAddress')}</h3>
                                    <p className="text-text-muted">contact@nidhifreshbasket.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-bg-organic rounded-2xl flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{t('sections.workingHours')}</h3>
                                    <p className="text-text-muted">{t('sections.workingHoursTime')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-4">
                            <a
                                href="https://wa.me/919865445868?text=Hello! I'm interested in ordering fresh produce from Nidhi Fresh Basket."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all shadow-lg shadow-green-200"
                            >
                                <MessageCircle size={24} />
                                {t('buttons.chatWhatsApp')}
                            </a>
                            <a href="tel:+919865445868" className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all shadow-lg shadow-primary/20">
                                <Phone size={24} />
                                {t('buttons.callNow')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
