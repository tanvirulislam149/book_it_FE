import React from "react";
import Image from "next/image";
import logo from "../../../app/images/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src={logo}
            // className="w-8 h-8"
            width={100}
            height={55}
            alt="Logo"
          />
        </div>
        <div className="flex space-x-2">
          <input
            id="searchInput"
            type="text"
            placeholder="Search experiences..."
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-64"
          />
          <button
            id="searchButton"
            className="bg-yellow-400 text-sm hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold"
          >
            Search
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
