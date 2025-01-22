import React from "react";

const WhatsAppButton = () => {
  return (
    <div>
    <a
      href="https://wa.me/<+91 9672f324220>?text=Hi, I have a query!"
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-xl p-4 shadow-lg hover:bg-green-600 duration-300 ease-in-out hover:text-white group-hover:opacity-100 transition-opacity overflow-hidden"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shadow-2xl shadow-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48a11.37 11.37 0 00-16.1 0A11.42 11.42 0 003.1 15.57L2 21.58l6.2-1.63a11.36 11.36 0 0012.32-2.43 11.42 11.42 0 000-16.1zm-2.82 13.28a9.14 9.14 0 01-10.14 2L7.13 17l-.42-.22a9.14 9.14 0 0113.37-12.91 9.11 9.11 0 01.08 12.89h-.08zm-1.32-2.22l-.1.09a7.77 7.77 0 01-8.77 1.9l-.43-.22a.7.7 0 00-.63.03l-1.56.41.41-1.56a.7.7 0 00.03-.63l-.22-.43a7.78 7.78 0 0111.78-1.92 7.8 7.8 0 01-.51 11.1zm-4.28-6.4c.41.38.76.77 1.16 1.16.2.18.4.36.6.53a.89.89 0 00.93.1c.28-.12.54-.27.82-.41.42-.21.73-.43 1.13-.1a5.92 5.92 0 011.29 2.22c.14.38.08.76-.17 1.1a3.27 3.27 0 01-1.15 1.13c-.5.3-1.02.52-1.58.67-.33.1-.6.01-.84-.22-.3-.3-.55-.62-.8-.93-.15-.18-.3-.35-.47-.53a.61.61 0 00-.57-.2c-.55.13-1.07.28-1.58.5-.33.14-.67.27-1 .42-.23.11-.42.01-.54-.22a10.8 10.8 0 01-.5-.93c-.1-.22-.2-.45-.29-.68a.93.93 0 01.11-.88c.26-.3.53-.59.83-.88a7.1 7.1 0 01.93-.73c.26-.14.6-.27.88-.37.4-.14.73-.04 1 .32z" />
      </svg>
    </a>
    <span className="text-white text-lg font-semibold">
            Surprise Text!
          </span>

    </div>
    
  );
};

export default WhatsAppButton;
