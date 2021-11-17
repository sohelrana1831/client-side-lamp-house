import React from "react";
import Footer from "../../../shared/Footer/Footer";
import Menu from "../../../shared/Menu/Menu";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import Services from "../Products/Products";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="bg-white ">
      <Menu />
      <Banner />
      <Feature />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
