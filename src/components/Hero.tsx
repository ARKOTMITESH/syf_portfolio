import React from 'react';
import { ArrowDown, ArrowRight, Award, Compass, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-studio-darker"
    >
      {/* Cinematic Background Image with Editorial Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/hero-bg.jpg"
          alt="Luxury modern interior dining and living space designed by Saif Ali Khan"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite] opacity-65"
        />
        {/* Editorial architectural gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-studio-darker via-studio-darker/60 to-studio-darker/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-studio-darker/90 via-studio-darker/40 to-transparent" />
        {/* Subtle architectural grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center md:text-left flex flex-col justify-center min-h-screen">
        <div className="max-w-4xl">
          {/* Studio Tag & Positioning */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-studio-gold/30 bg-black/40 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-studio-gold animate-ping" />
            <span className="text-[11px] font-mono tracking-[0.2em] text-studio-gold uppercase font-medium">
              Civil Engineering Graduate • Design & Site Execution
            </span>
          </div>

          {/* Primary Name */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4 leading-[1.08]">
            {personal.name}
          </h1>

          {/* Professional Title */}
          <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
            <span className="h-[1px] w-12 bg-studio-gold hidden sm:inline-block" />
            <span className="font-sans text-lg sm:text-2xl md:text-3xl tracking-[0.25em] text-studio-gold uppercase font-light">
              {personal.title}
            </span>
            <span className="h-[1px] w-12 bg-studio-gold hidden sm:inline-block" />
          </div>

          {/* Hero Tagline */}
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-stone-200 max-w-2xl leading-relaxed mb-10 font-normal">
            "{personal.tagline}"
          </p>

          {/* Key Differentiator Badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mb-12 text-xs font-sans tracking-wider text-stone-400">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-studio-gold" />
              <span>Modular Kitchens & Wardrobes</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-studio-gold" />
              <span>SketchUp • Lumion • Enscape</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-studio-gold" />
              <span>Full Site Supervision (Nellore)</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-studio-gold text-studio-darker font-sans text-xs tracking-[0.2em] uppercase font-bold rounded hover:bg-studio-goldLight transition-all duration-300 shadow-xl shadow-studio-gold/20 group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 hover:border-studio-gold text-white hover:text-studio-gold bg-black/30 backdrop-blur-sm font-sans text-xs tracking-[0.2em] uppercase font-medium rounded transition-all duration-300"
            >
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="pt-16 sm:pt-20 md:pt-24 flex items-center justify-center md:justify-start">
          <a
            href="#about"
            className="group inline-flex items-center gap-3 text-stone-400 hover:text-studio-gold transition-colors text-xs font-sans tracking-[0.25em] uppercase"
          >
            <span>Explore Portfolio</span>
            <div className="w-8 h-8 rounded-full border border-stone-600 group-hover:border-studio-gold flex items-center justify-center transition-colors">
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
