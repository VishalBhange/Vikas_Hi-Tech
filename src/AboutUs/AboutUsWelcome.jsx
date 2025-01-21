import React from 'react'

export default function WelcomeToVikas() {
     

     
  return (
    <div>
        <div className="flex justify-center items-center  ">
              <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center bg-white  p-5 pl-10 pr-10 gap-28">
                
                {/* Right Section: Text Content */}
                <div className="flex-1 mr-26 lg:ml-6">
                  <h1 className="text-4xl font-bold   pr-20  C"><span className='text-black'> Welcome To </span>Vikas Hi-Tech Nursery</h1>
    
            
        
        
                  <p className="text-lg text-gray-700 mt-4 ">
                  The Vikas Hi-Tech Nursery was established in 1997 by Vikas Maruti Nalawade near Tung in the Sangli District of Maharashtra. We are India’s largest producer of Marigold, Chrysanthemum, Capsicum, Watermelon, and Papaya plants. Our plant biotechnology relies on advanced technology, flawless processes, and extensive research and development, resulting in the production of over 10 crore plants annually. We supply these plants to farmers across India. With over 25 years of experience in the nursery industry, Vikas Hi-Tech Nursery is a leading player in India and has 25 hectares of world-class greenhouse infrastructure.
                  </p>
        
                 
                </div>


                {/* Left Section: Image */}
                <div className="relative w-96 h-96 mb-4 lg:mb-20 pl-9  ">
                  <img
                    src="	https://vikashitechnursery.com/wp-content/uploads/2023/03/Vikas-sir2.png" 
                    alt="Welcome"
                    className="rounded-full object-cover "
                  />
                   
                </div>
        
              </div>
            </div>
        
    </div>
  )
}
