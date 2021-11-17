import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleTestimonials from "./SingleTestimonials";

const Testimonials = () => {
  const [reviews, setReviews] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://boiling-badlands-96357.herokuapp.com/all-review")
      .then((result) => {
        if (result.data.length > 0) {
          setReviews(result.data);
          setLoading(false); //stop loading when data is fetched
        }
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="pb-16">
          <p className="text-center font-serif text-primary font-semibold">
            TESTIMONIALS
          </p>
          <h1 className="text-center text-5xl font-semibold">
            Customer Reviews
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {loading ? (
            <div className="flex items-center justify-center mx-auto">
              <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
            </div>
          ) : (
            reviews &&
            reviews
              .slice(0, 6)
              .map((review) => (
                <SingleTestimonials key={review._id} reviewData={review} />
              ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
