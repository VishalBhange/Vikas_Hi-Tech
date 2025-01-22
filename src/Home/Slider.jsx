import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Hindurao Mali",
    title: "Farmer",
    text: "I am thrilled with the service provided by Vikas Hi-Tech Nursery! Their expert agronomy advice has been instrumental in helping me plan my crops and identify potential pests and diseases before they become problematic. Their diverse selection of seedlings guarantees high yields and tolerance to diseases. Overall, I am thoroughly satisfied with their service and would recommend them to anyone looking for expert guidance in their agricultural endeavors.",
  },
  {
    name: "Vithhal Shinde",
    title: "Farmer",
    text: "I must say that I am extremely pleased with the quality of seedlings I received from Vikas Hi-Tech Nursery. The plants have grown beautifully and are displaying excellent health and vigor. Their fast and reliable service makes them my go-to choice for high-quality plants. Highly recommended!",
  },
  {
    name: "Sambhaji Chand",
    title: "Farmer",
    text: "The seedlings we received from Vikas Hi-Tech Nursery have truly impressed me. The plants have grown exceptionally tall and are thriving with lush greenery. Their prompt service and availability of plants are commendable. This nursery stands out as the best in India!",
  },
];

const SimpleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url("https://thumbs.dreamstime.com/b/orange-colour-flower-zendu-orange-colour-flower-zendu-269757165.jpg")`,
      }}
    >
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
        What Our Clients Say
      </h1>
      <div className="relative w-full max-w-4xl mx-auto px-4">
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2  text-gray-200 p-3 rounded-full  hover:bg-green-700 focus:outline-none"
        >
          &lt;
        </button>

        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-10 flex flex-col items-center text-center space-y-4 transition-transform duration-500">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
            {testimonials[currentIndex].name}
          </h3>
          <p className="text-sm sm:text-base font-semibold text-gray-600">
            {testimonials[currentIndex].title}
          </p>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg font-medium">
            {testimonials[currentIndex].text}
          </p>
          <div className="text-yellow-500 text-lg">★★★★★</div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2  text-gray-200 p-3 rounded-full  hover:bg-green-700 focus:outline-none"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SimpleSlider;
