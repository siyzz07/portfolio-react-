import { useContext, useState } from "react";
import { useTheme } from "../ContextApi/ThemeProvider";
import ProjectCard from "./ProjectCard";
import { projectDataContext } from "../ContextApi/ProjectSample";
import { projectsDetails } from "./DatasOfProject";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const { isDark } = useTheme();
  const { data, setData } = useContext(projectDataContext);

  const projects = projectsDetails;

  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0);

  const itemsPerPage = 3;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Motion variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <section
      id="projects"
      className={`py-20 transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-gray-200"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-8"
          style={{ color: isDark ? "white" : "black" }}
        >
          Projects
          <p className="text-sm text-gray-400 font-light">
            (Includes my mini projects)
          </p>
        </h2>

        {/* Project Grid with Framer Motion */}
        <div className="relative overflow-hidden min-h-[400px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 absolute w-full"
            >
              {currentProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <button
            className={`px-4 py-2 mx-2 rounded ${
              currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
            } ${isDark ? "bg-white text-black" : "bg-black text-white"}`}
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            ←
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded ${
              currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
            } ${isDark ? "bg-white text-black" : "bg-black text-white"}`}
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
