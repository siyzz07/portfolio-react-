import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaLock } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiTypescript, SiSocketdotio, SiMui, SiMysql, SiPostman, SiRedux, SiVite, SiRadixui, SiAgora } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Frontend", items: [
    { name: "React", icon: <FaReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    // { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Material-UI", icon: <SiMui /> },
    { name: "shadcn/ui", icon: <SiRadixui /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
  ]},
  { name: "Backend", items: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Socket.IO", icon: <SiSocketdotio /> },
    { name: "OAuth", icon: <FaLock /> },
  ]},
  { name: "Database", items: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
  ]},
  { name: "Tools", items: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "Agora", icon: <SiAgora /> },
  ]},
];

function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-category", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 md:py-32 relative z-10 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-secondary/5 rounded-full blur-[80px] md:blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-end gap-6 about-item">
           <div className="flex-1">
             <h2 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6">
               Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">Arsenal</span>
             </h2>
             <div className="h-1 md:h-1.5 w-24 md:w-32 bg-secondary/50 rounded-full" />
           </div>
           <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed md:text-right">
              The tools and technologies I use to bring ideas to life. Always exploring, always learning.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((category, catIndex) => (
            <div key={catIndex} className="skill-category relative group h-full">
               <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[1.5rem] md:rounded-[2rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <div className="h-full bg-black/40 border border-white/5 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] backdrop-blur-sm group-hover:border-white/10 transition-colors duration-500 flex flex-col">
                  
                  <div className="flex items-center gap-4 mb-6 md:mb-8">
                     <span className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center border border-white/10 text-white shadow-lg 
                       ${catIndex === 0 ? 'bg-blue-500/10' : 
                         catIndex === 1 ? 'bg-green-500/10' : 
                         catIndex === 2 ? 'bg-cyan-500/10' : 'bg-orange-500/10'}`}>
                        {catIndex === 0 ? <FaReact size={24} className="md:w-7 md:h-7" /> : 
                         catIndex === 1 ? <FaNodeJs size={24} className="md:w-7 md:h-7" /> : 
                         catIndex === 2 ? <SiMongodb size={24} className="md:w-7 md:h-7" /> :
                         <FaGitAlt size={24} className="md:w-7 md:h-7" />}
                     </span>
                     <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{category.name}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {category.items.map((skill, index) => (
                      <div key={index} className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/item cursor-default">
                        <span className="text-xl md:text-2xl text-muted-foreground group-hover/item:text-white transition-colors duration-300">
                          {skill.icon}
                        </span>
                        <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover/item:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
