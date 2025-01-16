import React, {useState} from 'react'
import { GiChestnutLeaf } from "react-icons/gi";
import { IoPersonSharp } from "react-icons/io5";
import { IoCloudDone } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io"; 
import { GiStumpRegrowth } from "react-icons/gi";
import { GiFarmer } from "react-icons/gi";
import { SiRoamresearch } from "react-icons/si";


export default function Home() {
  const features = [
    { id: 1, text: "Perfect Landscape Solution" },
    { id: 2, text: "22 Years of Practical Experience" },
    { id: 3, text: "Our Fresh & Organic Garden" },
    { id: 4, text: "Professional Team Member" },
  ];

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





<div className="flex justify-center items-center  ">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center bg-white rounded-lg p-16 gap-28">
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


    <div className="relative mx-auto my-16 bg-cover bg-center h-auto w-full max-w-[90%] lg:max-w-[1000px] opacity-90 rounded-3xl" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/young-green-leaves-leaf-bud-tea-tree-plantation_185094-943.jpg')", backgroundAttachment: 'fixed' }}>
  {/* Background Image Div */}

  {/* Content Div */}
  <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-6 rounded-3xl bg-black/50 p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {/* Each Card */}
      <div className="p-6 rounded-md shadow-lg  text-center  text-white">
        <IoPersonSharp className="text-6xl mx-auto mb-4"/>
        <h2 className="text-xl font-bold text-white">Happy Clients</h2>
        <p className="text-2xl font-extrabold t text-white">1000+</p>
      </div>

      <div className="p-6 rounded-md shadow-lg  text-center text-white">
        <IoCloudDone className="text-6xl mx-auto mb-4"/>
        <h2 className="text-xl font-bold text-white">Projects Completed</h2>
        <p className="text-2xl font-extrabold  text-white">1000+</p>
      </div>

      <div className="p-6 rounded-md shadow-lg  text-center text-white">
        <IoIosPeople className="text-6xl mx-auto mb-4"/>
        <h2 className="text-xl font-bold text-white">No. of People</h2>
        <p className="text-2xl font-extrabold text-white">300+</p>
      </div>
    </div>
  </div>
</div>

  

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
        <span className="w-12 h-1 bg-black"></span>
        <GiChestnutLeaf className='C text-2xl'/>
        <span className="w-12 h-1  bg-black"></span>
      </div>
    


          <p className="text-lg text-gray-700 mt-4">
          We retain the best scientists available globally for each of our products and specialize in producing premium quality products. Our growth rooms are climate-controlled and closely monitored to ensure optimal conditions, and they have the capacity to hold over 5 crore plants at any given time. The seedlings are fortified with high levels of nutrients to ensure their growth and development.
          </p>

          <button
      className="C1 text-white font-bold py-2 px-4 rounded hover:bg-green-950 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 mt-5"
    >
      Get A Quote
    </button>          
        </div>
      </div>
    </div>

   
    <div className="container mx-auto px-4 py-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mr-20 ml-20 ">
        {cards.map((card) => (
          <div key={card.id} className="C1  shadow-lg overflow-hidden rounded-tr-[80px] rounded-bl-[80px] ">
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
