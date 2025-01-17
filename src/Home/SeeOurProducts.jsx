import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { GiChestnutLeaf } from "react-icons/gi";

// Component Imports
import AllProducts from "../SeeProducts/AllProducts";
import Marigold from "../SeeProducts/Marigold";
import Chrysanthemum from "../SeeProducts/Chrysanthemum";
import Watermelon from "../SeeProducts/Watermelon";

export default function SeeOurProducts() {
  const [activeLink, setActiveLink] = useState("ALL");

  const links = [
    { name: "ALL", path: "/" },
    { name: "MARIGOLD", path: "/marigold" },
    { name: "CHRYSANTHEMUM", path: "/chrysanthemum" },
    { name: "WATERMELON", path: "/watermelon" },
  ];

  return (
    <Router>
      <div>
        {/* Header Section */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full gap-1 p-6">
          <h2 className="text-5xl font-bold mt-9 C">See Our Products</h2>
          <div className="flex items-center justify-center">
            <span className="w-16 h-1 bg-gray-900"></span>
            <GiChestnutLeaf className="text-2xl C" />
            <span className="w-16 h-1 bg-gray-900"></span>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex justify-center container mx-auto py-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setActiveLink(link.name)}
              className={`px-6 py-2 transition ${
                activeLink === link.name
                  ? "bg-black text-white"
                  : "text-black hover:text-green-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Routes Section */}
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/marigold" element={<Marigold />} />
          <Route path="/chrysanthemum" element={<Chrysanthemum />} />
          <Route path="/watermelon" element={<Watermelon />} />
        </Routes>
      </div>
    </Router>
  );
}
