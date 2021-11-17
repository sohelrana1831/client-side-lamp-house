import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import AdminRoute from "./AdminMenu";
import UserRoute from "./UserMenu";

const Sidebar = () => {
  const { currentUser, admin, loading, logout } = useAuth();
  const history = useHistory();
  const handleLogout = async () => {
    try {
      await logout();
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <aside className="h-screen top-0 w-1/6">
        <div className="">
          <ul>
            <li className="flex items-center py-2">
              <Link to="/dashboard">
                <i className="fas fa-home text-1xl pr-2" title="Dashboard"></i>
                <span className="hidden lg:inline-block">Dashboard</span>
              </Link>
            </li>
            {!loading && admin ? <AdminRoute /> : <UserRoute />}

            <li className="flex items-center text-red-400 font-bold hover:border-gray-900 py-2 border-t-2 border-gray-700">
              <Link to="#" onClick={handleLogout}>
                <i className="fas fa-sign-out-alt text-1xl pr-2"></i>
                <span className="hidden lg:inline-block">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
