import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { CartDrawer } from './components/CartDrawer';
import { ReservationModal } from './components/ReservationModal';
import { EventBookingModal } from './components/EventBookingModal';

import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { SpecialsPage } from './pages/SpecialsPage';
import { DiningPage } from './pages/DiningPage';
import { EventsPage } from './pages/EventsPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { DishDetailPage } from './pages/DishDetailPage';
import { CartPage } from './pages/CartPage';

// Scroll to top on page load, refresh, and route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainContent = () => {
  const { toastMessage } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <ScrollToTop />
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-16 sm:top-20 right-3 sm:right-4 z-50 bg-inverse-surface text-inverse-on-surface px-3.5 py-2.5 rounded-2xl shadow-xl font-label text-xs font-bold animate-fade-in flex items-center gap-2 border border-white/10">
          <span>✨</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header />

      {/* Dedicated Page Routes */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/specials" element={<SpecialsPage />} />
          <Route path="/dining" element={<DiningPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/dish/:id" element={<DishDetailPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Nav */}
      <MobileBottomNav />

      {/* Overlays & Modals */}
      <CartDrawer />
      <ReservationModal />
      <EventBookingModal />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <MainContent />
      </CartProvider>
    </BrowserRouter>
  );
}
