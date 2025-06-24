import { useContext, useState } from "react";
import { useTheme } from "../ContextApi/ThemeProvider";
import ProjectCard from "./ProjectCard";
import { projectDataContext } from "../ContextApi/ProjectSample";
import { projectsDetails } from "./DatasOfProject";


function Projects() {
  const { isDark } = useTheme();
  const {data,setData}=useContext(projectDataContext)




let image={
  0:chronexImg,
}
  
  const projects=projectsDetails



  // const projects = [
  //   {
  //     title: "Blog Platform",
  //     description: "A customizable blogging platform with a rich text editor and user authentication.",
  //     link: "#",
  //     image: "https://via.placeholder.com/300x200?text=Blog+Platform",
  //     index:0
  //   },
  //   {
  //     title: "Fitness Tracker",
  //     description: "A mobile-friendly app for tracking workouts and nutrition with real-time analytics.",
  //     link: "#",
  //     image: "https://via.placeholder.com/300x200?text=Fitness+Tracker",
  //     index:1
  //   },
  //   {
  //     title: "Portfolio Site",
  //     description: "A dynamic portfolio showcasing my development skills and projects.",
  //     link: "#",
  //     image: "https://via.placeholder.com/300x200?text=Portfolio",
  //     index:3
  //   },
  //   {
  //     title: "E-commerce Platform",
  //     description: "A robust platform for creating online stores with product management and payment integration.",
  //     link: "#",
  //     image: "https://via.placeholder.com/300x200?text=E-commerce",
    
  //   },
  //   {
  //     title: "Social Media App",
  //     description: "A full-stack social media app with real-time messaging and notifications.",
  //     link: "#",
  //     image: "https://via.placeholder.com/300x200?text=Social+Media",
  //   },
  // ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Calculate the projects to display based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  return (
    <section
      id="projects"
      className={`py-20 ${isDark ? "bg-black " : "bg-gray-200"}`}
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-8"
          style={{ color: isDark ? "white" : "black" }}
        >
          Projects
          <p className="text-sm text-gray-400 font-light">(Includes my mini projects)</p>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button
            className={`px-4 py-2 mx-2 rounded ${
              currentPage === 1 ? " cursor-not-allowed" : ""
            } ${isDark?"bg-white text-black":"bg-black text-white"}`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            ←
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded ${
              currentPage   === totalPages ? " cursor-not-allowed" : ""
            } ${isDark?"bg-white text-black":"bg-black text-white"}`}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
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
