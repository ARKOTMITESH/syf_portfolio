import React from 'react';
import { Eye, Layout, Coffee, Wrench, Hammer } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const pillars = [
    {
      title: 'AESTHETICS',
      subtitle: 'Harmonious Form',
      desc: 'Balanced proportions, curated materials, and timeless textures that delight the eye.',
      icon: <Eye className="w-5 h-5 text-studio-gold" />
    },
    {
      title: 'FUNCTIONALITY',
      subtitle: 'Ergonomic Flow',
      desc: 'Seamless kitchen work triangles, intuitive storage, and zero wasted square footage.',
      icon: <Layout className="w-5 h-5 text-studio-gold" />
    },
    {
      title: 'COMFORT',
      subtitle: 'Sensory Warmth',
      desc: 'Glair-free cove lighting, soothing acoustics, and tactile upholstery made for living.',
      icon: <Coffee className="w-5 h-5 text-studio-gold" />
    },
    {
      title: 'PRACTICALITY',
      subtitle: 'Enduring Durability',
      desc: 'Moisture-resistant BWP marine boards, stain-proof quartz, and easy-clean laminates.',
      icon: <Wrench className="w-5 h-5 text-studio-gold" />
    },
    {
      title: 'EXECUTION',
      subtitle: 'Millimeter Truth',
      desc: 'The discipline to translate CAD vectors into flawless physical joinery on site.',
      icon: <Hammer className="w-5 h-5 text-studio-gold" />
    }
  ];

  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-studio-darker text-white relative overflow-hidden">
      {/* Editorial background elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src="/images/hero/hero-living.jpg"
          alt="Architectural space background"
          className="w-full h-full object-cover filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-studio-darker/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-studio-gold uppercase font-bold block mb-3">
            02 / Design Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            DESIGNING WITH PURPOSE
          </h2>
          <div className="w-20 h-[1px] bg-studio-gold mx-auto mb-8" />

          {/* Central Brand Statement */}
          <div className="p-8 sm:p-12 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md relative">
            <div className="text-2xl sm:text-3xl md:text-4xl font-serif leading-snug tracking-wide text-stone-100">
              <span className="block text-stone-300 font-light">"Beautiful design matters.</span>
              <span className="block text-studio-gold font-bold italic mt-2">Practical execution matters more."</span>
            </div>
            <p className="mt-6 text-xs sm:text-sm text-stone-400 font-sans tracking-widest uppercase font-medium">
              — Studio Principle • Saif Ali Khan
            </p>
          </div>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-6 rounded-xl bg-studio-surface/80 border border-white/5 hover:border-studio-gold/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center mb-5 group-hover:border-studio-gold/40 transition-colors">
                {pillar.icon}
              </div>
              
              <div className="text-[10px] font-mono text-studio-gold uppercase tracking-widest font-semibold mb-1">
                Pillar 0{idx + 1}
              </div>
              
              <h3 className="font-serif text-lg font-bold text-white tracking-wide mb-1">
                {pillar.title}
              </h3>
              
              <div className="text-xs text-stone-400 font-sans font-medium mb-3">
                {pillar.subtitle}
              </div>

              <p className="text-xs text-stone-400 font-sans leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
