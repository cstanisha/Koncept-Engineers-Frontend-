import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

// Dynamically import images (Vite-compatible)
const accoladeImages = Object.values(
  import.meta.glob("../assets/accolades/*.png", { eager: true })
);
const awardImages = Object.values(
  import.meta.glob("../assets/awards/*.png", { eager: true })
);

const AwardsAndAccolades = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[500px] flex flex-col justify-center px-4 md:px-20 text-white bg-[#0a1128]">
        <h1 className="text-6xl font-extrabold mb-6 tracking-wide text-center">
          Awards & Accolades
        </h1>
        <div className="text-center">
          <Link to="/" className="text-teal-400 hover:underline text-lg">
            Home
          </Link>
          <span className="mx-2 text-xl">&gt;</span>
          <span className="text-teal-500 font-semibold text-lg">
            Awards & Accolades
          </span>
        </div>
      </div>

      {/* Awards and Accolades Marquee Section */}
      <section className="bg-[#0a1128] py-20 space-y-16">1
        <h2 className="text-white text-3xl font-bold text-center mb-8">
          Recognitions
        </h2>

        {/* 🥇 Awards Section */}
        <div id="awards">
          <h3 className="text-white text-2xl text-center mb-6">Our Awards</h3>
          <Marquee
            pauseOnHover
            speed={100}
            gradient={false}
            direction="right"
            className="flex items-center gap-10"
          >
            {awardImages.map((img, index) => (
              <img
                key={index}
                src={img.default}
                alt={`Award ${index + 1}`}
                className="h-[300px] mx-6 object-contain"
              />
            ))}
          </Marquee>
        </div>

        {/* 🏆 Accolades Section */}
        <div id="accolades">
          <h3 className="text-white text-2xl text-center mb-6">Our Accolades</h3>
          <Marquee
            pauseOnHover
            speed={100}
            gradient={false}
            className="flex items-center gap-10"
          >
            {accoladeImages.map((img, index) => (
              <img
                key={index}
                src={img.default}
                alt={`Accolade ${index + 1}`}
                className="h-[350px] mx-6 object-contain"
              />
            ))}
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default AwardsAndAccolades;


