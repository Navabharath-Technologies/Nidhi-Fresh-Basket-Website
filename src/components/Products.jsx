import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import apple from '../assets/apple.jpg';
import mango from '../assets/mango.jpg';
import broccoli from '../assets/broccoli.jpg';
import orange from '../assets/orange.jpg';
import grapes from '../assets/grapes.jpg';
import tomato from '../assets/tomato.jpg';
import dragonFruit from '../assets/dragon-fruit.jpg';
import spinach from '../assets/spinach.jpg';
import strawberry from '../assets/strawberry.jpg';
import blueberries from '../assets/blueberries.jpg';
import raspberries from '../assets/raspberries.jpg';
import cranberries from '../assets/cranberries.jpg';
import blackberries from '../assets/blackberries.jpg';
import mulberries from '../assets/Mulberries.jpg';
import beetroot from '../assets/beetroot.jpg';
import capsicum from '../assets/capsicum.jpg';
import cauliflower from '../assets/cauliflower.jpg';
import corn from '../assets/corn.jpg';
import cucumber from '../assets/cucumber.png';
import garlic from '../assets/garlic.jpg';
import onion from '../assets/onion.jpg';
import potato from '../assets/potato.png';

const Products = ({ onAddToCart, onComingSoon }) => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = [
        { key: 'All', label: t('productLabels.filterAll') },
        { key: 'Fruits', label: t('productLabels.filterFruits') },
        { key: 'Vegetables', label: t('productLabels.filterVegetables') },
        { key: 'Berries', label: t('productLabels.filterBerries') },
        { key: 'Seasonal Specials', label: t('productLabels.filterSeasonalSpecials') },
    ];

    const products = [
        { id: 1, name: 'Fresh Red Apples', price: '₹120/kg', category: 'Fruits', img: apple },
        { id: 2, name: 'Alphonso Mangoes', price: '₹600/box', category: 'Seasonal Specials', img: mango },
        { id: 3, name: 'Broccoli', price: '₹80/pc', category: 'Vegetables', img: broccoli },
        { id: 4, name: 'Sweet Oranges', price: '₹100/kg', category: 'Fruits', img: orange },
        { id: 5, name: 'Purple Grapes', price: '₹90/kg', category: 'Fruits', img: grapes },
        { id: 6, name: 'Cherry Tomatoes', price: '₹40/box', category: 'Vegetables', img: tomato },
        { id: 7, name: 'Dragon Fruit (Pitaya)', price: '₹150/pc', category: 'Seasonal Specials', img: dragonFruit },
        { id: 8, name: 'Baby Spinach', price: '₹30/bunch', category: 'Vegetables', img: spinach },
        { id: 9, name: 'Fresh Strawberries', price: '₹150/pack', category: 'Berries', img: strawberry },
        { id: 10, name: 'Blueberries', price: '₹250/pack', category: 'Berries', img: blueberries },
        { id: 11, name: 'Raspberries', price: '₹300/pack', category: 'Berries', img: raspberries },
        { id: 12, name: 'Blackberries', price: '₹280/pack', category: 'Berries', img: blackberries },
        { id: 13, name: 'Mulberries', price: '₹120/pack', category: 'Berries', img: mulberries },
        { id: 14, name: 'Cranberries', price: '₹200/pack', category: 'Berries', img: cranberries },
        { id: 15, name: 'Organic Beetroot', price: '₹60/kg', category: 'Vegetables', img: beetroot },
        { id: 16, name: 'Bell Peppers (Capsicum)', price: '₹40/pc', category: 'Vegetables', img: capsicum },
        { id: 17, name: 'Fresh Cauliflower', price: '₹50/pc', category: 'Vegetables', img: cauliflower },
        { id: 18, name: 'Sweet Corn', price: '₹30/pc', category: 'Vegetables', img: corn },
        { id: 19, name: 'Crunchy Cucumber', price: '₹40/kg', category: 'Vegetables', img: cucumber },
        { id: 20, name: 'Organic Garlic', price: '₹180/kg', category: 'Vegetables', img: garlic },
        { id: 21, name: 'Red Onions', price: '₹50/kg', category: 'Vegetables', img: onion },
        { id: 22, name: 'Fresh Potatoes', price: '₹40/kg', category: 'Vegetables', img: potato }
    ];

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <section id="products" className="section bg-bg-organic">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-main">{t('sections.allProducts')}</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-10 rounded-full"></div>

                    {/* Category Filter */}
                    <div
                        className="flex overflow-x-auto lg:flex-wrap lg:justify-center gap-4 mb-12 pb-4 scrollbar-none px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <style dangerouslySetInnerHTML={{
                            __html: `
                            div::-webkit-scrollbar { display: none; }
                        `}} />
                        {categories.map(cat => (
                            <button
                                key={cat.key}
                                onClick={() => setActiveCategory(cat.key)}
                                className={`whitespace-nowrap flex-shrink-0 px-8 py-3 rounded-full font-bold transition-all border text-base ${activeCategory === cat.key
                                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105'
                                    : 'bg-white text-text-muted border-gray-200 hover:border-primary hover:text-primary'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="flex flex-wrap justify-center gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                                transition={{
                                    layout: { type: 'spring', stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                    scale: { duration: 0.3 }
                                }}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] min-w-[280px]"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold mb-2 text-text-main group-hover:text-secondary transition-colors">{t(`productsGrid.${product.name}`) || product.name}</h3>
                                    <div className="flex flex-col items-center gap-4 mt-6">
                                        <span className="text-3xl font-black text-primary drop-shadow-sm">{product.price}</span>
                                        <button
                                            onClick={() => onAddToCart({
                                                id: product.id,
                                                name: product.name,
                                                price: product.price,
                                                img: product.img
                                            })}
                                            className="w-full btn-primary py-3 px-6 shadow-sm group-hover:shadow-md transition-all text-sm"
                                        >
                                            <ShoppingCart size={20} className="mr-2 inline" />
                                            {t('buttons.addToBasket')}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-20 text-center">
                    <p className="text-text-muted italic mb-6 text-lg">
                        {t('productLabels.pricesVary')}
                    </p>
                    <a
                        href="https://wa.me/919865445868?text=Hello! I would like to get the full price list for Nidhi Fresh Basket."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        {t('buttons.getFullPriceList')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Products;
