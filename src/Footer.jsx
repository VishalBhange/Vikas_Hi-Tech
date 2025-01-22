import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="Footer p-2 text-white BG">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0">
          {/* Column 1 */}
          <div className="flex flex-col justify-center md:w-1/2 items-center text-center">
            <h1 className="text-3xl font-medium">
              Let's work together, just drop me a line
            </h1>
          </div>

          {/* Column 2 */}
          <div className="flex justify-center space-x-6 md:mt-0 md:w-1/2 items-center text-end">
            <a
              href="https://www.facebook.com/vikasropvatika"
              className="text-white hover:text-red-500 mt-2 transform transition-transform duration-300 hover:translate-y-2"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.linkedin.com/company/vikas-hi-tech-nursery/"
              className="text-white hover:text-red-500 mt-2 transform transition-transform duration-300 hover:translate-y-2"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://www.instagram.com/vikashightechnursery/#"
              className="text-white hover:text-red-500 mt-2 transform transition-transform duration-300 hover:translate-y-2"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://x.com/vikasropvatika"
              className="text-white hover:text-red-500 mt-2 transform transition-transform duration-300 hover:translate-y-2"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://www.youtube.com/@VikashitechNursery"
              className="text-white hover:text-red-500 mt-2 transform transition-transform duration-300 hover:translate-y-2"
            >
              <FaYoutube size={30} />
            </a>
          </div>
        </div>
        <hr />

        <div className="flex flex-wrap justify-between">
          {/* Links */}
          <div className="w-full md:w-1/3 mt-6 md:mt-0 ">
            <h1 className="text-3xl font-bold md:ml-16">Links</h1>
            <ul className="mt-6  md:ml-16 font-semibold">
              <li>
                <Link to="/" className="text-white hover:text-yellow-500">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/about_Us" className="text-white hover:text-yellow-500">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white hover:text-yellow-500">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/media_Coverage" className="text-white hover:text-yellow-500">
                  Media Coverage
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-white hover:text-yellow-500">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/contact_Us" className="text-white hover:text-yellow-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="w-full md:w-1/3 mt-6 md:mt-0">
            <h1 className="text-3xl font-bold md:ml-16">Our Products</h1>
            <ul className="mt-6 space-y-2 md:ml-16 font-semibold">
              <li>
                <Link to="/marigold" className="text-white hover:text-yellow-500">
                  Marigold
                </Link>
              </li>
              <li>
                <Link to="/chrysanthemum" className="text-white hover:text-yellow-500">
                  Chrysanthemum
                </Link>
              </li>
              <li>
                <Link to="/watermelon" className="text-white hover:text-yellow-500">
                  Watermelon
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full md:w-1/3 mt-6 md:mt-0">
            <h1 className="text-3xl font-bold sm:ml-16">Get In Touch</h1>
            <div className="mt-6 flex items-center">
              <IoLocation size={25} />
              <h1 className="ml-2">A/p Tung, Tal- Miraj, Dist- Sangli, Pin- 416301</h1>
            </div>
            <div className="mt-3 flex items-center">
              <CiMail size={25} />
              <a href="mailto:vikas.ropvatika@gmail.com" className="ml-2 hover:underline">
                vikas.ropvatika@gmail.com
              </a>
            </div>
            <div className="mt-3 flex items-center">
              <IoCallOutline size={25} />
              <a href="tel:+919672324220" className="ml-2 hover:underline">
                +91 9672324220
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="text-center font-medium text-base">
        <h2>
          Copyright © 2023 Vikas Hi-Tech Nursery. All Rights Reserved | Design
          and Developed By{" "}
          <a
            href="https://vm3techsolution.com/"
            className="text-[#6BB327] font-semibold"
          >
            VM3 Tech Solutions LLP
          </a>
        </h2>
      </div>
    </div>
  );
}
