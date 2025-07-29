import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
const Header = () => {
  return (
    <div>
      <div className="navbar bg-black shadow-xl px-4 py-2 fixed top-0 w-full z-50 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li> 
                <Link to="/">
                  <a>HOME</a>
                </Link>
              </li>
              <li>
                <Link to="/oversizedTee">
                  <a>OVERSIZED T-SHIRT</a>
                </Link>
              </li>
              <li>
                <Link to="/polo">
                  <a>HALF ZIPPER POLO</a>
                </Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white bg-black border-2 border-white">OUT<span className="text-yellow-200">XEN</span></a>
         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-white menu-horizontal px-1">
              <li> 
                <Link to="/">
                  <a>HOME</a>
                </Link>
              </li>
              <li>
                <Link to="/oversizedTee">
                  <a>OVERSIZED T-SHIRT</a>
                </Link>
              </li>
              <li>
                <Link to="/polo">
                  <a>HALF ZIPPER POLO</a>
                </Link>
              </li>
          </ul>
        </div>
        <Link to="/" className="relative">
          <FaCartShopping className="text-xl text-white" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            3
          </span>
        </Link>

        <Link to="/login" className="navbar-end">
          <a className="btn">Login</a>
        </Link>
        
      </div>
    </div>
  );
};

export default Header;
