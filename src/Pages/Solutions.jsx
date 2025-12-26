import React from "react";
import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import Img1 from "../assets/1sol.jpg";
import Img2 from "../assets/2sol.jpg";
import Img3 from "../assets/3sol.jpg";
import Img4 from "../assets/4sol.jpg";
import Img5 from "../assets/5sol.jpg";
import Img6 from "../assets/6sol.jpg";
import Img7 from "../assets/7sol.jpg";
import Img8 from "../assets/8sol.jpg";
import Img9 from "../assets/9sol.jpg";
import Img10 from "../assets/10sol.jpg";
import Img11 from "../assets/11sol.jpg";
import Img12 from "../assets/12sol.jpg";

const Solutions = () => {
  const solutions = [
    { imageSrc: Img1, title: "Building Automation System" },
    { imageSrc: Img2, title: "Fire Detection & Voice Evacuation" },
    { imageSrc: Img3, title: "Video Surveillance" },
    { imageSrc: Img4, title: "Energy Management System" },
    { imageSrc: Img5, title: "Environment Monitoring System" },
    { imageSrc: Img6, title: "Instrumentation Solutions" },
    { imageSrc: Img7, title: "Gas Monitoring Solutions" },
    { imageSrc: Img8, title: "Embedded Solutions" },
    { imageSrc: Img9, title: "Networking & Telecommunications" },
    { imageSrc: Img10, title: "Renewable Solutions" },
    { imageSrc: Img11, title: "Healthcare Solutions" },
    { imageSrc: Img12, title: "Industrial Automation Solutions" },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[500px] flex flex-col justify-center px-6 md:px-24 text-white bg-[#0a1128]">
        <h1 className="text-6xl font-extrabold mb-6 tracking-wide text-center">Solutions</h1>
        <div className="text-center">
          <Link to="/" className="text-teal-400 hover:underline text-lg">Home</Link>
          <span className="mx-2 text-xl">&gt;</span>
          <span className="text-teal-500 font-semibold text-lg">Solutions</span>
        </div>
      </div>


      {/* Cards Grid */}
      <div className="bg-[#0e1b2a] px-6 sm:px-20 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-14">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                type: "spring",
                stiffness: 80,   // controls speed (lower = smoother)
                damping: 18,     // controls bounce (higher = less bounce)
                mass: 0.6,       // gives weight (important)
                delay: index * 0.08,
              }}
              className="bg-[#13263b] rounded-2xl overflow-hidden shadow-2xl
             transition-shadow duration-300"
            >


              <img
                src={item.imageSrc}
                alt={item.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-7">
                <h3 className="text-cyan-400 text-lg font-semibold mb-4">
                  {item.title}
                </h3>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-cyan-500 text-white text-base rounded-md hover:bg-cyan-600 transition-colors duration-300"
                >
                  Contact Us <FaPaperPlane className="text-sm" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Solutions;


