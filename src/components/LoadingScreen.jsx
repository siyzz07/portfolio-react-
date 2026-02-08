import { motion } from "framer-motion";

function LoadingScreen({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.5, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-[#030712] flex items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Rings */}
        <div className="relative w-32 h-32 mb-8">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-t-2 border-l-2 border-primary/20"
          />
          <motion.span
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border-r-2 border-b-2 border-secondary/20"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 1.5, times: [0, 0.6, 1], ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
             <span className="text-3xl font-black text-white tracking-tighter">S<span className="text-primary">S</span></span>
          </motion.div>
        </div>

        {/* Loading Text */}
        <motion.div 
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5 }}
           className="flex flex-col items-center gap-2"
        >
          <div className="flex gap-1">
             {["I", "N", "I", "T", "I", "A", "L", "I", "Z", "I", "N", "G"].map((char, i) => (
               <motion.span
                 key={i}
                 initial={{ opacity: 0 }}
                 animate={{ opacity: [0, 1, 0.5] }}
                 transition={{ delay: i * 0.1, duration: 1.5, repeat: Infinity }}
                 className="text-xs font-mono font-bold text-primary tracking-widest"
               >
                 {char}
               </motion.span>
             ))}
          </div>
          <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden mt-4">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-primary to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
