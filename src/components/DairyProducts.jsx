import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';

/* ───────────── ASSET IMPORTS ───────────── */
import freshPaneer from '../assets/Fresh Paneer.jpg';
import frozenPaneerCubes from '../assets/Frozen Paneer Cubes.jpg';
import cookingButter from '../assets/Cooking Butter.jpg';
import tableButter from '../assets/table butter.jpg';
import butterChiplet from '../assets/butter chiplet.jpg';
import milkymistGhee from '../assets/Milkymist Ghee.jpg';
import naturalCheddar from '../assets/Natural Cheddar Cheese.jpg';
import creamCheese from '../assets/cream cheese.jpg';
import cheeseCubes from '../assets/cheese cubes.jpg';
import cheeseBlock from '../assets/cheese block.jpg';
import fillerCheese from '../assets/Filler Cheese.jpg';
import cheeseSpread from '../assets/cheese spread.jpg';
import cheeseSlices from '../assets/Cheese slices.jpg';
import processedCheese from '../assets/Processed Cheese (High Melt).jpg';
import pouchCurd from '../assets/Pouch Curd.jpg';
import setCurd from '../assets/set curd.jpg';
import fruitYogurt from '../assets/Fruit Yogurt.jpg';
import greekYogurt from '../assets/Greek Yogurt.jpg';
import skyrYogurt from '../assets/Skyr Yogurt.jpg';
import skyrMixedFruit from '../assets/Skyr Mixed Fruit.jpg';
import mozzarellaTube from '../assets/Mozzarella Pizza Cheese - Tube.jpg';
import mozzarellaCheese from '../assets/Mozzarella Pizza cheese.jpg';
import mozzarellaDiced from '../assets/Pizza Cheese - Mozzarella Diced.jpg';
import mozzarellaShredded from '../assets/Pizza Cheese Mozzarella Shredded.jpg';
import gheeTin from '../assets/Ghee - Tin.jpg';
import gheePetJar from '../assets/Ghee Pet Jar.jpg';
import gheePillowPouch from '../assets/Ghee Pillow Pouch.jpg';
import gheePouch from '../assets/Ghee Pouch.jpg';
import gheeSachet from '../assets/Ghee Sachet.jpg';
import highProtein50g from '../assets/High-Protein 50g.jpg';
import briyasTofu from '../assets/Briyas Tofu Paneer – 200g.jpg';
import capellaCone from '../assets/Capella cone.jpg';
import capellaBar from '../assets/capella bar.jpg';
import capellaDuet from '../assets/Capella Duet-2.jpg';
import cassata from '../assets/cassata.jpg';
import duetIceCream from '../assets/duet ice cream .jpg';
import familyPack from '../assets/family pack.jpg';
import familyTreats from '../assets/family treats.jpg';
import frostyFrills from '../assets/frosty frills.jpg';
import frostyFrillsCheesecake from '../assets/frosty frills(Cheese cake).jpg';
import iceCandy from '../assets/ice candy.jpg';
import imperialTubes from '../assets/Imperial tubes.jpg';
import kulfi from '../assets/kulfi.jpg';
import largeCups from '../assets/large cups.jpg';
import mediumCups from '../assets/medium cups.jpg';
import megaPartyPack from '../assets/Mega party pack.jpg';
import sandwitch from '../assets/sandwitch.jpg';
import sorbet from '../assets/sorbet.jpg';
import sugarFree from '../assets/sugar free.jpg';
import sundaeCup from '../assets/sundae cup.jpg';
import probioticCurd from '../assets/probiotic curd - Copy.jpg';
import bucketCurd from '../assets/bucket curd - Copy.jpg';

/* ───────────── PRODUCT-BASED FILTERS ───────────── */
const filters = [
    { id: 'all', label: 'All Products' },
    { id: 'paneer', label: 'Paneer' },
    { id: 'butter', label: 'Butter' },
    { id: 'ghee', label: 'Ghee' },
    { id: 'cheese', label: 'Cheese' },
    { id: 'curd-yogurt', label: 'Curd & Yogurt' },
    { id: 'mozzarella', label: 'Mozzarella' },
    { id: 'ice-cream', label: 'Ice Cream' },
];

