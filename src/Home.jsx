import React from 'react'
import { GiChestnutLeaf } from "react-icons/gi";


export default function Home() {
  const features = [
    { id: 1, text: "Perfect Landscape Solution" },
    { id: 2, text: "22 Years of Practical Experience" },
    { id: 3, text: "Our Fresh & Organic Garden" },
    { id: 4, text: "Professional Team Member" },
  ];
  return (
    <div>
    <div className="flex justify-center items-center bg-gray-100">
  <iframe
    className="w-full aspect-video shadow-lg"
    src="https://www.youtube-nocookie.com/embed/YvgtKS8__fg?autoplay=1&controls=0&rel=0&playsinline=1"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="YouTube Video"
  ></iframe>
</div>





<div className="flex justify-center items-center  bg-gray-100">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg p-16 gap-28">
        {/* Left Section: Image */}
        <div className="relative w-96 h-96 mb-4 lg:mb-0 ">
          <img
            src="	https://vikashitechnursery.com/wp-content/uploads/2023/02/seedling_plant-transformed.jpeg" 
            alt="Nursery"
            className="rounded-full object-cover w-full h-full"
          />
          <div className="absolute top-0 right-0 bg-green-500 text-white rounded-full px-4 py-5 text-center C1">
            <span className="text-lg font-semibold">1997</span>
            <p className="text-xs">Trusted By</p>
          </div>
        </div>

        {/* Right Section: Text Content */}
        <div className="flex-1 mr-26 lg:ml-6">
          <h1 className="text-3xl font-bold   C">Welcome To Vikas Hi-Tech Nursery</h1>

          
      <div className="flex items-center  mb-">
        <span className="w-12 h-1 bg-black"></span>
        <GiChestnutLeaf className='C text-2xl'/>
        <span className="w-12 h-1  bg-black"></span>
      </div>
    


          <p className="text-lg text-gray-700 mt-4">
            The Vikas Hi-Tech Nursery was established in 1997 by Vikas Maruti Nalawade near Tung in the Sangli
            District of Maharashtra. We are India's largest producer of Marigold, Chrysanthemum, Capsicum, Watermelon,
            and Papaya plants. Our plant biotechnology relies on advanced technology, flawless processes, and extensive
            research and development, resulting in the production of over 10 crore plants annually.
          
            We supply these plants to farmers across India. With over 25 years of experience in the nursery industry,
            Vikas Hi-Tech Nursery is a leading player in India and has 25 hectares of world-class greenhouse infrastructure.
          </p>

          {/* Points List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="flex items-center border border-gray-300 rounded-lg p-2 shadow-sm bg-white"
        >
          <div className="flex-shrink-0 C mr-4">
            {/* Check Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div className="text-gray-700 font-medium text-lg">{feature.text}</div>
        </div>
      ))}
    </div>
        </div>
      </div>
    </div>


    <div className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/https://www.shutterstock.com/shutterstock/videos/1106929567/thumb/1.jpg?ip=x480')" }}>
      {/* Background Image Div */}
      <div className=""></div>

      {/* Content Div */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 text-center">
          {/* Each Card */}
          <div className="bg-white/90 p-6 rounded-md shadow-lg">
            <h2 className="text-xl font-bold text-gray-800">Happy Clients</h2>
            <p className="text-3xl font-extrabold text-green-600">1000+</p>
          </div>

          <div className="bg-white/90 p-6 rounded-md shadow-lg">
            <h2 className="text-xl font-bold text-gray-800">Projects Completed</h2>
            <p className="text-3xl font-extrabold text-green-600">1000+</p>
          </div>

          <div className="bg-white/90 p-6 rounded-md shadow-lg">
            <h2 className="text-xl font-bold text-gray-800">No. of People</h2>
            <p className="text-3xl font-extrabold text-green-600">300+</p>
          </div>
        </div>
      </div>
    </div>
  

</div>
  )
}
