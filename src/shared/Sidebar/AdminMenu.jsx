import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const AdminMenu = () => {
  const { path, url } = useRouteMatch();
  return (
    <>
      <li className="flex items-center py-2">
        <Link to={`${url}/make-admin`}>
          <i
            className="fas fa-shopping-cart  text-1xl pr-2"
            title="My Orders"
          ></i>
          <span className="hidden lg:inline-block">Make Admin</span>
        </Link>
      </li>
    </>
  );
};

export default AdminMenu;
