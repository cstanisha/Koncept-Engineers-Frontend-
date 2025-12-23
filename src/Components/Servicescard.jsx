import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Wifi, BarChart2, Wrench, Monitor, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import bim from "../assets/bim.jpg";
import iot from "../assets/IOT.jpg";
import dataanalytics from "../assets/Dataanalytics.jpg";
import predictive from "../assets/predictive.jpg";
import remote from "../assets/remote.jpg";
import videoanalytics from "../assets/Videoanalytics.jpg";


const services = [
  {
    id: "bim",
    icon: <Cpu size={60} />,
    title: "BIM Integration",
    desc: "Incorporating BIM and smart building automation into facility management activities enhances efficiency, sustainability, and occupant comfort while reducing operational costs.",
    image: bim,
  },
  {
    id: "iot",
    icon: <Wifi size={60} />,
    title: "IoT Solutions",
    desc: "IoT in Smart Building Management Systems offers a holistic approach to building operations, delivering cost savings, sustainability, occupant comfort, and streamlined maintenance.",
    image: iot,
  },
  {
    id: "data-analytics",
    icon: <BarChart2 size={60} />,
    title: "Data & Analytics",
    desc: "Analytics is the backbone of digitalization, providing the insights and intelligence needed to navigate the complex digital landscape.",
    image: dataanalytics,
  },
  {
    id: "predictive-maintenance",
    icon: <Wrench size={60} />,
    title: "Predictive Maintenance",
    desc: "Predictive maintenance is vital for modern businesses looking to improve operational efficiency, reduce costs, enhance safety, and stay competitive.",
    image: predictive,
  },
  {
    id: "remote-monitoring",
    icon: <Monitor size={60} />,
    title: "Remote Monitoring",
    desc: "Remote servicing in building automation represents a significant advancement in facility management.",
    image: remote,
  },
  {
    id: "video-analytics",
    icon: <Camera size={60} />,
    title: "Video Analysis",
    desc: "Video analytics significantly enhances security and fire alarm systems by adding intelligence to visual data.",
    image: videoanalytics,
  },
];

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="relative p-8 rounded-2xl bg-[#121520] shadow-lg overflow-hidden hover:shadow-teal-500/50 transition-all hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 transition-all duration-500"
          style={{ backgroundImage: `url(${service.image})` }}
        ></div>
      )}

      <div className="relative z-10">
        <div className="text-white-400 mb-5">{service.icon}</div>
        <h4 className="text-teal-400 font-semibold mb-2">{service.title}</h4>
        <p className="text-gray-300 mb-6">{service.desc}</p>
        <Link to={`/services#${service.id}`}>
          <button  className="bg-[#009FB2] hover:bg-[#0083A0] text-white px-6 py-3 rounded-full shadow-md transition-all">
            Learn More
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

const ServicesCards = () => {
  return (
    <section className="bg-[#142132] py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
