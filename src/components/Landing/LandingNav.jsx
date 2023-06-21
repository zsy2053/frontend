import { landingNavLinks } from "../../constants";
import { useState } from "react";
import EAButton from "./EAButton";
import { Link, useNavigate } from "react-router-dom";

const LandingNav = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className='w-full flex py-6 justify-between items-center h-[76px] navbar'>
      <Link to='/'>
        <img
          src='/images/logo.svg'
          alt='StyleUp Logo'
          className='w-[111px] h-[29px] mr-12'
        ></img>
      </Link>
      {/* Desktop View */}
      <ul className='list-none md:flex hidden justify-start items-center flex-1'>
        {landingNavLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-inter font-medium cursor-pointer text-[20px] ${
              index === landingNavLinks.length - 1 ? "mr-0" : "mr-12"
            }`}
          >
            <a onClick={() => navigate(`${nav.id}`)}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <ul className='list-none md:flex hidden justify-end items-center flex-shrink'>
        <li>
          <button
            type='button'
            className={`font-inter font-medium p-2 gap-2 text-[20px] text-white bg-black rounded-[14px] w-40`}
            onClick={() => navigate("/signin")}
          >
            Sign In
          </button>
        </li>
      </ul>

      {/* Mobile View */}
      <div className='md:hidden flex flex-1 justify-end items-center z-50'>
        <img
          src={toggle ? "/images/close.svg" : "/images/menu.svg"}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-gray-gradient
          absolute top-20 right-0 mx-4 my-2
          min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {landingNavLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={
                  "font-inter font-medium cursor-pointer text-[20px] mb-4 text-white"
                }
              >
                <a onClick={() => navigate(`${nav.id}`)}>{nav.title}</a>
              </li>
            ))}
            <li
              className={
                "font-inter font-medium cursor-pointer text-[20px] text-white"
              }
            >
              <a onClick={() => navigate("/signin")}>Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default LandingNav;
