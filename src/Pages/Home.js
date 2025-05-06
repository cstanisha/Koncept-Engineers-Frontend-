import React from "react";
import Marquee from "react-fast-marquee";
import Herostat from "../Components/Herostatsection";
import Servicecards from "../Components/Servicescard";
import homeref1 from "../assets/homeref1.jpg";
import homeref2 from "../assets/homeref2.jpg";
import handBg from "../assets/home.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import client1 from "../assets/Untitled design (6).png";
import client2 from "../assets/Untitled design (7).png";
import client3 from "../assets/Untitled design (8).png";
import client4 from "../assets/14.png";
import client5 from "../assets/15.png";
import client6 from "../assets/16.png";
import client7 from "../assets/17.png";
import client8 from "../assets/18.png";
import client9 from "../assets/19.png";
import client10 from "../assets/20.png";
import client11 from "../assets/21.png";
import client12 from "../assets/22.png";
import client13 from "../assets/23.png";
import client14 from "../assets/24.png";
import client15 from "../assets/25.png";
import client16 from "../assets/26.png";
import client17 from "../assets/27.png";
import client18 from "../assets/28.png";
import client19 from "../assets/29.png";




const fadeInX = (direction = "left") => ({
  hidden: {
    x: direction === "left" ? -100 : 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
});

const Home = () => {
  return (
    <>
 <section className="relative h-[650px] md:h-[550px] text-white overflow-hidden bg-[#0C0B26] font-sans">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-no-repeat bg-right bg-cover md:bg-contain"
    style={{ backgroundImage: `url(${handBg})` }}
    />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0C0B26] via-[#0F3A67]/30 to-[##0C0B26]"></div>
  {/* Content */}
  <div className="relative z-20 flex items-center h-full px-6 md:px-16">
  <div className="w-full md:w-2/3">
    <p className="text-[28px] md:text-[35px] font-extrabold leading-snug md:leading-tight text-left text-white">
      Together, we create sustainable, efficient, and secure environments that
      enhance lives and drive progress in the digital age.
    </p>
  </div>
</div>

</section> 


      <Herostat />

      {/* About Us Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-14 px-10 py-24 bg-gradient-to-r from-[#13263e] via-[#101f2e] to-[#13263e]">
     <motion.div
      className="w-full md:w-[45%] md:h-[420px]"
      variants={fadeInX("left")}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
    <img
      src={homeref1}
      alt="About Us"
      className="rounded-2xl shadow-lg w-full h-full object-cover"
    />
  </motion.div>

  <motion.div
    className="w-full md:w-[45%] text-left text-white"
    variants={fadeInX("right")}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <p className="text-teal-400 uppercase font-semibold mb-2">About Us</p>
    <h2 className="text-3xl font-bold mb-4">
      Koncept Engineers: Pioneering Digitalization for a Sustainable Tomorrow.
    </h2>
    <p className="mb-4">
      Established in 2012, Koncept Engineers is a formidable team of dedicated
      professionals who bring a wealth of experience from their tenures at
      Fortune 500 companies worldwide.
    </p>
    <p className="mb-6">
      We introduce ourselves as specialists in IBMS & ELV Solutions, a field
      where we have been pioneers from the very beginning. Our journey started
      with a raw passion for delivering the best in goods and services, and
      today, we have earned a well-deserved reputation as a leading system
      integrator, manufacturer, and service provider of Building Automation,
      Security & Embedded Solutions.
    </p>
    <Link
      to="/AboutUs"
      className="bg-[#009FB2] hover:bg-[#0083A0] text-white px-6 py-3 rounded-full shadow-md transition-all"
    >
      Read More
    </Link>
  </motion.div>
</section>

      {/* YouTube Embed Section */}
      <section className="bg-[#142132] py-10">
  <div className="w-full h-[100vh] relative overflow-hidden">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/tUP5S4YdEJo?autoplay=1&mute=1&loop=1&playlist=tUP5S4YdEJo"
      title="YouTube video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</section>

      {/* Services Teaser Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-14 px-10 py-24 bg-[#142132]">
        <motion.div
         className="w-full md:w-[45%] text-left text-white"
         variants={fadeInX("left")}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.3 }}
         >
          <p className="text-teal-400 uppercase font-semibold mb-2">
            Our Services
          </p>
          <h2 className="text-3xl font-bold mb-4">
            Digitalization for a more efficient, sustainable, and comfortable
            built environment.
          </h2>
        </motion.div>

        <motion.div
          className="w-full md:w-[45%] text-left text-white"
          variants={fadeInX("right")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mb-4">
            Koncept Engineers offers a wide range of digitalization services
            that can help you to create and manage more sustainable buildings.
            We can help you to:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>
              Design and implement building automation systems: These systems
              use digital technologies to control and optimize energy
              consumption, comfort, and security.
            </li>
            <li>
              Use data analytics to identify and reduce energy waste: We can
              help you to collect and analyze data from your building to
              identify areas where energy can be saved.
            </li>
          </ul>
          <Link
            to="/Services"
             className="bg-[#009FB2] hover:bg-[#0083A0] text-white px-6 py-3 rounded-full shadow-md transition-all"
          >
            Read More
          </Link>
        </motion.div>
      </section>

      {/* Services Card Section */}
      <Servicecards />

      {/* Why Choose Us Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-14 px-10 py-24 bg-[#0a1128]">
        <motion.div
          className="w-full md:w-[45%] md:h-[420px]"
          variants={fadeInX("left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={homeref2}
            alt="Why Choose Us"
            className="rounded-2xl shadow-lg w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-[45%] text-left text-white"
          variants={fadeInX("right")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="mb-6">
            At Koncept Engineers, we’re your trusted partner in the world of
            digitalization and automation. Our commitment to cutting-edge
            technology, tailored solutions, and user-friendliness ensures your
            project’s success. We’ve earned industry recognition for seamlessly
            blending innovation and reliability. From comprehensive services to
            sustainable practices, we cover it all. With a client-centric
            approach, ongoing support, and future-ready solutions, we’re
            dedicated to your success. Choose Koncept Engineers, and let’s build
            a smarter, more efficient future together. Your vision, our
            expertise – a partnership that works. Contact us today to get
            started.
          </p>
        </motion.div>
      </section>

      <section className="bg-[#f3e2c2] py-12 font-sans">
  <h2 className="text-4xl font-bold text-center text-black mb-8">
    Clientele
  </h2>
  <Marquee
    pauseOnHover
    speed={70}
    gradient={false}
    className="flex items-center gap-10"
  >
    {[client1, client2, client3,client4,client5,client6,client7,client8,client9,client10,client11,client12,client13,client14,client15,client16, client17,client18,client19].map((logo, index) => (
      <img
        key={index}
        src={logo}
        alt={`Client ${index + 1}`}
        className="h-[200px] mx-2 object-contain"
      />
    ))}
  </Marquee>
</section>


    </>
  );
};

export default Home;