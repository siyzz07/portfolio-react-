import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../ContextApi/ThemeProvider";
import Switch from "@mui/material/Switch";

function NavBar() {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close menu after navigation
  };

  // Close menu when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 shadow-md  z-10 transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-sm xl:text-2xl font-bold z-10">Shibin Siyad</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:flex-1 z-50 justify-center items-center space-y-4 md:space-y-0 md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto ${
            isDark ? "bg-black" : "bg-white"
          } p-4 md:p-0 transition-colors duration-300`}
        >
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "home")}
            className="block md:inline-block hover:text-gray-500 transition"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="block md:inline-block hover:text-gray-500 transition"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="block md:inline-block hover:text-gray-500 transition"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={(e) => handleScroll(e, "skills")}
            className="block md:inline-block hover:text-gray-500 transition"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="block md:inline-block hover:text-gray-500 transition"
          >
            Contact
          </a>

          {/* Theme Toggle */}
          <div className="flex justify-center mt-4 md:mt-0 ">
            <Switch
              checked={isDark}
              onChange={toggleTheme}
              inputProps={{ "aria-label": "toggle dark mode" }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
