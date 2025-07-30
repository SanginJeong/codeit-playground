import React from "react";
import Sidebar from "./component/Sidebar";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="pl-[350px] pt-4">
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
