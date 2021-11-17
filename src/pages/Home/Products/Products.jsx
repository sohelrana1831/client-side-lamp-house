import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleService from "./SingleProduct";

const Products = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://boiling-badlands-96357.herokuapp.com/active-product")
      .then((result) => {
        if (result.data.length > 0) {
          setProducts(result.data);
          setLoading(false); //stop loading when data is fetched
        }
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="pb-16">
            <p className="text-center text-primary font-semibold">DON’T MISS</p>
            <h1 className="text-center text-5xl font-semibold">
              Find best for you
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {loading ? (
              <div className="flex items-center justify-center mx-auto">
                <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
              </div>
            ) : (
              products &&
              products
                .slice(0, 6)
                .map((product) => (
                  <SingleService key={product._id} product={product} />
                ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
