import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";


const Media = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[500px] flex flex-col justify-center px-4 md:px-20 text-white bg-[#0a1128]">
        <h1 className="text-6xl font-extrabold mb-6 tracking-wide text-center">
            Media
        </h1>
        <div className="text-center">
          <Link to="/" className="text-teal-400 hover:underline text-lg">
            Home
          </Link>
          <span className="mx-2 text-xl">&gt;</span>
          <span className="text-teal-500 font-semibold text-lg">
            Media
          </span>
        </div>
      </div>
    </>
  );
};

export default Media;