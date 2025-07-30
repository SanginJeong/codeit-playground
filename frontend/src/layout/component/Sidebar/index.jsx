import { Link } from "react-router";
import { parts } from "../../../constant/parts";
const Sidebar = () => {
  return (
    <aside className="fixed top-50 left-10 border-1 rounded-lg">
      <ul>
        {parts.map((part) => (
          <li key={part.id}>
            <Link
              className="p-3 block hover:bg-primary transition"
              to={part.url}
            >
              {part.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
