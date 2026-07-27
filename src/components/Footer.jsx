import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, Clock, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant/30 pt-xl pb-32 lg:pb-xl px-margin-mobile md:px-margin-desktop text-on-surface transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-xl">
        
        {/* Brand story */}
        <div className="space-y-sm md:col-span-1">
          <div className="flex items-center gap-2.5">
            <img 
              src="/logo.png" 
              alt="Golden Bowl Emblem Logo" 
              className="w-9 h-9 rounded-full object-cover border border-primary/30 shadow"
            />
            <span className="font-headline text-2xl font-extrabold text-primary tracking-tight">
              Golden Bowl
            </span>
          </div>
          <p className="font-body text-xs leading-relaxed text-on-surface-variant max-w-xs">
            Serving the heart of Hajipur with authentic North Indian, Biryani, and Chinese flavors. Crafted around the concept of "The Modern Hearth"—warm, nourishing, and deeply communal.
          </p>
          <div className="pt-1 flex items-center gap-1.5 text-xs text-secondary font-semibold">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>A Hajipur Local Favorite</span>
          </div>
        </div>

        {/* Dedicated Page Quick Links */}
        <div className="space-y-sm">
          <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-secondary">
            Explore Pages
          </h4>
          <nav className="flex flex-col gap-2 font-label text-xs">
            <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors">
              Home Overview
            </Link>
            <Link to="/menu" className="text-on-surface-variant hover:text-primary transition-colors">
              Explore Our Menu
            </Link>
            <Link to="/specials" className="text-on-surface-variant hover:text-primary transition-colors">
              Chef Specials & Combos
            </Link>
            <Link to="/dining" className="text-on-surface-variant hover:text-primary transition-colors">
              Dine-In & Ambiance
            </Link>
            <Link to="/events" className="text-on-surface-variant hover:text-primary transition-colors">
              Events & Party Decor
            </Link>
            <Link to="/reviews" className="text-on-surface-variant hover:text-primary transition-colors">
              Customer Reviews
            </Link>
            <Link to="/contact" className="text-on-surface-variant hover:text-primary transition-colors">
              Location & Contact
            </Link>
            <Link to="/cart" className="text-on-surface-variant hover:text-primary transition-colors">
              Full Page Cart & Checkout
            </Link>
          </nav>
        </div>

        {/* Operating Hours */}
        <div className="space-y-sm">
          <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-secondary flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" /> Opening Hours
          </h4>
          <div className="text-xs font-body text-on-surface-variant space-y-1">
            <div className="flex justify-between border-b border-outline-variant/20 pb-1">
              <span>Monday – Sunday</span>
              <span className="font-semibold text-on-surface">11:00 AM – 11:00 PM</span>
            </div>
            <p className="text-[11px] opacity-75 italic pt-1">
              Open all 7 days for Dine-in, Home Delivery, and Special Event Hosting.
            </p>
          </div>
        </div>

        {/* Contact numbers */}
        <div className="space-y-sm">
          <h4 className="font-headline text-xs font-bold uppercase tracking-widest text-secondary flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> Visit & Call Us
          </h4>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Mishri Lal Complex, Kachahari Road,<br />
            Hajipur, Bihar 844101
          </p>
          
          <div className="space-y-2 pt-1 text-xs">
            <a href="tel:8709998972" className="flex items-center gap-2 text-on-surface font-bold hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>General Desk: +91 87099 98972</span>
            </a>
            <a href="tel:7033313440" className="flex items-center gap-2 text-on-surface font-bold hover:text-secondary transition-colors">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Delivery & WhatsApp: +91 70333 13440</span>
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto w-full h-[1px] bg-outline-variant/30 my-8" />

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-on-surface-variant">
        <p>© 2024–2026 Golden Bowl Hajipur. The Modern Hearth.</p>
        <p className="opacity-75">All prices sample - confirm with staff during ordering.</p>
      </div>
    </footer>
  );
};
