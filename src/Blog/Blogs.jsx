import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const CardGrid = () => {
   const [activeImage, setActiveImage] = useState(null);
       useEffect(() => {
          AOS.init({
            duration: 1000, 
            once: true, 
          });
        }, []); 

  const cards = [
    {
      image: "https://vikashitechnursery.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-06-at-3.38.48-PM-1.jpeg",
      profileLogo: "https://i.pinimg.com/736x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg",
      title: " Nurturing Your Plant Nursery During the Rainy Season: Essential Care Tips",
      description:
        "Introduction   The rainy season brings much-needed relief to your",
      link: "#",
      footer: "September 1, 2023 • No Comments",
    },
    {
      image: "https://vikashitechnursery.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-06-at-3.38.48-PM.jpeg",
      profileLogo: "https://i.pinimg.com/736x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg",
      title: "Battling Common Pests in Your Vegetable and Agriculture Nurseries",
      description:
        "Introduction Nurturing healthy crops in your vegetable and agriculture nurseries",
      link: "#",
      footer: "September 1, 2023 • No Comments",
    },
    {
      image: " https://vikashitechnursery.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-21-at-4.48.47-PM-1-1.jpeg ",
      profileLogo: "https://i.pinimg.com/736x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg",
      title: " Cultivating Success: Tips to Boost Chilli Plant Growth ",
      description:
        " Introduction Chili plants, known for their fiery flavors and vibrant ",
      link: "#",
      footer: "August 21, 2023 • No Comments",
    },

    {
      image: "https://vikashitechnursery.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-08-at-6.22.54-PM.jpeg  ",
      profileLogo: "https://i.pinimg.com/736x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg",
      title: " Marigold Nursery: A Blooming Haven of Joy and Learning ",
      description:
        " Introduction:   Welcome to the enchanting world of Marigold Nursery! ",
      link: "#",
      footer: "August 8, 2023 • No Comments",
    },

    {
      image: " https://vikashitechnursery.com/wp-content/uploads/2023/03/img12.png ",
      profileLogo: "https://i.pinimg.com/736x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg",
      title: " The importance of growing healthy plants ",
      description:
        "  Nurseries play an important role in the success of agriculture",
      link: "#",
      footer: "March 126 2023 • No Comments",
    },

    {
      image: "  https://vikashitechnursery.com/wp-content/uploads/2023/03/flower22.png",
      profileLogo: "https://i.pinimg.com/736x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg",
      title: " Simple tips to help you grow your chrysanthemum flowers ",
      description:
        " Chrysanthemum flowers are popular all over the world. These long-lasting ",
      link: "#",
      footer: "March 10, 2023 • No Comments",
    },

    {
      image: "  https://vikashitechnursery.com/wp-content/uploads/2023/02/nursery-plant-tips-and-triks.jpg",
      profileLogo: "https://i.pinimg.com/736x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg",
      title: "  Nursery planting tips & tricks",
      description:
        " Plant Nursery is a convenient location for growing and nurturing ",
      link: "#",
      footer: "February 15, 2023 • No Comments",
    },

    {
      image: "https://vikashitechnursery.com/wp-content/uploads/2023/02/marigold.png  ",
      profileLogo: "https://i.pinimg.com/736x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg",
      title: " How to care for marigold ",
      description:
        " Marigold is a popular garden annual in India, both for ",
      link: "#",
      footer: "February 15, 2023 • No Comments",
    },
  ];

  
  while (cards.length < 8) {
    cards.push(...cards.slice(0, 8 - cards.length));
  }

  return (
    <div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 p-16 ">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white border rounded-sm shadow-md shadow-gray-300 hover:shadow-2xl transition duration-300"
          onMouseEnter={() => setActiveImage(item.name)}
              onMouseLeave={() => setActiveImage(null)}
              data-aos="flip-up"
        >
          {/* Image Section */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-80 object-cover rounded-t-sm"
          />

          {/* Card Content */}
          <div className="p-4">
            {/* Profile Section */}
            <div className="flex items-center mb-4">
              <img
                src={card.profileLogo}
                alt="Profile"
                className="w-16 h-16 rounded-full -mt-10 ml-3 border-gray-200"
              />
             
            </div>

            {/* Title and Description */}
            <h3 className="text-xl font-bold p-2 mb-2">{card.title}</h3>
            <p className="text-gray-600 text-base p-3 mb-4">{card.description}</p>
            <a
              href={card.link}
              className="text-green-600 font-medium ml-4 hover:underline"
            >
              Read More »
            </a>
          </div>

          {/* Footer Section */}
          <div className="text-gray-400 text-xs mt-4 border-t pt-4 pb-4 px-7">
            {card.footer}
          </div>
        </div>
      ))}
    </div>

    <Footer/>

    </div>
    
  );
};

export default CardGrid;
