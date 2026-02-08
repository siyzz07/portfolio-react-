import { motion } from "framer-motion";
import { FaEnvelope, FaPaperPlane, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-20 backdrop-blur-md shadow-2xl overflow-hidden group"
        >
           <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
           
           <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight relative z-10">
             Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Collaborate?</span>
           </h2>
           <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto relative z-10">
             Whether you have a project in mind or just want to chat, let's create something extraordinary together.
           </p>

           <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
             <a 
               href="mailto:shibinsiyad.k.kdpm@gmail.com" 
               className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]"
             >
               <FaEnvelope size={20} />
               Send an Email
               <div className="absolute inset-0 rounded-full bg-white blur-md opacity-50 group-hover:opacity-75 transition-opacity -z-10" />
             </a>
             
             <a 
               href="https://wa.me/+918606399420" 
               target="_blank" 
               rel="noreferrer" 
               className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 hover:border-white/40 transition-all"
             >
               <FaWhatsapp size={20} />
               WhatsApp Me
             </a>
           </div>

           <div className="mt-16 pt-8 border-t border-white/5 relative z-10">
             <p className="text-sm text-muted-foreground font-mono uppercase tracking-widest">
               Based in Kerala, India • Available Worldwide
             </p>
           </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
