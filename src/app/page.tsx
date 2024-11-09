import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <Contact />
      <Footer />
    </div>
  );
};

export default page;
