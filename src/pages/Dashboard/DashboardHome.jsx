import React from "react";
import { useAuth } from "../../shared/Context/AuthContext";

const DashboardHome = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <header className="px-8 py-8">
        <h1>Welcome, {currentUser?.displayName || currentUser?.email}</h1>
      </header>
    </>
  );
};

export default DashboardHome;
