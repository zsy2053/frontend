import React from "react";
import { logoFooter } from "../../assets";
import { footerLinks, footerContact } from "../../constants";
const LandingFooter = () => {
  return (
    <div className='bg-footerBlack flex justify-center px-16'>
      <div className='xl:max-w-[1920px] w-full h-52 flex justify-between items-center'>
        <img alt='StyleUp Logo Small' src={logoFooter}></img>

        <ul className='list-none justify-end items-center flex'>
          <li className={`font-inter text-[16px] text-white font-normal mr-12`}>
            {footerContact}
          </li>
          {footerLinks.map((nav, index) => (
            <li
              className={`font-inter underline cursor-pointer text-[16px] text-white font-normal ${
                index === footerLinks.length - 1 ? "mr-0" : "mr-12"
              }`}
            >
              <a href={`${nav.link}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LandingFooter;