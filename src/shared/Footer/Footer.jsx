import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-600  bg-gray-300">
      <div className="container py-16 mx-auto">
        <div className="flex flex-wrap md:text-left justify-center items-center text-center -mb-10 ">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <div className="">
              <div className="flex text-2xl uppercase font-Poppins">
                <h1 className="text-2xl font-Poppins">
                  Lamp
                  <span>
                    <i className="fas fa-menorah px-2 text-blue-500 animate-pulse"></i>
                  </span>
                  House
                </h1>
              </div>
              <p className="text-justify py-4">
                Now days LED lights are generally utilized by individuals to
                spare nature and power. It helps to lessen carbon discharge that
                assumes an essential part to make the environment contaminated.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full text-center">
            <h2 className="text-2xl uppercase font-Poppins px-2">
              QUICK LINKS
            </h2>
            <nav className="list-none py-4">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-800">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/explore-light"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Explore Light
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Contact
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h1 className="text-2xl uppercase font-Poppins px-2">
              CONTACT INFORMATION
            </h1>

            <div className="py-4">
              <p>
                <i className="fas fa-phone-alt text-primary"></i> +01 (977) 2599
                12
              </p>
              <p className="py-2">
                <i className="far fa-envelope text-primary"></i>{" "}
                company@domain.com
              </p>
              <p>
                <i className="fas fa-map-marker-alt text-primary"></i> 3146
                Koontz, California
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <label
                htmlFor="footer-field"
                className="leading-7 text-sm text-gray-600"
              >
                SUBSCRIBE
              </label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Submit
            </button>
            <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
              Subscribe for Our Weekly Newsletter.
            </p>
          </div>
          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <Link to="#" className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link to="#" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link to="#" className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link to="#" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4  px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            Copyright © {new Date().getFullYear()} LAMP HOUSE —
            <Link
              to="https://twitter.com/sohelranarr"
              className="text-gray-600 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @sohelranarr
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
