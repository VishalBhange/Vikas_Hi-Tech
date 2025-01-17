import React,{useState} from 'react'
import { GiStumpRegrowth } from "react-icons/gi";
import { GiFarmer } from "react-icons/gi";
import { SiRoamresearch } from "react-icons/si";

export default function TechnologicallyGrown() {
    const [cards, setCards] = useState([
        {
          id: 1,
          title: "Technologically Grown",
          description:
            "Our seedlings are grown in a tissue culture environment and a scientifically controlled climate, ensuring improved outcomes.",
          icon: <GiStumpRegrowth className="text-8xl text-white" />,
        },
        {
          id: 2,
          title: " Directing Farmers",
          description:
            "A successful partnership with farmers begins by educating them on adapting to changing climate and combating new diseases through the provision of innovative technology and high-yielding varieties, ultimately leading to increased profits for the farmers.",
          icon: <GiFarmer className="text-8xl text-white" />,
        },
        {
          id: 3,
          title: " Outstanding Research",
          description:
            "Along with a tonne of passion, perseverance, and commitment, our highly qualified scientific staff members work at the forefront of research and bring a lot of research-based thinking to horticulture.",
          icon: <SiRoamresearch className="text-8xl text-white" />,
        },
      ]);
    
  return (
    <div>
        <div className="container mx-auto px-4 py-8 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mr-20 ml-20 ">
                {cards.map((card) => (
                  <div key={card.id} className="C1  shadow-lg overflow-hidden rounded-tr-[70px] rounded-bl-[70px] ">
                    {/* Centered Icon */}
                    <div className="flex justify-center items-center h-32 ">
                      {card.icon}
                    </div>
        
                    {/* Card Content */}
                    <div className="items-center text-center p-4">
                      <h2 className="text-2xl font-bold mb-2 text-white">{card.title}</h2>
                      <p className="text-white mb-4   ">{card.description}</p>
                    </div>
                  </div>
                ))}    
              </div>
            </div>
        
    </div>
  )
}
