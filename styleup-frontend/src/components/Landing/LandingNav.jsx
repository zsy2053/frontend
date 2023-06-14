import { landingNavLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import { useState } from "react";
import Button from "../Button";

const LandingNav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img
        src={logo}
        alt='StyleUp Logo'
        className='w-[111px] h-[29px] mr-12'
      ></img>

      {/* Desktop View */}
      <ul className='list-none md:flex hidden justify-start items-center flex-1'>
        {landingNavLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-inter font-medium cursor-pointer text-[20px] ${
              index === landingNavLinks.length - 1 ? "mr-0" : "mr-12"
            }`}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <ul className='list-none md:flex hidden justify-end items-center flex-shrink'>
        <li
          className={"font-inter font-medium cursor-pointer text-[20px] mr-12"}
        >
          Log in
        </li>
        <li>
          <Button
            name='Sign Up'
            className='text-[20px] text-white bg-black rounded-[14px] w-40'
          ></Button>
        </li>
      </ul>

      {/* Mobile View */}
      <div className='md:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
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
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li
              className={
                "font-inter font-medium cursor-pointer text-[20px] mb-4 text-white"
              }
            >
              <a href='#'>Login</a>
            </li>
            <li
              className={
                "font-inter font-medium cursor-pointer text-[20px] text-white"
              }
            >
              <a href='#'>Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default LandingNav;
