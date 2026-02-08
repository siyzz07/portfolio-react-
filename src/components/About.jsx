import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCode, FaLaptopCode, FaLightbulb } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 md:py-32 relative z-10">
      <div className="container mx-auto px-6">

  {/* Header */}
  <div className="flex flex-col md:flex-row items-end justify-between mb-12 about-card">
    <div className="max-w-2xl">
      <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
        Creative <span className="text-primary italic font-serif lowercase">technologist</span> & <br />
        Full Stack Developer
      </h2>

      <p className="text-xl text-muted-foreground font-light leading-relaxed">
        Building scalable web applications with modern technologies and practical solutions.
      </p>
    </div>

    <div className="hidden md:flex items-center gap-4">
      <div className="w-16 h-[1px] bg-white/20" />
      <span className="text-sm font-mono uppercase tracking-widest text-white/60">
        About Me
      </span>
    </div>
  </div>

  {/* Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min md:auto-rows-[auto]">

    {/* Main Bio Card - Spans 2 cols on desktop */}
    <div className="about-card md:col-span-2 p-8 md:p-12 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors group relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
        <FaCode size={120} />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-between space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">My Technical Focus</h3>
          <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
            <p>
              I’m a full-stack developer passionate about building intuitive and efficient web
              applications using the <strong className="text-white"> MERN stack</strong>. 
              I focus on creating scalable, secure, and high-performing solutions.
            </p>
            <p>
              I follow strong architectural practices including , Repository Pattern, MVC and SOLID principles. 
              I have implemented secure authentication, payment solutions, and AI integrations into real-world applications.
            </p>
            <p className="hidden md:block">
              I continuously improve my skills through platforms like LeetCode and believe in user-centric design 
              to deliver impactful digital solutions.
            </p>
          </div>
        </div>
        <div className="flex gap-3 flex-wrap">
          {["React", "Node.js", "MongoDB", "Express", "Tailwind"].map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-mono border border-white/10 rounded-full text-white/70">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Right Column Container for Stats & Philosophy */}
    <div className="space-y-4 md:contents">

  {/* Stats Card */}
  <div className="about-card relative p-8 rounded-[2rem] bg-primary/10 border border-primary/20 flex flex-col items-center justify-center text-center overflow-hidden group min-h-[200px]">

    {/* Hover Gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

    <div className="relative z-10 flex flex-col items-center gap-4">

      <h4 className="text-7xl font-black text-white leading-none">
        6<span className="text-primary">+</span>
      </h4>

      <p className="text-sm font-mono uppercase tracking-widest text-white/60">
        Projects Completed
      </p>

      <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
        <FaLaptopCode size={24} />
      </div>

    </div>

  </div>

</div>



    {/* Open to Work Card - Spans full width on mobile, 3 cols on desktop */}
    {/* <div className="about-card md:col-span-3 p-8 md:p-12 rounded-[2rem] bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between group gap-6">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      
      <div className="relative z-10 max-w-2xl space-y-4">
        <span className="inline-block px-3 py-1 text-xs border border-green-500/30 text-green-400 rounded-full">
          Open to Work
        </span>
        <h3 className="text-2xl font-bold text-white">
          Available for MERN Stack Developer Roles & Projects
        </h3>
        <p className="text-muted-foreground">
          I’m currently open to full-time opportunities, freelance work, and collaborative projects. 
          Let’s build scalable and impactful web applications together.
        </p>
      </div>
      
      <div className="relative z-10 w-16 h-16 rounded-full bg-white text-black group-hover:scale-110 transition-transform cursor-pointer flex-shrink-0 flex items-center justify-center">
         <FaLaptopCode size={24} />
      </div>
    </div> */}
  </div>
</div>

    </section>
  );
}

export default About;
