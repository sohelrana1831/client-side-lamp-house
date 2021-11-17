import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "./../../../shared/Context/AuthContext";

const MakeAdmin = () => {
  const { currentUser } = useAuth();
  const [message, setMessage] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setMessage("");
    data["requesterEmail"] = currentUser?.email;
    try {
      axios
        .put("https://boiling-badlands-96357.herokuapp.com/user/admin", data)
        .then((result) => {
          if (result.data.matchedCount) {
            setMessage("Admin make success!");
            reset("");
          } else {
            setMessage("User not found!");
          }
        });
    } catch (error) {
      setMessage(error);
    }
  };
  return (
    <>
      <section className="text-gray-600 body-font">
        <header className="px-8 py-4 border-b-2 border-gray-900">
          <h1 className="font-bold">Make Admin</h1>
        </header>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl capitalize text-2xl font-medium title-font mb-4 text-gray-900">
              Make a user to admin
            </h1>
            {message && (
              <button className="bg-green-500 text-white text-2xl py-4 flex justify-center">
                <h1>{message}</h1>
              </button>
            )}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <div className="relative flex-grow w-full">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                {errors.email && (
                  <span className="text-red-500"> (Email is required)</span>
                )}
                <input
                  {...register("email", { required: true })}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <button className="text-white w-1/2 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Make Admin
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default MakeAdmin;
