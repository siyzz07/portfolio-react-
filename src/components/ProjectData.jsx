import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { projectDataContext } from "../ContextApi/ProjectSample";
import { projectsDetails } from "./DatasOfProject";
import { FiX, FiExternalLink, FiGithub, FiLayers } from "react-icons/fi";

function ProjectData() {
  const { data, setData } = useContext(projectDataContext);
  const project = projectsDetails[data.index || 0];


  useEffect(() => {
    if (data.popup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => document.body.style.overflow = 'unset';
  }, [data.popup]);

  if (!data.popup || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setData({ ...data, popup: false })}
        className="absolute inset-0 bg-background/90 backdrop-blur-md transition-all cursor-pointer"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-6xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden group"
      >
        <button
          onClick={() => setData({ ...data, popup: false })}
          className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/50 hover:bg-white/10 text-white/70 hover:text-white transition-all border border-white/10 backdrop-blur-md"
        >
          <FiX size={24} />
        </button>

        <div className="flex-1 overflow-y-auto custom-scrollbar" data-lenis-prevent>
          {/* Hero Header */}
          <div className="relative h-[400px] md:h-[500px] w-full">
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 to-transparent z-10" />
             
             <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
             
             <div className="absolute bottom-0 left-0 p-8 md:p-16 z-20 w-full">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
               >
                 <span className="inline-block px-3 py-1 mb-4 text-xs font-mono font-bold tracking-widest text-primary uppercase bg-primary/10 border border-primary/20 rounded-full backdrop-blur-md">
                   {project.cover || "Featured Project"}
                 </span>
                 <h2 className="text-5xl md:text-7xl font-black text-white mb-4 leading-none tracking-tight">{project.title}</h2>
               </motion.div>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 md:p-16 bg-[#0a0a0a]">
            {/* Left Column: Description */}
            <div className="lg:col-span-8 space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="prose prose-invert prose-lg max-w-none"
              >
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-8 bg-primary rounded-full"/> Overview
                </h3>
                <div className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light space-y-6">
                  <p>{project.description1}</p>
                  <p>{project.description2}</p>
                </div>
              </motion.div>
              
              <div className="flex flex-wrap gap-4">
                 <a 
                   href={project.link} 
                   target="_blank" 
                   rel="noreferrer" 
                   className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-white/10"
                 >
                   <FiExternalLink /> Live Demo
                 </a>
                 <a 
                   href="#" 
                   className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold hover:bg-white/10 transition-colors"
                 >
                   <FiGithub /> Source Code
                 </a>
              </div>
            </div>

            {/* Right Column: Key Features / Tech Stack Placeholder */}
            <div className="lg:col-span-4 space-y-8">
               <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10">
                 <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                   <FiLayers className="text-primary"/> Tech Stack
                 </h4>
                 <div className="flex flex-wrap gap-2">
                    {project.stack.map((tag, i) => (
                      <span key={i} className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-lg text-white/80">
                        {tag}
                      </span>
                    ))}
                 </div>
               </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

export default ProjectData;
