import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Utensils, Flame, Calendar, Phone, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const MobileBottomNav = () => {
  const { totalItemCount } = useCart();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/menu', label: 'Menu', icon: Utensils },
    { path: '/specials', label: 'Specials', icon: Flame },
    { path: '/events', label: 'Events', icon: Calendar },
    { path: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-t border-outline-variant/30 px-2 py-1.5 flex justify-around items-center shadow-lg">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
                isActive
                  ? 'bg-primary-container text-on-primary-container font-bold scale-105'
                  : 'text-on-surface-variant hover:text-primary'
              }`
            }
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] font-label mt-0.5">{item.label}</span>
          </NavLink>
        );
      })}

      <NavLink
        to="/cart"
        className={({ isActive }) =>
          `relative flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
            isActive
              ? 'bg-secondary text-white font-bold scale-105'
              : 'text-secondary hover:text-secondary-container'
          }`
        }
      >
        <div className="relative">
          <ShoppingBag className="w-5 h-5" />
          {totalItemCount > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-secondary text-white font-extrabold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow">
              {totalItemCount}
            </span>
          )}
        </div>
        <span className="text-[10px] font-label font-bold mt-0.5">Cart</span>
      </NavLink>
    </nav>
  );
};
