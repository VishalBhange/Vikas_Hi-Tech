import React from 'react'
import { GiChestnutLeaf } from "react-icons/gi";

export default function OurExpertise() {
  return (
    <div>
        <div className="flex justify-center items-center  bg-gray-100">
              <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center bg-green-50 shadow-lg  p-10 gap-8">
                {/* Left Section: Image */}
                <div className="relative  mb-4 lg:mb-0 ">
                  <img
                    src="	https://vikashitechnursery.com/wp-content/uploads/2023/02/expertise.png" 
                    alt="Nursery"
                    className=" w-auto h-80"
                    loading="lazy"
                    decoding="async"
                    
                  />
                 
                </div>
        
                {/* Right Section: Text Content */}
                <div className="flex-1 mr-26 lg:ml-6 ">
                  <h1 className="text-4xl font-bold   C">Our Expertise</h1>
        
                  
              <div className="flex items-center  mb-">
                <span className="w-12 h-0.5 bg-black"></span>
                <GiChestnutLeaf className='C text-2xl'/>
                <span className="w-12 h-0.5  bg-black"></span>
              </div>
            
        
        
                  <p className="text-lg text-gray-700 mt-4">
                  We retain the best scientists available globally for each of our products and specialize in producing premium quality products. Our growth rooms are climate-controlled and closely monitored to ensure optimal conditions, and they have the capacity to hold over 5 crore plants at any given time. The seedlings are fortified with high levels of nutrients to ensure their growth and development.
                  </p>
        
                  <button
              className="C1 text-white font-bold py-2 px-4 rounded hover:bg-green-950 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 rounded-full rounded-tl-[70px] mt-5"
            >
              Get A Quote
            </button>          
                </div>
              </div>
            </div>
        
    </div>
  )
}
