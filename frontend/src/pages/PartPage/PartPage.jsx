import React from "react";
import { categories } from "../../constant/categories";
import { Outlet, useParams } from "react-router";
import CategoryList from "./component/CategoryList";
const PartPage = () => {
  const { id } = useParams();

  return (
    <div>
      {/* 팀원들 */}
      <CategoryList categories={categories} />
      <Outlet />
    </div>
  );
};

export default PartPage;