/* ───────────── ALL PRODUCTS WITH CATEGORY TAG ───────────── */
const allProducts = [
    /* ── Paneer ── */
    { id: 'p1', cat: 'paneer', name: 'Paneer', variants: ['100g', '200g', '500g', '1Kg'], img: freshPaneer, desc: 'Fresh, soft & creamy cottage cheese for every Indian dish.' },
    { id: 'p2', cat: 'paneer', name: 'High Protein Paneer', variants: ['200g', '500g'], img: highProtein50g, desc: 'Extra protein-packed paneer for fitness enthusiasts.' },
    { id: 'p3', cat: 'paneer', name: 'Frozen Paneer Cubes', variants: ['200g', '500g', '1Kg'], img: frozenPaneerCubes, desc: 'Pre-cut, ready-to-cook paneer cubes. Zero prep needed.' },

    /* ── Butter ── */
    { id: 'b1', cat: 'butter', name: 'Butter', variants: ['100g', '200g', '500g'], img: butterChiplet, desc: 'Smooth, rich & made from pure cream.' },
    { id: 'b2', cat: 'butter', name: 'Cooking Butter', variants: [], img: cookingButter, desc: 'Ideal for gravies, parathas & everyday cooking.' },
    { id: 'b3', cat: 'butter', name: 'Table Butter', variants: [], img: tableButter, desc: 'Light, spreadable butter for your toast & breads.' },
    { id: 'b4', cat: 'butter', name: 'Table Butter Tub', variants: ['200g'], img: tableButter, desc: 'Convenient tub pack for easy spreading.' },
    { id: 'b5', cat: 'butter', name: 'Cooking Butter Tub', variants: [], img: cookingButter, desc: 'Kitchen-ready tub for hassle-free cooking.' },

    /* ── Ghee ── */
    { id: 'g1', cat: 'ghee', name: 'Milkymist Ghee', variants: [], img: milkymistGhee, desc: 'Pure cow ghee with rich aroma.' },
    { id: 'g2', cat: 'ghee', name: 'Ghee Tin', variants: [], img: gheeTin, desc: 'Ghee in airtight tin for lasting freshness.' },
    { id: 'g3', cat: 'ghee', name: 'Ghee Pet Jar', variants: [], img: gheePetJar, desc: 'Convenient PET jar packaging.' },
    { id: 'g4', cat: 'ghee', name: 'Ghee Pillow Pouch', variants: [], img: gheePillowPouch, desc: 'Affordable pillow pouch ghee pack.' },
    { id: 'g5', cat: 'ghee', name: 'Ghee Pouch', variants: [], img: gheePouch, desc: 'Standard pouch ghee for everyday use.' },
    { id: 'g6', cat: 'ghee', name: 'Ghee Sachet', variants: [], img: gheeSachet, desc: 'Single-use sachet — perfect for travel.' },

    /* ── Cheese ── */
    { id: 'c1', cat: 'cheese', name: 'Cheddar Cheese', variants: ['200g', '1Kg'], img: naturalCheddar, desc: 'Aged, sharp cheddar — perfect for burgers & sandwiches.' },
    { id: 'c2', cat: 'cheese', name: 'High Protein Cheddar', variants: ['200g'], img: naturalCheddar, desc: 'Protein-rich cheddar for health-conscious foodies.' },
    { id: 'c3', cat: 'cheese', name: 'Cream Cheese', variants: ['200g', '400g', '1Kg'], img: creamCheese, desc: 'Silky smooth cream cheese for baking & spreading.' },
    { id: 'c5', cat: 'cheese', name: 'Natural Cheese', variants: [], img: naturalCheddar, desc: 'Minimally processed, pure dairy goodness.' },
    { id: 'c6', cat: 'cheese', name: 'Processed Cheddar', variants: [], img: processedCheese, desc: 'Melty, versatile cheese for quick meals.' },
    { id: 'c7', cat: 'cheese', name: 'Cheese Cubes', variants: [], img: cheeseCubes, desc: 'Bite-sized cheese cubes, great for snacking.' },
    { id: 'c8', cat: 'cheese', name: 'Cheese Block', variants: ['200g', '500g', '1Kg'], img: cheeseBlock, desc: 'Bulk cheese block for slicing & grating.' },
    { id: 'c10', cat: 'cheese', name: 'Filler Cheese', variants: ['500g'], img: fillerCheese, desc: 'Economical cheese for food service & bulk use.' },
    { id: 'c11', cat: 'cheese', name: 'Processed Cheese Tin', variants: [], img: processedCheese, desc: 'Classic tinned cheese for lasting freshness.' },
    { id: 'c12', cat: 'cheese', name: 'Cheese Spread', variants: ['Garlic', 'Pepper', 'Plain'], img: cheeseSpread, desc: 'Creamy spread in multiple flavours.' },
    { id: 'c13', cat: 'cheese', name: 'Cheese Slices', variants: ['100g', '200g', '480g', '765g'], img: cheeseSlices, desc: 'Individually wrapped slices for perfect portions.' },

    /* ── Curd & Yogurt ── */
    { id: 'cy1', cat: 'curd-yogurt', name: 'Bucket Curd', variants: [], img: bucketCurd, desc: 'Thick, creamy curd in family-size bucket.' },
    { id: 'cy2', cat: 'curd-yogurt', name: 'Probiotic Curd', variants: [], img: probioticCurd, desc: 'Gut-friendly curd with live cultures.' },
    { id: 'cy3', cat: 'curd-yogurt', name: 'Pouch Curd', variants: [], img: pouchCurd, desc: 'Fresh curd in convenient pouch packaging.' },
    { id: 'cy4', cat: 'curd-yogurt', name: 'Set Curd', variants: [], img: setCurd, desc: 'Firm-set curd with traditional taste.' },
    { id: 'cy6', cat: 'curd-yogurt', name: 'Fruit Yogurt', variants: ['Blueberry', 'Strawberry', 'Peach', 'Mango'], img: fruitYogurt, desc: 'Fruity, creamy yogurt in multiple flavours.' },
    { id: 'cy7', cat: 'curd-yogurt', name: 'Greek Yogurt', variants: ['High Protein'], img: greekYogurt, desc: 'Thick, high-protein Greek-style yogurt.' },
    { id: 'cy8', cat: 'curd-yogurt', name: 'Skyr Plain Yogurt', variants: [], img: skyrYogurt, desc: 'Icelandic-style yogurt — rich & creamy.' },
    { id: 'cy9', cat: 'curd-yogurt', name: 'Skyr Mixed Fruit', variants: [], img: skyrMixedFruit, desc: 'Skyr yogurt with bursts of real fruit.' },

    /* ── Mozzarella ── */
    { id: 'm1', cat: 'mozzarella', name: 'Mozzarella Pizza Cheese', variants: ['Tube', '200g', '1Kg'], img: mozzarellaTube, desc: 'Stretchy, melty mozzarella for perfect pizzas.' },
    { id: 'm2', cat: 'mozzarella', name: 'Mozzarella Diced', variants: [], img: mozzarellaDiced, desc: 'Pre-diced mozzarella for quick pizza prep.' },
    { id: 'm3', cat: 'mozzarella', name: 'Mozzarella Shredded', variants: [], img: mozzarellaShredded, desc: 'Shredded mozzarella — even melt, great coverage.' },
    { id: 'm4', cat: 'mozzarella', name: 'Mozzarella + Cheddar Blend', variants: [], img: mozzarellaCheese, desc: 'Best of both — stretchy & sharp.' },

    /* ── Ice Cream ── */
    { id: 'ic1', cat: 'ice-cream', name: 'Capella Cone', variants: [], img: capellaCone, desc: 'Crispy cone loaded with creamy ice cream.' },
    { id: 'ic2', cat: 'ice-cream', name: 'Capella Bar', variants: [], img: capellaBar, desc: 'Choco-coated ice cream bar for on-the-go treats.' },
    { id: 'ic3', cat: 'ice-cream', name: 'Capella Duet', variants: [], img: capellaDuet, desc: 'Two-flavour ice cream swirl — double the fun.' },
    { id: 'ic4', cat: 'ice-cream', name: 'Cassata', variants: [], img: cassata, desc: 'Classic multi-layered cassata ice cream.' },
    { id: 'ic5', cat: 'ice-cream', name: 'Duet Ice Cream', variants: [], img: duetIceCream, desc: 'Duo-flavoured ice cream cup.' },
    { id: 'ic6', cat: 'ice-cream', name: 'Family Pack', variants: [], img: familyPack, desc: 'Family-size ice cream tub for everyone.' },
    { id: 'ic7', cat: 'ice-cream', name: 'Family Treats', variants: [], img: familyTreats, desc: 'Assorted family treat ice cream pack.' },
    { id: 'ic8', cat: 'ice-cream', name: 'Frosty Frills', variants: [], img: frostyFrills, desc: 'Light, swirly frozen dessert.' },
    { id: 'ic9', cat: 'ice-cream', name: 'Frosty Frills Cheesecake', variants: [], img: frostyFrillsCheesecake, desc: 'Cheesecake-flavoured frozen indulgence.' },
    { id: 'ic10', cat: 'ice-cream', name: 'Ice Candy', variants: [], img: iceCandy, desc: 'Fruity ice candy for summer refreshment.' },
    { id: 'ic11', cat: 'ice-cream', name: 'Imperial Tubes', variants: [], img: imperialTubes, desc: 'Tube-style ice cream in premium flavours.' },
    { id: 'ic12', cat: 'ice-cream', name: 'Kulfi', variants: [], img: kulfi, desc: 'Traditional Indian kulfi — dense & aromatic.' },
    { id: 'ic13', cat: 'ice-cream', name: 'Large Cups', variants: [], img: largeCups, desc: 'Large ice cream cups for a fulfilling treat.' },
    { id: 'ic14', cat: 'ice-cream', name: 'Medium Cups', variants: [], img: mediumCups, desc: 'Perfectly portioned medium ice cream cups.' },
    { id: 'ic15', cat: 'ice-cream', name: 'Mega Party Pack', variants: [], img: megaPartyPack, desc: 'Giant party pack for celebrations.' },
    { id: 'ic16', cat: 'ice-cream', name: 'Sandwich', variants: [], img: sandwitch, desc: 'Ice cream sandwiched between crispy wafers.' },
    { id: 'ic17', cat: 'ice-cream', name: 'Sorbet', variants: [], img: sorbet, desc: 'Refreshing fruit sorbet — dairy-free delight.' },
    { id: 'ic18', cat: 'ice-cream', name: 'Sugar Free', variants: [], img: sugarFree, desc: 'Sugar-free ice cream for guilt-free indulgence.' },
    { id: 'ic19', cat: 'ice-cream', name: 'Sundae Cup', variants: [], img: sundaeCup, desc: 'Layered sundae with toppings & sauce.' },

];

