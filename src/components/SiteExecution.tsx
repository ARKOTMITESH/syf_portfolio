import React, { useState } from 'react';
import { HardHat, Compass, ShieldCheck, Eye } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Lightbox } from './Lightbox';

export const SiteExecution: React.FC = () => {
  const { siteStory } = PORTFOLIO_DATA;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const lightboxImages = siteStory.photos.map((p) => ({
    url: p.url,
    caption: p.caption,
  }));

  return (
    <section id="process" className="py-24 sm:py-32 bg-studio-darker text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono tracking-[0.25em] text-studio-gold uppercase font-semibold">
              06 / Execution Rigor
            </span>
            <span className="w-12 h-[1px] bg-studio-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {siteStory.heading}
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-sans leading-relaxed">
            {siteStory.subheading} As a civil engineering graduate, Saif Ali Khan integrates structural knowledge, material science, and field coordination to ensure digital designs are built with millimeter accuracy on site.
          </p>
        </div>

        <div className="mb-20">
          <div className="text-xs font-mono tracking-[0.2em] text-stone-400 uppercase font-semibold mb-6 flex items-center gap-2">
            <Compass className="w-4 h-4 text-studio-gold" />
            <span>The Design → Execution Lifecycle:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {siteStory.steps.map((step) => (
              <div
                key={step.number}
                className="p-5 rounded-xl bg-studio-surface border border-white/10 hover:border-studio-gold/50 transition-colors relative"
              >
                <div className="font-mono text-xs text-studio-gold font-bold mb-2">
                  STAGE {step.number}
                </div>
                <h3 className="font-serif text-base font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-stone-400 font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div>
              <h3 className="font-serif text-2xl font-bold tracking-wide text-white">
                ON-SITE DOCUMENTATION & FACTORY QUALITY CONTROL
              </h3>
              <p className="text-xs text-stone-400 font-sans mt-1">
                Authentic field photographs from active residential sites and modular fabrication lines.
              </p>
            </div>
            <div className="mt-3 sm:mt-0 flex items-center gap-2 text-xs font-mono text-studio-gold">
              <HardHat className="w-4 h-4" />
              <span>Live Site Inspections</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {siteStory.photos.map((photo, idx) => (
              <div
                key={photo.url}
                onClick={() => setSelectedPhotoIndex(idx)}
                className="group cursor-pointer rounded-xl bg-studio-surface border border-white/10 hover:border-studio-gold/60 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
                  
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-studio-gold border border-white/10">
                    Site Doc 0{idx + 1}
                  </div>

                  <div className="absolute bottom-3 right-3 p-2 rounded-full bg-studio-gold text-studio-darker opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-xs text-stone-300 font-sans leading-relaxed line-clamp-3">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-studio-surface via-studio-surface/80 to-studio-surface border border-studio-gold/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-studio-gold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Civil Engineering Assurance</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Why Site Execution Defines Project Success
            </h4>
            <p className="text-xs sm:text-sm text-stone-400 font-sans leading-relaxed">
              Many designers stop at 3D renders. Our studio oversees site measurements, electrical conduit routing, plumbing clearances, core material integrity (BWP 710 marine plywood), and millwork installation to eliminate costly rework.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-3.5 bg-studio-gold text-studio-darker font-sans text-xs tracking-wider uppercase font-bold rounded hover:bg-studio-goldLight transition-colors shadow-lg"
          >
            Consult On Site Execution
          </a>
        </div>
      </div>

      <Lightbox
        isOpen={selectedPhotoIndex !== null}
        images={lightboxImages}
        currentIndex={selectedPhotoIndex ?? 0}
        onClose={() => setSelectedPhotoIndex(null)}
        onNext={() => setSelectedPhotoIndex((prev) => ((prev ?? 0) + 1) % lightboxImages.length)}
        onPrev={() => setSelectedPhotoIndex((prev) => ((prev ?? 0) - 1 + lightboxImages.length) % lightboxImages.length)}
      />
    </section>
  );
};
