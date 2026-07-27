import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Utensils, ShoppingBag, Bike, PartyPopper, Users, ArrowRight, Plus, Quote } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { useCart } from '../context/CartContext';

export const HomePage = () => {
  const { addToCart, setIsReservationOpen } = useCart();
  const signatureDishes = MENU_ITEMS.filter((item) => item.isBestseller).slice(0, 4);

  return (
    <div className="space-y-8 sm:space-y-xl pb-20 md:pb-32">
      
      {/* Hero Section */}
      <section className="relative min-h-[500px] sm:min-h-[640px] md:min-h-[720px] flex items-end overflow-hidden rounded-b-3xl">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
          style={{ 
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-mml6hS8g_PFCUWUuz-9DNDG7utESBqxUYTL8nWQHbUgM4J0l0Zh2myGI6YL4YlBWgDMeXbQ0oCYcTYIJzA2KbIypIBI-_x6J3P7rQzaxiIWPxIw8bR4L3nsllN99SCp3UQRfzKFDOlFNxQJOqEx2Xei1NV6H2_DrIo10CpNCD3Kfh7x60OZOvCLxHOqqOzei7yUeyby4YyYU3vcAi_OJcdXXLEnLAGrWh3_-j6VULlyoGJcRNnou2EqTmTWFEDZ7gEJo5BFX1Pq7')`
          }}
        />
        <div className="absolute inset-0 hero-gradient z-10" />

        <div className="relative z-20 w-full px-4 sm:px-margin-mobile md:px-margin-desktop pb-12 sm:pb-16 md:pb-24 max-w-7xl mx-auto space-y-3 sm:space-y-4">
          
          <div className="inline-flex items-center gap-1.5 bg-surface/90 backdrop-blur-md px-3.5 py-1.5 rounded-full plate-shadow border border-white/20 animate-fade-in">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="font-label text-xs sm:text-sm font-bold text-on-surface">
              4.7★ <span className="text-on-surface-variant font-normal opacity-80">(376 Google reviews)</span>
            </span>
          </div>

          <h1 className="font-headline text-3xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
            Golden Bowl
          </h1>

          <p className="font-body text-sm sm:text-xl text-white/95 max-w-xl italic leading-relaxed">
            "Come with your love, family and friends and enjoy our delicious meal."
          </p>

          <div className="flex flex-row gap-2.5 pt-1 sm:pt-2">
            <Link
              to="/menu"
              className="flex-1 sm:flex-none bg-primary-container hover:bg-opacity-90 text-on-primary-container font-label text-xs sm:text-sm font-bold px-4 sm:px-8 py-3.5 sm:py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all text-center"
            >
              <Utensils className="w-4 h-4 sm:w-5 sm:h-5" />
              View Menu
            </Link>

            <a
              href="https://wa.me/917033313440?text=Hello%20Golden%20Bowl,%20I%20want%20to%20order%20food."
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none bg-secondary hover:bg-opacity-90 text-on-secondary font-label text-xs sm:text-sm font-bold px-4 sm:px-8 py-3.5 sm:py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all text-center"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              Order Now
            </a>
          </div>

        </div>
      </section>

      {/* Highlight Strip */}
      <section className="bg-surface-container py-4 sm:py-6 rounded-2xl px-3 sm:px-margin-mobile max-w-7xl mx-auto border border-outline-variant/20">
        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex items-center justify-between min-w-[580px] md:min-w-full px-2 sm:px-4">
            
            <Link 
              to="/dining"
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                <Utensils className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="font-label text-xs sm:text-sm font-bold text-on-surface block">Dine-in</span>
                <span className="text-[10px] sm:text-[11px] text-on-surface-variant">Cozy Hearth Seating</span>
              </div>
            </Link>

            <div className="h-8 w-[1px] bg-outline-variant/40" />

            <a 
              href="https://wa.me/917033313440"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                <Bike className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="font-label text-xs sm:text-sm font-bold text-on-surface block">Home Delivery</span>
                <span className="text-[10px] sm:text-[11px] text-on-surface-variant">Fast in Hajipur</span>
              </div>
            </a>

            <div className="h-8 w-[1px] bg-outline-variant/40" />

            <Link 
              to="/events"
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                <PartyPopper className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="font-label text-xs sm:text-sm font-bold text-on-surface block">Party Decor</span>
                <span className="text-[10px] sm:text-[11px] text-on-surface-variant">Birthday & Anniversary</span>
              </div>
            </Link>

            <div className="h-8 w-[1px] bg-outline-variant/40" />

            <Link to="/dining" className="flex items-center gap-2.5 group cursor-pointer">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="font-label text-xs sm:text-sm font-bold text-on-surface block">Family Friendly</span>
                <span className="text-[10px] sm:text-[11px] text-on-surface-variant">Warm Ambiance</span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-4 sm:py-8 px-3 sm:px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="bg-surface-container-low rounded-3xl p-5 sm:p-12 plate-shadow border border-outline-variant/20 flex flex-col md:flex-row items-center gap-6 sm:gap-12">
          
          <div className="md:w-1/2 relative w-full">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-container/30 rounded-full blur-2xl" />
            <div className="rounded-2xl overflow-hidden plate-shadow border-4 border-white relative z-10">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD6fVPpOSvFQ4vFRUI0-AyFdB0EOdMfgDT6NNpYj_8aK8wLoZ7SwABJsnoMDX3WlAT5QAeq16HzrNRuiqHfq6e2JEph5c4iP2x7koII31ntx9ohZm_StZYtdFhzx6S87U_8sDxnkEt61DuvCcGWm09B5wQDCaIClrwISj8hoIMOFkM50N-0aKEns8H-Kh_iC7vmjOwpBtNCrkYDJ557H02Bk8LpCfxaCOIUOMLcFJPjgweQnr6x9yn6PRXKY1C1-b7y1Fvw98dxwMw"
                alt="Golden Bowl Hajipur Restaurant Interior"
                className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="md:w-1/2 space-y-3 sm:space-y-4">
            <div className="inline-block border-b-4 border-primary pb-1">
              <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-on-surface">Our Story</h2>
            </div>
            
            <p className="font-body text-xs sm:text-base text-on-surface-variant leading-relaxed">
              A family-friendly restaurant in the heart of Hajipur serving authentic North Indian, Chinese, and Biryani specialties. We are best known for our flavorful Hyderabadi Chicken Biryani, serene ambiance, and warm hospitality.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
              <div className="bg-surface p-3 sm:p-4 rounded-2xl border border-outline-variant/30">
                <span className="font-headline text-xl sm:text-2xl font-black text-primary block">100%</span>
                <span className="font-label text-[10px] sm:text-xs text-on-surface-variant font-semibold">Authentic Indian Spices</span>
              </div>
              <div className="bg-surface p-3 sm:p-4 rounded-2xl border border-outline-variant/30">
                <span className="font-headline text-xl sm:text-2xl font-black text-primary block">Local</span>
                <span className="font-label text-[10px] sm:text-xs text-on-surface-variant font-semibold">Hajipur Favorite</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Signature Specialties: 2 cards per row on mobile */}
      <section className="py-4 sm:py-6 px-3 sm:px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-on-surface">Signature Specialties</h2>
            <p className="text-on-surface-variant text-xs sm:text-sm mt-0.5 sm:mt-1">Hand-crafted flavors from our hearth kitchen.</p>
          </div>
          <Link 
            to="/menu"
            className="text-primary font-label text-xs sm:text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap"
          >
            View Menu <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {signatureDishes.map((dish) => (
            <div 
              key={dish.id}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden plate-shadow group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-outline-variant/20"
            >
              <div>
                <Link to={`/dish/${dish.id}`} className="relative h-32 sm:h-48 block overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 bg-primary text-white font-label text-[8px] sm:text-[11px] font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md">
                    Bestseller
                  </div>
                </Link>

                <div className="p-2.5 sm:p-5">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${dish.isVeg ? 'bg-emerald-600' : 'bg-red-600'}`} />
                    <Link to={`/dish/${dish.id}`} className="font-headline text-xs sm:text-base font-bold text-on-surface hover:text-primary transition-colors truncate">
                      {dish.name}
                    </Link>
                  </div>
                  <p className="font-body text-[10px] sm:text-xs text-on-surface-variant line-clamp-2 leading-tight sm:leading-relaxed mb-2 sm:mb-4">
                    {dish.description}
                  </p>
                </div>
              </div>

              <div className="p-2.5 sm:p-5 pt-0 flex items-center justify-between">
                <span className="font-headline text-sm sm:text-xl font-extrabold text-primary">₹{dish.price}</span>
                <button
                  onClick={() => addToCart(dish)}
                  className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center hover:bg-primary hover:text-white transition-colors active:scale-90 shadow-sm"
                  aria-label={`Add ${dish.name}`}
                >
                  <Plus className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews ("What Hajipur Loves") */}
      <section className="py-8 sm:py-12 px-3 sm:px-margin-mobile md:px-margin-desktop bg-surface-container-highest rounded-3xl max-w-7xl mx-auto border border-outline-variant/20">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-10 gap-3">
          <div className="text-center sm:text-left">
            <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-on-surface">What Hajipur Loves</h2>
            <div className="w-16 sm:w-20 h-1 bg-secondary mt-1 sm:mt-2 rounded-full mx-auto sm:mx-0" />
          </div>
          <Link to="/reviews" className="text-xs font-bold text-primary hover:underline">
            All Reviews →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-surface p-5 sm:p-8 rounded-3xl plate-shadow relative border-l-4 border-primary space-y-3">
            <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-primary/15 absolute top-4 sm:top-6 right-4 sm:right-6" />
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              ))}
            </div>
            <p className="font-body text-xs sm:text-base text-on-surface italic leading-relaxed">
              "Best Biryani in Hajipur! Great place for family dinners. The aroma of spices itself is enough to make you hungry."
            </p>
            <div className="font-label text-xs sm:text-sm font-bold text-secondary">— Rahul S., Local Guide</div>
          </div>

          <div className="bg-surface p-5 sm:p-8 rounded-3xl plate-shadow relative border-l-4 border-secondary space-y-3">
            <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-secondary/15 absolute top-4 sm:top-6 right-4 sm:right-6" />
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              ))}
            </div>
            <p className="font-body text-xs sm:text-base text-on-surface italic leading-relaxed">
              "Friendly staff and very affordable prices. The chicken manchurian and paneer butter masala are a must-try!"
            </p>
            <div className="font-label text-xs sm:text-sm font-bold text-secondary">— Priya K., Hajipur Resident</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-3 sm:px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="bg-primary text-on-primary rounded-3xl p-6 sm:p-12 text-center plate-shadow relative overflow-hidden space-y-3 sm:space-y-4">
          <h2 className="font-headline text-2xl sm:text-4xl font-extrabold">Ready to taste the hearth?</h2>
          <p className="font-body text-xs sm:text-base opacity-90 max-w-lg mx-auto leading-relaxed">
            Book a table for your family or order your favorite biryani directly via WhatsApp or call our Hajipur outlet.
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 justify-center pt-2">
            <a 
              href="https://wa.me/917033313440?text=Hello%20Golden%20Bowl,%20I%20want%20to%20place%20an%20order."
              target="_blank"
              rel="noreferrer"
              className="bg-white text-primary font-bold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 hover:bg-surface-container transition-colors shadow-md active:scale-95 text-xs sm:text-sm"
            >
              WhatsApp Order Now
            </a>
            <button
              onClick={() => setIsReservationOpen(true)}
              className="border-2 border-white/40 text-white font-bold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-colors active:scale-95 text-xs sm:text-sm"
            >
              Book Table at Outlet
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
