import React, { useState } from 'react';
import { ThemeMode, ReviewItem } from '../types';
import { REVIEWS } from '../data/barberData';
import { Star, CheckCircle2, MessageSquare, ThumbsUp, Plus } from 'lucide-react';

interface ReviewsViewProps {
  theme: ThemeMode;
  onOpenBooking: () => void;
}

export const ReviewsView: React.FC<ReviewsViewProps> = ({ theme, onOpenBooking }) => {
  const isDark = theme === 'dark';
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    author: '',
    city: 'Miami, FL',
    rating: 5,
    service: 'Master Signature Haircut',
    comment: '',
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.author || !newReview.comment) return;

    const item: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: newReview.author,
      city: newReview.city || 'Miami, FL',
      rating: newReview.rating,
      date: 'Just now',
      comment: newReview.comment,
      service: newReview.service,
      verified: true,
    };

    setReviewsList([item, ...reviewsList]);
    setNewReview({
      author: '',
      city: 'Miami, FL',
      rating: 5,
      service: 'Master Signature Haircut',
      comment: '',
    });
    setShowForm(false);
  };

  return (
    <div className={`w-full py-12 sm:py-16 px-6 sm:px-12 lg:px-16 transition-colors ${
      isDark ? 'bg-[#0F0F0F] text-[#E5E7EB]' : 'bg-[#FDFCFB] text-[#1F1F1F]'
    }`}>
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[#B87333] font-mono tracking-[0.3em] uppercase text-xs font-bold">
            Client Reputation
          </span>
          <h1
            className="text-4xl sm:text-6xl font-bold tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Verified Client Reviews
          </h1>
          <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Unfiltered feedback from gentlemen across South Florida and international visitors.
          </p>
        </div>

        {/* Rating Scoreboard Banner */}
        <div className={`p-8 rounded-sm border ${
          isDark ? 'bg-[#141414] border-[#B87333]/30' : 'bg-white border-[#B87333]/30'
        } max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 items-center text-center sm:text-left`}>
          <div className="sm:border-r border-[#B87333]/20 sm:pr-8 space-y-1">
            <span className="text-5xl font-black font-mono text-[#B87333]">4.9</span>
            <div className="flex justify-center sm:justify-start gap-1 text-[#B87333] pt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-gray-400">Based on 500+ verified sessions</p>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-12 text-gray-400">5 Star</span>
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#B87333] w-[96%]"></div>
              </div>
              <span className="font-mono text-gray-300">96%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 text-gray-400">4 Star</span>
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#B87333] w-[4%]"></div>
              </div>
              <span className="font-mono text-gray-300">4%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 text-gray-400">3 Star</span>
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#B87333] w-[0%]"></div>
              </div>
              <span className="font-mono text-gray-300">0%</span>
            </div>
          </div>

          <div className="sm:pl-4 flex flex-col gap-3">
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-[#B87333] hover:bg-[#965a26] text-[#0F0F0F] py-3 px-5 font-bold uppercase tracking-widest text-xs rounded-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Leave A Review</span>
            </button>
            <button
              onClick={onOpenBooking}
              className="border border-white/20 hover:border-[#B87333] text-xs uppercase font-bold tracking-widest py-2.5 px-4 rounded-sm transition-all"
            >
              Book Your Chair
            </button>
          </div>
        </div>

        {/* Review Submission Form Modal / Box */}
        {showForm && (
          <div className={`p-6 sm:p-8 rounded-sm border border-[#B87333] max-w-2xl mx-auto shadow-2xl transition-all ${
            isDark ? 'bg-[#181818]' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-4 border-b border-[#B87333]/20 pb-3">
              <h3 className="text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Share Your Experience with Bran2Barberking
              </h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-white text-xs uppercase font-mono"
              >
                Cancel
              </button>
            </div>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-[#B87333] block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mateo Rossi"
                    value={newReview.author}
                    onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                    className="w-full p-2 text-xs rounded-sm border border-white/10 bg-black/40 focus:border-[#B87333]"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-[#B87333] block mb-1">Neighborhood / City</label>
                  <input
                    type="text"
                    placeholder="e.g. Brickell, Miami"
                    value={newReview.city}
                    onChange={(e) => setNewReview({ ...newReview, city: e.target.value })}
                    className="w-full p-2 text-xs rounded-sm border border-white/10 bg-black/40 focus:border-[#B87333]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-[#B87333] block mb-1">Service Received</label>
                  <select
                    value={newReview.service}
                    onChange={(e) => setNewReview({ ...newReview, service: e.target.value })}
                    className="w-full p-2 text-xs rounded-sm border border-white/10 bg-black/40 focus:border-[#B87333]"
                  >
                    <option value="Master Signature Haircut">Master Signature Haircut</option>
                    <option value="The King's Royal VIP Experience">The King's Royal VIP Experience</option>
                    <option value="Beard Sculpting & Hot Towel Shave">Beard Sculpting & Hot Towel Shave</option>
                    <option value="360 Waves & Low Drop Taper">360 Waves & Low Drop Taper</option>
                    <option value="Freestyle Razor Hair Design">Freestyle Razor Hair Design</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-[#B87333] block mb-1">Rating</label>
                  <div className="flex items-center gap-2 pt-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="cursor-pointer"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newReview.rating
                              ? 'text-[#B87333] fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-[#B87333] block mb-1">Your Review</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us about the hairline, the fade quality, or the barbershop vibe..."
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full p-2.5 text-xs rounded-sm border border-white/10 bg-black/40 focus:border-[#B87333]"
                ></textarea>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-[#B87333] hover:bg-[#965a26] text-[#0F0F0F] px-6 py-2.5 font-bold uppercase tracking-widest text-xs rounded-sm"
                >
                  Publish Review
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsList.map((review) => (
            <div
              key={review.id}
              className={`p-6 sm:p-8 rounded-sm border flex flex-col justify-between transition-all ${
                isDark ? 'bg-[#141414] border-[#B87333]/20' : 'bg-white border-gray-200'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-1 text-[#B87333]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-500 font-mono">{review.date}</span>
                </div>

                <p className={`text-sm italic leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/5 flex justify-between items-end">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-white">{review.author}</span>
                    {review.verified && (
                      <span className="inline-flex items-center text-[10px] text-emerald-400 font-mono gap-0.5">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified Cut
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-400">{review.city}</span>
                </div>
                <span className="text-[11px] font-mono text-[#B87333]">{review.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
