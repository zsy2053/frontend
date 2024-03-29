import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { footerLinks, footerContact } from "../../constants";
const LandingFooter = ({ variant = false }) => {
  const navigate = useNavigate();
  return (
    <div className={`${variant ? "bg-transparent" : "bg-black"} text-white`}>
      <div className='xl:max-w-[1920px] flex justify-center xs:px-16 px-4 sm:flex-row flex-col mx-auto relative z-10'>
        <div className=' w-full sm:h-52 h-44 flex justify-between items-center'>
          <img alt='StyleUp Logo Small' src='/images/logoFooter.svg'></img>
          <div className='justify-end items-center flex sm:hidden space-x-[20px]'>
            <img src='/icons/footerInsta.svg' width={34} height={34}></img>
            <img src='/icons/footerTwitter.svg' width={34} height={34}></img>
            <img src='/icons/footerDiscord.svg' width={34} height={34}></img>
          </div>
        </div>
        <ul className='list-none sm:justify-end sm:items-center flex sm:flex-row flex-col-reverse items-start justify-start'>
          <li
            className={`font-inter text-[16px]font-normal mr-12 whitespace-nowrap`}
            key={0}
          >
            {footerContact}
          </li>
          {footerLinks.map((nav, index) => (
            <li
              className={`font-inter underline cursor-pointer text-[16px]font-normal mr-12 whitespace-nowrap`}
              key={nav.id}
            >
              <a href={`${nav.link}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <span className='sm:hidden text-[13px] font-normal leading-none mt-[30px] mb-[30px]'>
          © Copyright 2023 StyleUp
        </span>
      </div>
      {variant && (
        <div className='bg-[url("/images/wave.svg")] bg-no-repeat md:bg-auto bg-cover md:bg-left bg-center absolute -top-24 w-[200%] h-[200%]'></div>
      )}

      {variant && (
        <button className='absolute md:-top-4 xs:-top-20 -top-20 left-8 xs:w-[284px] w-[135px] xs:h-16 h-[35px] bg-black rounded-[32px]' onClick={() => navigate("/signin")}>
          <span className='text-center text-white xs:text-2xl font-medium' onClick={() => navigate("/signin")}>
            Start Free ✦
          </span>
        </button>
      )}
    </div>
  );
};

export default LandingFooter;
