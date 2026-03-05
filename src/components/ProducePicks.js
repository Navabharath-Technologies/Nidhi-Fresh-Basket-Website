import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

import apple from '../assets/apple.jpg';
import banana from '../assets/banana.jpg';
import beetroot from '../assets/beetroot.jpg';
import broccoli from '../assets/broccoli.jpg';
import capsicum from '../assets/capsicum.jpg';
import cauliflower from '../assets/cauliflower.jpg';
import corn from '../assets/corn.jpg';
import cucumber from '../assets/cucumber.png';
import dragonFruit from '../assets/dragon-fruit.jpg';
import garlic from '../assets/garlic.jpg';
import grapes from '../assets/grapes.jpg';
import guava from '../assets/guava.png';
import lemon from '../assets/lemon.png';
import mango from '../assets/mango.jpg';
import onion from '../assets/onion.jpg';
import orange from '../assets/orange.jpg';
import papaya from '../assets/papaya.jpg';
import pineapple from '../assets/pineapple.jpg';
import pomegranate from '../assets/pomegranate.jpg';
import potato from '../assets/potato.png';
import spinach from '../assets/spinach.jpg';
import strawberry from '../assets/strawberry.jpg';
import tomato from '../assets/tomato.jpg';
import watermelon from '../assets/watermelon.jpg';

const produceItems = [
    { img: apple, name: "Apple", emoji: "🍎", bg: "#FFE0E0" },
    { img: banana, name: "Banana", emoji: "🍌", bg: "#FFF9C4" },
    { img: mango, name: "Mango", emoji: "🥭", bg: "#FFE0B2" },
    { img: orange, name: "Orange", emoji: "🍊", bg: "#FFE0B2" },
    { img: grapes, name: "Grapes", emoji: "🍇", bg: "#E8D5F5" },
    { img: pineapple, name: "Pineapple", emoji: "🍍", bg: "#FFF9C4" },
    { img: watermelon, name: "Watermelon", emoji: "🍉", bg: "#FCE4EC" },
    { img: pomegranate, name: "Pomegranate", emoji: "🍎", bg: "#FFCDD2" },
    { img: strawberry, name: "Strawberry", emoji: "🍓", bg: "#FFCDD2" },
    { img: papaya, name: "Papaya", emoji: "🍈", bg: "#FFE0B2" },
    { img: dragonFruit, name: "Dragon Fruit", emoji: "🐉", bg: "#FCE4EC" },
    { img: lemon, name: "Lemon", emoji: "🍋", bg: "#FFF9C4" },
    { img: guava, name: "Guava", emoji: "🍏", bg: "#DCEDC8" },
    { img: corn, name: "Corn", emoji: "🌽", bg: "#FFF9C4" },
    { img: tomato, name: "Tomato", emoji: "🍅", bg: "#FFCDD2" },
    { img: potato, name: "Potato", emoji: "🥔", bg: "#FFF8E1" },
    { img: onion, name: "Onion", emoji: "🧅", bg: "#E8D5F5" },
    { img: beetroot, name: "Beetroot", emoji: "🍠", bg: "#FFCDD2" },
    { img: cauliflower, name: "Cauliflower", emoji: "🥦", bg: "#F5F5F5" },
    { img: broccoli, name: "Broccoli", emoji: "🥦", bg: "#DCEDC8" },
    { img: capsicum, name: "Capsicum", emoji: "🫑", bg: "#DCEDC8" },
    { img: cucumber, name: "Cucumber", emoji: "🥒", bg: "#DCEDC8" },
    { img: garlic, name: "Garlic", emoji: "🧄", bg: "#FFF8E1" },
    { img: spinach, name: "Spinach", emoji: "🥬", bg: "#DCEDC8" },
];

const VISIBLE_COUNT = 8;

const ProduceCircle = ({ item, t }) => {
    const [errored, setErrored] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center gap-2 group cursor-pointer"
        >
            <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary/30 shadow-md ring-2 ring-primary/10 group-hover:ring-primary/50 group-hover:border-primary transition-all duration-300 flex items-center justify-center"
                style={{ backgroundColor: item.bg }}
            >
                {!errored ? (
                    <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="eager"
                        onError={() => setErrored(true)}
                    />
                ) : (
                    <span className="text-3xl md:text-4xl select-none">{item.emoji}</span>
                )}
            </div>
            <span className="text-gray-700 text-sm md:text-base font-bold tracking-wide text-center group-hover:text-primary transition-colors">
                {t(`produce.${item.name}`) || item.name}
            </span>
        </motion.div>
    );
};

const ProducePicks = ({ onComingSoon }) => {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % produceItems.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    const visibleItems = Array.from({ length: VISIBLE_COUNT }, (_, i) =>
        produceItems[(currentIndex + i) % produceItems.length]
    );

    return (
        <section className="bg-white py-10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {t('sections.producePicks')}
                    </h2>
                </div>
                <div className="relative overflow-hidden">
                    <AnimatePresence mode="popLayout" initial={false}>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -80 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="flex justify-center flex-wrap gap-6 md:gap-8 cursor-pointer"
                        >
                            {visibleItems.map((item, i) => (
                                <div
                                    key={`${item.name}-${currentIndex}-${i}`}
                                >
                                    <ProduceCircle item={item} t={t} />
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center gap-1.5 mt-6">
                    {produceItems.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            aria-label={`Go to item ${i + 1}`}
                            className={`rounded-full transition-all duration-300 ${i === currentIndex
                                ? 'bg-primary w-5 h-1.5'
                                : 'bg-gray-300 w-1.5 h-1.5 hover:bg-primary/50'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProducePicks;
