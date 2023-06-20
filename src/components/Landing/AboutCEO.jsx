import React from "react";

const AboutCEO = () => (
  <section id='ceo' className={`flex items-start w-full h-full text-black`}>
    <div className='max-w-[552px] max-h-[742px] w-full h-full bg-black mr-52'></div>
    <div className='flex flex-col'>
      <h1 className='font-semibold text-[56px] leading-[68px] mb-24'>
        "Automate all you want"
      </h1>
      <span className='font-medium text-[31px] leading-[38px] mb-16'>
        StyleUp is building an entirely new way to get things done. It takes
        your goals, and turn them into solutions. <br />
        <br />
        Create agents that are capable of solving domain-specific & personal
        tasks, with just a goal in mind.
      </span>
      <span className='font-medium text-[24px] leading-[38px]'>
        Bella, Founder and CEO @StyleUp
      </span>
    </div>
  </section>
);

export default AboutCEO;
