import React from "react";
import styles from "../../style";
import Button from "../Button";

const LandingHero = () => (
  <section id='home' className={`flex flex-col ${styles.paddingY}`}>
    <div className='flex flex-col justify-between items-center w-full text-black text-center'>
      <h1 className='flex-1 font-inter font-semibold lg:text-[140px] lg:mb-12 lg:leading-[169px] sm:text-[75px] sm:leading-12 sm:mb-8 text-[48px] mb-4 '>
        Unleashing the <br /> Power of AI
      </h1>
      <span className='flex-1 font-inter font-medium sm:text-[24px] px-16 text-[18px]'>
        Build, Deploy, and Manage Large Language Model Agents to{" "}
      </span>{" "}
      <span className='flex-1 font-inter font-medium sm:text-[24px] mb-14 px-16 text-[18px]'>
        Revolutionize User Interactions.
      </span>
      <Button name='Early Access' className={"outline w-72 h-16 text-[24px]"} />
    </div>
  </section>
);

export default LandingHero;
