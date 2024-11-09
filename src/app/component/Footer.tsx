import React from "react";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="text-black body-font bg-cyan-600">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">Eyeson</span>
          </a>
          <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Eyeson —
          </p>
          <a
            href="https://www.youtube.com/@aqsaarshi9916"
            className="text-black mx-auto absolute right-40"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aqsa's YouTube Channel"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
