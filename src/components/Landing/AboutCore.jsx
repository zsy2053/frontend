import React from "react";

const AboutCore = () => (
  <section
    id='core'
    className={`flex justify-center items-center w-full h-full text-black`}
  >
    <div className='w-full h-full'>
      <h1 className='font-semibold text-headerGray text-[56px]'>
        Core values.
      </h1>
      <span className='font-semibold text-[56px]'>
        Expressed in everything.
      </span>
    </div>
    <div className='grid grid-rows-3 border-2 divide-y-2 h-full min-w-[322px]'>
      <div className='m-auto'>
        <img></img>
      </div>
      <div>
        <img className='object-fill w-full h-full'></img>
      </div>
      <div className='px-16 pt-8 flex flex-col'>
        <span className='font-bold text-[18px] leading-[20px]'>AUG 2021</span>
        <span className='font-bold text-[28px]'>
          Our globe icon, logo and branding are finalized.
        </span>
      </div>
    </div>
  </section>
);

export default AboutCore;
