import React from "react";
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <>
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="py-8 px-8">
          <p className="py-8">How Can Help You</p>
          <h1 className="text-4xl">Build an Awesome Design With Us</h1>
        </div>
        <div className="py-8 px-8 ">
          <div className="">
            <i className="fas fa-cog text-4xl py-3 px-4 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white"></i>
          </div>
          <h1 className="text-2xl font-bold pt-8 pb-4">Perfect Gift</h1>
          <p>
            Night Light Wall Decoration is a perfect gift for any special
            occasions like Christmas wedding birthday anniversary engagement new
            baby graduation retirement or just a token of love.
          </p>
          <div className="py-4 ">
            <Link
              to="#"
              className="border-b-2 border-primary py-4 text-primary font-bold space-x-2"
            >
              Read More
              <span className="px-4">
                <i className="fas fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
        <div className="py-8 px-8">
          <div className="">
            <i className="fas fa-cog text-4xl py-3 px-4 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white"></i>
          </div>
          <h1 className="text-2xl font-bold pt-8 pb-4">
            Device Quality Design
          </h1>
          <p className="font-sans">
            LAMP HOUSE products help you transform your outdoor space into the
            great outdoors for this summer’s getaway. That way, you get to enjoy
            the perks of camping without leaving indoor plumbing behind.
          </p>
          <div className="py-4 ">
            <Link
              to="#"
              className="border-b-2 border-primary py-4 text-primary font-bold space-x-2"
            >
              Read More
              <span className="px-4">
                <i className="fas fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
