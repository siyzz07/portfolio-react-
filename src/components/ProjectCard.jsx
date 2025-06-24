import { useContext } from "react";
import { useTheme } from "../ContextApi/ThemeProvider";
import { projectDataContext } from "../ContextApi/ProjectSample";


//----------- ecommerse

function ProjectCard({ title, description, link, image,index,cover }) {
  const { isDark } = useTheme();
  const {data,setData}=useContext(projectDataContext)
  function handlePopup(val){

    setData({index:val,popup:true})
    
  }
  
  return (
    <div
      className={`${
        isDark ? "bg-white" : "bg-white"
      } p-4 rounded-lg hover:shadow-lg transition transform hover:-translate-y-1`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-lg mb-3"
       
      />
      <h3
        className={`text-lg font-semibold ${
          isDark ? "text-black" : "text-gray-800"
        }`}
      >
        {title}
      </h3>
      <p className={`text-sm mt-2 ${isDark ? "text-black" : "text-gray-600"}`}>
        {cover}
      </p>
      <a
        onClick={()=>handlePopup(index)}
        className={`text-teal-500 mt-3 inline-block font-medium hover:underline cursor-pointer`}
      >
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;
