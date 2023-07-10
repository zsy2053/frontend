import React from "react";
import { LandingNav, LandingFooter } from "../components";
import styles from "../style";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { pricingMonthlyOptions } from "../constants";
const Pricing = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='w-full overflow-hidden flex flex-col min-h-screen '>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`w-full xl:max-w-[1920px]`}>
          <LandingNav />
        </div>
      </div>
      <div className='w-full flex-grow flex flex-col justify-center items-center py-44 '>
        <div className='w-[982px]'>
          <div className='text-zinc-900 text-[56px] font-bold mb-9'>
            Plans & Pricing
          </div>
          <div className='flex justify-between items-center  mb-9'>
            <span className='text-neutral-600 text-[24px] font-normal w-[649px]'>
              Whether your time-saving AI Agent automation needs are large or
              small, we're here to help you scale.
            </span>
            <div className='relative flex w-60 h-12 rounded-3xl border '>
              <div
                className={`absolute bg-styleupPurple rounded-3xl z-0 inset-y-0 transform duration-300 ${
                  toggle ? "right-0 left-28" : "left-0 right-28"
                }`}
              />
              <button
                type='button'
                className='absolute bg-transparent rounded-3xl inset-y-0 left-0 right-28 z-10'
                onClick={() => setToggle(false)}
              >
                <span
                  className={`text-center  text-[16px] font-semibold tracking-wider transform duration-300 ${
                    toggle ? " text-violet-500" : "text-white"
                  }`}
                >
                  MONTHLY
                </span>
              </button>
              <button
                type='button'
                className='bg-translate absolute rounded-3xl inset-y-0 right-0 left-28 text-center px-6 py-3 z-10'
                onClick={() => setToggle(true)}
              >
                <span
                  className={`text-center  text-[16px] font-semibold tracking-wider transform duration-300 ${
                    toggle ? "text-white" : "text-violet-500"
                  }`}
                >
                  YEARLY
                </span>
              </button>
            </div>
          </div>
          <div className='w-[982px] h-[467px] bg-white rounded-[26px] border-2 border-gray-200 backdrop-blur-[35px] flex justify-center gap-5'>
            {pricingMonthlyOptions.map((option, index) => (
              <PricingCard option={option} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className='w-full'>
        <LandingFooter />
      </div>
    </div>
  );
};
const PricingCard = ({ option }) => {
  return (
    <div className='w-[292px] px-[30px] py-5 rounded-[26px] flex-col inline-flex transition ease-in-out delay-150 duration-300 hover:-translate-y-4 bg-white hover:bg-black group'>
      {option.popular && (
        <div className='h-[24x] flex justify-end mb-5 leading-[24px]'>
          <span className='w-[121px] bg-zinc-200 rounded-xl text-violet-500 text-[10px] font-extrabold tracking-wider text-center'>
            MOST POPULAR
          </span>
        </div>
      )}
      <div
        className={`w-[232px] h-full flex-col justify-start items-start inline-flex ${
          !option.popular && "pt-11 "
        }`}
      >
        <div className='w-[152px] h-[46px] flex items-end mb-5'>
          <span className=' group-hover:text-white text-[36px] font-bold leading-10 mr-4 transition ease-in-out delay-150 duration-300'>
            ${option.price}
          </span>
          <span className=' group-hover:text-white text-slate-500 text-[17px] font-medium transition ease-in-out delay-150 duration-300'>
            /month
          </span>
        </div>

        <span className='group-hover:text-white text-[28px] font-medium mb-[6px] transition ease-in-out delay-150 duration-300'>
          {option.title}
        </span>
        <span className='w-[232px] group-hover:text-white text-slate-500 text-[15px] font-medium mb-[14px] transition ease-in-out delay-150 duration-300'>
          {option.desc}
        </span>

        <div className='flex-col justify-start items-start gap-2.5 flex'>
          {option.features.map((feature, index) => (
            <div
              className='w-[207px] justify-center items-center gap-2.5 inline-flex'
              key={index}
            >
              <div className='w-4 h-4 relative flex justify-center items-center group-hover:bg-white bg-styleupPurple rounded-[50%] transition ease-in-out delay-150 duration-300'>
                <div className='group-hover:text-[#3B3B3B] text-[#E5E3F6] transition ease-in-out delay-150 duration-300'>
                  <CheckCircleIcon sx={{ width: "24px", height: "24px" }} />
                </div>
              </div>
              <div className='w-[177px] group-hover:text-white text-slate-500 text-[15px] font-medium transition ease-in-out delay-150 duration-300'>
                {feature}
              </div>
            </div>
          ))}
        </div>
        <button className='w-[232px] h-11 inline-block bg-violet-500 rounded-3xl mt-auto'>
          <span className='text-center text-white text-[15px] font-medium'>
            Choose plan
          </span>
        </button>
      </div>
    </div>
  );
};
export default Pricing;
