import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const AdminRoute = ({ children, ...rest }) => {
  const { currentUser, admin, loading } = useAuth();
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser?.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
