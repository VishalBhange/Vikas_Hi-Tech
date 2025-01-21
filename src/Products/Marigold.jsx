import React from "react";
import { GiChestnutLeaf } from "react-icons/gi";
import MarigoldType from "./MarigoldType";

const Marigold = () => {
  return (
    <div className="relative w-full h-[200px] md:h-[400px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://voiceofplant.com/wp-content/uploads/2023/12/pexels-gm-rajib-6447351-scaled.jpg')",
        }}
      ></div>

      {/* Left Half Black Opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent"></div>

      {/* Text Container */}
      <div className="relative z-10 flex items-center justify-start w-2/4 h-full">
        <h1 className="text-3xl  sm:text-4xl font-bold sm:ml-32 text-white shadow-md ml-14">
          Marigold
        </h1>
      </div>

      <div className="flex-1 mr-26 lg:ml-6 p-3">
        <h1 className="text-4xl font-bold   C">Marigold</h1>

        <div className="flex items-center  mb-">
          <span className="w-12 h-0.5 bg-black"></span>
          <GiChestnutLeaf className="C text-2xl" />
          <span className="w-12 h-0.5  bg-black"></span>
        </div>

        <div className="ml-10 mr-10" >
  <ul className="p-2 space-y-2">
    <li>Marigold seeds sprout in seven to ten days, which is a quick germination rate.</li>
    <li>Additionally, marigolds begin to bloom 50 days after seedling emergence, making it simple to dry the seeds. As soon as there is no longer any risk of frost and the soil has started to warm up, seeds should be planted. </li>
    <li>Seeds should be sown 1 inch apart and no deeper than 1 inch in moistened soil.</li>
    <li>After planting, the seeds should be planted at a distance of 1 inch. The seeds should be planted after they sprout.</li>
    <li>The height of these plants can vary from 6 inches to 2 or 3 feet.</li>
    <li>In October or November, marigold plants often reach their peak flowering period.</li>
    <li>This plant has green, hairy leaves that range in length from 2 to 5 cm. When crushed, the leaves release a nice aroma.</li>
    <li>White, bicolor, even yellow and orange, scarlet, gold, or crimson marigold flowers are all possible.</li>
    <li>This plant often produces spherical, fragrant flowers with many petals. Diverse flowers have different colours, shapes, and sizes depending on the species.</li>
  </ul>
  <p>Due to the uncertainty of the agricultural market and nature, which crops should be planted to get better income for the farmers. This big question has arisen.</p>
  <p>New marigold varieties have been introduced which give high yield.</p>
</div>

      </div>

      <MarigoldType/>
    </div>
  );
};

export default Marigold;
