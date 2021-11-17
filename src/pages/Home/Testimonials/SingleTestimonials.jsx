import React from "react";
import Rating from "react-rating";
const SingleTestimonials = ({ reviewData }) => {
  const { image_url, review, review_rate, name } = reviewData;
  return (
    <div className="lg:w-1/3 lg:mb-0 p-4">
      <div className="h-full text-center">
        <div className="flex flex-wrap justify-center pb-4">
          <div className="w-8/12 sm:w-3/12 px-4">
            <img
              src={image_url}
              alt={name}
              className="rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>
        <p className="leading-relaxed">{review}</p>
        <Rating
          className="text-yellow-400 py-4"
          initialRating={review_rate}
          readonly
          emptySymbol="far fa-star icon-color"
          fullSymbol="fas fa-star icon-color"
        />
        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default SingleTestimonials;
