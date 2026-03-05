import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBasket } from 'lucide-react';
import gymCombo from '../assets/Gym combo.jpg.png';
import familyCombo from '../assets/family combo.jpg';
import poojaCombo from '../assets/pooja combo final.jpg';

const combos = [
    {
        id: 'gym-combo',
        name: 'Gym Combo',
        image: gymCombo,
        contents: '2 Bananas + 1 Apple + 1 Guava',
        nutrition: [
            { label: 'Protein', value: '300mg' },
            { label: 'Calcium', value: '500mg' },
            { label: 'Energy', value: 'Instant Boost' }
        ],
        highlights: 'Natural Energy Boost',
        price: 99,
        color: 'border-blue-100 hover:border-blue-300'
    },
    {
        id: 'family-combo',
        name: 'Family Combo',
        image: familyCombo,
        contents: '4 Apples + 2 Oranges + 3 Bananas + 1 Watermelon',
        nutrition: [
            { label: 'Vitamin C', value: 'High' },
            { label: 'Fiber', value: 'Good' },
            { label: 'Portion', value: 'Family Sized' }
        ],
        highlights: 'Complete Daily Nutrition',
        price: 249,
        color: 'border-orange-100 hover:border-orange-300'
    },
    {
        id: 'pooja-combo',
        name: 'Pooja Combo',
        image: poojaCombo,
        contents: '1 Pomegranate + 2 Mangoes + 2 Bananas + 1 Coconut',
        nutrition: [
            { label: 'Pack', value: 'Traditional' },
            { label: 'Antioxidants', value: 'Rich' },
            { label: 'Fruits', value: 'Auspicious' }
        ],
        highlights: 'Auspicious Seasonal Fruits',
        price: 199,
        color: 'border-purple-100 hover:border-purple-300'
    }
];

import { useLanguage } from '../context/LanguageContext';

const ComboOffers = ({ onAddToCart, onComingSoon }) => {
    const { t } = useLanguage();

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                    >
                        {t('sections.comboOffers')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-gray-700 max-w-2xl mx-auto text-xl leading-relaxed"
                    >
                        {t('sections.comboSubtitle')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {combos.map((combo, index) => (
                        <motion.div
                            key={combo.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`bg-white rounded-3xl overflow-hidden border-2 transition-all duration-300 shadow-sm hover:shadow-xl ${combo.color}`}
                        >
                            <div className="relative h-80 overflow-hidden bg-gray-50">
                                <img
                                    src={combo.image}
                                    alt={combo.name}
                                    className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute bottom-4 left-4">
                                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                        {t('productLabels.hotDeal')}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{t(`combos.${combo.id}.name`) !== `combos.${combo.id}.name` ? t(`combos.${combo.id}.name`) : combo.name}</h3>
                                <p className="text-base text-gray-600 mb-4 h-12 overflow-hidden line-clamp-2">
                                    {t(`combos.${combo.id}.contents`) !== `combos.${combo.id}.contents` ? t(`combos.${combo.id}.contents`) : combo.contents}
                                </p>

                                <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">{t('productLabels.nutrition')}</span>
                                    </div>
                                    <div className="space-y-2">
                                        {combo.nutrition.map((item, i) => (
                                            <div key={i} className="flex justify-between items-center text-base">
                                                <span className="text-gray-700">{t(`combos.${combo.id}.nutrition.${i}.label`) !== `combos.${combo.id}.nutrition.${i}.label` ? t(`combos.${combo.id}.nutrition.${i}.label`) : item.label}</span>
                                                <span className="font-bold text-gray-900">{t(`combos.${combo.id}.nutrition.${i}.value`) !== `combos.${combo.id}.nutrition.${i}.value` ? t(`combos.${combo.id}.nutrition.${i}.value`) : item.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-400 line-through">₹{combo.price + 50}</span>
                                        <span className="text-3xl font-bold text-primary">₹{combo.price}</span>
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onAddToCart({
                                                id: combo.id,
                                                name: combo.name,
                                                price: `₹${combo.price}`,
                                                img: combo.image
                                            });
                                        }}
                                        className="bg-secondary hover:bg-secondary-dark text-white p-4 rounded-2xl transition-all duration-300 flex items-center justify-center group"
                                    >
                                        <ShoppingBasket size={24} className="group-hover:scale-110 transition-transform" />
                                        <span className="ml-2 font-bold px-1">{t('buttons.add')}</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComboOffers;
