import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { saveInput } from "../fix/redux/inputSlice";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const userName = useSelector((state) => state.auth.userName);
  const firstName = userName ? userName.trim().split(" ")[0][0] : "";
  const dispatch = useDispatch();

  return (
    <div className="sticky top-0">
      <div className="flex items-center mix-blend-color bg-gray-200 text-lg justify-between px-4 py-3 border text-center">
        <div className="logo w-[100px]">
          <Link to="/">
            <img
              src="https://seeklogo.com/images/C/company-eagle-wings-logo-385403947F-seeklogo.com.png"
              alt="img"
              className="w-20"
            />
          </Link>
        </div>
        <div className="flex gap-6 ">
          <div className="border-2 w-60 flex items-center  gap-3 p-1 pl-2 text-sm h-10 border-slate-300 rounded-md ">
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.875 2a8.875 8.875 0 105.528 15.818l3.89 3.89 1.414-1.415-3.89-3.889A8.875 8.875 0 0010.875 2zM4 10.875a6.875 6.875 0 1113.75 0 6.875 6.875 0 01-13.75 0z"
                  fill="#0F0F0F"
                ></path>
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search for Services"
              onChange={(e) => dispatch(saveInput(e.target.value))}
              className="focus:outline-none focus:border-sky-500 dark:text-black bg-gray-200"
            />
          </div>
          <div className="border-2 w-40 p-1 pl-2 flex items-center gap-3 text-sm h-10 border-slate-300 rounded-md ">
            <span>
              <svg
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
                className="inline"
              >
                <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path>
              </svg>
            </span>
            <select className="focus:outline-none focus:border-sky-500 dark:text-black w-28 bg-gray-200">
              <option value=""></option>
              <option value="Jabalpur">Jabalpur</option>
            </select>
          </div>
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
              Cart-{cartItems.length}
            </button>
          </Link>
        </div>

        <div>
          {isLogin ? (
            <Link to="/Logout">
              <abbr
                title="Logout"
                className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
              >
                <span className="font-medium text-gray-600 dark:text-gray-300">
                  {firstName}
                </span>
              </abbr>
            </Link>
          ) : (
            <Link to="/sign-up">
              <button className="py-1 px-2 rounded-lg hover:text-sky-500">
                Sign-Up
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
