import { NavLink } from "react-router-dom";
import logo from "/src/assets/Logo.svg"
import './Nav.css'
import Btn from "../../Component/Btn";
const Navbar = () => {
  const manuItem = (
    <>
      <li><NavLink  to={"/"}>Home</NavLink></li>
      <li><NavLink to={"/about"}>About</NavLink></li>
      <li><NavLink to={"/menu"}>Menu</NavLink></li>
      <li><NavLink to={"/service"}>Service</NavLink></li>
      <li><NavLink to={"/blog"}>Blog</NavLink></li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 max-w-7xl m-auto px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 items-center "
            >
              {manuItem}
            </ul>
          </div>
          <a href="/" >
            <img className="w-40" src={logo} alt="" />
          </a>
        </div>
        
        <div className="navbar-end">
        <div className="hidden lg:flex"><ul className="menu menu-horizontal px-1 font1 font-semibold space-x-3">{manuItem}</ul></div>
          
          <Btn btnName={'Register Now'}></Btn>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
