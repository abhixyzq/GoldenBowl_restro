import React from 'react';
import { Utensils, Users, Sparkles, Calendar, ShieldCheck, Heart, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const DiningPage = () => {
  const { setIsReservationOpen } = useCart();

  const diningFeatures = [
    {
      title: "Cozy Family Booths",
      desc: "Private and comfortable air-conditioned seating designed for family gatherings, quiet conversations, and celebratory dinners.",
      icon: Users
    },
    {
      title: "Hearth Warm Ambiance",
      desc: "Soft amber lighting, natural wood textures, and clean minimalist decor that evokes a comforting home kitchen feel.",
      icon: Sparkles
    },
    {
      title: "100% Fresh Kitchen Standard",
      desc: "Every dish is cooked fresh upon ordering using unadulterated spices, cold-pressed oils, and premium long-grain basmati.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="pb-24 md:pb-32 px-3 sm:px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto space-y-10 animate-fade-in pt-4 sm:pt-6">
      
      {/* Hero Banner */}
      <section className="relative rounded-3xl overflow-hidden min-h-[440px] flex items-end p-6 sm:p-12 border border-outline-variant/30 plate-shadow">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCD6fVPpOSvFQ4vFRUI0-AyFdB0EOdMfgDT6NNpYj_8aK8wLoZ7SwABJsnoMDX3WlAT5QAeq16HzrNRuiqHfq6e2JEph5c4iP2x7koII31ntx9ohZm_StZYtdFhzx6S87U_8sDxnkEt61DuvCcGWm09B5wQDCaIClrwISj8hoIMOFkM50N-0aKEns8H-Kh_iC7vmjOwpBtNCrkYDJ557H02Bk8LpCfxaCOIUOMLcFJPjgweQnr6x9yn6PRXKY1C1-b7y1Fvw98dxwMw')`
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent z-10" />

        <div className="relative z-20 space-y-4 max-w-2xl">
          <span className="bg-primary text-white font-label text-xs font-bold px-3.5 py-1 rounded-full shadow">
            The Hearth Experience
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-on-surface tracking-tight">
            Dine-In & Ambiance
          </h1>
          <p className="font-body text-xs sm:text-base text-on-surface font-medium leading-relaxed">
            Experience generous hospitality at Mishri Lal Complex, Kachahari Road, Hajipur. Perfect for family lunches, romantic dates, and corporate dining.
          </p>

          <button
            onClick={() => setIsReservationOpen(true)}
            className="bg-primary text-on-primary font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm flex items-center gap-2 hover:bg-opacity-90 active:scale-95 transition-all shadow-md focus:ring-2 focus:ring-primary"
            aria-label="Book a table now"
          >
            <Calendar className="w-4 h-4" /> Book a Table Now
          </button>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {diningFeatures.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="bg-surface-container-low p-6 sm:p-8 rounded-3xl border border-outline-variant/30 plate-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary-container text-on-primary-container flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h2 className="font-headline text-xl font-bold text-on-surface">{item.title}</h2>
              <p className="font-body text-xs text-on-surface font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </section>

      {/* Outlet Location Preview */}
      <section className="bg-surface p-6 sm:p-8 rounded-3xl border border-outline-variant/30 plate-shadow flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="font-label text-xs font-bold text-secondary uppercase tracking-wider block">Visit Us Today</span>
          <h2 className="font-headline text-2xl font-bold text-on-surface">Golden Bowl Hajipur Desk</h2>
          <p className="font-body text-xs text-on-surface font-medium leading-relaxed">
            Mishri Lal Complex, Kachahari Road, Hajipur, Bihar 844101 • Open Mon–Sun 11:00 AM – 11:00 PM
          </p>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <button
            onClick={() => setIsReservationOpen(true)}
            className="flex-1 md:flex-none px-6 py-3 bg-primary text-on-primary font-bold text-xs rounded-full shadow"
            aria-label="Reserve table"
          >
            Reserve Table
          </button>
          <a
            href="tel:918709998972"
            className="flex-1 md:flex-none px-6 py-3 bg-surface-container text-primary font-bold text-xs rounded-full border border-primary/20 text-center"
            aria-label="Call outlet desk"
          >
            Call Desk
          </a>
        </div>
      </section>

    </div>
  );
};
