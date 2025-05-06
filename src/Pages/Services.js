import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Element, scroller } from "react-scroll";
import bim from "../assets/bim.jpg";
import IOT from "../assets/IOT.jpg";
import Dataanalytics from "../assets/Dataanalytics.jpg";
import predictive from "../assets/predictive.jpg";
import remote from "../assets/remote.jpg";
import Videoanalytics from "../assets/Videoanalytics.jpg";

const services = [
  {
    id: "bim",
    title: "BIM Integration",
    image: bim,
    paragraphs: [
      "Incorporating BIM and smart building automation into facility management enhances efficiency, sustainability, and occupant comfort while reducing operational costs.",
      "It empowers facility managers to make data-driven decisions and proactively address issues, ultimately prolonging the building's lifespan and functionality."
    ]
  },
  {
    id: "iot",
    title: "IoT",
    image: IOT,
    paragraphs: [
      "IoT in Smart Building Management Systems offers a holistic approach to building operations, delivering cost savings, sustainability, occupant comfort, and streamlined maintenance.",
      "It empowers facility managers to make data-driven decisions, ultimately creating smarter, more efficient, and sustainable buildings."
    ]
  },
  {
    id: "data-analytics",
    title: "Data and Analytics",
    image: Dataanalytics,
    paragraphs: [
      "Analytics is the backbone of digitalization, providing the insights and intelligence needed to navigate the complex digital landscape.",
      "It empowers organizations to harness the full potential of digital technologies, optimize processes, enhance customer experiences, and stay competitive in the digital era."
    ]
  },
  {
    id: "predictive-maintenance",
    title: "Predictive Maintenance",
    image: predictive,
    paragraphs: [
      "Predictive maintenance is vital for modern businesses looking to improve operational efficiency, reduce costs, enhance safety, and stay competitive.",
      "By leveraging data and technology, organizations can transition from reactive to proactive maintenance strategies, ultimately leading to a more reliable and sustainable future."
    ]
  },
  {
    id: "remote-monitoring",
    title: "Remote Monitoring",
    image: remote,
    paragraphs: [
      "Remote servicing in building automation represents a significant advancement in facility management.",
      "It enhances efficiency, reduces costs, improves building performance, and contributes to sustainability efforts while ensuring that building systems run smoothly with minimal disruptions."
    ]
  },
  {
    id: "video-analytics",
    title: "Video Analytics",
    image: Videoanalytics,
    paragraphs: [
      "Video analytics significantly enhances security and fire alarm systems by adding intelligence to visual data.",
      "It enables quicker response times, reduces false alarms, and improves overall safety and security in diverse settings, making it an invaluable tool in safeguarding people and assets."
    ]
  }
];

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        // First instantly scroll to top (no smooth effect)
        window.scrollTo({ top: 0, behavior: "auto" });
        
        // Then trigger smooth scrolling from top
        setTimeout(() => {
          scroller.scrollTo(id, {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -80,
          });
        }, 100);
      }, 100);
    }
  }, [location]);

  return (
    <>
      <div className="relative h-[500px] flex flex-col justify-center px-4 md:px-20 text-white bg-[#0a1128]">
        <h1 className="text-6xl font-extrabold mb-6 text-center">Services</h1>
        <div className="text-center">
          <Link to="/" className="text-teal-400 hover:underline text-lg">
            Home
          </Link>
          <span className="mx-2 text-xl">&gt;</span>
          <span className="text-teal-500 font-semibold text-lg">Services</span>
        </div>
      </div>

      {services.map((service, index) => (
        <Element key={service.id} name={service.id}>
          <section
            className="px-6 md:px-20 py-20 bg-gradient-to-r from-[#13263e] via-[#101f2e] to-[#13263e] text-white"
          >
            <div className="text-center mb-14">
              <p className="text-teal-400 uppercase font-semibold mb-2 tracking-widest text-lg">
                Services
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-snug">
                {service.title}
              </h2>
            </div>

            <div
              className={`flex flex-col md:flex-row items-center justify-center gap-14 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-[45%] md:h-[420px]">
                <img
                  src={service.image}
                  alt={`${service.title} Visual`}
                  className="rounded-2xl shadow-xl w-full h-full object-cover object-center"
                />
              </div>

              <div className="w-full md:w-[45%] text-left">
                {service.paragraphs.map((para, i) => (
                  <motion.p
                    key={i}
                    className="mb-6 leading-relaxed text-gray-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                  >
                    {para}
                  </motion.p>
                ))}
              <Link 
                to="/contact#contact-form" 
                className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-3 rounded-full shadow-md transition-all font-semibold"
              >
                 Contact Us
               </Link>
              </div>
            </div>
          </section>
        </Element>
      ))}
    </>
  );
};

export default Services;
