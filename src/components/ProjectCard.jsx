import { useContext } from "react";
import { projectDataContext } from "../ContextApi/ProjectSample";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function ProjectCard({ title, image, index, cover, link, isActive = true }) {
  const { setData } = useContext(projectDataContext);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      animate={{ 
        scale: isActive ? 1 : 0.95, 
        opacity: isActive ? 1 : 0.5,
        filter: isActive ? "grayscale(0%)" : "grayscale(30%)"
      }}
      transition={{ duration: 0.5 }}
      // Standard clean hover effect (no tilt)
      className={`group relative rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-white/5 border transition-all duration-500 h-full w-full ${isActive ? 'border-primary/50 shadow-2xl shadow-primary/10' : 'border-white/5 hover:border-white/20'}`}
    >
      {/* Background Image with Zoom */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl md:rounded-[2.5rem]">
         <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
         <img
           src={image}
           alt={title}
           className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
         />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-12 transform">
         <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
           
           <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className={`w-12 h-[2px] transition-all duration-300 ${isActive ? 'bg-primary' : 'bg-white/50 group-hover:bg-primary'}`}></span>
                <p className="text-xs md:text-sm font-mono text-primary/80 uppercase tracking-widest font-bold backdrop-blur-md">
                  {cover} 
                </p>
              </div>
              <span className="text-5xl md:text-7xl text-white/5 font-black group-hover:text-white/10 transition-colors pointer-events-none select-none">
                0{index + 1}
              </span>
           </div>
           
           <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-[0.9] drop-shadow-lg group-hover:text-primary transition-colors line-clamp-2">
             {title}
           </h3>
           
           <button
             onClick={() => setData({ index, popup: true })}
             className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors group/btn"
           >
             View Case Study 
             <span className="p-2 rounded-full bg-white/10 group-hover/btn:bg-primary group-hover/btn:text-white transition-colors">
               <FaArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
             </span>
           </button>
         </div>
      </div>

    </motion.div>
  );
}

export default ProjectCard;
