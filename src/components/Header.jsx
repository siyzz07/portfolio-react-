import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import profileImg from '../assets/ProfileImage.jpg';

function Header() {
  return (
    <header id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-white/70">Available for hire</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
              <span className="block text-white">Shibin</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary">
                Siyad
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed font-light"
          >
             A <span className="text-white font-medium">Creative Technologist</span> focused on high-performance digital experiences—
             where <span className="text-primary">minimalism</span> meets engineering excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-6"
          >
            <a 
              href="/Shibin_Siyad___Resume (5).pdf" 
              download="Shibin_Siyad_Resume.pdf"
              className="btn-primary flex items-center gap-2 group cursor-pointer"
            >
              Download CV
              <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
            <div className="flex items-center gap-4">
               {[
                 { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/shibin-siyad-k/" },
                 { icon: <FaGithub />, href: "https://github.com/siyzz07" },
                 { icon: <FaInstagram />, href: "https://www.instagram.com/shibin_siyad__" },
                 { icon: <FaEnvelope />, href: "mailto:shibinsiyad.k.kdpm@gmail.com" },
               ].map((item, i) => (
                 <a
                   key={i}
                   href={item.href}
                   target="_blank"
                   rel="noreferrer"
                   className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
                 >
                   {item.icon}
                 </a>
               ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual/Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 1.2, type: "spring" }}
          className="order-1 md:order-2 flex justify-center relative mt-12 md:mt-0"
        >
          <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem] group">
             {/* Animated Rings */}
             <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
             <div className="absolute inset-4 border border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
             
             {/* Glow Effect */}
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-purple-500/10 to-secondary/20 rounded-full blur-[60px] animate-pulse-slow" />
             
             {/* Main Image Container */}
             <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 backdrop-blur-sm shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/40 z-10" />
                <img 
                  src="/Shibinprofile.png" 
                  alt="Shibin Siyad" 
                  className="w-full h-full object-cover object-top scale-110 group-hover:scale-100 transition-transform duration-700 ease-out" 
                />
             </div>

             {/* Floating Elements/Decorations */}
             <motion.div 
               animate={{ y: [-10, 10, -10] }} 
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-4 -right-4 w-16 h-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-xl z-20"
             >
               <span className="text-2xl">{`</>`}</span>
             </motion.div>
             
             <motion.div 
               animate={{ y: [10, -10, 10] }} 
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-8 -left-8 w-auto px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2 shadow-xl z-20"
             >
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
               <span className="text-xs font-mono text-white/80">Open to Work</span>
             </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </header>
  );
}

export default Header;
