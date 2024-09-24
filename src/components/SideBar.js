import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faBrush, faLightbulb } from '@fortawesome/free-solid-svg-icons'; // Ajout de l'icône faLightbulb pour les guidelines

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
            <FontAwesomeIcon icon={faLightbulb} className="text-xl" /> {/* Icône Lightbulb pour les Guidelines */}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