/* ───────────── ANIMATION VARIANTS ───────────── */
const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.04 } },
};
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

/* ───────────── COMPONENT ───────────── */
import { useLanguage } from '../context/LanguageContext';

const DairyProducts = ({ onAddToCart, onComingSoon }) => {
    const { t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState('all');

    const dairyFilters = [
        { id: 'all', label: t('dairyFilters.all') || 'All Products' },
        { id: 'paneer', label: t('dairyFilters.paneer') || 'Paneer' },
        { id: 'butter', label: t('dairyFilters.butter') || 'Butter' },
        { id: 'ghee', label: t('dairyFilters.ghee') || 'Ghee' },
        { id: 'cheese', label: t('dairyFilters.cheese') || 'Cheese' },
        { id: 'curd-yogurt', label: t('dairyFilters.curd-yogurt') || 'Curd & Yogurt' },
        { id: 'mozzarella', label: t('dairyFilters.mozzarella') || 'Mozzarella' },
        { id: 'ice-cream', label: t('dairyFilters.ice-cream') || 'Ice Cream' },
    ];

    const filtered = activeFilter === 'all'
        ? allProducts
        : allProducts.filter(p => p.cat === activeFilter);

    return (
        <section id="dairy" className="section" style={{ background: '#fafdfb' }}>
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-10">
                    <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">{t('sections.dairyLabel')}</h4>
                    <h2 className="text-4xl md:text-5xl font-bold mb-3 text-text-main">{t('sections.dairyProducts')}</h2>
                    <p className="text-text-muted text-xl italic font-medium">{t('sections.dairySubtitle') !== 'sections.dairySubtitle' ? t('sections.dairySubtitle') : 'Pure, Farm-Fresh & Delivered Daily'}</p>
                    <div className="w-20 h-1 bg-primary mx-auto mt-5 rounded-full"></div>
                </div>

                {/* Filter Pills */}
                <div
                    className="flex overflow-x-auto justify-start lg:justify-center items-center gap-2 md:gap-3 mb-10 pb-4 w-full px-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        div::-webkit-scrollbar { display: none; }
                    `}} />
                    {dairyFilters.map(f => (
                        <button
                            key={f.id}
                            onClick={() => setActiveFilter(f.id)}
                            className={`whitespace-nowrap flex-shrink-0 px-4 md:px-5 py-2.5 rounded-full font-bold transition-all duration-300 border text-[13px] md:text-sm lg:text-base ${activeFilter === f.id
                                ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105'
                                : 'bg-white text-gray-500 border-gray-200 hover:border-primary/50 hover:text-primary hover:shadow-sm'
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="flex flex-wrap justify-center gap-5 max-w-6xl mx-auto"
                    >
                        {filtered.map((product, idx) => (
                            <motion.div
                                key={product.id}
                                variants={cardVariants}
                                whileHover={{ y: -8 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                className="bg-white rounded-[24px] overflow-hidden border border-gray-100 group flex flex-col transition-all duration-300 hover:border-primary/30 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] relative w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.25rem)] min-w-[300px]"
                            >
                                {/* Stage/Image Area */}
                                <div className="relative h-[220px] overflow-hidden bg-gradient-to-b from-[#f8fbf9] to-white group-hover:from-[#f0f9f3] transition-colors duration-500 flex items-center justify-center pt-2 border-b border-gray-50">
                                    {/* Soft back-glow */}
                                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-50 group-hover:scale-110 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>

                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="relative z-10 w-[85%] h-[85%] object-contain drop-shadow-sm group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 ease-out"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1 relative z-20 bg-white">
                                    {/* Title & Badge */}
                                    <div className="flex items-start justify-between gap-3 mb-2">
                                        <h3 className="text-[20px] font-extrabold text-gray-900 group-hover:text-primary transition-colors leading-tight">
                                            {t(`dairyItems.${product.id}.name`) !== `dairyItems.${product.id}.name` ? t(`dairyItems.${product.id}.name`) : product.name}
                                        </h3>
                                        <span className="shrink-0 bg-gradient-to-tr from-primary/10 to-primary/5 text-primary border border-primary/20 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                            {dairyFilters.find(f => f.id === product.cat)?.label || product.cat}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-base text-gray-600 mb-4 leading-relaxed line-clamp-2 font-medium">
                                        {t(`dairyItems.${product.id}.desc`) !== `dairyItems.${product.id}.desc` ? t(`dairyItems.${product.id}.desc`) : product.desc}
                                    </p>

                                    {/* Variant Tags */}
                                    {product.variants.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 mb-5">
                                            {product.variants.map((v, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-gray-100 text-gray-700 text-sm font-bold px-3 py-1.5 rounded-md border border-gray-200"
                                                >
                                                    {v}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className="mt-auto pt-4 border-t border-gray-50">
                                        {/* CTA */}
                                        <button
                                            onClick={() => onAddToCart({
                                                id: product.id,
                                                name: product.name,
                                                price: '₹99', // Placeholder as per original code
                                                img: product.img,
                                                variant: product.variants[0] || null
                                            })}
                                            className="w-full flex items-center justify-center gap-2 bg-white border-2 border-primary/20 text-primary hover:bg-primary hover:border-primary hover:text-white font-bold text-sm py-2.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-primary/25 group/btn"
                                        >
                                            <ShoppingCart size={16} className="transition-transform group-hover/btn:scale-110" />
                                            {t('buttons.addToBasket')}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Bottom CTA */}
                <div className="text-center mt-10">
                    <p className="text-gray-400 italic mb-4 text-sm">
                        Want the full price list or bulk ordering? We're just a message away.
                    </p>
                    <a
                        href="https://wa.me/919865445868?text=Hello! I would like to get the full price list for MilkyMist Dairy products from Nidhi Fresh Basket."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <ShoppingCart size={18} />
                        {t('buttons.getFullPriceList')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default DairyProducts;
