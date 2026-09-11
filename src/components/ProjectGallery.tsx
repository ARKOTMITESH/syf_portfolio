import React, { useState } from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ProjectGallery: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'kitchen', label: 'Modular Kitchens' },
    { id: 'bedroom', label: 'Bedrooms' },
    { id: 'living', label: 'Living Spaces' }
  ];

  const filteredProjects = projects.filter((proj) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'kitchen') return proj.category.toLowerCase().includes('kitchen');
    if (activeFilter === 'bedroom') return proj.category.toLowerCase().includes('bedroom');
    if (activeFilter === 'living') return proj.category.toLowerCase().includes('living');
    return true;
  });

  return (
    <section id="projects" className="py-24 sm:py-32 bg-studio-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono tracking-[0.25em] text-studio-taupe uppercase font-semibold">
                05 / Selected Works
              </span>
              <span className="w-12 h-[1px] bg-studio-gold" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-studio-dark tracking-tight">
              FEATURED PROJECTS
            </h2>
          </div>

          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {filters.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-sans tracking-wider uppercase transition-all duration-300 ${
                  activeFilter === tab.id
                    ? 'bg-studio-dark text-white font-bold shadow-md'
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer rounded-2xl bg-white border border-stone-200/80 hover:border-studio-gold/60 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <div className="absolute top-4 left-4 font-mono text-xs font-bold text-studio-gold bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                  {project.number}
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-stone-300 border border-white/10">
                  <Layers className="w-3 h-3 text-studio-gold" />
                  <span>{project.software.join(' + ')}</span>
                </div>

                <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-studio-gold text-studio-darker px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono tracking-[0.2em] text-studio-taupe uppercase font-semibold mb-1">
                    {project.category}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-studio-dark group-hover:text-studio-gold transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-xs text-stone-600 font-sans leading-relaxed line-clamp-3 mb-4">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-studio-dark font-medium group-hover:text-studio-gold transition-colors">
                  <span>Explore Specifications & Materials</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
