import React, { useState, useEffect } from "react";
import { GiChestnutLeaf } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";


export default function ProductAnimation() {
   const [activeImage, setActiveImage] = useState(null);
   useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true, 
      });
    }, []);

  const products = [
    {
      name: "Marigold",
      image:
        "https://c1.wallpaperflare.com/preview/921/852/61/orange-marigold-wang-nam-kiew-thailand.jpg",
    },
    {
      name: "Chrysanthemum",
      image:
        "https://img.pikbest.com/ai/illus_our/20230414/163ec4249f912daefa46f7ca640afe8a.jpg!sw800",
    },
    {
      name: "Watermelon",
      image:
        "https://c1.wallpaperflare.com/preview/995/995/755/water-melons-display-carved.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-pink-100 via-blue-100 to-green-100 px-4">
        <h2 className="text-3xl text-green-400 sm:text-4xl md:text-5xl font-bold">
          Products
        </h2>

        <div className="flex items-center justify-center pb-5">
          <span className="w-8 sm:w-12 md:w-16 h-0.5 bg-gray-900"></span>
          <GiChestnutLeaf className="text-xl sm:text-2xl md:text-3xl mx-2 text-green-700" />
          <span className="w-8 sm:w-12 md:w-16 h-0.5 bg-gray-900"></span>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 w-full max-w-5xl transition-all duration-300 hover:max-w-full hover:max-h-full">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative w-full h-64 sm:h-80 lg:h-96 bg-cover bg-center rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105"
              style={{ backgroundImage: `url(${product.image})` }}
              onMouseEnter={() => setActiveImage(item.name)}
              onMouseLeave={() => setActiveImage(null)}
              data-aos="flip-right" data-aos-duration="1200" data-aos-delay="100"
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                <p className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                  {product.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
