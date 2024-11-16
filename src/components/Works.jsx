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
    { id: 3, name: "Purview Services Website", description: "Official website made with React for Purview Services", imageUrl: PurviewWebsite },
  ];

  return (
    <div className="relative min-h-screen w-screen flex justify-center items-center overflow-hidden bg-noise bg-[#FFF5EE] font-['Anonymous_Pro']">
      <div className="relative border-2 border-black p-10 bg-noise bg-[#FFF5EE] w-[90%] min-h-[90%] flex flex-col justify-between works-container">
        
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
        <div className="flex flex-col sm:flex-row w-full mt-10 space-y-6 sm:space-x-10 py-6 sm:py-10 works-content">
          
          {/* Desktop: Left Container - Hovering Cards */}
          <div className="sm:flex-1 h-[400px] relative overflow-hidden hidden sm:block">
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

          {/* Desktop: Right Container - Project List (Visible on Desktop, Hidden on Mobile) */}
          <div className="sm:flex-1 h-[400px] flex items-center justify-center sm:block sm:w-[50%] hidden sm:block">
            <div className="w-full flex flex-col items-left space-y-4 text-left">
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

          {/* Mobile: Only Cards (No Project List) */}
          <div className="sm:hidden flex-1 h-auto sm:h-[400px] flex flex-col space-y-4 overflow-auto">
            {projects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => setHoveredProject(hoveredProject?.id === project.id ? null : project)}
                className="cursor-pointer"
              >
                <div className="bg-white/40 backdrop-blur-md p-4 w-full h-full rounded-lg border border-white/40 shadow-lg">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-full object-contain rounded-lg"
                  />
                  <p className="text-black text-center">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Glassmorphism Card (Visible on click for small screens) */}
          {hoveredProject && (
            <div className="sm:hidden flex-1 w-full relative overflow-auto">
              <div className="absolute left-0 top-0 bg-white/40 backdrop-blur-md p-4 w-full h-auto rounded-lg border border-white/40 shadow-lg transition-opacity duration-500">
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
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Works;
