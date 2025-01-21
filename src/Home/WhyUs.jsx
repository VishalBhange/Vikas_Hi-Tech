import React from 'react'
import { GiChestnutLeaf } from "react-icons/gi";

export default function WhyUs() {
     const card1 = [
        {
          id: 1,
          image: "	https://vikashitechnursery.com/wp-content/uploads/2023/02/seedling.jpg",
          description: "Appropriate in-season agronomy advice can aid in crop planning, observations, and warnings of pests and diseases",
        },
        {
          id: 2,
          image: "https://vikashitechnursery.com/wp-content/uploads/2023/02/soil-testing.jpg",
          description: "Testing of the soil, water, and petioles to establish the proper agrochemical dosages",
        },
        {
          id: 3,
          image: "	https://vikashitechnursery.com/wp-content/uploads/2023/02/Farmer222.png",
          description: "We offer a diverse selection of seeds that ensure high yields for farmers, tolerance to diseases, and a potential for sales in domestic markets.",
        },
        {
          id: 4,
          image: "	https://vikashitechnursery.com/wp-content/uploads/2023/02/quality.jpg",
          description: "We provide best quality product, fast service, good consultations",
        },
      ];
    
  return (
    <div>
        {/* Background Image Div */}
           <div className="relative mx-auto my-16 bg-cover bg-center lg:max-w-[1300px] opacity-60" style={{ backgroundImage: "url('https://i0.wp.com/practicalselfreliance.com/wp-content/uploads/2021/03/Growing-Tomatoes-from-Seed-1.jpg?fit=1200%2C800&ssl=1')" }}>
         
        
          {/* Content Div */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full gap-2 bg-black/50 p-5 pb-16">
            
          <h2 className="text-4xl font-bold text-white mt-  ">Why Us</h2>
                <div className="flex items-center justify-center mb-16">
                  <span className="w-16 h-0.5 bg-white"></span>
                  <GiChestnutLeaf className='text-2xl C '/>
                  <span className="w-16 h-0.5 bg-white"></span>
                </div>
          </div>
        
          
        </div>
        
        
        
        
        
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mr-9 ml-9 -mt-36 mb-16">
            {card1.map((card) => (
              <div
                key={card.id}
                className="bg-gray-100 rounded-3xl shadow-2xl overflow-hidden transform"
              >
                {/* Top Image */}
                <div className="flex justify-center mt-3">
                  <img
                    src={card.image}
                   
                    className="w-60 h-44 object-cover rounded-xl hover:scale-105 transition-transform duration-200 "
                  />
                </div>
        
                {/* Card Content */}
                <div className="p-5 text-center">
                  <p className="text-gray-600 font-medium">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
    </div>
  )
}
