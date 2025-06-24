import { useContext } from "react";
import { projectDataContext } from "../ContextApi/ProjectSample";
import { projectsDetails } from "./DatasOfProject";

const ProjectData = () => {
  const { data, setData } = useContext(projectDataContext);

  
  let arr=[...projectsDetails]

  
  

  function close() {
    setData({
      index: null, 
      popup: false, 
    });
  }

  // If not open, return null (conditional rendering)
  if (!data.popup) return null;

  return (
    <div className="fixed inset-0 bg-[#00000098] bg-opacity-60 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-screen p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4  bg-white z-10">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900">
            {arr[data.index].title}
          </h2>
          <button
            onClick={close}
            className="text-gray-900 hover:text-gray-700 focus:outline-none cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Video */}
        <div className="mb-6">
          <video
            className="w-full h-56 sm:h-64 md:h-72 lg:h-96 rounded-md"
            controls
            src={arr[data.index].vedio}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Explanation */}
        <div className="text-gray-700 mb-6 text-sm md:text-base break-words">
          <p>
           {arr[data.index].description1}
            {/* Add your long content here */}
          </p>
          <br />
          <p>
           {arr[data.index].description2}
            {/* Add your long content here */}
          </p>
        </div>

        {/* Close Button */}
        <div className="flex justify-end bg-[#80808000] sticky bottom-0 p-4">
          <button
            onClick={close}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectData;
