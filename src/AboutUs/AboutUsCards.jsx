import React from 'react'

export default function AboutUsCards() {
  const card1 = [
    {
      id: 1,
      image: "https://vikashitechnursery.com/wp-content/uploads/2023/02/vision.jpg",
      title: "Vision",
      description: "Our aim is to generate new opportunities for our farmers, employees, and business partners, so as to furnish them with modern sources of income, enhance their economic, psychological, and social well-being, and secure a bright future for all.",
    },
    {
      id: 2,
      image: "https://vikashitechnursery.com/wp-content/uploads/2023/02/vegetable-e1675334160301.jpg",
      title: "Mission",
      description: "Our primary objective is to establish ourselves as a renowned company, driven by our passion and zeal for the advancement of the Indian farming industry and the welfare of Indian farmers. Our aim is to foster strong relationships by creating value for all stakeholders.",
    },
    {
      id: 3,
      image: "https://vikashitechnursery.com/wp-content/uploads/2023/02/values-transformed-e1676623795528.jpeg",
      title: "Values",
      description: (
        <ol>
          <li>1. Consumer care</li>
          <li>2. Desire to acquire knowledge.</li>
          <li>3. Providing room for innovative concepts.</li>
          <li>4. Openness to adapt to alterations.</li>
          <li>5. Preparedness to tackle difficulties.</li>
        </ol>
      ),
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-4">
        {/* Responsive Grid Layout with Padding Adjustment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-5 sm:p-8 lg:p-10 w-full">
          {card1.map((card) => (
            <div
              key={card.id}
              className="bg-gray-100 rounded-3xl border-2 border-[#6BB327] shadow-2xl overflow-hidden "
            >
              {/* Top Image */}
              <div className="flex justify-center mt-3 transform hover:scale-105 transition-transform duration-200">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-80 h-44 object-cover rounded-xl"
                />
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6 lg:p-8 text-center">
                <h1 className="text-black justify-start text-start font-bold text-xl">{card.title}</h1>
                <p className="text-gray-600 font-medium text-start">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
