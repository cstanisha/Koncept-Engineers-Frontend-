import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AwardsAccoladesSection from "../Components/AwardsAndAccoladesSection";

const AwardsAndAccolades = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[400px] flex flex-col justify-center px-6 md:px-20 text-white bg-[#0a1128]">
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
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-24 bg-gradient-to-r from-[#13263e] via-[#101f2e] to-[#13263e]">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-14">
            <p className="text-teal-400 uppercase font-semibold tracking-wider text-sm">
              Our Achievements
            </p>
          </div>
        </div>

        {/* Actual marquee content */}
        <AwardsAccoladesSection />
      </section>
    </>
  );
};

export default AwardsAndAccolades;




