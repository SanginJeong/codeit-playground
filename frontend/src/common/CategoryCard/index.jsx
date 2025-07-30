import React from "react";
import { Link, useParams } from "react-router";

const CategoryCard = ({ category }) => {
  const { category: urlCategory } = useParams();
  return (
    <Link
      className={`${
        category.url === urlCategory ? "selected" : "bg-gray-200"
      } inline-block px-3 py-1 rounded-xl`}
      to={category.url}
    >
      {category.title}
    </Link>
  );
};

export default CategoryCard;
