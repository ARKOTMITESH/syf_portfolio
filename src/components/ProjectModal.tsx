import React, { useState, useEffect } from 'react';
import { X, ZoomIn, CheckCircle, Layers, ArrowUpRight } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { Lightbox } from './Lightbox';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    setSelectedImageIndex(0);
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isLightboxOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, isLightboxOpen, onClose]);

  if (!project) return null;

  const currentImage = project.gallery[selectedImageIndex] || project.gallery[0];

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
        <div
          className="relative bg-studio-darker text-white w-full max-w-6xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-studio-gold bg-studio-gold/10 px-2.5 py-1 rounded border border-studio-gold/30">
                PROJECT {project.number}
              </span>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide">
                  {project.title}
                </h3>
                <span className="text-xs text-stone-400 font-sans tracking-wider uppercase">
                  {project.category}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-stone-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-studio-gold"
              aria-label="Close project modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-10">
            {/* Gallery Section with Main Image & Thumbnails */}
            <div>
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black aspect-[16/9] group max-h-[500px]">
                <img
                  src={currentImage.url}
                  alt={currentImage.caption}
                  className="w-full h-full object-contain cursor-zoom-in"
                  onClick={() => setIsLightboxOpen(true)}
                />

                {/* Fullscreen zoom action */}
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute top-4 right-4 p-3 rounded-full bg-black/60 hover:bg-studio-gold text-white hover:text-studio-darker backdrop-blur-md transition-all border border-white/10"
                  aria-label="Open fullscreen image viewer"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>

                {/* Caption overlay */}
                {currentImage.caption && (
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <p className="text-xs sm:text-sm text-stone-200 font-sans text-center">
                      {currentImage.caption}
                    </p>
                  </div>
                )}
              </div>

              {/* Thumbnails row */}
              {project.gallery.length > 1 && (
                <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-2">
                  {project.gallery.map((img, idx) => (
                    <button
                      key={img.url}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative rounded-lg overflow-hidden border-2 transition-all shrink-0 w-24 sm:w-28 h-16 sm:h-20 ${
                        selectedImageIndex === idx
                          ? 'border-studio-gold ring-2 ring-studio-gold/30'
                          : 'border-white/10 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img.url} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Project Overview & Narrative */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h4 className="text-xs font-mono tracking-[0.2em] text-studio-gold uppercase font-semibold mb-2">
                    Design Overview
                  </h4>
                  <p className="font-serif text-lg text-stone-200 leading-relaxed font-normal">
                    {project.fullDescription}
                  </p>
                </div>

                {/* Design Highlights */}
                <div>
                  <h4 className="text-xs font-mono tracking-[0.2em] text-studio-gold uppercase font-semibold mb-3">
                    Architectural & Execution Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.designHighlights.map((hl) => (
                      <div key={hl} className="flex items-start gap-2.5 text-xs text-stone-300">
                        <CheckCircle className="w-4 h-4 text-studio-gold shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Materials list */}
                <div>
                  <h4 className="text-xs font-mono tracking-[0.2em] text-studio-gold uppercase font-semibold mb-3">
                    Curated Materials & Finishes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.materials.map((mat) => (
                      <span
                        key={mat}
                        className="text-xs font-sans px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-stone-300"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar: Technical Specs & Software */}
              <div className="lg:col-span-4 bg-white/[0.03] border border-white/10 rounded-xl p-6 space-y-6">
                <div>
                  <h4 className="text-xs font-mono tracking-[0.2em] text-studio-gold uppercase font-semibold mb-3">
                    Software Suite
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.software.map((sw) => (
                      <span
                        key={sw}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-studio-gold/10 text-studio-gold font-mono text-xs border border-studio-gold/30 font-medium"
                      >
                        <Layers className="w-3.5 h-3.5" />
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono tracking-[0.2em] text-studio-gold uppercase font-semibold mb-3">
                    Specifications
                  </h4>
                  <dl className="divide-y divide-white/5 text-xs">
                    {project.specifications.map((spec) => (
                      <div key={spec.label} className="py-2.5 flex flex-col">
                        <dt className="text-stone-400 font-sans">{spec.label}</dt>
                        <dd className="text-stone-100 font-semibold mt-0.5">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-studio-gold text-studio-darker font-sans text-xs tracking-wider uppercase font-bold rounded hover:bg-studio-goldLight transition-colors"
                  >
                    <span>Discuss Similar Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Component for Fullscreen zoom */}
      <Lightbox
        isOpen={isLightboxOpen}
        images={project.gallery}
        currentIndex={selectedImageIndex}
        onClose={() => setIsLightboxOpen(false)}
        onNext={() => setSelectedImageIndex((prev) => (prev + 1) % project.gallery.length)}
        onPrev={() => setSelectedImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)}
      />
    </>
  );
};
