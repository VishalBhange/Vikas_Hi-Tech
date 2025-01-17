import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Watermelon() {
  const [activeImage, setActiveImage] = useState(null);

  // Define images, their names, and links
  const items = [
    {
      id: 1,
      name: "Vijay WaterMelon",
      src: "	https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG_7054-scaled.jpg",
      link: "/dream-yellow", // Updated to route path
    },
    {
      id: 2,
      name: "Virat Watermelon",
      src: "	https://vikashitechnursery.com/wp-content/uploads/2023/02/a03d9cfb-079e-4fe9-87f7-c40d6fa19bca.jpg",
      link: "/sheavani-yellow",
    }
  ];

  return (
    <div className="container mx-auto py-16">
      {/* Image Animation Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mr-12 ml-12">
        {items.map((item) => (
          <Link
            key={item.id}
            to={item.link} // Link for client-side routing
            onMouseEnter={() => setActiveImage(item.name)}
            onMouseLeave={() => setActiveImage(null)}
            className="relative group cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.src}
              alt={item.name}
              className="w-full h-80 object-cover shadow-lg transform transition-all duration-500"
            />
            {/* Overlay for Animation */}
            <div
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
            >
              <p className="text-white text-5xl font-semibold">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Active Image Name */}
      <div className="text-center mt-8">
        <h3 className="text-3xl font-bold">
          {activeImage ? `Viewing: ${activeImage}` : ""}
        </h3>
      </div>
    </div>
  );
}
