import React from 'react';
import { PartyPopper, Cake, Heart, Sparkles, CheckCircle } from 'lucide-react';
import { DECORATION_PACKAGES } from '../data/menuData';
import { useCart } from '../context/CartContext';

export const EventsPage = () => {
  const { setIsEventModalOpen } = useCart();

  return (
    <div className="pb-24 md:pb-32 space-y-xl animate-fade-in">
      
      {/* Hero Banner */}
      <section className="relative w-full min-h-[420px] md:min-h-[500px] flex items-end overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAoRFoBeHO7Ly3_Yz1CInpxZduBvNptQ3eQBd6O3-XL_5D0c4sWP_e_2g-9CNrFR4oaoKrDKLgNU4FSq_G0lvMsd3i91zXf2BSsxfatAgP8dEUyte0pQLciz1ov45ez8JFgxs1-1pL8CtWxRD3GkxY1goowjKa0sTX7MSI53HxxEP4XgSZ2YvdK5MkfEJRNyXlewsuQd1nOTauGlwqa4Oy7CzwAdLucVgR8U5RECuH-pso6DNnLKkKHmaiEmmOYwyAQYvdFwGFZcaYo')`
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 events-hero-gradient" />

        <div className="relative z-10 px-margin-mobile md:px-margin-desktop pb-12 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-secondary text-white px-3.5 py-1 rounded-full font-label text-xs font-bold shadow-md">
            <Sparkles className="w-3.5 h-3.5" /> Anniversary & Birthday Special
          </div>

          <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-on-background tracking-tight">
            Memorable Moments at Golden Bowl
          </h1>

          <p className="font-body text-xs sm:text-base text-on-surface font-medium max-w-2xl leading-relaxed">
            Highlighting <strong className="text-primary font-bold">Anniversary & Birthday Decoration Services</strong> at Golden Bowl Hajipur. We turn your dining experience into a cherished celebration.
          </p>
        </div>
      </section>

      {/* Bento Grid Showcase */}
      <section className="px-3 sm:px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Card */}
          <div className="md:col-span-7 bg-surface-container-low p-6 sm:p-8 rounded-3xl plate-shadow border border-outline-variant/30 flex flex-col justify-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center">
              <PartyPopper className="w-8 h-8" />
            </div>
            <h2 className="font-headline text-2xl font-bold text-on-surface">
              We make your special moments memorable.
            </h2>
            <p className="font-body text-xs sm:text-sm text-on-surface font-medium leading-relaxed">
              Our dedicated decor team creates beautiful setups using colorful balloons, floral accents, and personalized touches that resonate with your theme. Every detail is curated to reflect the warmth of "The Modern Hearth."
            </p>
          </div>

          {/* Gallery Card 1 */}
          <div className="md:col-span-5 h-64 md:h-auto rounded-3xl overflow-hidden plate-shadow border border-outline-variant/20 relative group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO1yQ75xvoxva6UeDBXBMocPLW_gp9KP4dtOsn2LEpeHcZxoUIwFV5xHe1fIQZqrtxSuHiOKylx4hV3uDbjA80v9IAVbFZAh0uabjHvb6HqaKycT1cDwlwzwYZE-AqWwWfgrTPogyqBCzbvAfRt1ZJDZNidxCilmsNHReEMJ9P8C_CZ0SdmYUrfgRF5E3ngZ1ihdKeZt9o5i2sgl_UnHefeuTuPsSa4l9MmlOOiAdFPS21Uq5DopJkW5OmSEjhJbCchx5zzLUA1oS0" 
              alt="Birthday Party Balloon Setup at Golden Bowl"
              width="500"
              height="350"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Gallery Card 2 */}
          <div className="md:col-span-5 h-64 md:h-auto rounded-3xl overflow-hidden plate-shadow border border-outline-variant/20 relative group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIMCJbp59Jx1ICXPqjcxy4n4jZ0yMKW0I5Ys5bR3mV72Cib-g2gSVp1gzXuGDlNH3uijsDkyxKBZCOX22P5FwE9ufskEm6DsP85UZOWDI1eIUhEoa6aI4OUlTPaeNGZ5nmY6Ix73WTI9f2MqzFEXIafFXABFvPGkBVfY0OcO_DVcjmXr9wMjRzDP-lH4bw0rEQA2tFPs5vLDgyAFHtrKfK3r_nl02NAXxZxPVIRWT9rjWIBA06W6IXTqgPcoPw4PqIwOdLbmQrtyi1" 
              alt="Anniversary Table Setup at Golden Bowl"
              width="500"
              height="350"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Quote Card */}
          <div className="md:col-span-7 bg-tertiary-container text-on-tertiary-container p-6 sm:p-8 rounded-3xl plate-shadow flex items-center justify-between">
            <p className="font-body text-sm sm:text-base font-bold italic leading-relaxed max-w-lg">
              "Contact us to customize your celebration. We make your special moments memorable with beautiful balloons, lights, and decor."
            </p>
            <Sparkles className="w-10 h-10 opacity-70 flex-shrink-0" />
          </div>

        </div>
      </section>

      {/* Packages Section */}
      <section className="py-8 px-3 sm:px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-headline text-3xl font-extrabold text-on-surface">Our Decoration Packages</h2>
          <p className="text-on-surface text-xs sm:text-sm font-semibold">Transparent, customizable, and visually stunning.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DECORATION_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id}
              className="bg-surface p-6 sm:p-8 rounded-3xl plate-shadow border border-outline-variant/30 flex flex-col justify-between space-y-6 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                  {pkg.icon === 'cake' ? <Cake className="w-7 h-7" /> : pkg.icon === 'favorite' ? <Heart className="w-7 h-7" /> : <PartyPopper className="w-7 h-7" />}
                </div>

                <div>
                  <span className="font-label text-xs font-bold text-secondary uppercase tracking-widest block">{pkg.tagline}</span>
                  <h3 className="font-headline text-xl font-bold text-on-surface mt-1">{pkg.title}</h3>
                </div>

                <p className="font-body text-xs text-on-surface font-medium leading-relaxed">
                  {pkg.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-outline-variant/20">
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-on-surface font-semibold">
                      <CheckCircle className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <div>
                  <span className="text-xs text-on-surface block font-medium">Starting from</span>
                  <span className="font-headline text-2xl font-extrabold text-primary">₹{pkg.price}</span>
                </div>

                <button
                  onClick={() => setIsEventModalOpen(true)}
                  className="bg-primary text-on-primary font-label text-xs font-bold px-5 py-2.5 rounded-full hover:bg-opacity-90 active:scale-95 transition-all shadow-sm focus:ring-2 focus:ring-primary"
                  aria-label={`Book setup for ${pkg.title}`}
                >
                  Book Setup
                </button>
              </div>

            </div>
          ))}
        </div>

        <p className="text-center font-label text-xs text-on-surface font-medium opacity-80 italic">
          *Confirm exact package rates with staff during event booking. Custom balloon themes available.
        </p>
      </section>

      {/* CTA Box */}
      <section className="px-3 sm:px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="bg-inverse-surface text-inverse-on-surface rounded-3xl p-6 sm:p-12 text-center space-y-4 plate-shadow">
          <h2 className="font-headline text-2xl sm:text-3xl font-extrabold">Ready to Celebrate at Golden Bowl?</h2>
          <p className="font-body text-xs sm:text-base text-white/95 max-w-2xl mx-auto leading-relaxed font-medium">
            Let us handle the decor and aesthetics while you enjoy delicious North Indian food. Reach out via WhatsApp or call us to discuss your date.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <button
              onClick={() => setIsEventModalOpen(true)}
              className="bg-primary-container text-on-primary-container font-headline text-xs sm:text-sm font-bold px-8 py-3.5 rounded-full flex items-center justify-center gap-2 hover:bg-primary transition-all active:scale-95 shadow-md focus:ring-2 focus:ring-primary"
              aria-label="Book event decor"
            >
              <PartyPopper className="w-4 h-4" /> Book Event Decor
            </button>
            <a
              href="https://wa.me/917033313440?text=Hello%20Golden%20Bowl,%20I%20want%20to%20inquire%20about%20event%20decoration."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface text-on-surface font-headline text-xs sm:text-sm font-bold px-8 py-3.5 rounded-full flex items-center justify-center gap-2 hover:bg-surface-variant transition-all active:scale-95"
              aria-label="WhatsApp event desk"
            >
              WhatsApp Event Desk
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
