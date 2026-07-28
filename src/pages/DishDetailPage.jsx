import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Flame, Plus, Minus, ShoppingBag, ShieldCheck } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { useCart } from '../context/CartContext';

export const DishDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const dish = MENU_ITEMS.find((item) => item.id === id) || MENU_ITEMS[0];

  return (
    <div className="pb-24 md:pb-32 px-3 sm:px-margin-mobile md:px-margin-desktop max-w-5xl mx-auto space-y-8 animate-fade-in pt-4 sm:pt-6">
      
      {/* Back button */}
      <button 
        onClick={() => navigate(-1)} 
        className="inline-flex items-center gap-2 text-xs font-bold text-on-surface hover:text-primary transition-colors bg-surface-container px-4 py-2 rounded-full border border-outline-variant/30 focus:ring-2 focus:ring-primary"
        aria-label="Back to menu"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Menu
      </button>

      {/* Main Detail Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Dish Image */}
        <div className="relative rounded-3xl overflow-hidden plate-shadow border border-outline-variant/30 bg-surface-container aspect-[4/3]">
          <img 
            src={dish.image} 
            alt={dish.name}
            width="600"
            height="450"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${dish.isVeg ? 'bg-emerald-600' : 'bg-red-600'}`}>
              {dish.isVeg ? 'Pure Veg' : 'Non-Veg'}
            </span>
            {dish.isBestseller && (
              <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                Bestseller
              </span>
            )}
          </div>
        </div>

        {/* Dish Info */}
        <div className="space-y-6 bg-surface-container-low p-6 sm:p-8 rounded-3xl border border-outline-variant/30 plate-shadow">
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-label text-xs font-bold text-secondary uppercase tracking-widest">
                Category: {dish.category}
              </span>
              <div className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
                <Star className="w-4 h-4 fill-current" /> {dish.rating} ({dish.reviews} Reviews)
              </div>
            </div>

            <h1 className="font-headline text-2xl sm:text-3xl font-extrabold text-on-surface leading-tight">
              {dish.name}
            </h1>

            <p className="font-headline text-3xl font-extrabold text-primary pt-1">
              ₹{dish.price}
            </p>
          </div>

          <p className="font-body text-xs sm:text-sm text-on-surface font-medium leading-relaxed">
            {dish.description}
          </p>

          {/* Dish Specs */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-surface p-3.5 rounded-2xl border border-outline-variant/20 flex items-center gap-2">
              <Flame className="w-5 h-5 text-secondary" />
              <div>
                <span className="text-xs text-on-surface font-medium block">Spice Level</span>
                <span className="text-xs font-bold text-on-surface">{dish.isSpicy ? 'Spicy & Flavorful' : 'Mild & Balanced'}</span>
              </div>
            </div>

            <div className="bg-surface p-3.5 rounded-2xl border border-outline-variant/20 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
              <div>
                <span className="text-xs text-on-surface font-medium block">Preparation</span>
                <span className="text-xs font-bold text-on-surface">Made Fresh to Order</span>
              </div>
            </div>
          </div>

          {/* Quantity Controls & Add to Cart */}
          <div className="pt-4 border-t border-outline-variant/20 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-3 bg-surface px-4 py-2 rounded-full border border-outline-variant/30">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="text-on-surface hover:text-primary transition-colors p-1 focus:ring-1 focus:ring-primary"
                aria-label={`Decrease quantity of ${dish.name}`}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-bold text-sm text-on-surface w-6 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="text-on-surface hover:text-primary transition-colors p-1 focus:ring-1 focus:ring-primary"
                aria-label={`Increase quantity of ${dish.name}`}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => addToCart(dish, quantity)}
              className="w-full sm:w-auto flex-1 py-3.5 bg-primary text-on-primary font-bold text-xs sm:text-sm rounded-full flex items-center justify-center gap-2 shadow-md hover:bg-opacity-90 active:scale-95 transition-all focus:ring-2 focus:ring-primary"
              aria-label={`Add ${quantity} of ${dish.name} to basket`}
            >
              <ShoppingBag className="w-4 h-4" /> Add {quantity} to Basket (₹{dish.price * quantity})
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
