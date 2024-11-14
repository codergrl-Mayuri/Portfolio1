import { useNavigate } from "react-router-dom";
import { CiGrid41 } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Contact() {

    const navigate = useNavigate();
    const linkedInURL = "https://www.linkedin.com/in/mayuri-k-a53628261/"; 
    const gmailURL = "mailto:mayuridutta008@gmail.com";
    const githubURL = "https://github.com/codergrl-Mayuri";

    return (
        <div className="relative h-screen w-screen flex justify-center items-center overflow-hidden bg-noise bg-[#FFF5EE] font-['Anonymous_Pro']">
            <div className="relative border-2 border-black p-10 bg-noise bg-[#FFF5EE] w-[90%] h-[90%] flex flex-col justify-between">
                <div>
                    <button
                        onClick={() => navigate("/Menu")}
                        className="text-4xl text-bold p-5 absolute top-5 right-5 flex space-x-4 z-10">
                        <CiGrid41 />
                    </button>
                </div>
                
                <div className="flex-grow flex flex-col items-left justify-center space-y-4">
                    <h1 className="text-6xl text-black hover:tracking-wider transition-all duration-300 ease-in-out">
                        Contact
                    </h1>
                    <p className="text-3xl">Contact to Collaborate</p> <br/>
                </div>
                
                <div className="space-x-10 text-xl text-right text-black">
                    <button 
                        onClick={() => window.open(gmailURL, "_blank")}
                        className="text-4xl text-bold transition-transform duration-300 ease-in-out transform hover:scale-150"
                    >
                        <HiOutlineMail />
                    </button>
                    <button
                        onClick={() => window.open(linkedInURL, "_blank")}
                        className="text-4xl text-bold transition-transform duration-300 ease-in-out transform hover:scale-150"
                    >
                        <FaLinkedinIn />
                    </button>
                    <button
                        onClick={() => window.open(githubURL, "_blank")}
                        className="text-4xl text-bold transition-transform duration-300 ease-in-out transform hover:scale-150"
                    >
                        <FaGithub />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
