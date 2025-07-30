import React from "react";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <header className="py-[20px] flex justify-center shadow-sm">
      <nav>
        <h1 className="text-primary font-bold text-[24px]">
          <Link to="/">Sprint PlayGround Sanginjeong</Link>
        </h1>
      </nav>
    </header>
  );
};

export default Navbar;
