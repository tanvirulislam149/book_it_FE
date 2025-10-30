"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../app/images/logo.png";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/store";
import { setSearchQuery } from "@/Redux/searchSlice";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    dispatch(setSearchQuery(query));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div
      style={{ boxShadow: "0px 2px 16px 0px rgba(0, 0, 0, 0.1)" }}
      className="bg-white"
    >
      <nav className="py-4 px-6 flex justify-between items-center max-w-[1280] mx-auto">
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
            placeholder="Search experiences"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            className="border border-gray-300 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-64"
          />
          <button
            id="searchButton"
            onClick={handleSearch}
            className="bg-yellow-400 text-sm hover:bg-yellow-500 text-black px-3 py-1 rounded-lg font-semibold"
          >
            Search
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
