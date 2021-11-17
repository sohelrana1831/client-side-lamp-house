import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../shared/Breadcrumb/Breadcrumb";
import Footer from "../../shared/Footer/Footer";
import Menu from "../../shared/Menu/Menu";
import Team from "./Team";

const About = () => {
  return (
    <>
      <Menu />
      <Breadcrumb name="About us" />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://i.ibb.co/Y8kzN2j/about.jpg"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div>
                  <img
                    className="w-32 h-32 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
                    src="https://i.ibb.co/mRmcFtM/team1.jpg"
                    alt=""
                    width="150"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Max Alfret
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base capitalize">
                    chief executive officer (CEO)
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-justify text-lg mb-4">
                  LAMP HOUSE is a new modern e- commerce website established by
                  BANGLAMARK C&T. It’s a Bangladesh based local e-commerce site
                  platform where different sellers will be able to sell their
                  any kind of legal products. The main objective is to grab the
                  hottest product in town and make it available for the
                  customers to search and find the right things at the right
                  place at right times. LAMP HOUSE is focused to make the
                  shopping more easier than ever. LAMP HOUSE is the best place
                  for seller and buyer.
                </p>
                <Link
                  to="#"
                  className="text-indigo-500 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Team />
      <Footer />
    </>
  );
};

export default About;
