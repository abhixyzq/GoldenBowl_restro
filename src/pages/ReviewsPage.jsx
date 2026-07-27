import React, { useState } from 'react';
import { Star, MessageSquare, Quote, CheckCircle2, ThumbsUp, Send } from 'lucide-react';

export const ReviewsPage = () => {
  const [reviewForm, setReviewForm] = useState({ name: '', rating: '5', comment: '' });
  const [submitted, setSubmitted] = useState(false);

  const reviewsList = [
    {
      name: "Rahul Sharma",
      date: "2 days ago",
      rating: 5,
      comment: "Best Biryani in Hajipur! Great for family dinners. The aroma itself is enough to make you hungry. Hygiene and service are top notch.",
      verified: true
    },
    {
      name: "Priya Kumar",
      date: "1 week ago",
      rating: 5,
      comment: "Friendly staff and very affordable prices. The chicken manchurian is a must-try. Perfect spot for weekend treats with friends.",
      verified: true
    },
    {
      name: "Amit Verma",
      date: "2 weeks ago",
      rating: 5,
      comment: "We booked Golden Bowl for my daughter's birthday setup. The balloon decoration was beautiful and the paneer tikka was extremely fresh!",
      verified: true
    },
    {
      name: "Sneha Roy",
      date: "1 month ago",
      rating: 4,
      comment: "Warm amber lighting and great North Indian curry dishes. Fast delivery to Kachahari Road area.",
      verified: true
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-24 md:pb-32 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto space-y-10 animate-fade-in pt-6">
      
      {/* Header Banner */}
      <div className="bg-surface-container-low p-8 md:p-12 rounded-3xl border border-outline-variant/30 plate-shadow flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="font-label text-xs font-bold text-secondary uppercase tracking-widest block">Customer Testimonials</span>
          <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-on-surface">
            What Hajipur Loves
          </h1>
          <p className="font-body text-sm text-on-surface-variant max-w-md leading-relaxed">
            Read real customer reviews from dining guests and food delivery patrons across Hajipur, Bihar.
          </p>
        </div>

        <div className="bg-surface p-6 rounded-2xl border border-outline-variant/30 text-center space-y-1 plate-shadow min-w-[220px]">
          <span className="font-headline text-4xl font-extrabold text-primary block">4.7★</span>
          <div className="flex justify-center text-amber-500 gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
          </div>
          <span className="text-xs text-on-surface-variant font-medium block">Based on 376 Google Reviews</span>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviewsList.map((rev, idx) => (
          <div key={idx} className="bg-surface p-8 rounded-3xl border border-outline-variant/30 plate-shadow space-y-4 relative">
            <Quote className="w-10 h-10 text-primary/15 absolute top-6 right-6" />
            
            <div className="flex items-center gap-2">
              <div className="flex text-amber-500 gap-0.5">
                {[...Array(rev.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-xs text-on-surface-variant opacity-75">• {rev.date}</span>
            </div>

            <p className="font-body text-sm text-on-surface italic leading-relaxed">
              "{rev.comment}"
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-outline-variant/20">
              <span className="font-label text-xs font-bold text-secondary">{rev.name}</span>
              {rev.verified && (
                <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" /> Verified Guest
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Review Submission Form */}
      <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 plate-shadow space-y-4">
        <div className="space-y-1">
          <h3 className="font-headline text-2xl font-bold text-on-surface">Share Your Experience</h3>
          <p className="text-xs text-on-surface-variant">Visited Golden Bowl recently? We'd love to hear your feedback.</p>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-2 bg-surface p-6 rounded-2xl border border-emerald-300">
            <ThumbsUp className="w-10 h-10 text-emerald-600 mx-auto" />
            <h4 className="font-headline text-lg font-bold text-emerald-800">Thank You for Your Feedback!</h4>
            <p className="text-xs text-on-surface-variant">Your review has been submitted to the Golden Bowl team.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Rahul S."
                  value={reviewForm.name}
                  onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface border border-outline-variant/30 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1">Rating</label>
                <select
                  value={reviewForm.rating}
                  onChange={(e) => setReviewForm({ ...reviewForm, rating: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface border border-outline-variant/30 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="5">⭐⭐⭐⭐⭐ (5/5 Excellent)</option>
                  <option value="4">⭐⭐⭐⭐ (4/5 Very Good)</option>
                  <option value="3">⭐⭐⭐ (3/5 Average)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-on-surface-variant mb-1">Your Review</label>
              <textarea
                required
                placeholder="Tell us about the food flavor, biryani aroma, atmosphere, or delivery speed..."
                rows={3}
                value={reviewForm.comment}
                onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-surface border border-outline-variant/30 text-xs focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-on-primary font-bold px-8 py-3 rounded-full text-xs flex items-center justify-center gap-2 hover:bg-opacity-90 active:scale-95 transition-all shadow-md"
            >
              <Send className="w-4 h-4" /> Submit Review
            </button>
          </form>
        )}
      </div>

    </div>
  );
};
