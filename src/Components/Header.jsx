import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredSolution, setHoveredSolution] = useState(null);
  const [activeSolution, setActiveSolution] = useState(null);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSolutions = () => {
    setSolutionsOpen(!solutionsOpen);
  };

  const toggleSolution = (solutionTitle) => {
    setActiveSolution(activeSolution === solutionTitle ? null : solutionTitle);
  };

  const solutionsList = [
    {
      title: "BMS",
      subItems: [
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
    {
      title: "Environment Monitoring System",
      subItems: ["Air Quality Monitoring"],
    },
    {
      title: "Instrumentation Solutions",
      subItems: ["Air", "Water", "Fuel"],
    },
    {
      title: "Gas Monitoring Solutions",
      subItems: [
        "Carbon Monoxide (CO)",
        "Carbon Dioxide (CO₂)",
        "Particulate Monitor (PM1, PM2.5 & PM10)",
        "Gas Sensors",
      ],
    },
    {
      title: "Embedded Solutions",
      subItems: null,
    },
    {
      title: "Networking & Telecommunication",
      subItems: ["Active Solutions", "Passive Solutions", "EPABX / IPABX"],
    },
    {
      title: "Renewable Solutions",
      subItems: null,
    },
    {
      title: "Healthcare Solutions",
      subItems: null,
    },
    {
      title: "Industrial Automation Solutions",
      subItems: [
        "PLCs / DCS",
        "Variable Frequency Drives",
        "Supervisory Control and Data Acquisition",
      ],
    },
  ];

  return (
    <header
      className="sticky top-0 z-50 text-white shadow-md"
      style={{
        background: "linear-gradient(90deg, #0c192e 0%, #000000 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-[60px] pl-2 pr-4" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 items-center font-bold text-[16px] font-['Roboto']">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#27c2a4] font-['Roboto'] text-[16px]"
                : "text-white hover:text-[#27c2a4] transition-all font-['Roboto'] text-[16px]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              isActive
                ? "text-[#27c2a4]"
                : "text-white hover:text-[#27c2a4] transition-all"
            }
          >
            About Us
          </NavLink>

          {/* Solutions Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setHoveredSolution("show")}
            onMouseLeave={() => setHoveredSolution(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer">
              <NavLink
                to="/solutions"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#27c2a4]"
                    : "text-white hover:text-[#27c2a4] transition-all"
                }
              >
                Solutions
              </NavLink>
              <FaChevronDown className="text-xs mt-1 group-hover:rotate-180 transition-transform" />
            </div>

            {/* Conditionally render dropdown only if hovered */}
            {hoveredSolution && (
              <div className="absolute top-full left-0 flex flex-col bg-[#0c192e] shadow-xl rounded-lg py-2 min-w-[280px] z-50">
                {solutionsList.map((solution) => (
                  <div
                    key={solution.title}
                    className="group relative"
                    onMouseEnter={() => setHoveredSolution(solution.title)}
                  >
                    <Link
                      to={`/solutions/${solution.title
                        .toLowerCase()
                        .replace(/ & /g, "-")
                        .replace(/\s+/g, "-")}`}
                      className="px-4 py-2 text-white hover:bg-[#27c2a4] hover:text-white flex justify-between items-center"
                    >
                      {solution.title}
                      {solution.subItems && (
                        <FaChevronDown className="ml-2 text-xs" />
                      )}
                    </Link>

                    {/* Submenu */}
                    {solution.subItems &&
                      hoveredSolution === solution.title && (
                        <div className="absolute top-0 left-full flex flex-col bg-[#0c192e] shadow-xl rounded-lg py-2 min-w-[260px] z-50">
                          {solution.subItems.map((subItem) => (
                            <Link
                              key={subItem}
                              to={`/solutions/${subItem
                                .toLowerCase()
                                .replace(/ & /g, "-")
                                .replace(/\s+/g, "-")}`}
                              className="px-4 py-2 text-white hover:bg-[#27c2a4] hover:text-white transition-all"
                            >
                              {subItem}
                            </Link>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-[#27c2a4]"
                : "text-white hover:text-[#27c2a4] transition-all"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/mediacoverage"
            className={({ isActive }) =>
              isActive
                ? "text-[#27c2a4]"
                : "text-white hover:text-[#27c2a4] transition-all"
            }
          >
            Media Coverage
          </NavLink>

          <NavLink
            to="/awardsandaccolades"
            className={({ isActive }) =>
              isActive
                ? "text-[#27c2a4]"
                : "text-white hover:text-[#27c2a4] transition-all"
            }
          >
            Awards
          </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#27c2a4]"
              : "text-white hover:text-[#27c2a4] transition-all"
          }
        >
          Contact Us
        </NavLink>
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0c192e] bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-xl">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-3xl"
          >
            <FaTimes />
          </button>
          <NavLink
            to="/"
            onClick={toggleMenu}
            className="hover:text-[#27c2a4] text-white text-2xl"
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            onClick={toggleMenu}
            className="hover:text-[#27c2a4] text-white text-2xl"
          >
            About Us
          </NavLink>

          {/* Mobile Dropdown for Solutions */}
          <div>
            <button
              onClick={toggleSolutions}
              className="text-white text-2xl flex items-center gap-2"
            >
              Solutions <FaChevronDown className="text-sm" />
            </button>
            {solutionsOpen && (
              <div className="flex flex-col gap-3 mt-4">
                {solutionsList.map((solution) => (
                  <div key={solution.title}>
                    <div
                      onClick={() => toggleSolution(solution.title)}
                      className="text-white hover:text-[#27c2a4] text-xl flex justify-between items-center cursor-pointer"
                    >
                      {solution.title}
                      {solution.subItems && (
                        <FaChevronDown className="text-sm" />
                      )}
                    </div>

                    {/* Submenu for mobile */}
                    {activeSolution === solution.title &&
                      solution.subItems && (
                        <div className="flex flex-col gap-3 pl-4 mt-2">
                          {solution.subItems.map((subItem) => (
                            <Link
                              key={subItem}
                              to={`/solutions/${subItem
                                .toLowerCase()
                                .replace(/ & /g, "-")
                                .replace(/\s+/g, "-")}`}
                              onClick={toggleMenu}
                              className="text-white hover:text-[#27c2a4] text-lg"
                            >
                              {subItem}
                            </Link>
                          ))}
                        </div>
                      )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    </header >
  );
};

export default Header;
