import React from 'react';
import { Flame, Star, Sparkles, Plus, Award } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const SpecialsPage = () => {
  const { addToCart } = useCart();
  const specials = MENU_ITEMS.filter(item => item.isBestseller || item.rating >= 4.8);

  const chefCombos = [
    {
      id: 'combo1',
      name: 'Hyderabadi Biryani Royal Feast',
      items: 'Chicken Biryani + Chicken Manchurian (2 Pcs) + Cold Mango Lassi + Raita',
      originalPrice: 420,
      price: 349,
      badge: 'Best Value Combo',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOwPiJSNkSIeR5RVlQxRzAAVxHkeu-AAtwa9G8S_tDqsF8OWDdsO8zSBTaOcmibcvZTXEXBU14Brvq9tAoF62ate3UnEI37ETAjt2aUtcFLqlqCwhcg2Z1lwzWQ_WMdJ1bud80RjVRxidaNBHvwrHk0x7_-Qy1d6p62R-rnEgWjLuxxCzWoQFlsVvN3UoHoiJ5qmPH0mFUnUpE270erH_j-kU5ryZKgSgKVTr1hr4judfdUZsOVlC-Q2XnWUYB3V8Z8DonOGHi60se'
    },
    {
      id: 'combo2',
      name: 'Paneer Butter Delight Box',
      items: 'Paneer Butter Masala + 2 Butter Naan + Veg Hakka Noodles + Gulab Jamun (2 Pcs)',
      originalPrice: 380,
      price: 299,
      badge: 'Pure Veg Special',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzu63j6XhU2EDnQjSVe-ypIvHq8ZQTJiBZfNo-vnZvQce1CvjAOrc3FPq6Z1RtyblhEphXJbbweYRwwrY8-8T6TwxzYRB3AP1oua8ZjWiD-urPjFRhlMXoi7v9IDdaSAIC9X2vXa8LqZ4FlHHNBk7XCkRPMTzsIY7qrJRMxQJlqBjX_FMDeEEIhIAafrBrF1OTQ9Ui0scuzQ9x2-YuxEkP3tpLJFvN6af-6pwPyyFpFgnE6dP5A6pIl_eHU2RJ9M4bGmyIrKA5gQNo'
    }
  ];

  return (
    <div className="pb-24 md:pb-32 px-3 sm:px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto space-y-6 sm:space-y-10 animate-fade-in pt-4 sm:pt-6">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-primary to-amber-700 text-white p-6 sm:p-12 rounded-3xl plate-shadow relative overflow-hidden space-y-2 sm:space-y-3">
        <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold font-label">
          <Sparkles className="w-3.5 h-3.5" /> Chef's Daily Recommendations
        </div>

        <h1 className="font-headline text-2xl sm:text-5xl font-extrabold tracking-tight">
          Golden Bowl Specials
        </h1>

        <p className="font-body text-xs sm:text-base opacity-90 max-w-xl leading-relaxed">
          Discover our most celebrated signature recipes, chef combo meals, and time-honored Dum Biryani dishes.
        </p>
      </div>

      {/* Chef Special Combos */}
      <section className="space-y-4 sm:space-y-6">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface">Chef Special Combos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {chefCombos.map((combo) => (
            <div 
              key={combo.id}
              className="bg-surface-container-low p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-outline-variant/30 plate-shadow flex flex-col sm:flex-row items-center gap-4 sm:gap-6 group hover:-translate-y-1 transition-all"
            >
              <img 
                src={combo.image} 
                alt={combo.name} 
                className="w-full sm:w-44 h-36 sm:h-44 rounded-xl sm:rounded-2xl object-cover"
              />
              <div className="space-y-2 sm:space-y-3 flex-1 w-full">
                <span className="bg-secondary text-white text-[9px] sm:text-[10px] font-label font-bold px-2.5 py-0.5 sm:py-1 rounded-full">
                  {combo.badge}
                </span>
                <h3 className="font-headline text-base sm:text-xl font-bold text-on-surface">{combo.name}</h3>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                  {combo.items}
                </p>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-baseline gap-1.5 sm:gap-2">
                    <span className="font-headline text-lg sm:text-2xl font-extrabold text-primary">₹{combo.price}</span>
                    <span className="text-[11px] sm:text-xs text-on-surface-variant line-through">₹{combo.originalPrice}</span>
                  </div>
                  <button
                    onClick={() => addToCart({ ...combo, isVeg: combo.badge.includes('Veg') })}
                    className="px-3.5 sm:px-4 py-1.5 sm:py-2 bg-primary text-on-primary font-label text-xs font-bold rounded-full hover:bg-opacity-90 active:scale-95 transition-all shadow-sm flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Order Combo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Specialties: 2 cards per row on mobile */}
      <section className="space-y-4 sm:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
            <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface">Highest Rated Dishes</h2>
          </div>
          <Link to="/menu" className="text-xs font-bold text-primary hover:underline">
            All Dishes →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
          {specials.map((item) => (
            <div 
              key={item.id}
              className="bg-surface p-2.5 sm:p-5 rounded-2xl sm:rounded-3xl border border-outline-variant/30 plate-shadow space-y-2 sm:space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-32 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden mb-2 sm:mb-3">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 bg-primary text-white text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full shadow">
                    Top Rated
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 sm:gap-1.5 truncate">
                    <span className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full flex-shrink-0 ${item.isVeg ? 'bg-emerald-600' : 'bg-red-600'}`} />
                    <h3 className="font-headline text-xs sm:text-base font-bold text-on-surface truncate">{item.name}</h3>
                  </div>
                  <div className="flex items-center gap-0.5 text-[10px] sm:text-xs font-bold text-amber-600 flex-shrink-0">
                    <Star className="w-3 h-3 fill-current" /> {item.rating}
                  </div>
                </div>

                <p className="font-body text-[10px] sm:text-xs text-on-surface-variant line-clamp-2 mt-1 sm:mt-2 leading-tight sm:leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-1.5 sm:pt-2 border-t border-outline-variant/20">
                <span className="font-headline text-sm sm:text-xl font-extrabold text-primary">₹{item.price}</span>
                <div className="flex gap-1 sm:gap-2">
                  <button
                    onClick={() => addToCart(item)}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold bg-primary text-on-primary rounded-full hover:bg-opacity-90 active:scale-95"
                  >
                    + Add
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
