import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex mix-blend-color text-lg justify-between px-4 py-3 border text-center items-center">
      <div className="logo w-[100px]">
        <Link to="/">
          <img
            src="https://seeklogo.com/images/C/company-eagle-wings-logo-385403947F-seeklogo.com.png"
            alt="img"
            className="w-20"
          />
        </Link>
      </div>
      <div>
        <input
          type="text"
          className="border-2 w-96 p-1 pl-2 border-slate-300 rounded-md focus:outline-none focus:border-sky-500 dark:text-black"
        />
        <button className="bg-slate-300 py-1 px-2 rounded-lg ml-2 ">
          Search
        </button>
      </div>
      <div className="text-xl;">
        <Link to="/track-order">
          <button className="py-1 px-2 rounded-lg hover:text-sky-500">
            Track order
          </button>
        </Link>
      </div>
      <div>
        <Link to="/link">
          <button className="py-1 px-2 rounded-lg hover:text-sky-500">
            Team
          </button>
        </Link>
      </div>
      <div>
        <Link to="/cart">
          <button className="py-1 px-2 rounded-lg hover:text-sky-500">
            Cart
          </button>
        </Link>
      </div>

      <div>
        <Link to="/sign-up">
          <button className="py-1 px-2 rounded-lg hover:text-sky-500">
            Sign-up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
