import React from "react";
import { GiChestnutLeaf } from "react-icons/gi";
import MarigoldType from "./MarigoldType";
import ChrysanthemumType from "./ChrysanthemumType";

const Chrysanthemum = () => {
  return (
    <div className="relative w-full h-[200px] md:h-[400px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://www.selectseeds.com/cdn/shop/products/8518-1-1000_800x.jpg?v=1687464761')",
        }}
      ></div>

      {/* Left Half Black Opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent"></div>

      {/* Text Container */}
      <div className="relative z-10 flex items-center justify-start w-2/4 h-full">
        <h1 className="text-3xl  sm:text-4xl font-bold sm:ml-32 text-white shadow-md ml-14">
        Chrysanthemum
        </h1>
      </div>

      <div className="flex-1 mr-26 lg:ml-6 p-3">
        <h1 className="text-4xl font-bold   C">Chrysanthemum</h1>

        <div className="flex items-center  mb-">
          <span className="w-12 h-0.5 bg-black"></span>
          <GiChestnutLeaf className="C text-2xl" />
          <span className="w-12 h-0.5  bg-black"></span>
        </div>

        <div className="ml-10 mr-10" >
  <ul className="p-2 space-y-2">
    <li>Using light (artificial light) at night for 40 days from planting Shevanti is high yielding and can be cultivated throughout the year</li>
    <li>Mainly from March to October, Shevanti is cultivated naturally done in the atmosphere. </li>
    <li>Estimated yield from one plant is 700 grams to 1 kg.
    </li>
    <li>acre 15,000 seedlings planted, yield 10 to 12 tons per acre.</li>
    <li>Average weight of flowers ranges from 8 to 12 grams.</li>
    <li>The petals of the flowers are thick and tight, so they last longer. Reliable, suitable and affordable seedlings available.</li>
   
  </ul>
  
</div>

      </div>

      <ChrysanthemumType/>
    </div>
  );
};

export default Chrysanthemum;
