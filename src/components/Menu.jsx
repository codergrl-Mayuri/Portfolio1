import { useNavigate } from "react-router-dom";
import { CiGrid42 } from "react-icons/ci";

function Menu() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-screen flex justify-center items-center overflow-hidden bg-noise bg-[#FFF5EE] font-['Anonymous_Pro']">
      <div className="relative border-2 border-black p-10 bg-noise bg-[#FFF5EE] w-[90%] h-[90%] flex flex-col justify-between">
      <div className=" w-full h-full text-black flex flex-col justify-center items-center text-5xl leading-loose">
        <button 
            onClick={() => navigate("/")}
            className="hover:tracking-widest transition-all duration-300 ease-in-out">
                Home
        </button>
        <button 
            onClick={() => navigate("/About")}
            className="hover:tracking-widest transition-all duration-300 ease-in-out">
                About
        </button>
        <button 
            onClick={() => navigate("/Works")}
            className="hover:tracking-widest transition-all duration-300 ease-in-out">
                Works
        </button>
        <button 
            onClick={() => navigate("/Contact")}
            className="hover:tracking-widest transition-all duration-300 ease-in-out">
                Contact
        </button>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="text-4xl text-bold p-5 absolute top-5 right-5 flex space-x-4 z-10">
            <CiGrid42/>
        </button>
      </div>
    </div>
  );
}

export default Menu;



