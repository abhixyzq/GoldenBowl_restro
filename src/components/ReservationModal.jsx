import React, { useState } from 'react';
import { X, Calendar, Phone, CheckCircle2, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ReservationModal = () => {
  const { isReservationOpen, setIsReservationOpen } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:30');
  const [specialRequest, setSpecialRequest] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isReservationOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*TABLE RESERVATION REQUEST - GOLDEN BOWL*\n*Name:* ${name}\n*Phone:* ${phone}\n*Guests:* ${guests} People\n*Date:* ${date}\n*Time:* ${time}\n*Notes:* ${specialRequest || 'None'}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/918709998972?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-reservation-title">
      <div className="bg-surface rounded-3xl max-w-lg w-full p-6 md:p-8 relative shadow-2xl border border-outline-variant/30 animate-fade-in">
        
        <button
          onClick={() => {
            setIsReservationOpen(false);
            setSubmitted(false);
          }}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-container text-on-surface transition-colors focus:ring-2 focus:ring-primary"
          aria-label="Close table reservation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-tertiary-container text-on-tertiary-container rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="font-headline text-2xl font-bold text-primary">Reservation Request Sent!</h2>
            <p className="text-xs sm:text-sm text-on-surface font-medium max-w-sm mx-auto">
              We have forwarded your table reservation details to the Golden Bowl Hajipur desk (+91 87099 98972).
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setIsReservationOpen(false);
              }}
              className="bg-primary text-on-primary font-bold px-8 py-3 rounded-full text-xs sm:text-sm"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center space-y-1">
              <span className="text-3xl" aria-hidden="true">🪑</span>
              <h2 id="modal-reservation-title" className="font-headline text-2xl font-extrabold text-primary">Reserve a Table</h2>
              <p className="text-xs text-on-surface font-medium">
                Join us at Mishri Lal Complex, Kachahari Road, Hajipur for a cozy hearth dining experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label htmlFor="resName" className="block text-xs font-bold text-on-surface mb-1">Full Name</label>
                <input
                  id="resName"
                  type="text"
                  required
                  placeholder="Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="resPhone" className="block text-xs font-bold text-on-surface mb-1">Phone Number</label>
                <input
                  id="resPhone"
                  type="tel"
                  required
                  placeholder="87099 98972"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label htmlFor="resGuests" className="block text-xs font-bold text-on-surface mb-1">Guests</label>
                <select
                  id="resGuests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="4">4 People</option>
                  <option value="6">6 People</option>
                  <option value="8+">8+ Family</option>
                </select>
              </div>

              <div>
                <label htmlFor="resDate" className="block text-xs font-bold text-on-surface mb-1">Date</label>
                <input
                  id="resDate"
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="resTime" className="block text-xs font-bold text-on-surface mb-1">Time</label>
                <input
                  id="resTime"
                  type="time"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label htmlFor="resNotes" className="block text-xs font-bold text-on-surface mb-1">Special Occasion / Request</label>
              <textarea
                id="resNotes"
                placeholder="High chair needed, anniversary table, quiet booth..."
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
                rows={2}
                className="w-full px-3 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <div className="pt-2 flex gap-2">
              <button
                type="submit"
                className="flex-1 py-3.5 bg-primary text-on-primary font-bold text-xs sm:text-sm rounded-full flex items-center justify-center gap-2 shadow-md hover:bg-opacity-90 active:scale-95 transition-all focus:ring-2 focus:ring-primary"
                aria-label="Submit table reservation via WhatsApp"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Reservation
              </button>
              <a
                href="tel:918709998972"
                className="px-5 py-3.5 bg-surface-container text-primary font-bold text-xs sm:text-sm rounded-full flex items-center justify-center gap-1.5 hover:bg-surface-container-high transition-all"
                aria-label="Call outlet desk for reservation"
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
