import React, { useState } from 'react';
import { X, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const EventBookingModal = ({ selectedPackage }) => {
  const { isEventModalOpen, setIsEventModalOpen } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState(selectedPackage ? selectedPackage.title : 'Birthday Party');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isEventModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*EVENT DECORATION BOOKING - GOLDEN BOWL*\n*Package/Event:* ${eventType}\n*Name:* ${name}\n*Phone:* ${phone}\n*Preferred Date:* ${date}\n*Custom Requests:* ${notes || 'None'}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/917033313440?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-event-title">
      <div className="bg-surface rounded-3xl max-w-lg w-full p-6 md:p-8 relative shadow-2xl border border-outline-variant/30 animate-fade-in">
        
        <button
          onClick={() => {
            setIsEventModalOpen(false);
            setSubmitted(false);
          }}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-container text-on-surface transition-colors focus:ring-2 focus:ring-secondary"
          aria-label="Close event booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="font-headline text-2xl font-bold text-secondary">Event Inquiry Sent!</h2>
            <p className="text-xs sm:text-sm text-on-surface font-medium max-w-sm mx-auto">
              Our event team will assist you with balloon customization, floral themes, and table setup for Golden Bowl Hajipur.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setIsEventModalOpen(false);
              }}
              className="bg-secondary text-on-secondary font-bold px-8 py-3 rounded-full text-xs sm:text-sm"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center space-y-1">
              <span className="text-3xl" aria-hidden="true">🎈</span>
              <h2 id="modal-event-title" className="font-headline text-2xl font-extrabold text-secondary">Book Event & Decoration</h2>
              <p className="text-xs text-on-surface font-medium">
                Celebrate Birthdays, Anniversaries & Family Gatherings with customized aesthetics.
              </p>
            </div>

            <div>
              <label htmlFor="evtType" className="block text-xs font-bold text-on-surface mb-1">Select Event Type</label>
              <select
                id="evtType"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <option value="Birthday Decoration Package (Starting ₹1,500)">Birthday Decoration Package (₹1,500)</option>
                <option value="Anniversary Setup Package (Starting ₹2,500)">Anniversary Setup Package (₹2,500)</option>
                <option value="Custom Party Celebration (Bespoke)">Custom Celebration Setup</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="evtName" className="block text-xs font-bold text-on-surface mb-1">Your Name</label>
                <input
                  id="evtName"
                  type="text"
                  required
                  placeholder="Priya Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div>
                <label htmlFor="evtPhone" className="block text-xs font-bold text-on-surface mb-1">Phone Number</label>
                <input
                  id="evtPhone"
                  type="tel"
                  required
                  placeholder="70333 13440"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            </div>

            <div>
              <label htmlFor="evtDate" className="block text-xs font-bold text-on-surface mb-1">Event Date</label>
              <input
                id="evtDate"
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div>
              <label htmlFor="evtNotes" className="block text-xs font-bold text-on-surface mb-1">Custom Requests / Theme Preferences</label>
              <textarea
                id="evtNotes"
                placeholder="Preferred balloon colors, cake order request, number of guests..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                className="w-full px-3 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
              />
            </div>

            <div className="pt-2 flex gap-2">
              <button
                type="submit"
                className="flex-1 py-3.5 bg-secondary text-on-secondary font-bold text-xs sm:text-sm rounded-full flex items-center justify-center gap-2 shadow-md hover:bg-opacity-90 active:scale-95 transition-all focus:ring-2 focus:ring-secondary"
                aria-label="Discuss event booking via WhatsApp"
              >
                <MessageSquare className="w-4 h-4" /> Discuss via WhatsApp
              </button>
              <a
                href="tel:917033313440"
                className="px-5 py-3.5 bg-surface-container text-secondary font-bold text-xs sm:text-sm rounded-full flex items-center justify-center gap-1.5 hover:bg-surface-container-high transition-all"
                aria-label="Call event desk"
              >
                <Phone className="w-4 h-4" /> Call
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
