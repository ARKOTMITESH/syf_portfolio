import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  const { testimonials } = PORTFOLIO_DATA;
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-studio-dark text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-studio-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono tracking-[0.25em] text-studio-gold uppercase font-semibold">
                08 / Client Satisfaction
              </span>
              <span className="w-12 h-[1px] bg-studio-gold" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              CLIENT TESTIMONIALS
            </h2>
            <p className="mt-4 text-sm text-stone-400 font-sans leading-relaxed">
              Real feedback and completion moments documented with residential homeowners across Nellore.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/5 hover:bg-studio-gold text-white hover:text-studio-darker transition-colors border border-white/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/5 hover:bg-studio-gold text-white hover:text-studio-darker transition-colors border border-white/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((test, index) => (
            <div
              key={test.id}
              onClick={() => setActiveIndex(index)}
              className={`p-8 rounded-2xl bg-studio-surface border transition-all duration-300 flex flex-col justify-between relative cursor-pointer ${
                activeIndex === index
                  ? 'border-studio-gold shadow-2xl shadow-studio-gold/10 ring-1 ring-studio-gold/30'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-studio-gold">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex gap-1 text-studio-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="font-serif text-base sm:text-lg text-stone-200 leading-relaxed italic mb-8">
                  "{test.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-studio-gold/60 shrink-0 bg-stone-800">
                  <img
                    src={test.image}
                    alt="Client handover photo from project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white tracking-wide">
                    {test.clientType}
                  </h4>
                  <p className="text-xs font-mono text-studio-gold mt-0.5">
                    {test.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-studio-surface/60 border border-white/10 text-center">
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-studio-gold">100%</div>
            <div className="text-xs font-sans text-stone-400 mt-1 uppercase tracking-wider">Custom Modular Design</div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-studio-gold">BWP 710</div>
            <div className="text-xs font-sans text-stone-400 mt-1 uppercase tracking-wider">Marine Core Standard</div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-studio-gold">3D Raytrace</div>
            <div className="text-xs font-sans text-stone-400 mt-1 uppercase tracking-wider">Pre-Execution Signoff</div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-studio-gold">On-Site</div>
            <div className="text-xs font-sans text-stone-400 mt-1 uppercase tracking-wider">Direct Civil Oversight</div>
          </div>
        </div>
      </div>
    </section>
  );
};
