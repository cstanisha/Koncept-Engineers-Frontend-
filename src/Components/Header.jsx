import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const navItem =
  "transition-colors duration-200 hover:text-[#27c2a4]";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeSolution, setActiveSolution] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSolution = (title) =>
    setActiveSolution(activeSolution === title ? null : title);

  const solutionsList = [
    {
      title: "BMS",
      subItems: [
        "Building Automation System",
        "Lighting Management System",
        "Basement Ventilation System",
        "Demand Controlled Ventilation",
      ],
    },
    {
      title: "Fire Detection & Voice Evacuation",
      subItems: ["Fire Alarm System", "Gas Suppression System", "PA System"],
    },
    {
      title: "Security",
      subItems: [
        "CCTV Solutions",
        "Perimeter Power Fencing System",
        "Water Leak Detection System (WLD)",
        "Rodent Repellent Ultrasonic System",
      ],
    },
    {
      title: "Energy Management System",
      subItems: [
        "Substation SCADA Systems",
        "Energy Monitoring & Reporting",
        "Energy Dashboarding & Analytics",
      ],
    },
    { title: "Environment Monitoring System", subItems: ["Air Quality Monitoring"] },
    { title: "Instrumentation Solutions", subItems: ["Air", "Water", "Fuel"] },
    {
      title: "Gas Monitoring Solutions",
      subItems: [
        "Carbon Monoxide (CO)",
        "Carbon Dioxide (CO₂)",
        "Particulate Monitor (PM1, PM2.5 & PM10)",
        "Gas Sensors",
      ],
    },
    { title: "Embedded Solutions", subItems: null },
    {
      title: "Networking & Telecommunication",
      subItems: ["Active Solutions", "Passive Solutions", "EPABX / IPABX"],
    },
    { title: "Renewable Solutions", subItems: null },
    { title: "Healthcare Solutions", subItems: null },
    {
      title: "Industrial Automation Solutions",
      subItems: [
        "PLCs / DCS",
        "Variable Frequency Drives",
        "Supervisory Control and Data Acquisition",
      ],
    },
  ];

  const servicesList = [
    { title: "BIM Integration", id: "bim" },
    { title: "IoT Solutions", id: "iot" },
    { title: "Data & Analytics", id: "data-analytics" },
    { title: "Predictive Maintenance", id: "predictive-maintenance" },
    { title: "Cloud Services", id: "Cloud-Services" },
    { title: "Video Analytics", id: "video-analytics" },
    { title: "AI/ML Integration", id: "AI-ML-integration" },
    { title: "Embedded Solutions", id: "embedded-solutions" },
    { title: "VR/AR Solutions", id: "vr-ar-technologies" },
  ];

  return (
    <header
      className="sticky top-0 z-50 text-white shadow-md"
      style={{ background: "linear-gradient(90deg, #0c192e 0%, #000000 100%)" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-[60px]" />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex gap-10 items-center font-bold text-[16px]">
          <NavLink to="/" className={({ isActive }) =>
            `${navItem} ${isActive ? "text-[#27c2a4]" : ""}`
          }>Home</NavLink>

          <NavLink to="/aboutus" className={({ isActive }) =>
            `${navItem} ${isActive ? "text-[#27c2a4]" : ""}`
          }>About Us</NavLink>

          {/* SOLUTIONS */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu("solutions")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <div className={`flex items-center gap-1 cursor-pointer ${navItem}`}>
              <NavLink to="/solutions">Solutions</NavLink>
              <FaChevronDown className="text-xs" />
            </div>

            <div
              className={`absolute top-full left-0 bg-[#0c192e] rounded-lg shadow-xl py-2 min-w-[280px]
              transition-all duration-200 ease-out
              ${hoveredMenu === "solutions" ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
            >
              {solutionsList.map((solution) => (
                <div key={solution.title} className="relative group">
                  <Link
                    to={`/solutions/${solution.title.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`}
                    className="px-4 py-2 flex justify-between items-center hover:bg-[#27c2a4]"
                  >
                    {solution.title}
                    {solution.subItems && <FaChevronDown className="text-xs" />}
                  </Link>

                  {solution.subItems && (
                    <div className="absolute top-0 left-full bg-[#0c192e] rounded-lg shadow-xl py-2 min-w-[260px]
                      opacity-0 scale-95 invisible
                      group-hover:opacity-100 group-hover:scale-100 group-hover:visible
                      transition-all duration-200 ease-out"
                    >
                      {solution.subItems.map((sub) => (
                        <Link
                          key={sub}
                          to={`/solutions/${sub.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`}
                          className="px-4 py-2 block hover:bg-[#27c2a4]"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu("services")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <div className={`flex items-center gap-1 cursor-pointer ${navItem}`}>
              <NavLink to="/services">Services</NavLink>
              <FaChevronDown className="text-xs" />
            </div>

            <div
              className={`absolute top-full left-0 bg-[#0c192e] rounded-lg shadow-xl py-2 min-w-[260px]
              transition-all duration-200 ease-out
              ${hoveredMenu === "services" ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
            >
              {servicesList.map((s) => (
                <Link
                  key={s.id}
                  to={`/services#${s.id}`}
                  className="px-4 py-2 block hover:bg-[#27c2a4]"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/mediacoverage" className={navItem}>Media</NavLink>
          <NavLink to="/awardsandaccolades" className={navItem}>Awards</NavLink>
          <NavLink to="/contact" className={navItem}>Contact Us</NavLink>
        </nav>

        {/* ================= MOBILE HAMBURGER ================= */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0c192e] bg-opacity-95 flex flex-col items-center justify-center gap-6 text-xl">
          <FaTimes
            className="absolute top-6 right-6 text-3xl"
            onClick={toggleMenu}
          />

          <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/aboutus" onClick={toggleMenu}>About Us</NavLink>

          {/* Mobile Solutions */}
          <button
            onClick={() => setSolutionsOpen(!solutionsOpen)}
            className="flex items-center gap-2"
          >
            Solutions <FaChevronDown />
          </button>

          {solutionsOpen && (
            <div className="flex flex-col gap-3">
              {solutionsList.map((sol) => (
                <div key={sol.title}>
                  <div
                    onClick={() => toggleSolution(sol.title)}
                    className="cursor-pointer"
                  >
                    {sol.title}
                  </div>

                  {activeSolution === sol.title && sol.subItems && (
                    <div className="pl-4 mt-2 flex flex-col gap-2">
                      {sol.subItems.map((sub) => (
                        <Link
                          key={sub}
                          to={`/solutions/${sub.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`}
                          onClick={toggleMenu}
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Mobile Services */}
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center gap-2"
          >
            Services <FaChevronDown />
          </button>

          {servicesOpen && (
            <div className="flex flex-col gap-3">
              {servicesList.map((s) => (
                <Link
                  key={s.id}
                  to={`/services#${s.id}`}
                  onClick={toggleMenu}
                >
                  {s.title}
                </Link>
              ))}
            </div>
          )}

          <NavLink to="/mediacoverage" onClick={toggleMenu}>Media</NavLink>
          <NavLink to="/awardsandaccolades" onClick={toggleMenu}>Awards</NavLink>
          <NavLink to="/contact" onClick={toggleMenu}>Contact Us</NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;

