import React from "react";
import Image from "next/image";
import logo from "../public/assets/logo.jpg";
const Navbar = () => {
  return (
    <div>
      <header className="text-black-600 body-font bg-cyan-500 	">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <a className="flex title-font font-medium items-center text-black-900 mb-4 md:mb-0">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="w-[50px]"
            />

            <span className="ml-3 text-xl">EyesOn</span>
          </a>
          <a
            href="/"
            className="mr-5 hover:bg-cyan-600 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
          >
            Home
          </a>
          <a
            href="/about"
            className="mr-5 hover:bg-cyan-600 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
          >
            About
          </a>

          <a
            href="/service"
            className="mr-5 hover:bg-cyan-600 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
          >
            Service
          </a>
          <a
            href="#contact" // This links to the contact section
            className="mr-5 hover:bg-cyan-600 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
          >
            Contact
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
