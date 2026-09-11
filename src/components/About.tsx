import React from 'react';
import { Ruler, Box, HardHat, GraduationCap, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const featureIcons = [
    <Ruler className="w-6 h-6 text-studio-gold" />,
    <Box className="w-6 h-6 text-studio-gold" />,
    <HardHat className="w-6 h-6 text-studio-gold" />
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-studio-bg relative overflow-hidden">
      {/* Decorative architectural background line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-stone-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono tracking-[0.25em] text-studio-taupe uppercase font-semibold">
              01 / Profile & Philosophy
            </span>
            <span className="w-12 h-[1px] bg-studio-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-studio-dark tracking-tight leading-tight">
            Engineering Precision.<br />
            Architectural Sensibility.
          </h2>
        </div>

        {/* 2-Column Grid: Portrait & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative architectural frame */}
              <div className="absolute -inset-4 border border-studio-gold/30 rounded-2xl -z-10 translate-x-2 translate-y-2" />
              
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-studio-surface aspect-[3/4] border border-stone-200">
                <img
                  src="/images/profile/saif-portrait.jpg"
                  alt="Saif Ali Khan - Interior Designer and Civil Engineering Graduate"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Overlay Name Badge */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-[11px] font-mono tracking-[0.2em] text-studio-gold uppercase font-medium mb-1">
                    Nellore, Andhra Pradesh
                  </div>
                  <h3 className="font-serif text-xl font-bold tracking-wide">
                    SAIF ALI KHAN
                  </h3>
                  <p className="text-xs text-stone-300 font-sans tracking-wider mt-0.5">
                    Civil Engineer & Interior Designer
                  </p>
                </div>
              </div>

              {/* Education Floating Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-4 rounded-lg shadow-xl border border-stone-100 max-w-[260px]">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-studio-beige rounded text-studio-dark shrink-0">
                    <GraduationCap className="w-5 h-5 text-studio-gold" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono tracking-wider text-studio-taupe uppercase font-semibold">
                      Academic Foundation
                    </div>
                    <div className="text-xs font-bold text-studio-dark mt-0.5">
                      B.Tech in Civil Engineering
                    </div>
                    <div className="text-[11px] text-stone-500">
                      QUBA College of Engg, Nellore
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Triad */}
          <div className="lg:col-span-7">
            <h3 className="font-sans text-xs tracking-[0.25em] text-studio-gold uppercase font-bold mb-4">
              ABOUT ME
            </h3>

            <p className="font-serif text-lg sm:text-xl text-stone-800 leading-relaxed mb-6 font-normal">
              "{personal.aboutMe}"
            </p>

            {/* The Integrated Triad */}
            <div className="my-8 p-6 bg-white rounded-xl border border-stone-200/80 shadow-sm">
              <div className="text-xs font-mono tracking-[0.2em] text-stone-500 uppercase font-semibold mb-3">
                The Integrated Discipline:
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-sans font-bold text-studio-dark">
                <span className="px-3 py-1.5 bg-studio-beige rounded border border-stone-200">
                  CIVIL ENGINEERING
                </span>
                <span className="text-studio-gold font-serif text-lg">+</span>
                <span className="px-3 py-1.5 bg-studio-beige rounded border border-stone-200">
                  INTERIOR DESIGN
                </span>
                <span className="text-studio-gold font-serif text-lg">+</span>
                <span className="px-3 py-1.5 bg-studio-dark text-white rounded border border-studio-dark">
                  SITE EXECUTION
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-studio-gold shrink-0" />
                <span>100% Zero-error site measurements</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-studio-gold shrink-0" />
                <span>High moisture core selection (BWP/HDMR)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-studio-gold shrink-0" />
                <span>Ray-traced client design approvals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-studio-gold shrink-0" />
                <span>Direct carpenter & contractor supervision</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Visual Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-8 border-t border-stone-200">
          {personal.credentials.map((cred, index) => (
            <div
              key={cred.number}
              className="group p-8 rounded-xl bg-white border border-stone-200/70 hover:border-studio-gold/60 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Corner number indicator */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs tracking-widest text-studio-gold font-bold px-2 py-1 rounded bg-studio-beige/60">
                  {cred.number}
                </span>
                <div className="w-10 h-10 rounded-lg bg-studio-beige/50 flex items-center justify-center group-hover:bg-studio-gold/10 transition-colors">
                  {featureIcons[index]}
                </div>
              </div>

              <h4 className="font-serif text-xl font-bold text-studio-dark mb-3 group-hover:text-studio-gold transition-colors">
                {cred.title}
              </h4>

              <p className="text-sm text-stone-600 font-sans leading-relaxed">
                {cred.description}
              </p>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-sans font-medium text-studio-taupe group-hover:text-studio-gold transition-colors">
                <span>Explore capability</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
