import React, { createContext, useState, useContext } from 'react';
import { translations } from '../utils/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('en');

    const toggleLanguage = () => {
        setLang(prev => prev === 'en' ? 'kn' : 'en');
    };

    const t = (path) => {
        const keys = path.split('.');
        let result = translations[lang];
        for (const key of keys) {
            if (result[key]) {
                result = result[key];
            } else {
                return path; // Return key if not found
            }
        }
        return result;
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
