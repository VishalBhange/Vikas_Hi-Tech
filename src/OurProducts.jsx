import { useState } from "react";

function LinkImageGrid() {
  const [activeLink, setActiveLink] = useState("ALL");

  const links = [
    { label: "ALL", img: "path/to/image1.jpg" },
    { label: "MARIGOLD", img: "path/to/image2.jpg" },
    { label: "CHRYSANTHEMUM", img: "path/to/image3.jpg" },
    { label: "WATERMELON", img: "path/to/image4.jpg" },
    { label: "ROSE", img: "path/to/image5.jpg" },
    { label: "LILY", img: "path/to/image6.jpg" },
    { label: "DAISY", img: "path/to/image7.jpg" },
    { label: "SUNFLOWER", img: "path/to/image8.jpg" },
  ];

  return (
    <div className="container mx-auto py-16">
      {/* Links Section */}
      <div className="flex gap-5 justify-center mb-12">
        {links.slice(0, 4).map((link) => (
          <a
            key={link.label}
            href="#"
            onClick={() => setActiveLink(link.label)}
            className={`px-6 py-2 transition ${
              activeLink === link.label
                ? "bg-black text-white"
                : "text-black hover:text-green-700"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {links.map((link) => (
          <div
            key={link.label}
            className="bg-gray-100 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img
              src={link.img}
              alt={link.label}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3
                className={`text-xl font-semibold ${
                  activeLink === link.label ? "text-green-700" : "text-gray-800"
                }`}
              >
                {link.label}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LinkImageGrid;
