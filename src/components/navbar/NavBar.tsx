import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const NavBar: React.FC = () => {
  const navigate = useNavigate();
  // State to handle icon hover for red icon on hover for Sign In and Gym Finder
  const [isHoveredSignIn, setIsHoveredSignIn] = useState(false);
  const [isHoveredGymFinder, setIsHoveredGymFinder] = useState(false);

  return (
    <div className="fixed left-0 top-0 w-full px-6 bg-black flex items-center justify-between h-[90px] z-50">
      {/* Logo Section */}
      <div className="flex items-center ml-4">
        <div
          className="flex items-center cursor-pointer transition group"
          onMouseEnter={() => setIsHoveredGymFinder(true)}
          onMouseLeave={() => setIsHoveredGymFinder(false)}
          onClick={() => navigate("/")} // Navigate to Home when clicked
        >
          <img
            src={isHoveredGymFinder ? "/icons/gym -red.svg" : "/icons/gym.svg"} // Change to red icon on hover
            alt="Gym Icon"
            className="w-[50px] h-auto object-contain group-hover:text-red-500 transition"
          />
          <span className="text-white text-2xl font-bold ml-2 group-hover:text-red-500 transition">
            Gym Finder
          </span>
        </div>
      </div>

      {/* Centered Links Section */}
      <div className="flex flex-1 justify-center space-x-6">
        <button
          onClick={() => navigate("/")} // Navigate to Dashboard when clicked
          className="text-white text-lg hover:text-red-500 transition"
        >
          Home
        </button>
        <a
          href="#"
          className="text-white text-lg hover:text-red-500 transition"
        >
          Services
        </a>
        <a
          href="#"
          className="text-white text-lg hover:text-red-500 transition"
        >
          About
        </a>
        <a
          href="#"
          className="text-white text-lg hover:text-red-500 transition"
        >
          Contact
        </a>
      </div>

      {/* Sign-In Icon Section */}
      <div className="mr-4 flex items-center space-x-2">
        <div
          className="flex items-center cursor-pointer transition group"
          onMouseEnter={() => setIsHoveredSignIn(true)}
          onMouseLeave={() => setIsHoveredSignIn(false)}
        >
          {/* Change icon to red on hover */}
          <img
            src={isHoveredSignIn ? "/icons/user -red.svg" : "/icons/user.svg"} // Switch icon on hover now
            alt="Sign-in Icon"
            className="w-[28px] h-[28px] transition group-hover:text-red-500"
          />

          <a
            href="#"
            className="ml-2 text-lg text-white group-hover:text-red-500 transition"
          >
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};
