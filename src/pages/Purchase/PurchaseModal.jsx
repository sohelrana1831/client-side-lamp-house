import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useAuth } from "../../shared/Context/AuthContext";

const ModalStyle = {
  overlay: {
    backgroundColor: "grey",
  },
  content: {
    color: "black",
    top: "10%",
    left: "10%",
    right: "10%",
    height: "75%",
  },
};

Modal.setAppElement("#root");
const PurchaseModal = ({ productName, price, image_url }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { currentUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.image_url = image_url;
    data.status = "pending";
    data.date = new Date().toLocaleDateString();
    try {
      axios
        .post("https://boiling-badlands-96357.herokuapp.com/order", data)
        .then((result) => {
          if (result.data.insertedId) {
            reset("");
            setIsOpen(false);
          }
        });
    } catch (error) {}
  };
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Purchase Now</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={ModalStyle}
      >
        <div className="flex justify-end">
          <button
            className="bg-yellow-500 px-4 py-2"
            onClick={() => setIsOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="shadow-lg xl:m-8 xl:mx-56 border border-gray-500">
          <h1 className="text-2xl px-8 py-4 font-bold font-mono border-b-2 border-solid border-black">
            Purchase Information
          </h1>

          <div className="font-semibold py-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="py-4 px-8 justify-center items-center focus:outline-none">
                <label className="text-black" htmlFor="name">
                  Name:
                </label>
                <input
                  className="rounded-full border bg-gray-300 border-gray-500 md:w-3/4 focus:outline-none float-right px-4 py-2"
                  defaultValue={currentUser?.displayName}
                  readOnly
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="float-right md:w-3/4 text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="py-4 px-8 justify-center items-center focus:outline-none">
                <label className="text-black" htmlFor="email">
                  Email:
                </label>
                <input
                  className="rounded-full border bg-gray-300 border-gray-500 md:w-3/4 focus:outline-none  float-right px-4 py-2"
                  type="email"
                  defaultValue={currentUser?.email}
                  readOnly
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="float-right md:w-3/4 text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="py-4 px-8 justify-center items-center focus:outline-none">
                <label className="text-black" htmlFor="title">
                  Product Name:
                </label>
                <input
                  className="rounded-full border bg-gray-300 border-gray-500  md:w-3/4 focus:outline-none float-right px-4 py-2"
                  defaultValue={productName}
                  readOnly
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <span className="float-right md:w-3/4 text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="py-4 px-8 justify-center items-center focus:outline-none">
                <label className="text-black" htmlFor="price">
                  Price:
                </label>
                <input
                  className="rounded-full border bg-gray-300 border-gray-500  md:w-3/4 focus:outline-none float-right px-4 py-2"
                  type="number"
                  defaultValue={price}
                  readOnly
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <span className="float-right md:w-3/4 text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="py-4 px-8 justify-center items-center focus:outline-none">
                <label className="text-black" htmlFor="phone">
                  Phone Number:
                </label>
                <input
                  className="rounded-full border border-gray-500  md:w-3/4 focus:outline-none float-right px-4 py-2"
                  type="tel"
                  placeholder="Enter your phone number"
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <span className="float-right md:w-3/4 text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="py-4 px-8 justify-center items-center focus:outline-none">
                <label className="text-black" htmlFor="shipping_address">
                  Shipping address:
                </label>
                <textarea
                  className="rounded-full border border-gray-500  md:w-3/4 focus:outline-none float-right px-4 py-2"
                  placeholder="Enter shipping address"
                  {...register("shipping_address", { required: true })}
                />
                {errors.shipping_address && (
                  <span className="float-right md:w-3/4 text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-end w-full">
                <button className="bg-primary w-1/3 my-4  border border-primary text-black  py-2 mr-8 font-medium rounded-md hover:bg-transparent hover:border-secondary hover:bg-secondary transition">
                  Buy Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PurchaseModal;
