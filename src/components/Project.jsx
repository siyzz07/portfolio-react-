import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsDetails } from "./DatasOfProject";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
    
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function() {
          const totalWidth = containerRef.current.scrollWidth;
          const viewportWidth = window.innerWidth;
          
          gsap.to(containerRef.current, {
            x: - (totalWidth - viewportWidth + 600),
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=4000",
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const progress = self.progress;
                const index = Math.min(
                  Math.floor(progress * projectsDetails.length),
                  projectsDetails.length - 1
                );
                setActiveProject(index);
              }
            }
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative bg-[#030712] overflow-hidden flex flex-col pt-20 pb-20 md:pt-0 md:pb-0">
      
      {/* Mobile Title */}
      <div className="container mx-auto px-6 md:hidden mb-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground">
             Swipe right to explore my work.
          </p>
        </motion.div>
      </div>

      {/* Desktop Wrapper */}
      <div className="md:h-screen md:flex md:items-center relative">
        
        {/* Sticky Header / Progress Area for Desktop */}
        <div className="hidden md:flex flex-col justify-between h-[60vh] w-[30%] pl-20 pr-10 z-20 border-r border-white/5">
           <div>
             <h2 className="text-6xl font-black text-white leading-tight mb-6">
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Selected</span><br/>
               Works
             </h2>
             <p className="text-muted-foreground text-lg max-w-xs">
               Crafting digital experiences with precision and passion.
             </p>
           </div>
           
           <div className="space-y-6">
              <div className="text-8xl font-black text-white/5 tabular-nums relative">
                {String(activeProject + 1).padStart(2, '0')}
                <span className="text-2xl text-primary absolute top-0 -right-4 font-bold">+</span>
              </div>
              
              {/* Custom Progress Bar */}
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                  animate={{ width: `${((activeProject + 1) / projectsDetails.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              
              <div className="flex gap-4">
                 {projectsDetails.map((_, idx) => (
                   <button 
                     key={idx}
                     onClick={() => {/* Implement scroll to index if needed */}}
                     className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeProject ? 'bg-primary scale-150' : 'bg-white/20 hover:bg-white/40'}`}
                   />
                 ))}
              </div>
           </div>
        </div>

        {/* Scrolling Cards Container */}
        <div 
          ref={containerRef} 
          className="flex flex-row overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-6 md:gap-24 px-6 md:pl-20 md:pr-40 w-full md:w-auto relative z-10 md:items-center pb-12 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {projectsDetails.map((project, index) => (
            <div key={index} className="flex-shrink-0 w-[85vw] md:w-[600px] aspect-[4/5] md:aspect-auto md:h-[600px] flex items-center justify-center transition-all duration-500 snap-center">
               <ProjectCard {...project} index={index} isActive={index === activeProject || isMobile} />
            </div>
          ))}
          
          {/* End Card */}
          <div className="flex-shrink-0 w-[85vw] md:w-auto md:min-w-[300px] flex flex-col justify-center items-center opacity-50 snap-center aspect-[4/5] md:aspect-auto">
             <div className="w-24 h-24 rounded-full border border-dashed border-white/30 flex items-center justify-center animate-spin-slow">
               <span className="text-2xl">⚡</span>
             </div>
             <p className="mt-4 font-mono text-sm tracking-widest uppercase">Coming Soon</p>
        </div>

        {/* GitHub / View All Button */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 md:hidden w-full flex justify-center pointer-events-none">
           <a 
             href="https://github.com/shibinsiyad" 
             target="_blank" 
             rel="noreferrer"
             className="flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 backdrop-blur-md rounded-full text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-bounce-slow pointer-events-auto"
           >
             <FiGithub size={18} />
             View All Code
           </a>
        </div>
        
        <div className="hidden md:flex absolute bottom-12 right-20 z-20">
           <a 
             href="https://github.com/siyzz07" 
             target="_blank" 
             rel="noreferrer"
             className="group flex items-center gap-4 px-8 py-4 bg-black/50 border border-white/20 backdrop-blur-md rounded-full text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 overflow-hidden relative"
           >
             <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
             <span className="relative z-10 flex items-center gap-3">
               <FiGithub size={20} />
               View All Projects
             </span>
           </a>
        </div>

      </div>
      </div>
    </section>
  );
}

export default Projects;
