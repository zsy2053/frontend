import React from "react";
import styles from "../../style";

import { Link } from "react-router-dom";
const LandingHero = () => (
  <section id='home' className={`flex flex-col`}>
    <div
      style={{ backgroundImage: `url(/images/rock.svg)` }}
      className={
        "bg-no-repeat bg-local lg:bg-[center_top_5rem] bg-[right_top_25rem] lg:min-h-[800px] min-h-[600px] relative"
      }
    >
      <div className='flex flex-col justify-between items-center w-full text-black text-center px-16'>
        <h1 className='flex-1 font-inter font-bold lg:text-[100px] lg:mb-12 sm:text-[75px] sm:mb-8 text-[48px] mb-4 max-w-[715px] leading-tight'>
          Unleash the Power of AI
        </h1>
        <span className='max-w-[555px] text-center text-black sm:text-[24px] font-medium leading-9 text-[18px] mb-12'>
        Build, Deploy, and Manage LLM Agents to Revolutionize User Interactions.
        </span>
        <Link to='/early-access'>
          <button
            type='button'
            className={`font-inter text-primary font-medium p-2 gap-2 rounded-xl outline w-72 h-16 bg-white text-[24px] `}
          >
            Early Access
          </button>
        </Link>
      </div>
      <div className="bg-gradient-to-b from-transparent to-white h-[100px] w-full absolute bottom-0">
      </div>
    </div>
  </section>
);

export default LandingHero;
