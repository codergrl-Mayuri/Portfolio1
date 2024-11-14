import { CiGrid41 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();

    return (
        <div className="relative h-screen w-screen flex justify-center items-center overflow-hidden bg-noise bg-[#FFF5EE] font-['Anonymous_Pro']">
            <div className="relative border-2 border-black p-10 bg-noise bg-[#FFF5EE] w-[90%] h-[90%] flex flex-col justify-between">
                
                {/* Menu Button */}
                <button
                    onClick={() => navigate("/Menu")}
                    className="text-4xl font-bold p-5 absolute top-5 right-5 flex space-x-4 z-10">
                        <CiGrid41/>
                </button>
                
                {/* Title */}
                <div className="mt-20">
                    <h1 className="text-6xl text-left text-black hover:tracking-widest transition-all duration-300 ease-in-out">
                        About
                    </h1>
                </div>

                {/* About Content */}
                <div className="text-xl text-right text-black absolute bottom-10 right-10 max-w-[70%] leading-relaxed">
                    <p className="mb-10">
                        I'm a dedicated and adaptable developer with experience in <br /> Fullstack and iOS development.
                    </p>
                    <p className="mb-10">
                        Having worked in a startup environment, I've honed my ability to handle high-pressure situations effectively.
                    </p>
                    <p>
                        Additionally, I have a solid understanding of machine learning, which I apply to enhance the functionality of my applications.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
