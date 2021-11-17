import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const { _id, title, image_url, price } = product;
  return (
    <div className="lg:w-1/3 md:w-1/2 p-4 w-full hover:shadow-2xl">
      <Link to="#" className="block relative h-84 rounded overflow-hidden">
        <img
          alt=""
          className="object-cover object-center w-full h-full block"
          src={image_url}
        />
      </Link>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {title}
        </h2>
        <p className="mt-1">${price}</p>

        <div className="md:w-3/4 py-4 px-8 float-right">
          <Link to={`/purchase/${_id}`}>
            <button className="bg-primary w-full border border-primary text-white px-3 py-2 font-medium rounded-full hover:bg-transparent hover:border-secondary hover:bg-secondary transition">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
