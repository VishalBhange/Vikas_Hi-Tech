import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Career1 from "./Career1";
import Career2 from "./Career2";
import Career3 from "./Career3";
import Career4 from "./Career4";
import Career5 from "./Career5";
import Career6 from "./Career6";
import Career7 from "./Career7";
import Career8 from "./Career8";
import Footer from "../Footer";

const Career = () => {
  const cards = [
    {
      title: "Executive Assistant",
      description:
        "Job Brief: We are looking for a well-organized Executive Assistant to oversee activities within the department. The responsibilities of the role include",
      link: "/career1",
      footer: "April 12, 2023 • No Comments",
    },
    {
      title: "Human Resource Manager",
      description:
        "Job Brief: We are looking for a well-organized HR Manager to oversee activities across various departments. The responsibilities of the role include",
      link: "/career2",
      footer: "April 12, 2023 • No Comments",
    },
    {
      title: "Sales Head",
      description:
        "Job Brief: We are looking for a well-organized Sales Head to oversee activities across the department. The responsibilities of the role include",
      link: "/career3",
      footer: "April 12, 2023 • No Comments",
    },
   
    {
      title: " GM – Sales Operations",
      description:
        "Job Brief: We are looking for a well-organized GM-Sales Operation Executive to oversee activities across various departments. The responsibilities of a head of the department",
      link: "/career4",
      footer: "April 12, 2023 • No Comments",
    },
   
    {
      title: " Production Manager",
      description:
        "Job Description:  Plan and manage the day-to-day operations of the agricultural production facility. Establish and maintain production goals and objectives, ensuring that all operational activities",
      link: "/career5",
      footer: "March 21, 2023 • No Comments",
    },
   
    {
      title: " Tele Marketing",
      description:
        "Job Brief: We are interested in hiring a dedicated and hardworking individual as a Telecaller to join our Organization . Your main goal is to",
      link: "/career6",
      footer: "March 4, 2023 • No Comments",
    },
   
    {
      title: " Sales Executive",
      description:
        "Job Brief: We are looking for a high-performing Sales Manager to help us meet our customer acquisition and revenue growth targets by keeping our company",
      link: "/career7",
      footer: "March 4, 2023 • No Comments",
    },
   
    {
      title: " Account Assistant",
      description:
        "Job Brief:  We are looking for an experienced Account Assistant for our organization . The ideal candidate will be well-versed in accounting principles and able",
      link: "/career8",
      footer: "March 4, 2023 • No Comments",
    },
   
  ];

  
  while (cards.length < 8) {
    cards.push(...cards.slice(0, 8 - cards.length));
  }

  return (
    <div>
    
    <div className=" ml-3 mr-3  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-6 xl:p-20">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white  shadow-gray-400 shadow-md hover:shadow-xl p-7 transition duration-300"
        >
          <h3 className="text-2xl text-gray-500 font-bold mb-2">{card.title}</h3>
          <p className="text-gray-600 text-sm mb-4 pt-3 p-">{card.description}</p>
          <Link
            to={card.link}
            className="text-green-600 font-medium hover:underline"
          >
            Read More »
          </Link>
          <div className="text-gray-400 text-xs mt-4 border-t pt-2">
            {card.footer}
          </div>
        </div>
      ))}     
    </div>

     <main className="container mx-auto px-4 py-6">
            <Routes>
              <Route path="/career1" element={<Career1 />} />
              <Route path="/career2" element={<Career2 />} />
              <Route path="/career3" element={<Career3 />} />
              <Route path="/career4" element={<Career4 />} />
              <Route path="/career5" element={<Career5 />} />
              <Route path="/career6" element={<Career6 />} />
              <Route path="/career7" element={<Career7 />} />
              <Route path="/career8" element={<Career8 />} />
            </Routes>
          </main>  

    <Footer/>
    </div>
  );
};

export default Career;
