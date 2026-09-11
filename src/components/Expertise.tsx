import React from 'react';
import {
  Compass,
  Home,
  Utensils,
  Bed,
  Tv,
  Ruler,
  Layers,
  Palette,
  HardHat,
  FileSpreadsheet
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Expertise: React.FC = () => {
  const { expertise } = PORTFOLIO_DATA;

  const iconMap: Record<string, React.ReactNode> = {
    'interior-design': <Compass className="w-5 h-5" />,
    'residential-interiors': <Home className="w-5 h-5" />,
    'modular-kitchens': <Utensils className="w-5 h-5" />,
    'bedroom-design': <Bed className="w-5 h-5" />,
    'living-room-design': <Tv className="w-5 h-5" />,
    'space-planning': <Ruler className="w-5 h-5" />,
    '3d-visualization': <Layers className="w-5 h-5" />,
    'material-selection': <Palette className="w-5 h-5" />,
    'site-execution': <HardHat className="w-5 h-5" />,
    'construction-boq': <FileSpreadsheet className="w-5 h-5" />
  };

  return (
    <section id="expertise" className="py-24 sm:py-32 bg-studio-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono tracking-[0.25em] text-studio-taupe uppercase font-semibold">
                03 / Capabilities
              </span>
              <span className="w-12 h-[1px] bg-studio-gold" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-studio-dark tracking-tight">
              SERVICES & EXPERTISE
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-stone-600 max-w-md font-sans leading-relaxed">
            Specialized interior architecture and site management disciplines grounded in engineering standards and verified project executions.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {expertise.map((item, index) => (
            <div
              key={item.id}
              className="group p-6 rounded-xl bg-white border border-stone-200/80 hover:border-studio-gold/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-studio-beige/70 flex items-center justify-center text-studio-gold group-hover:bg-studio-gold group-hover:text-studio-darker transition-colors duration-300">
                    {iconMap[item.id] || <Compass className="w-5 h-5" />}
                  </div>
                  <span className="text-[11px] font-mono text-stone-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-studio-dark mb-2 group-hover:text-studio-gold transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-stone-400 group-hover:text-studio-gold transition-colors">
                <span>Verified Field Service</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
