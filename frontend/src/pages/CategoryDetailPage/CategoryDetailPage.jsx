import React from "react";
import { useParams } from "react-router";

const CategoryDetailPage = () => {
  const { id, category } = useParams();
  return (
    <div>
      <p>{id}</p>
      <p>{category}</p>
    </div>
  );
};

export default CategoryDetailPage;
