import React from "react";
import { GiChestnutLeaf } from "react-icons/gi";
import MarigoldType from "./MarigoldType";
import ChrysanthemumType from "./ChrysanthemumType";
import WatermelonType from "./WatermelonType";

const Chrysanthemum = () => {
  return (
    <div className="relative w-full h-[200px] md:h-[400px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://i0.wp.com/seamonsseeds.com/wp-content/uploads/2023/09/watermelon.webp?resize=930%2C500&ssl=1')",
        }}
      ></div>

      {/* Left Half Black Opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent"></div>

      {/* Text Container */}
      <div className="relative z-10 flex items-center justify-start w-2/4 h-full">
        <h1 className="text-3xl  sm:text-4xl font-bold sm:ml-32 text-white shadow-md ml-14">
        Watermelon
        </h1>
      </div>

      <div className="flex-1 mr-26 lg:ml-6 p-3">
        <h1 className="text-4xl font-bold   C">Watermelon</h1>

        <div className="flex items-center  mb-">
          <span className="w-12 h-0.5 bg-black"></span>
          <GiChestnutLeaf className="C text-2xl" />
          <span className="w-12 h-0.5  bg-black"></span>
        </div>

        <div className="ml-10 mr-10" >
  <ul className="p-2 space-y-2">
    <li>Mainly Watermelon in fruits in daily life The consumption of this fruit has increased</li>
    <li>Earlier, Watermelon fruit was in demand only in summer But nowadays the demand of Watermelon fruit is increasing throughout the year. </li>
    <li>This crop is cultivated throughout the year.    </li>
    <li>Watermelon crop can be harvested at a cost of 50 to 70 thousand rupees per acre.It is the only crop that comes at such a low cost.</li>
    <li>The risk of loss to the farmer in this crop is less.</li>
    
  </ul>
  
</div>

      </div>

      <WatermelonType/>
    </div>
  );
};

export default Chrysanthemum;
