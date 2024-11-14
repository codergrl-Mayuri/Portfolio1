// Home.jsx
import { CiLight } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-screen flex justify-center items-center overflow-hidden bg-noise bg-[#FFF5EE] font-['Anonymous_Pro']">
      <div className="relative border-2 border-black p-10 bg-noise bg-[#FFF5EE] w-[90%] h-[90%] flex flex-col justify-between">
        <div>
          <button className="text-4xl p-5 absolute top-5 right-20 flex space-x-4 z-10">
            <CiLight />
          </button>
          <button
            onClick={() => navigate("/Menu")}
            className="text-4xl text-bold text-black p-5 absolute top-5 right-5 flex space-x-4 z-10 transition-transform ease-in-out">
            <CiGrid41/>
          </button>
        </div>
        <div>
          <h1 className="text-6xl text-left text-black hover:tracking-widest transition-all duration-300 ease-in-out">
            Hello,<br /> This is Mayuri
          </h1>
        </div>
        <p className="text-xl text-right text-black">
          Full Stack Developer <br />
          Freelancer <br />
        </p>
      </div>
    </div>
  );
}

export default Home;
