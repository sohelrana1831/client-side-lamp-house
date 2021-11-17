import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const ProductUpdate = () => {
  const [data, setData] = useState();
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios
      .get(`https://boiling-badlands-96357.herokuapp.com/product/${id}`)
      .then((result) => {
        if (result.data) {
          //   console.log(result.data);
          setData(result.data);
          setLoading(false); //stop loading when data is fetched
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  const onSubmit = (data) => {
    // insert tour data
    axios
      .put(
        `https://boiling-badlands-96357.herokuapp.com/update-product/${id}`,
        data
      )
      .then((result) => {
        if (result.data.modifiedCount > 0) {
          setMessage("updated success!");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <section>
        <header className="px-8 py-4 border-b-2 border-gray-900">
          <h1 className="font-bold">Update Product</h1>
        </header>
        {isLoading && (
          <div className="flex items-center justify-center mx-auto">
            <div className="w-10 h-10 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
          </div>
        )}

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
          {data?.title && (
            <div className="py-4 flex px-8 justify-between items-center focus:outline-none">
              <label className="text-black" htmlFor="title">
                Title:
              </label>
              <input
                className="rounded-md md:w-3/4 focus:outline-none float-right px-4 py-2"
                placeholder="Enter Title"
                defaultValue={data?.title}
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="float-right md:w-3/4 text-red-500">
                  This title is required
                </span>
              )}
            </div>
          )}

          {data?.image_url && (
            <div className="py-4 flex px-8 justify-between items-center focus:outline-none">
              <label className="text-black" htmlFor="image_url">
                Image url:
              </label>
              <input
                className="rounded-md md:w-3/4 focus:outline-none float-right px-4 py-2"
                type="url"
                placeholder="Enter tour related image url"
                defaultValue={data?.image_url}
                {...register("image_url", { required: true })}
              />
              {errors.image_url && (
                <span className="float-right md:w-3/4 text-red-500">
                  This image url is required
                </span>
              )}
            </div>
          )}

          {data?.price && (
            <div className="py-4 flex px-8 justify-between items-center focus:outline-none">
              <label className="text-black" htmlFor="price">
                Price:
              </label>
              <input
                className="rounded-md md:w-3/4 focus:outline-none float-right px-4 py-2"
                type="number"
                placeholder="Price"
                defaultValue={data?.price}
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="float-right md:w-3/4 text-red-500">
                  This Price is required
                </span>
              )}
            </div>
          )}

          {data?.description && (
            <div className="py-4 flex px-8 justify-between items-center focus:outline-none">
              <label className="text-black" htmlFor="description">
                Description:
              </label>
              <textarea
                className="rounded-md md:w-3/4 focus:outline-none float-right px-4 mb-4 py-2"
                rows="4"
                placeholder="Description"
                defaultValue={data?.description}
                {...register("description", { required: true })}
              />
              {errors.description && (
                <span className="float-right md:w-3/4 text-red-500">
                  This description is required
                </span>
              )}
            </div>
          )}

          <div className="md:w-3/4 py-4 px-8 float-right">
            <button className="bg-primary w-full border border-primary text-white px-3 py-2 font-medium rounded-md hover:bg-transparent hover:border-secondary hover:bg-secondary transition">
              Add Product
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ProductUpdate;
