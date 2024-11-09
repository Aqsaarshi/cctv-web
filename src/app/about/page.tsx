import React from "react";
import Image from "next/image";
import logo from "../public/assets/logo.jpg";

const About: React.FC = () => (
  <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center">
      <Image
        src={logo}
        alt="About Us"
        className="rounded-lg shadow-lg"
        width={500}
        height={500}
      />
      <div className="md:pl-10 text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          We provide reliable and efficient CCTV solutions to fix any issues
          with your security systems. Whether its installation, repair, or
          maintenance, our dedicated team is committed to ensuring your CCTV
          cameras are working flawlessly. We send our skilled professionals to
          your location to handle all your CCTV-related problems with precision
          and expertise. Trust us to deliver high-quality service and peace of
          mind, knowing that your security is in capable hands
        </p>
      </div>
    </div>
  </section>
);

export default About;
