import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Menu as MenuIcon, X, Calendar, Utensils, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Header = () => {
  const { totalItemCount, setIsReservationOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/specials', label: 'Specials' },
    { path: '/dining', label: 'Dine-In' },
    { path: '/events', label: 'Events & Decor' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-surface dark:bg-inverse-surface shadow-sm sticky top-0 z-40 w-full transition-colors">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-2.5 flex items-center justify-between">
        
        {/* Brand Logo & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-surface-container text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
          
          <Link to="/" className="flex items-center gap-2.5 group">
            <img 
              src="/logo.png" 
              alt="Golden Bowl Logo" 
              className="w-10 h-10 rounded-full object-cover border border-primary/30 group-hover:scale-105 transition-transform shadow-md"
            />
            <div>
              <span className="font-headline text-xl sm:text-2xl font-extrabold text-primary tracking-tight block leading-none">
                Golden Bowl
              </span>
              <span className="text-[10px] text-on-surface-variant font-medium tracking-wide">
                HAJIPUR • THE MODERN HEARTH
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-container-low px-3 py-1.5 rounded-full border border-outline-variant/30">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-full font-label text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-primary text-on-primary shadow-sm scale-105'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions (Order / Cart / Book Table) */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsReservationOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 border border-primary/30 text-primary font-label text-xs font-bold px-4 py-2 rounded-full hover:bg-primary-container/20 transition-all active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5" />
            Book Table
          </button>

          <Link
            to="/cart"
            className="relative p-2.5 rounded-full bg-surface-container hover:bg-surface-container-high text-primary transition-all active:scale-95 border border-outline-variant/30"
            aria-label="View Full Page Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-secondary text-white font-extrabold text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-pulse">
                {totalItemCount}
              </span>
            )}
          </Link>

          <a
            href="https://wa.me/917033313440?text=Hello%20Golden%20Bowl,%20I%20would%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noreferrer"
            className="bg-primary text-on-primary font-label text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full hover:bg-opacity-95 transition-transform active:scale-95 shadow-sm hidden xs:inline-flex items-center gap-1.5"
          >
            <Utensils className="w-4 h-4" />
            Order Now
          </a>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-t border-outline-variant/20 px-margin-mobile py-4 space-y-2 animate-fade-in shadow-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `w-full text-left px-4 py-3 rounded-xl font-label text-sm font-semibold flex items-center justify-between ${
                  isActive
                    ? 'bg-primary-container text-on-primary-container'
                    : 'text-on-surface hover:bg-surface-container'
                }`
              }
            >
              <span>{link.label}</span>
              <Sparkles className="w-4 h-4 text-primary opacity-50" />
            </NavLink>
          ))}
          
          <NavLink
            to="/cart"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-left px-4 py-3 rounded-xl font-label text-sm font-bold bg-secondary/10 text-secondary flex items-center justify-between"
          >
            <span>Your Full Page Cart ({totalItemCount} items)</span>
            <ShoppingBag className="w-4 h-4" />
          </NavLink>
        </div>
      )}
    </header>
  );
};
