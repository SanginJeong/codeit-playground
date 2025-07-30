import { Link, useNavigate } from "react-router";
import { parts } from "../../../constant/parts";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <aside className="bg-gray-200 shadow-md w-[300px] h-[100vh] fixed left-0 top-0">
      <Link to="/">
        <h1 className="p-4 text-[22px] text-center font-bold text-primary">
          Sprint PlayGround
        </h1>
      </Link>
      <ul>
        {parts.map((part) => (
          <li>
            <Link
              className="block hover:bg-primary transition p-4 font-bold"
              to={part.url}
            >
              {part.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex flex-col absolute bottom-0 gap-2 w-full">
        <button
          onClick={() => navigate("/login")}
          className="bg-primary text-white p-2 cursor-pointer"
        >
          로그인
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="bg-primary text-white p-2 cursor-pointer"
        >
          회원가입
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
