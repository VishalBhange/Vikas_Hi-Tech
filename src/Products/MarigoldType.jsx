import React, { useState, useEffect } from 'react';
import Footer from '../Footer';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(4); // Default to 4 images per view

  // Update images per view based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // Small screen, show 1 image
        setImagesPerView(1);
      } else if (window.innerWidth < 1024) { // Medium screen, show 2 images
        setImagesPerView(2);
      } else { // Large screen, show 4 images
        setImagesPerView(4);
      }
    };

    // Set initial images per view
    handleResize();

    // Update images per view on window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Move to the next slide automatically every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < images.length - imagesPerView) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setCurrentIndex(0); // Reset to the first set of images
      }
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex, images.length, imagesPerView]);

  const nextImage = () => {
    if (currentIndex < images.length - imagesPerView) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Reset to the first set of images
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - imagesPerView); // Go to the last set of images
    }
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={prevImage}
        className="text-2xl font-extrabold text-gray-300 p-2 rounded-full hover:bg-green-500 transition duration-200"
      >
        &lt;
      </button>

      {/* Show images based on imagesPerView */}
      <div className={`flex space-x-4 sm:space-x-8 md:space-x-16 lg:space-x-32`}>
        {images.slice(currentIndex, currentIndex + imagesPerView).map((img, index) => (
          <img
            key={index}
            src={img}
            alt="slider"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 object-cover rounded-lg"
          />
        ))}
      </div>

      <button
        onClick={nextImage}
        className="text-2xl font-extrabold text-gray-300 p-2 rounded-full hover:bg-green-500 transition duration-200"
      >
        &gt;
      </button>
    </div>
  );
};

const ContentSection = ({ title, points, images }) => (
  <div className="my-10 p-5 bg-white shadow-lg rounded-lg">
    <h2 className="text-2xl font-semibold mb-4 ml-2  sm:text-2xl">{title}</h2>
    <ul className="list-disc pl-9 text-lg space-y-2">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
    <ImageSlider images={images} />
  </div>
);

const App = () => {
  const contentData = [
    {
      title: "1.Dream Yellow",
      points: [
        "Disease is very severe",
        "Average height of trees is 3 to 3.5 feet",
        "Flower shape is spherical (ball type)",
        "Average yield up to 1.5 kg per tree",
        "Cultivation period throughout the year",
        "Flower tight Due to which the durability lasts longer.",
      ],
      images: [
        "https://vikashitechnursery.com/wp-content/uploads/2023/02/jpeg-optimizer_DSC_8145-150x150.jpg",
        "https://vikashitechnursery.com/wp-content/uploads/2023/02/jpeg-optimizer_DSC_8164-150x150.jpg",
        "https://vikashitechnursery.com/wp-content/uploads/2023/02/jpeg-optimizer_DSC_8125-150x150.jpg",
        "https://vikashitechnursery.com/wp-content/uploads/2023/02/jpeg-optimizer_DSC_8124-150x150.jpg",
        "https://vikashitechnursery.com/wp-content/uploads/2023/02/jpeg-optimizer_DSC_8145-150x150.jpg",
        "https://vikashitechnursery.com/wp-content/uploads/2023/02/jpeg-optimizer_DSC_8164-150x150.jpg",
        "https://vikashitechnursery.com/wp-content/uploads/2023/02/jpeg-optimizer_DSC_8125-150x150.jpg",
      ],
    },
   
    {
        title: "2.Shravani Yellow",
        points: [
          "Very susceptible to disease",
          "Trees average 2 to 2.5 feet in height",
          "Flower shape is spherical (ball type)",
          "Average 1 to 1.5 kg per tree Production up to",
          "Planting period is April to September",
          "Flower color is yellow.",
          "Due to the low height and strength of the trees, the branch does not fall or fall off.",
        ],
        images: [
          "https://vikashitechnursery.com/wp-content/uploads/2023/02/DSC_8165_11zon-150x150.jpg",
          "https://vikashitechnursery.com/wp-content/uploads/2023/02/large-marigold-150x150.jpeg",
          "https://vikashitechnursery.com/wp-content/uploads/2023/02/img3-150x150.jpeg",
          "https://vikashitechnursery.com/wp-content/uploads/2023/02/img4-150x150.jpeg",
          "https://vikashitechnursery.com/wp-content/uploads/2023/02/DSC_8165_11zon-150x150.jpg",
          "https://vikashitechnursery.com/wp-content/uploads/2023/02/large-marigold-150x150.jpeg",
          "https://vikashitechnursery.com/wp-content/uploads/2023/02/img3-150x150.jpeg",
        ],
      },
      {
          title: "3.Yash Yellow",
          points: ["Disease is very severe (candles).", "Average height of trees is 3 to 3.5 feet", "Flower shape is spherical (ball type)", "Of flowers from first cut to last Same size", "Average yield up to 1.5 kg per tree", "Cultivation period throughout the year", "Flower tight Due to which the durability lasts longer."],
          images: [
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/jpeg-optimizer_DSC_8114-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/img5-150x150.jpeg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/img5-1-150x150.jpeg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/jpeg-optimizer_DSC_8119-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/jpeg-optimizer_DSC_8114-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/img5-150x150.jpeg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/img5-1-150x150.jpeg",
            
          ],
        },
  
        {
          title: "4.Yash Orange",
          points: ["Very susceptible to disease", "Trees average 2.5 to 3 feet in height.", "Flower shape round(ball type compact)", "Average yield up to 1.5 kg per tree", "Cultivation period throughout the year.", "Flower color is dark orange."],
          images: [
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG_2601-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG_2594-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/2060-150x150.jpeg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/jpeg-optimizer_DSC02052-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG_2601-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG_2594-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/2060-150x150.jpeg",
            
          ],
        },
  
        {
          title: "5.Prime Orange",
          points: ["Very susceptible to disease", "Trees average 3 to 3.5 feet in height.", "Flower shape round(ball type compact)", "Average 1 to 1.5 kg per tree Production up to", "Cultivation period throughout the year.", "Flower color is dark orange."],
          images: [
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG-6046-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG_20210102_100910-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/DSC03798_11zon-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/Marigold-1-150x150.png",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG-6046-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG_20210102_100910-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/DSC03798_11zon-150x150.jpg",
            
          ],
        },
  ];

  return (
    <div>
    <div className="container mx-auto p-4">
      {contentData.map((data, index) => (
        <ContentSection
          key={index}
          title={data.title}
          points={data.points}
          images={data.images}
        />
      ))}

</div>
      <Footer/>
    </div>
  );
};

export default App;
