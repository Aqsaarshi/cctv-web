import React from "react";
import logo from "../public/assets/logo.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <section className="text-white body-font bg-cyan-700">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Eyes Everywhere
              <br className="hidden lg:inline-block" />
              The Essential Role of CCTV Cameras in Modern Security
            </h1>
            <p className="mb-8 leading-relaxed">
              CCTV cameras are among the most essential tools for security
              today. These cameras are used for monitoring and protection,
              allowing constant surveillance of various places like homes,
              offices, shops, and public areas. With CCTV cameras, its possible
              to prevent theft, fraud, and other crimes because they record
              footage that can be reviewed later to analyze any incident. These
              cameras operate day and night, and with advanced technology, they
              can now be controlled remotely as well.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image src={logo} alt="logo" width={200} height={200} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
