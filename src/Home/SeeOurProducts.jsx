import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { GiChestnutLeaf } from "react-icons/gi";

import AllProducts from "../SeeProducts/AllProducts";
import Marigold2 from "../SeeProducts/Marigold2";
import Chrysanthemum2 from "../SeeProducts/Chrysanthemum2";
import Watermelon2 from "../SeeProducts/Watermelon2";

export default function SeeOurProducts() {
  const [activeLink, setActiveLink] = useState("ALL");

  const links = [
    { name: "ALL", path: "/" },
    { name: "MARIGOLD", path: "/marigold2" },
    { name: "CHRYSANTHEMUM", path: "/chrysanthemum2" },
    { name: "WATERMELON", path: "/watermelon2" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="relative z-10 flex flex-col justify-center items-center h-auto gap-4 p-6 bg-gradient-to-b from-green-200 via-green-100 to-white text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6">
          See Our Products
        </h2>
        <div className="flex items-center justify-center">
          <span className="w-8 sm:w-12 md:w-16 h-0.5 bg-gray-900"></span>
          <GiChestnutLeaf className="text-xl sm:text-2xl md:text-3xl mx-2 text-green-700" />
          <span className="w-8 sm:w-12 md:w-16 h-0.5 bg-gray-900"></span>
        </div>
      </header>

      {/* Links Section */}
      <nav className="flex flex-wrap justify-center items-center container mx-auto py-6 px-4 gap-4">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setActiveLink(link.name)}
            className={`px-4 py-2 text-sm sm:text-base md:text-lg font-medium rounded-lg transition ${
              activeLink === link.name
                ? "bg-black text-white"
                : "text-black hover:text-green-700 hover:bg-green-100"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Routes Section */}
      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/marigold2" element={<Marigold2 />} />
          <Route path="/chrysanthemum2" element={<Chrysanthemum2 />} />
          <Route path="/watermelon2" element={<Watermelon2 />} />
        </Routes>
      </main>
    </div>
  );
}
