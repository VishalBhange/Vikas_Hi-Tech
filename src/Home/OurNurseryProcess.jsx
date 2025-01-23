import React, { useState, useEffect } from "react";
import { GiChestnutLeaf } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurNurseryProcess() {
    const [activeImage, setActiveImage] = useState(null);
     useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true, 
        });
      }, []);

  const [activeStep, setActiveStep] = useState("");

  const steps = [
    { id: "Step_3", label: "Sowing Seeds", color: "border-4 border-yellow-100" },
    { id: "Step_4", label: "Hardening", color: "border-4 border-yellow-900" },
    { id: "Step_5", label: "Sorting", color: "border-4 border-green-500" },
    { id: "Step_6", label: "Expert Guidance", color: "border-4 border-blue-500" },
    { id: "Step_7", label: "Shipping and provision", color: "border-4 border-red-500" },
    { id: "Step_8", label: "Replanting in the primary field", color: "border-4 border-purple-500" },
    { id: "Step_1", label: "Manufacturing of Trays", color: "border-4 border-orange-700" },
    { id: "Step_2", label: "Media (Cocopeat) preparation", color: "border-4 border-orange-400" },
  ];
  
  return (
    <div>
      {/* Header */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full gap-2 p-5 pb-16">
        <h2 className="text-4xl font-bold C mt-4">Our Nursery Process</h2>
        <div className="flex items-center justify-center mb-16">
          <span className="w-16 h-0.5 bg-slate-800"></span>
          <GiChestnutLeaf className="text-2xl C mx-2" />
          <span className="w-16 h-0.5 bg-slate-800"></span>
        </div>
      </div>

      {/* Diagram */}
      <div className="flex flex-col items-center">
        <div className="relative w-96 h-96"
         onMouseEnter={() => setActiveImage(item.name)}
         onMouseLeave={() => setActiveImage(null)}
         data-aos="flip-left" data-aos-duration="1200" data-aos-delay="100"
         >
          {/* Center Circle */}
          <div className="absolute inset-0 flex items-center justify-center">

          <div className="w-52 h-52 rounded-full flex items-center justify-center shadow-2xl mb-36 ml-4 border border-black"
          >

            <div
              className={`w-44 h-44 rounded-full flex items-center justify-center text-lg font-semibold  ${
                activeStep ? "bg-[#6BB239] text-white text-center" : "bg-white text-gray-500"
              }`}
                         >
              {activeStep || ""}
            </div>
            </div>
          </div>

          {/* Step Buttons */}
          {steps.map((step, index) => {
            const angle = (index / steps.length) * 360;
            const x = 150 * Math.cos((angle * Math.PI) / 180);
            const y = 150 * Math.sin((angle * Math.PI) / 180);

            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.label)}
                className={`${step.color} absolute w-20 h-20 rounded-full text-gray-600 flex items-center justify-center text-lg font-semibold transition-transform hover:scale-110 shadow-lg mt-20 ml-40 `}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                
              >
                {step.id}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
