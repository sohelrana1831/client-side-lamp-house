import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  const [products, setProducts] = useState();
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://boiling-badlands-96357.herokuapp.com/manage-product")
      .then((result) => {
        if (result.data.length > 0) {
          setProducts(result.data);
          setLoading(false); //stop loading when data is fetched
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, You went to delete");
    if (proceed) {
      axios
        .delete(`https://boiling-badlands-96357.herokuapp.com/product/${id}`)
        .then((result) => {
          if (result.data.deletedCount > 0) {
            setMessage("Delete success!");
            const remainingProduct = products.filter(
              (product) => product._id !== id
            );
            setProducts(remainingProduct);
          }
        })
        .catch((error) => console.log(error));
    }
  };
  const statusButton = (status_id, status) => {
    let data = {};
    if (status === "pending") {
      data = { status: "active" };
    } else {
      data = { status: "pending" };
    }

    const proceed = window.confirm("Are you sure, You went to Change status");
    if (proceed && status_id) {
      axios
        .put(
          `https://boiling-badlands-96357.herokuapp.com/update-product-status/${status_id}`,
          data
        )
        .then((result) => {
          if (result.data.length > 0) {
            setProducts(result.data);
            setMessage("Update success!");
            setLoading(false); //stop loading when data is fetched
          }
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <>
      <section>
        <header className="px-8 py-4 border-b-2 border-gray-900">
          <h1 className="font-bold">Manage Product</h1>
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
                    Title
                  </th>
                  <th className="font-semibold text-sm uppercase px-6 py-4">
                    Image
                  </th>
                  <th className="font-semibold text-sm uppercase px-6 py-4">
                    Description
                  </th>
                  <th className="font-semibold text-sm uppercase px-6 py-4">
                    Price
                  </th>
                  <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                    status
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
                  products &&
                  products.map((product) => (
                    <tr key={product._id}>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div>
                            <p> {product.title} </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="inline-flex w-32">
                          <img
                            className=" rounded-md"
                            alt="avatar"
                            src={product.image_url}
                          />
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <p className="w-20 overflow-hidden overflow-ellipsis">
                          {product.description}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        ${product.price}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`text-white text-lg w-1/3 pb-1 b capitalize font-semibold  rounded-md shadow-lg py-2 px-4 ${
                            product.status === "pending"
                              ? "bg-red-400"
                              : "bg-green-600"
                          }`}
                        >
                          <button
                            className="btn btn-primary mt-2"
                            onClick={() =>
                              statusButton(product?._id, product?.status)
                            }
                          >
                            {product?.status}
                          </button>
                        </span>
                      </td>

                      <td className="px-6 py-4 text-center">
                        <Link
                          to={`/dashboard/update-product/${product._id}`}
                          className="text-primary hover:underline"
                        >
                          <i className="fas fa-user-edit text-2xl "></i>
                        </Link>
                        <span className="px-2">|</span>
                        <button
                          onClick={() => handleDelete(product?._id)}
                          className="text-red-500 hover:underline"
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

export default ManageProducts;
