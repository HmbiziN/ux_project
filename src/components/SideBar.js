import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faBrush, faLightbulb, faClipboardCheck, faFireAlt, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
  return (
    <nav className="bg-gray-100 shadow-lg fixed top-0 left-0 md:h-full w-full md:w-20 h-auto flex md:flex-col flex-row justify-around md:justify-start items-center p-5 z-10">
      <ul className="flex md:flex-col flex-row w-full md:space-y-10 space-x-10 md:space-x-0 justify-around md:justify-start">
        <li>
          <NavLink 
            to="/colors" 
            className={({ isActive }) => 
              isActive ? "bg-[#e4c9f9] text-black flex justify-center items-center p-3 rounded-lg w-full text-center" 
                       : "text-gray-500 hover:text-black flex justify-center items-center p-3 rounded-lg w-full text-center"
            }
            title="Couleurs"
          >
            <FontAwesomeIcon icon={faPalette} className="text-xl" />
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/theme" 
            className={({ isActive }) => 
              isActive ? "bg-[#e4c9f9] text-black flex justify-center items-center p-3 rounded-lg w-full text-center" 
                       : "text-gray-500 hover:text-black flex justify-center items-center p-3 rounded-lg w-full text-center"
            }
            title="Thème"
          >
            <FontAwesomeIcon icon={faBrush} className="text-xl" />
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/guidelines" 
            className={({ isActive }) => 
              isActive ? "bg-[#e4c9f9] text-black flex justify-center items-center p-3 rounded-lg w-full text-center" 
                       : "text-gray-500 hover:text-black flex justify-center items-center p-3 rounded-lg w-full text-center"
            }
            title="Guidelines"
          >
            <FontAwesomeIcon icon={faLightbulb} className="text-xl" />
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/heatmap" 
            className={({ isActive }) => 
              isActive ? "bg-[#e4c9f9] text-black flex justify-center items-center p-3 rounded-lg w-full text-center" 
                       : "text-gray-500 hover:text-black flex justify-center items-center p-3 rounded-lg w-full text-center"
            }
            title="Heatmap"
          >
            <FontAwesomeIcon icon={faFireAlt} className="text-xl" />
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/consistency" 
            className={({ isActive }) => 
              isActive ? "bg-[#e4c9f9] text-black flex justify-center items-center p-3 rounded-lg w-full text-center" 
                       : "text-gray-500 hover:text-black flex justify-center items-center p-3 rounded-lg w-full text-center"
            }
            title="Analyseur de Cohérence"
          >
            <FontAwesomeIcon icon={faBalanceScale} className="text-xl" />
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/checklist" 
            className={({ isActive }) => 
              isActive ? "bg-[#e4c9f9] text-black flex justify-center items-center p-3 rounded-lg w-full text-center" 
                       : "text-gray-500 hover:text-black flex justify-center items-center p-3 rounded-lg w-full text-center"
            }
            title="Check-list"
          >
            <FontAwesomeIcon icon={faClipboardCheck} className="text-xl" /> {/* Icône Check-list */}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
