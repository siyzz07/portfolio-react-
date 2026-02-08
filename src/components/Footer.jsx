import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-8 bg-[#030712] border-t border-white/5 relative z-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Shibin Siyad. <span className="hidden md:inline">Built with React & Passion.</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/siyzz07" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/shibin-siyad-k/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.instagram.com/shibin_siyad__" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
