import React, { useState } from "react";
import { Link } from "react-router-dom"; 

export default function AllProducts() {
  const [activeImage, setActiveImage] = useState(null);

 
  const items = [
    {
      id: 1,
      name: "Dream Yellow",
      src: "https://vikashitechnursery.com/wp-content/uploads/2023/02/jpeg-optimizer_DSC_8124.jpg",
      link: "/dream-yellow", 
    },
    {
      id: 2,
      name: "Shravani Yellow",
      src: "https://vikashitechnursery.com/wp-content/uploads/2023/02/DSC_8165_11zon-scaled.jpg",
      link: "/shravani-yellow",
    },
    {
      id: 3,
      name: "Yash Yellow",
      src: "https://vikashitechnursery.com/wp-content/uploads/2023/02/img5.jpeg",
      link: "/yash-yellow",
    },
    {
      id: 4,
      name: "Yash Orange",
      src: "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG_2601-scaled.jpg",
      link: "/yash-orange",
    },
    {
      id: 5,
      name: "Prime Orange",
      src: "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG-6046-scaled.jpg",
      link: "/prime-orange",
    },
    { id: 6, name: "Bhakti Bronze",
        src: "https://vikashitechnursery.com/wp-content/uploads/2023/03/IMG_20181001_164736-scaled.jpg", link: "/bhakti-bronze" },

   { id: 7, name: "Purva White", src: "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG-20200417-WA0014.jpg", link: "/purva-white" },

   { id: 8, name: "Purva Yellow", src: "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG_20180928_142248-scaled.jpg", link: "/purva-yellow" },

   { id: 9, name: "Sanvi Yellow", src: "https://vikashitechnursery.com/wp-content/uploads/2023/02/DSC_0713-Copy-scaled.jpg", link: "/sanvi-yellow" },
   
   { id: 10, name: "Swati Purple", src: "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG-20200222-WA0048.jpg", link: "/swati-purple" },

   {
    id: 11,
    name: "Vijay WaterMelon",
    src: "	https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG_7054-scaled.jpg",
    link: "/dream-yellow", // Updated to route path
  },

  {
    id: 12,
    name: "Virat Watermelon",
    src: "	https://vikashitechnursery.com/wp-content/uploads/2023/02/a03d9cfb-079e-4fe9-87f7-c40d6fa19bca.jpg",
    link: "/sheavani-yellow",
  }
  ];

  return (
    <div className="container mx-auto py-16">
      {/* Image Animation Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mr-12 ml-12 -mt-16">
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
