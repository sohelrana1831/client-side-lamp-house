import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useAuth } from "../../shared/Context/AuthContext";

const Review = () => {
  const [message, setMessage] = useState("");
  const [reviewRate, setReviewRate] = useState();
  const { currentUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleReviewRate = (rate) => {
    setReviewRate(rate);
  };

  const onSubmit = (data) => {
    data.review_rate = reviewRate;
    data.name = currentUser.displayName;
    data.email = currentUser.email;
    try {
      axios
        .post("https://boiling-badlands-96357.herokuapp.com/review", data)
        .then((result) => {
          console.log(result);
          if (result.data.insertedId) {
            setMessage("Review add Success!");
            reset("");
          }
        });
    } catch (error) {}
  };
  return (
    <>
      <section>
        <header className="px-8 py-4 border-b-2 border-gray-900">
          <h1 className="font-bold">Reviews</h1>
        </header>

        {message && (
          <div className="flex flex-col justify-center m-8">
            {/* Toast Notification Success */}
            <div className="flex  items-center font-semibold bg-green-400 border-l-4 border-secondary py-2 px-3 shadow-md mb-2">
              {/* icons  */}
              <div className="text-secondary rounded-full bg-white px-2 py-1">
                <i className="fas fa-check text-2xl "></i>
              </div>
              {/* message */}
              <div className="text-white max-w-xs px-4">{message}</div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="py-4 flex px-8 justify-between items-center focus:outline-none">
            <label className="text-black" htmlFor="image_url">
              Image url:
            </label>
            <input
              className="rounded-md md:w-3/4 focus:outline-none float-right px-4 py-2"
              type="url"
              required
              placeholder="Enter your image url"
              {...register("image_url", { required: true })}
            />
            {errors.image_url && (
              <span className="float-right md:w-3/4 text-red-500">
                This image url is required
              </span>
            )}
          </div>

          <div className="py-4 flex px-8 justify-between items-center focus:outline-none">
            <label className="text-black" htmlFor="Review">
              Review:
            </label>
            <textarea
              className="rounded-md md:w-3/4 focus:outline-none float-right px-4 mb-4 py-2"
              rows="4"
              placeholder="review"
              required
              {...register("review", { required: true })}
            />
            {errors.review && (
              <span className="float-right md:w-3/4 text-red-500">
                This review is required
              </span>
            )}
          </div>

          <div className="py-4 flex px-8 justify-evenly items-center focus:outline-none">
            <label className="text-black" htmlFor="Review"></label>
            <Rating
              className="text-yellow-400 text-4xl float-left py-4"
              onChange={(rate) => handleReviewRate(rate)}
              emptySymbol="far fa-star icon-color"
              fullSymbol="fas fa-star icon-color"
            />
          </div>

          <div className="md:w-3/4 py-4 px-8 float-right">
            <button className="bg-primary w-full border border-primary text-white px-3 py-2 font-medium rounded-md hover:bg-transparent hover:border-secondary hover:bg-secondary transition">
              Add Review
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
export default Review;
