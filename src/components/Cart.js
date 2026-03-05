import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBasket, X, Plus, Minus, Send, Trash2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Cart = ({ items, onUpdateQuantity, onRemoveItem, onClose, onCheckout }) => {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => {
        const price = parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
        return sum + (price * item.quantity);
    }, 0);

    const handleCheckout = (e) => {
        setIsOpen(false);
        if (onCheckout) {
            onCheckout(e);
        }
    };

    return (
        <>
            {/* Floating Cart Trigger */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 z-[60] bg-primary text-white p-4 rounded-full shadow-2xl flex items-center gap-2 group"
            >
                <ShoppingBasket size={24} />
                {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                        {totalItems}
                    </span>
                )}
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">
                    {t('buttons.viewBasket')}
                </span>
            </motion.button>

            {/* Cart Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[70]"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[80] shadow-2xl flex flex-col"
                        >
                            {/* Header */}
                            <div className="p-6 border-b flex items-center justify-between bg-primary text-white">
                                <div className="flex items-center gap-3">
                                    <ShoppingBasket size={24} />
                                    <h2 className="text-xl font-bold">{t('cart.title')}</h2>
                                    <span className="bg-white/20 px-2 py-0.5 rounded text-sm font-medium">
                                        {totalItems} {t('cart.items')}
                                    </span>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Items List */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                {items.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                                            <ShoppingBasket size={48} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800">{t('cart.empty')}</h3>
                                            <p className="text-gray-500">{t('cart.emptyDesc')}</p>
                                        </div>
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="btn-primary px-8"
                                        >
                                            {t('buttons.startShopping')}
                                        </button>
                                    </div>
                                ) : (
                                    items.map((item) => (
                                        <div key={item.cartId} className="flex gap-4 group">
                                            <div className="w-20 h-20 bg-gray-50 rounded-2xl overflow-hidden shrink-0 border border-gray-100 p-2">
                                                <img src={item.img} alt={t(`productsGrid.${item.name}`) || item.name} className="w-full h-full object-contain" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-start mb-1">
                                                    <h4 className="font-bold text-gray-900 truncate pr-2">{t(`productsGrid.${item.name}`) || item.name}</h4>
                                                    <button
                                                        onClick={() => onRemoveItem(item.cartId)}
                                                        className="text-gray-400 hover:text-red-500 p-1 transition-colors"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                                {item.variant && (
                                                    <p className="text-xs text-gray-500 mb-2 font-medium bg-gray-100 inline-block px-2 py-0.5 rounded">
                                                        {item.variant}
                                                    </p>
                                                )}
                                                <div className="flex items-center justify-between">
                                                    <span className="font-bold text-primary">{item.price}</span>
                                                    <div className="flex items-center bg-gray-50 rounded-lg p-1 border border-gray-100">
                                                        <button
                                                            onClick={() => onUpdateQuantity(item.cartId, -1)}
                                                            className="p-1 hover:bg-white rounded-md transition-colors text-gray-500"
                                                        >
                                                            <Minus size={14} />
                                                        </button>
                                                        <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                                                        <button
                                                            onClick={() => onUpdateQuantity(item.cartId, 1)}
                                                            className="p-1 hover:bg-white rounded-md transition-colors text-primary"
                                                        >
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>

                            {/* Footer */}
                            {items.length > 0 && (
                                <div className="p-6 border-t bg-gray-50 space-y-4">
                                    <div className="flex justify-between items-center text-lg font-bold">
                                        <span className="text-gray-600">{t('cart.total')}</span>
                                        <span className="text-primary text-2xl">₹{totalPrice}</span>
                                    </div>
                                    <button
                                        onClick={handleCheckout}
                                        className="w-full bg-secondary hover:bg-secondary-dark text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-secondary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        <Send size={20} />
                                        {t('cart.comingSoon')}
                                    </button>
                                    <p className="text-center text-xs text-gray-400">
                                        {t('cart.preparing')}
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Cart;
