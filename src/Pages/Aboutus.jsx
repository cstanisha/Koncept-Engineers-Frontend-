import React from "react";
import { motion } from "framer-motion";
import HeroStat from "../Components/Herostatsection";
import aboutus from "../assets/Aboutus.jpg";
import aboutus1 from "../assets/aboutus1.jpg";
import aboutus2 from "../assets/Aboutus2.jpg";

const AboutUsHero = () => {
  return (
    <>
      <section
        className="relative h-[600px] bg-center bg-no-repeat bg-cover brightness-75 overflow-hidden"
        style={{ backgroundImage: `url(${aboutus})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/10 opacity-90 backdrop-blur-sm z-10"></div>

        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-4"
        >
          <h2 className="text-teal-400 text-2xl md:text-3xl mb-4 font-bold">
            About Us
          </h2>
          <h1 className="text-white text-5xl md:text-7xl font-bold drop-shadow-[0_8px_8px_rgba(0,0,0,0.7)]">
            Koncept Engineers
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl">
            A legacy of innovation, integration, and intelligent engineering.
          </p>
        </motion.div>

        {/* SVG Section Divider */}
        <div className="absolute bottom-0 w-full z-20">
          <svg
            className="w-full h-16 md:h-24 text-[#0a1128]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,64L48,85.3C96,107,192,149,288,165.3C384,181,480,171,576,170.7C672,171,768,181,864,186.7C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* Animated HeroStat Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <HeroStat />
      </motion.div>

      {/* About Us Content */}
      <section className="bg-[#0a1128] py-20 text-white space-y-20 px-6 md:px-28">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={aboutus1}
            alt="About Us"
            className="w-full md:w-[45%] rounded-2xl shadow-xl object-cover"
          />
          <div className="md:w-[50%]">
            <p className="text-white/70 text-lg mb-4">
              Established in 2012, Koncept Engineers is a formidable team of dedicated professionals who bring a wealth of experience from their tenures at Fortune 500 companies around the world.
            </p>
            <p className="text-white/70 text-lg">
              We introduce ourselves as specialists in IBMS & ELV Solutions, a field where we have been pioneers from the very beginning. Our journey started with a raw passion to deliver the best in goods and services, and today, we have earned a well-deserved reputation as a leading system integrator, manufacturer, and service provider of Building Automation, Security & Embedded Solutions.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <img
            src={aboutus2}
            alt="About Us"
            className="w-full md:w-[45%] rounded-2xl shadow-xl object-cover"
          />
          <div className="md:w-[50%]">
            <p className="text-white/70 text-lg mb-4">
              At Koncept Engineers, we have consistently received accolades for our ability to seamlessly merge cutting-edge digital technologies with unwavering reliability. Our commitment to user-friendliness has always been a hallmark of our work, a source of pride that reflects in every solution we deliver.
            </p>
            <p className="text-white/70 text-lg">
              With a rich history of excellence and innovation, Koncept Engineers continues to lead the way in the field of Building Automation, Life Safety & Security Solutions. Our passion, expertise, and commitment to quality make us the partner of choice for clients seeking the highest standards in integrated systems.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsHero;
