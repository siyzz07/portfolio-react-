import { useTheme } from "../ContextApi/ThemeProvider";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa"; 
import profileImg from '../assets/ProfileImage.jpg'


function Header() {
  const { isDark } = useTheme(); // Get theme state from ThemeProvider

  return (
    <header
      id="home"
      className={`pt-20 sm:pt-24 pb-10 sm:pb-12 min-h-screen flex items-center ${
        isDark
          ? "bg-black text-gray-200"
          : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <img
          src={profileImg}
          alt="Profile"
          className={`w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full mx-auto mb-4 sm:mb-6 border-4 shadow-lg ${
            isDark ? "border-gray-300" : "border-black"
          }`}
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Shibin Siyad
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-3 sm:mt-4 font-light">
          Full-Stack Developer, Technology & Business Enthusiast
        </p>
        <a
          href="Shibin_Siyad___CV.pdf"
          download
          className={`mt-4 sm:mt-6 inline-block px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition ${
            isDark
              ? "bg-blue-500 text-white hover:bg-gray-400"
              : "bg-blue-500 text-white hover:bg-gray-600"
          }`}
        >
          Download CV
        </a>

        {/* Redesigned Contact Section */}
        <div className="mt-6 sm:mt-8 flex justify-center flex-wrap gap-3 sm:gap-4 md:gap-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shibin-siyad-k/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 sm:p-4 rounded-full text-lg sm:text-xl md:text-2xl transition ${
              isDark
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-black hover:bg-gray-600 text-white"
            }`}
          >
            <FaLinkedin />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/siyzz07"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 sm:p-4 rounded-full text-lg sm:text-xl md:text-2xl transition ${
              isDark
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-black hover:bg-gray-600 text-white"
            }`}
          >
            <FaGithub />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/shibin_siyad__"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 sm:p-4 rounded-full text-lg sm:text-xl md:text-2xl transition ${
              isDark
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-black hover:bg-gray-600 text-white"
            }`}
          >
            <FaInstagram />
          </a>
          {/* Email */}
          <a
            href="mailto:shibinsiyad.k.kdpm@gmail.com"
            className={`p-3 sm:p-4 rounded-full text-lg sm:text-xl md:text-2xl transition ${
              isDark
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-black hover:bg-gray-600 text-white"
            }`}
          >
            <FaEnvelope />
          </a>
          {/* Phone */}
          <a
            href="tel:918606399420"
            className={`p-3 sm:p-4 rounded-full text-lg sm:text-xl md:text-2xl transition ${
              isDark
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-black hover:bg-gray-600 text-white"
            }`}
          >
            <FaPhone />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
