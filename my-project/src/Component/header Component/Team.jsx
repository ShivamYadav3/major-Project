import { useState } from "react";
import { Link } from "react-router-dom";
import { TeamData } from "../../fix/TeamData";

function Team() {
  const [Data] = useState(TeamData);
  return (
    <div className="flex items-center justify-around gap-2.5 h-[523px]">
      {Data.map((items) => {
        return (
          <div
            key={items?.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            {console.log(items?.title)}
            <img className="rounded-t-lg h-52 " src={items?.image} alt="" />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {items?.title}
              </h5>

              <Link
                to="/PartnerLoginForm"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Team;
