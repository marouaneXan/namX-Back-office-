import React from "react";
import { useLocation, Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import logoNav from "../../assets/images/logo-namx.svg";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && (
        <nav className="fixed z-30 w-full bg-emerald-500 bg-gradient-to-r from-[#5651e5] to-[#709dff]">
          <div className="py-3 px-3 lg:px-5 lg:pl-3">
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center">
                <button
                  aria-expanded="true"
                  aria-controls="sidebar"
                  className="p-2 mr-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    className="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <Link
                  to="/"
                  className="text-md font-semibold flex items-center lg:mr-1.5"
                >
                  <span className="hidden md:inline-block self-center text-xl font-bold whitespace-nowrap">
                    <Link to="/">
                      <img src={logoNav} alt="merkob.ma" className="w-[68px]" />
                    </Link>
                  </span>
                </Link>
              </div>
              <div className="flex items-center">
                {/* <!-- Search mobile --> */}
                <button
                  type="button"
                  className="p-2 text-gray-500 rounded-2xl lg:hidden hover:text-gray-900 hover:bg-gray-100"
                >
                  <span className="sr-only">Search</span>
                  {/* <!-- Search icon --> */}
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button className="sm:inline-flex ml-5 text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3 hover:scale-[1.02] transition-transform">
                  <CiLogout className="mr-2 -ml-1 w-5 h-5" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
