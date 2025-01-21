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

const ContentSection = ({ title, images }) => (
  <div className="my-10 p-5  rounded-lg">
    <h2 className="text-2xl font-semibold mb-4 ml-2  sm:text-2xl">{title}</h2>
   
    <ImageSlider images={images} />
  </div>
);

const App = () => {
  const contentData = [
    {
      title: "1.Bhakti Bronze",
     
      images: [
        "https://vikashitechnursery.com/wp-content/uploads/2023/03/IMG_20181001_164736-150x150.jpg",
        "https://vikashitechnursery.com/wp-content/uploads/2023/03/IMG_20181001_164726-1-150x150.jpg",
        "https://vikashitechnursery.com/wp-content/uploads/2023/03/bhakti1.jpeg",
        "https://vikashitechnursery.com/wp-content/uploads/2023/03/bhakti2.jpeg",
        "https://vikashitechnursery.com/wp-content/uploads/2023/03/IMG_20181001_164736-150x150.jpg",
        "https://vikashitechnursery.com/wp-content/uploads/2023/03/IMG_20181001_164726-1-150x150.jpg",
        "https://vikashitechnursery.com/wp-content/uploads/2023/03/bhakti1.jpeg",
      ],
    },
   
    {
        title: "2.Purva White ",
       
        images: [
          "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG_20180817_083015_HDR-150x150.jpg",
          "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG-20191016-WA0019-150x150.jpg",
          "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG_20180817_083015_HDR-150x150.jpg",
          "https://vikashitechnursery.com/wp-content/uploads/2023/03/IMG-20191016-WA0019-1-150x150.jpg",
          "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG-20200417-WA0014-150x150.jpg",
          "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG-20200417-WA0014-150x150.jpg",
          "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG_20180817_083015_HDR-150x150.jpg",
        ],
      },
      {
          title: "3.Purva Yellow",
         
          images: [
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG_20180928_142248-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG_20181001_162741-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/img5-1-150x150.jpeg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG_20180928_142346_11zon-150x150.jpg.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG_20180928_142248-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG_20181001_162741-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG_20181001_163000-150x150.jpg",
            
          ],
        },
  
        {
          title: "4. Sanvi Yellow",
         
          images: [
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/DSC_0713-Copy-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/DSC_0734-Copy-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/DSC_0709-Copy-1_11zon-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/03/sanvi-yellow.png",
            "https://vikashitechnursery.com/wp-content/uploads/2023/03/sanvi-yellow.png",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/DSC_0734-Copy-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/DSC_0709-Copy-1_11zon-150x150.jpg",
            
          ],
        },
  
        {
          title: "5. Swati Purple",
         
          images: [
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG-20200222-WA0042-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG-20200222-WA0045-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG-20200222-WA0048-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG-20200222-WA0042-150x150.jpg",
            "https://vikashitechnursery.com/wp-content/uploads/2023/02/IMG-20200222-WA0045-150x150.jpg",
                       
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
