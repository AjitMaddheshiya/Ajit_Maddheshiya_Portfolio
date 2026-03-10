import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Ajit Maddheshiya</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "work" },
            { name: "Certificates", id: "certificates" },
            { name: "Achievements", id: "achievements" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Get in Touch */}
        <div className="mt-6 text-gray-400">
          <p className="text-purple-500 font-semibold mb-2">Get in Touch</p>
          <p className="text-sm">📧 majit4516@gmail.com</p>
          <p className="text-sm">📱 +91 96706 17895</p>
        </div>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            //{ icon: <FaFacebook />, link: "https://www.instagram.com/_ajit_maddheshiya_2141/" },
            //{ icon: <FaTwitter />, link: "https://www.instagram.com/_ajit_maddheshiya_2141/" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/ajit-m2024/" },
            { icon: <FaGithub />, link: "https://github.com/AjitMaddheshiya" },
           // { icon: <FaInstagram />, link: "https://www.instagram.com/_ajit_maddheshiya_2141/" },
           // { icon: <FaYoutube />, link: "https://www.youtube.com/@AjitMaddheshiya-x2x" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2026 Ajit Maddheshiya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
