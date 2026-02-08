import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import ProjectData from './components/ProjectData'
import { useContext, useState, useEffect, useRef } from "react";
import { projectDataContext } from "./ContextApi/ProjectSample";
import InteractiveBackground from "./components/InteractiveBackground";
import LoadingScreen from "./components/LoadingScreen";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';

function App() {
  const { data } = useContext(projectDataContext);
  const [isLoading, setIsLoading] = useState(true);

  const lenisRef = useRef(null);

  useEffect(() => {
   
    const lenis = new Lenis({
      duration: 1.5, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);


    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
  
      if (!target || !target.hash || !target.hash.startsWith('#') || target.hash.length < 2) return;

      e.preventDefault();
      const element = document.getElementById(target.hash.slice(1));
      if (element) {
        lenis.scrollTo(element);
      }
    };
    
    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Stop Lenis when modal is open
  useEffect(() => {
    if (data.popup) {
      lenisRef.current?.stop();
    } else {
      lenisRef.current?.start();
    }
  }, [data.popup]);

  return (
    <div className="relative min-h-screen text-foreground selection:bg-primary/30 selection:text-white">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1 }}
        >
          {/* Background Layer */}
          <InteractiveBackground />
          <CustomCursor />
          
          {/* Overlay Content */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <NavBar />
            
            <main className="flex-grow">
              <Header />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </main>
            
            <Footer />
          </div>

          {/* Modal Popup */}
          <AnimatePresence>
            {data.popup && <ProjectData />}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

export default App;