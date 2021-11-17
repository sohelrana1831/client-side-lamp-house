import axios from "axios";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useAuth } from "../../shared/Context/AuthContext";

const MyReview = () => {
  const [reviews, setReviews] = useState();
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  useEffect(() => {
    axios
      .get(
        `https://boiling-badlands-96357.herokuapp.com/customer-review?email=${currentUser.email}`
      )
      .then((result) => {
        if (result.data.length > 0) {
          setReviews(result.data);
          setLoading(false); //stop loading when data is fetched
        }
      })
      .catch((error) => console.log(error));
  }, [currentUser.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, You went to delete");
    if (proceed) {
      axios
        .delete(`https://boiling-badlands-96357.herokuapp.com/review/${id}`)
        .then((result) => {
          if (result.data.deletedCount > 0) {
            setMessage("Delete success!");
            const remainingReviews = reviews.filter(
              (review) => review._id !== id
            );
            setReviews(remainingReviews);
          }
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <>
      <section className="text-gray-600 body-font">
        <header className="px-8 py-4 border-b-2 border-gray-900">
          <h1 className="font-bold">My Reviews</h1>
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

        <div className="min-h-screen px-8 py-5">
          <div className="overflow-x-auto w-full">
            <table className="mx-auto  w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
              <thead className="bg-gray-900">
                <tr className="text-white text-left">
                  <th className="font-semibold text-sm uppercase px-6 py-4">
                    Review
                  </th>
                  <th className="font-semibold text-sm uppercase px-6 py-4">
                    Review Rating
                  </th>
                  <th className="font-semibold text-sm uppercase px-6 py-4">
                    Image
                  </th>
                  <th className="font-semibold text-sm uppercase px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {isLoading ? (
                  <div className="flex items-center justify-center mx-auto">
                    <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
                  </div>
                ) : (
                  reviews &&
                  reviews.map((review) => (
                    <tr key={review._id}>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div>
                            <p className="w-32 overflow-hidden overflow-ellipsis">
                              {review.review}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div>
                            <Rating
                              className="text-yellow-400 text-2xl py-4"
                              initialRating={review.review_rate}
                              readonly
                              emptySymbol="far fa-star icon-color"
                              fullSymbol="fas fa-star icon-color"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="inline-flex w-32">
                          <img
                            className=" rounded-md"
                            alt="avatar"
                            src={review.image_url}
                          />
                        </div>
                      </td>

                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => handleDelete(review?._id)}
                          className="bg-red-500 text-white px-2 py-2 hover:underline"
                        >
                          <i className="far fa-trash-alt text-2xl"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyReview;
