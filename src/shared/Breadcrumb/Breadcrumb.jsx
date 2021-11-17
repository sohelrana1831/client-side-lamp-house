import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ name }) => {
  return (
    <div className="bg-gray-600 py-8">
      <div className="container text-white">
        <Link to="/" className="px-2">
          Home/{" "}
        </Link>
        <Link to="#" className="font-bold font-Poppins text-lg">
          {name}
        </Link>
      </div>
    </div>
  );
};

export default Breadcrumb;
