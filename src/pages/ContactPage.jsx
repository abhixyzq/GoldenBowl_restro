import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageSquare, Navigation, CheckCircle2, Send, Utensils, Headphones } from 'lucide-react';

export const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*NEW CONTACT INQUIRY - GOLDEN BOWL*\n*Subject:* ${formData.subject}\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/917033313440?text=${encoded}`, '_blank');
    setFormSubmitted(true);
  };

  return (
    <div className="pb-24 md:pb-32 px-3 sm:px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto space-y-6 sm:space-y-8 animate-fade-in pt-4 sm:pt-6">
      
      {/* Hero Intro */}
      <section className="pt-2 sm:pt-6 space-y-2 text-center md:text-left border-b border-outline-variant/30 pb-4 sm:pb-6">
        <span className="font-label text-xs font-bold text-secondary uppercase tracking-widest block">
          Get in Touch
        </span>
        <h1 className="font-headline text-2xl sm:text-5xl font-extrabold text-on-background">
          Golden Bowl Contact & Outlet Info
        </h1>
        <p className="font-body text-xs sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
          Connect with the heart of Hajipur's culinary scene. Reach out directly via call or WhatsApp for food delivery, table booking, or general inquiries.
        </p>
      </section>

      {/* Bento Grid Info */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Map / Location Card */}
        <div className="md:col-span-8 bg-surface-container-low rounded-3xl overflow-hidden relative min-h-[380px] border border-outline-variant/30 plate-shadow flex flex-col justify-between p-6">
          <div className="bg-surface/95 backdrop-blur-md p-6 rounded-2xl border border-outline-variant/30 max-w-md space-y-2 z-10 shadow-lg">
            <span className="font-label text-[11px] font-bold text-secondary uppercase tracking-wider block">Restaurant Address</span>
            <h3 className="font-headline text-xl font-bold text-primary">Golden Bowl Hajipur</h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Mishri Lal Complex, Kachahari Road,<br />
              Hajipur, Bihar 844101
            </p>
            <a
              href="https://maps.google.com/?q=Golden+Bowl+Mishri+Lal+Complex+Kachahari+Road+Hajipur"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-primary font-label text-xs font-bold hover:underline pt-1"
            >
              <Navigation className="w-4 h-4" /> Get Map Directions
            </a>
          </div>

          <div 
            className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700 opacity-60"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpjKBI046dEzMhvUmbMU5Tw_zaPsTOAOPMApM9bsteCyBReZqv1yxb6d8qM3AXwlM6kLGn7C_N9iZLDb-I4vh8Gx5mFvVN2OZ99YAXKEI2feg8Zxg3Sq_UK3acj1rbxSZZ1seEBK8PXBd7IdvQ4sb6CuYErrHZLlKEl7gLB8vaIs2ftiZeEzHVxV7xGVHJ9Kz5u7zOGgDpI31bOoHYcqtEb67RYdTaRz-tiX-xqZD_gGYJxRwZgruudlDaPUiqG7zusHGpT0zMak_D')`
            }}
          />
        </div>

        {/* Opening Hours Card */}
        <div className="md:col-span-4 bg-primary-container/20 rounded-3xl p-6 flex flex-col justify-between border border-primary/10 plate-shadow space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-primary text-on-primary flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>

            <div>
              <h3 className="font-headline text-xl font-bold text-on-primary-container">Opening Hours</h3>
              <p className="text-xs text-on-surface-variant mt-0.5">Serving fresh hot meals 7 days a week.</p>
            </div>

            <div className="space-y-2 text-xs font-body border-t border-primary/20 pt-3">
              <div className="flex justify-between border-b border-primary/10 pb-2">
                <span className="font-bold text-on-surface">Monday – Sunday</span>
                <span className="font-semibold text-primary">11:00 AM – 11:00 PM</span>
              </div>
              <p className="text-[11px] text-on-surface-variant italic opacity-75">
                Note: Open 7 days a week for Dine-in, Takeaway, and Home Delivery.
              </p>
            </div>
          </div>

          <div className="bg-surface p-4 rounded-2xl border border-outline-variant/30 flex items-center gap-3">
            <Utensils className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <span className="font-headline text-xs font-bold text-on-surface block">Warm Hospitality</span>
              <span className="text-[11px] text-on-surface-variant">Air-conditioned family seating</span>
            </div>
          </div>
        </div>

        {/* Official Contact Phone Cards */}
        <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Outlet Contact 1: 87099 98972 */}
          <div className="bg-surface-container-high rounded-3xl p-6 border border-outline-variant/30 space-y-4 plate-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center">
                  <Headphones className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-label font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                  General & Bookings
                </span>
              </div>
              <h4 className="font-headline text-xl font-bold text-on-surface">General Inquiry & Outlet Desk</h4>
              <p className="font-headline text-2xl sm:text-3xl font-extrabold text-primary">
                +91 87099 98972
              </p>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Call this line for table reservations, event decoration planning, or general restaurant inquiries.
              </p>
            </div>

            <div className="flex gap-2 pt-2">
              <a
                href="tel:8709998972"
                className="flex-1 py-3 bg-primary text-on-primary rounded-full font-label text-xs font-bold text-center hover:bg-opacity-90 transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4" /> Call 8709998972
              </a>
              <a
                href="https://wa.me/918709998972"
                target="_blank"
                rel="noreferrer"
                className="py-3 px-4 bg-[#25D366] text-white rounded-full font-label text-xs font-bold text-center hover:opacity-90 transition-all flex items-center justify-center gap-1"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Outlet Contact 2: 70333 13440 */}
          <div className="bg-secondary-container text-on-secondary-container rounded-3xl p-6 space-y-4 plate-shadow flex flex-col justify-between border border-secondary/20">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-on-secondary-container/10 flex items-center justify-center">
                  <Utensils className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-label font-bold uppercase tracking-widest bg-on-secondary-container/10 px-3 py-1 rounded-full">
                  Fast Home Delivery
                </span>
              </div>
              <h4 className="font-headline text-xl font-bold">Home Delivery & Food Orders</h4>
              <p className="font-headline text-2xl sm:text-3xl font-extrabold">
                +91 70333 13440
              </p>
              <p className="text-xs opacity-90 leading-relaxed">
                Direct hotline for home delivery orders, takeaway pick-ups, and active WhatsApp food basket dispatch.
              </p>
            </div>

            <div className="flex gap-2 pt-2">
              <a
                href="tel:7033313440"
                className="flex-1 py-3 bg-on-secondary-container text-white rounded-full font-label text-xs font-bold text-center hover:opacity-90 transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4" /> Call 7033313440
              </a>
              <a
                href="https://wa.me/917033313440"
                target="_blank"
                rel="noreferrer"
                className="py-3 px-4 bg-[#25D366] text-white rounded-full font-label text-xs font-bold text-center hover:opacity-90 transition-all flex items-center justify-center gap-1"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="md:col-span-12 bg-surface-container-low rounded-3xl p-6 sm:p-8 border border-outline-variant/30 space-y-6 plate-shadow">
          <div className="space-y-1">
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-on-surface">Send us a Message</h3>
            <p className="text-xs text-on-surface-variant">Have feedback, catering queries, or menu questions? Drop us a line.</p>
          </div>

          {formSubmitted ? (
            <div className="py-8 text-center space-y-3 bg-surface p-6 rounded-2xl border border-primary/20">
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
              <h4 className="font-headline text-xl font-bold text-primary">Message Sent!</h4>
              <p className="text-xs text-on-surface-variant">We've opened your message with our Golden Bowl desk (+91 70333 13440).</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-surface border border-outline-variant/30 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-surface border border-outline-variant/30 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1">Topic</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface border border-outline-variant/30 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Home Delivery Order">Home Delivery Order</option>
                  <option value="Party Decoration Inquiry">Party Decoration Inquiry</option>
                  <option value="Feedback / Suggestions">Feedback / Suggestions</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1">Message</label>
                <textarea
                  required
                  placeholder="Type your message here..."
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface border border-outline-variant/30 text-xs focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-on-primary font-bold px-8 py-3 rounded-full text-xs flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-md active:scale-95"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};
