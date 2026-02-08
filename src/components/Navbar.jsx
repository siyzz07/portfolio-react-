import { useState, useEffect } from "react";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useTheme } from "../ContextApi/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

function NavBar() {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navLinks = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 transition-all duration-300 ${isMenuOpen ? 'mix-blend-difference' : ''}`}
      >
        <div 
          className={`
            flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500
            ${scrolled || isMenuOpen ? "bg-white/10 backdrop-blur-md border border-white/10 shadow-lg w-[90%] md:w-[70%]" : "bg-transparent w-full container"}
          `}
        >
          {/* Logo */}
          <a 
            href="#home"
            onClick={(e) => handleScroll(e, "home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:scale-110 transition-transform">
              S
            </div>
            <span className="font-bold tracking-widest text-sm text-foreground group-hover:text-primary transition-colors">SIYAD</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, item.toLowerCase())}
                className="text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-white/10 transition-all"
            >
              <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-primary shadow-[0_0_8px_currentColor]' : 'bg-secondary'}`} />
            </button>
            
            <button
              className="md:hidden text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-50 bg-background/95 flex flex-col items-center justify-center pointer-events-auto"
          >
            <button className="absolute top-6 right-6 p-4 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
              <FiX size={28} />
            </button>
            
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item}
                  custom={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleScroll(e, item.toLowerCase())}
                  className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 hover:to-primary transition-all duration-300"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 flex gap-8 text-muted-foreground"
            >
              <a href="https://github.com/siyzz07" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2"><FiGithub size={28} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2"><FiLinkedin size={28} /></a>
              <a href="mailto:contact@example.com" className="hover:text-white transition-colors p-2"><FiMail size={28} /></a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;
