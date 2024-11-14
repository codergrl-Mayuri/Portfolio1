import { CiGrid41 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FoodRecipieImage from "../asset/food-recipe-generation.png";
import SevaWebsiteImage from "../asset/seva-website.png";
import PurviewWebsite from "../asset/purview-website.png";



function Works() {
  const navigate = useNavigate();
  
  // State to track the currently hovered project
  const [hoveredProject, setHoveredProject] = useState(null);

  // Example projects
  const projects = [
    { id: 1, name: "Food recipe generation", description: "Identifies the name of the dish in the uploaded image using Machine Learning and generates recipe", imageUrl: FoodRecipieImage },
    { id: 2, name: "SEVA Official Website", description: "Official website made with React and Firebase for a Product", imageUrl: SevaWebsiteImage },
    { id: 3, name: "Purview Servies Website", description: "Official website made with React for Purview Services", imageUrl: PurviewWebsite },
  ];

  return (
    <div className="relative min-h-screen w-screen flex justify-center items-center overflow-hidden bg-noise bg-[#FFF5EE] font-['Anonymous_Pro']">
      <div className="relative border-2 border-black p-10 bg-noise bg-[#FFF5EE] w-[90%] min-h-[90%] flex flex-col justify-between">
        
        <div>
          <button
            onClick={() => navigate("/Menu")}
            className="text-4xl font-bold p-5 absolute top-5 right-5 flex space-x-4 z-10"
          >
            <CiGrid41 />
          </button>
          
          <div className="mt-20">
            <h1 className="text-6xl text-left text-black hover:tracking-widest transition-all duration-300 ease-in-out">Works</h1>
          </div>
        </div>

        {/* Two Containers Below */}
        <div className="flex flex-row w-full mt-10 space-x-10 py-10">
          
          {/* Left Container - Glassmorphism Card */}
          <div className="flex-1 h-[400px] relative overflow-hidden">
            <div
              className={`absolute left-0 top-0 bg-white/40 backdrop-blur-md p-4 w-full h-full rounded-lg border border-white/40 shadow-lg transition-opacity duration-500 transform ${
                hoveredProject ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              {hoveredProject && (
                <div className="flex flex-col h-full">
                  <div className="h-[80%] flex items-center justify-center">
                    <img
                      src={hoveredProject.imageUrl}
                      alt={hoveredProject.name}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div className="h-[20%] flex items-center justify-center">
                    <p className="text-black text-center">{hoveredProject.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Container - Project List */}
          <div className="flex-1 h-[400px] flex items-center">
            <div className="w-full flex flex-col items-start space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="p-2">
                  <span
                    onMouseEnter={() => setHoveredProject(project)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className="text-2xl text-left text-black hover:tracking-wide transition-all duration-300 ease-in-out"
                  >
                    {project.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
