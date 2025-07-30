import { Link } from "react-router";
import CategoryCard from "../../../../common/CategoryCard";
const CategoryList = ({ categories }) => {
  return (
    <ul className="flex gap-4">
      {categories.map((category) => (
        <li>
          <CategoryCard category={category} />
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
