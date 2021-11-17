import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState();
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://boiling-badlands-96357.herokuapp.com/manage-order")
      .then((result) => {
        if (result.data.length > 0) {
          setOrders(result.data);
          setLoading(false); //stop loading when data is fetched
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, You went to delete");
    if (proceed) {
      axios
        .delete(`https://boiling-badlands-96357.herokuapp.com/order/${id}`)
        .then((result) => {
          if (result.data.deletedCount > 0) {
            setMessage("Delete success!");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        })
        .catch((error) => console.log(error));
    }
  };
  const statusButton = (status_id, status) => {
    let data = {};
    if (status === "pending") {
      data = { status: "shipped" };
    } else {
      data = { status: "pending" };
    }

    const proceed = window.confirm("Are you sure, You went to Change status");
    if (proceed && status_id) {
      axios
        .put(
          `https://boiling-badlands-96357.herokuapp.com/update-order-status/${status_id}`,
          data
        )
        .then((result) => {
          if (result.data.length > 0) {
            setOrders(result.data);
            setMessage("Update success!");
            setLoading(false); //stop loading when data is fetched
          }
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <>
      <section className="text-gray-600 body-font">
        <header className="px-8 py-4 border-b-2 border-gray-900">
          <h1 className="font-bold">Manage All Orders</h1>
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
                    Customer Info
                  </th>
                  <th className="font-semibold text-sm uppercase px-6 py-4">
                    Shipping address
                  </th>
                  <th className="font-semibold text-sm uppercase px-6 py-4">
                    Image
                  </th>
                  <th className="font-semibold text-sm uppercase px-6 py-4">
                    Order Date
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
                  orders &&
                  orders.map((order) => (
                    <tr key={order._id}>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div>
                            <p> {order.name} </p>
                            <p> {order.email} </p>
                            <p> {order.phone} </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div>
                            <p>{order.shipping_address} </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="inline-flex w-32">
                          <img
                            className=" rounded-md"
                            alt="avatar"
                            src={order.image_url}
                          />
                        </div>
                        <p> {order.title} </p>
                      </td>

                      <td className="px-6 py-4">
                        <p>{order.date}</p>
                      </td>
                      <td className="px-6 py-4 text-center">${order.price}</td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`text-white text-lg w-1/3 pb-1 b capitalize font-semibold  rounded-md shadow-lg py-2 px-4 ${
                            order.status === "pending"
                              ? "bg-red-400"
                              : "bg-green-600"
                          }`}
                        >
                          <button
                            className="btn btn-primary mt-2"
                            onClick={() =>
                              statusButton(order?._id, order?.status)
                            }
                          >
                            {order?.status}
                          </button>
                        </span>
                      </td>

                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => handleDelete(order?._id)}
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

export default ManageAllOrders;
