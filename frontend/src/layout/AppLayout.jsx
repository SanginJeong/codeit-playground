import React from "react";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="wrap">
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
