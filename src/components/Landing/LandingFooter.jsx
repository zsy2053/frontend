import React from "react";
import { footerLinks, footerContact } from "../../constants";
const LandingFooter = () => {
  return (
    <div className='bg-footerBlack'>
      <div className='xl:max-w-[1920px] flex justify-center px-16 sm:flex-row flex-col mx-auto'>
        <div className=' w-full h-52 flex justify-between items-center'>
          <img alt='StyleUp Logo Small' src='/images/logoFooter.svg'></img>
          <div className='justify-end items-center flex sm:hidden space-x-[20px]'>
            <img src='/icons/footerInsta.svg' width={20} height={20}></img>
            <img src='/icons/footerTwitter.svg' width={20} height={20}></img>
            <img src='/icons/footerDiscord.svg' width={20} height={20}></img>
          </div>
        </div>
        <ul className='list-none sm:justify-end sm:items-center flex sm:flex-row flex-col-reverse items-start justify-start'>
          <li
            className={`font-inter text-[16px] text-white font-normal mr-12 whitespace-nowrap`}
            key={0}
          >
            {footerContact}
          </li>
          {footerLinks.map((nav, index) => (
            <li
              className={`font-inter underline cursor-pointer text-[16px] text-white font-normal mr-12 whitespace-nowrap`}
              key={index + 1}
            >
              <a href={`${nav.link}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <span className='sm:hidden text-white text-[13px] font-normal leading-none mt-[30px]'>
          © Copyright 2023 StyleUp
        </span>
      </div>
    </div>
  );
};

export default LandingFooter;
