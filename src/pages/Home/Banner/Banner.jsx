import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" h-full grid grid-cols-1 lg:grid-cols-3">
      <div className="hover:shadow-2xl">
        <img
          className="h-full"
          src="https://i.ibb.co/M7Ky15M/baner.jpg"
          alt=""
          height="100%"
        />
      </div>
      <div className="hover:shadow-2xl bg-gradient-to-r from-yellow-100 to-gray-500-500 px-8 py-8 ">
        <div className="border-t-2 border-b-2 px-8 py-8  border-gray-900">
          <h1 className="text-4xl pb-4 text-center tracking-widest ease-linear uppercase text-black font-medium ">
            Welcome
          </h1>
          <p className="text-primary text-justify">
            <span className="font-bold tracking-widest">LAMP HOUSE</span> is
            focusing exclusively in high quality and cost-effective product to
            the customer. We are advancing on a tremendous pace and with
            involvement of skilled and experienced people working in the
            organization.
          </p>
          <div className="mt-6 text-center">
            <Link
              to="/explore-light"
              className="overflow-hidden capitalize px-3 py-2  border-2 border-purple-400 hover:bg-primary font-medium rounded bg-transparent hover:text-white transition"
            >
              Purchase Now
            </Link>
          </div>
        </div>
      </div>
      <div className="hover:shadow-2xl">
        <img
          className="h-full"
          src="https://i.ibb.co/M7Ky15M/baner.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
