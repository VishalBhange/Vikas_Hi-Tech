import React from 'react'
import { IoPersonSharp } from "react-icons/io5";
import { IoCloudDone } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io"; 
import { useEffect,useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";




export default function HappyClient() {

  const [activeImage, setActiveImage] = useState(null);
         useEffect(() => {
            AOS.init({
              duration: 1000, 
              once: true, 
            });
          }, []);  

   const [count, setCount] = useState(0);
  
        useEffect(() => {
          if (count <= 999) {
            const timer = setTimeout(() => {
              setCount(count + 1);
            }, 1); 
            return () => clearTimeout(timer); // Cleanup timer
          }
        }, [count]);

        const [count1, setCount1] = useState(0);
  
        useEffect(() => {
          if (count1 <= 299) {
            const timer = setTimeout(() => {
              setCount1(count1 + 1);
            }, 8); 
            return () => clearTimeout(timer); // Cleanup timer
          }
        }, [count1]);
  return (
    <div>
        <div className="relative mx-auto my-16 bg-cover bg-center h-auto w-full max-w-[90%] lg:max-w-[1000px] opacity-90 rounded-3xl" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/young-green-leaves-leaf-bud-tea-tree-plantation_185094-943.jpg')", backgroundAttachment: 'fixed' }}
        >
  {/* Background Image Div */}

  {/* Content Div */}
  <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-6 rounded-3xl bg-black/50 p-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"  
  onMouseEnter={() => setActiveImage(item.name)}
              onMouseLeave={() => setActiveImage(null)}
              data-aos="flip-up">
    {/* Card 1 */}
    <div className="p-6 rounded-md shadow-lg text-center text-white lg:border-r-2 lg:border-gray-50">
      <IoPersonSharp className="text-6xl mx-auto mb-4" />
      <h2 className="text-xl font-bold text-white">Happy Clients</h2>
      <span className="text-xl font-extrabold">{count}+</span>
    </div>

    {/* Card 2 */}
    <div className="p-6 rounded-md shadow-lg text-center text-white lg:border-r-2 lg:border-gray-50">
      <IoCloudDone className="text-6xl mx-auto mb-4" />
      <h2 className="text-xl font-bold text-white">Projects Completed</h2>
      <span className="text-xl font-extrabold">{count}+</span>
    </div>

    {/* Card 3 */}
    <div className="p-6 rounded-md shadow-lg text-center text-white">
      <IoIosPeople className="text-6xl mx-auto mb-4" />
      <h2 className="text-xl font-bold text-white">No. of People</h2>
      <span className="text-xl font-extrabold">{count1}+</span>
    </div>
  </div>
</div>

</div>
    </div>
  )
}
