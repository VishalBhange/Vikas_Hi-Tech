import React from 'react';
import AboutUsWelcome from './AboutUsWelcome';
import Footer from '../Footer';
import AboutUsCards from './AboutUsCards';

const AboutUs = () => {
  return (
    <div className="relative w-full h-[200px] md:h-[400px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://littleveggiepatchco.com.au/cdn/shop/files/marigold_1.jpg?v=1706473798')",
        }}
      ></div>

      {/* Left Half Black Opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent"></div>

      {/* Text Container */}
      <div className="relative z-10 flex items-center justify-start w-2/4 h-full">
        <h1 className="text-3xl  sm:text-4xl font-bold sm:ml-32 text-white shadow-md ml-14">
          About Us
        </h1>
      </div>


      <AboutUsWelcome/>
      <AboutUsCards/>
      <Footer/>
  
    </div>

    
  );
};

export default AboutUs;
