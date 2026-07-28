import React, { useState } from 'react';
import { Search, Plus, Flame, Leaf, Star } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const MenuPage = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all'); // all | veg | non-veg

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDiet = dietaryFilter === 'all' ||
                        (dietaryFilter === 'veg' && item.isVeg) ||
                        (dietaryFilter === 'non-veg' && !item.isVeg);
    return matchesCategory && matchesSearch && matchesDiet;
  });

  return (
    <div className="pb-24 md:pb-32 px-3 sm:px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto space-y-4 sm:space-y-8 animate-fade-in">
      
      {/* Header Banner */}
      <div className="pt-4 sm:pt-6 flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-outline-variant/30 pb-4 sm:pb-6">
        <div>
          <span className="font-label text-xs font-bold text-secondary uppercase tracking-widest block mb-0.5">
            Golden Bowl Hajipur Menu
          </span>
          <h1 className="font-headline text-2xl sm:text-5xl font-extrabold text-on-background">
            Our Culinary Menu
          </h1>
          <p className="text-on-surface text-xs sm:text-sm font-medium mt-1 sm:mt-2 max-w-lg leading-relaxed">
            Authentic North Indian, Chinese & Dum Biryani specialties. Fresh ingredients, rich aromatic spices.
          </p>
        </div>

        <div className="bg-surface-container-high px-3 sm:px-4 py-2 rounded-2xl border border-outline-variant/30 flex items-center gap-2 text-xs font-label font-bold text-on-surface w-fit">
          <span className="text-base sm:text-lg">👥</span>
          <span>Avg ₹200–400 for two people</span>
        </div>
      </div>

      {/* Controls Bar: Search & Diet Filters */}
      <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-center justify-between">
        
        {/* Search */}
        <div className="relative w-full sm:max-w-md">
          <Search className="w-4 h-4 text-on-surface absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            aria-label="Search menu items"
            placeholder="Search Biryani, Paneer, Noodles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 sm:py-2.5 rounded-full bg-surface-container-low border border-outline-variant/30 text-xs font-body focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
          />
        </div>

        {/* Diet Segment Filter */}
        <div className="flex bg-surface-container p-1 rounded-full border border-outline-variant/30 w-full sm:w-auto" role="group" aria-label="Dietary Filters">
          <button
            onClick={() => setDietaryFilter('all')}
            className={`flex-1 sm:flex-none px-3.5 sm:px-4 py-1.5 rounded-full font-label text-xs font-bold transition-all ${
              dietaryFilter === 'all'
                ? 'bg-primary text-on-primary shadow-sm'
                : 'text-on-surface hover:text-on-surface'
            }`}
            aria-label="Filter all dishes"
          >
            All Dishes
          </button>

          <button
            onClick={() => setDietaryFilter('veg')}
            className={`flex-1 sm:flex-none px-3.5 sm:px-4 py-1.5 rounded-full font-label text-xs font-bold transition-all flex items-center justify-center gap-1 ${
              dietaryFilter === 'veg'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'text-emerald-800 hover:bg-emerald-50'
            }`}
            aria-label="Filter pure vegetarian dishes"
          >
            <Leaf className="w-3.5 h-3.5" /> Pure Veg
          </button>

          <button
            onClick={() => setDietaryFilter('non-veg')}
            className={`flex-1 sm:flex-none px-3.5 sm:px-4 py-1.5 rounded-full font-label text-xs font-bold transition-all flex items-center justify-center gap-1 ${
              dietaryFilter === 'non-veg'
                ? 'bg-red-700 text-white shadow-sm'
                : 'text-red-800 hover:bg-red-50'
            }`}
            aria-label="Filter non-vegetarian dishes"
          >
            <Flame className="w-3.5 h-3.5" /> Non-Veg
          </button>
        </div>

      </div>

      {/* Category Tabs */}
      <div className="sticky top-[58px] sm:top-[68px] z-30 bg-surface/95 backdrop-blur-md py-2 sm:py-3 border-y border-outline-variant/20 -mx-3 px-3 sm:mx-0 sm:px-0">
        <div className="flex gap-1.5 sm:gap-2 overflow-x-auto hide-scrollbar" role="tablist" aria-label="Menu categories">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={selectedCategory === cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-label text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-primary-container text-on-primary-container shadow-sm scale-105'
                  : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items Grid: 2 columns on mobile */}
      {filteredItems.length === 0 ? (
        <div className="py-16 text-center space-y-2">
          <p className="text-2xl">🔍</p>
          <h2 className="font-headline text-base font-bold text-on-surface">No matching items found</h2>
          <p className="text-xs text-on-surface font-medium">Try searching with a different dish name.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-surface-container-low rounded-2xl sm:rounded-3xl overflow-hidden plate-shadow border border-outline-variant/20 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <Link to={`/dish/${item.id}`} className="relative h-32 sm:h-52 block overflow-hidden bg-surface-container" aria-label={`View details for ${item.name}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    width="300"
                    height="200"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 flex gap-1 flex-wrap">
                    {item.isBestseller && (
                      <span className="bg-primary text-white font-label text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full shadow">
                        Bestseller
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-1.5 right-1.5 sm:bottom-3 sm:right-3 bg-surface/95 backdrop-blur-md px-2 py-0.5 sm:py-1 rounded-full text-xs font-bold text-on-surface flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600 fill-amber-600" />
                    <span>{item.rating}</span>
                  </div>
                </Link>

                <div className="p-2.5 sm:p-5 space-y-1 sm:space-y-2">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full flex-shrink-0 ${item.isVeg ? 'bg-emerald-600' : 'bg-red-600'}`} />
                    <Link to={`/dish/${item.id}`} className="font-headline text-xs sm:text-base font-bold text-on-surface leading-tight truncate hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  </div>

                  <p className="font-body text-xs text-on-surface font-medium leading-tight sm:leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-2.5 sm:p-5 pt-0 flex items-center justify-between">
                <div>
                  <span className="text-xs text-on-surface font-semibold hidden sm:block">Price</span>
                  <span className="font-headline text-sm sm:text-xl font-extrabold text-primary">₹{item.price}</span>
                </div>

                <button
                  onClick={() => addToCart(item)}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary-container hover:bg-primary hover:text-white text-on-primary-container font-label text-xs font-bold transition-colors flex items-center justify-center gap-1 active:scale-90 shadow-sm focus:ring-2 focus:ring-primary"
                  aria-label={`Add ${item.name} to basket`}
                >
                  <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Add</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="text-center font-label text-xs text-on-surface font-medium opacity-80 pt-2 italic">
        *Sample menu pricing — re-confirm exact rates with Golden Bowl staff during order.
      </p>

    </div>
  );
};
