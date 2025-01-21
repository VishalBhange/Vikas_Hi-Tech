import React, { useState } from "react";
import { IoLocation } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.status === 200) {
        setResponseMessage("Form submitted successfully!");
      } else {
        setResponseMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setResponseMessage("Something went wrong!");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-16">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-start shadow-xl shadow-black p-3">
        {/* Form Section */}
        <form
          className="bg-[#6BB327] p-8 rounded-xl shadow-lg w-full"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Contact Us</h2>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold text-lg"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold text-lg"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold text-lg"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold text-lg"
              htmlFor="message"
            >
              Your Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-black text-white rounded-md hover:bg-[#6BB327] hover:text-black border-2 border-black transition duration-300"
          >
            Submit
          </button>

          {responseMessage && (
            <p className="mt-4 text-center text-gray-700">{responseMessage}</p>
          )}
        </form>

        {/* Contact Information Section */}
        <div className="space-y-6">
          {/* Location */}
          <div className="flex items-start">
            <IoLocation size={40} className="text-[#6BB327]" />
            <p className="ml-4 text-lg">
              A/p Tung, Tal- Miraj, Dist- Sangli, Pin- 416301
            </p>
          </div>

          {/* Email */}
          <div className="flex items-start">
            <CiMail size={40} className="text-[#6BB327]" />
            <a
              href="mailto:vikas.ropvatika@gmail.com"
              className="ml-4 text-lg hover:underline"
            >
              vikas.ropvatika@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-start">
            <IoCallOutline size={40} className="text-[#6BB327]" />
            <a
              href="tel:+919672324220"
              className="ml-4 text-lg hover:underline"
            >
              +91 9672324220
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/vikasropvatika"
              className="text-[#6BB327] hover:text-red-500 transition duration-300"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.linkedin.com/company/vikas-hi-tech-nursery/"
              className="text-[#6BB327] hover:text-red-500 transition duration-300"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://www.instagram.com/vikashightechnursery/#"
              className="text-[#6BB327] hover:text-red-500 transition duration-300"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://x.com/vikasropvatika"
              className="text-[#6BB327] hover:text-red-500 transition duration-300"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://www.youtube.com/@VikashitechNursery"
              className="text-[#6BB327] hover:text-red-500 transition duration-300"
            >
              <FaYoutube size={30} />
            </a>
          </div>

          {/* Google Map */}
          <div className="rounded overflow-hidden shadow-lg mt-6">
            <iframe
              className="w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15267.586047118715!2d74.4621343947196!3d16.93039630025817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc111199c3955b7%3A0xe043bc81005c23e3!2sVikas%20Hi-tech%20Nursery!5e0!3m2!1sen!2sin!4v1680698080597!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
