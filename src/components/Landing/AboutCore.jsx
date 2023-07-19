import React from "react";

const AboutCore = () => (
  <section
    id='core'
    className={`justify-center items-center w-full h-full text-black`}
  >
    <div className='flex flex-col items-center mb-[100px]'>
      <h1 className='text-zinc-900 text-[56px] font-semibold font-playfair'>
        Core Values
      </h1>
      <span className='text-zinc-900 text-[32px] font-normal'>
        Embedded in everything we do.
      </span>
    </div>
    <div className='flex justify-center gap-40'>
      <div className='w-[380px] flex-col justify-start items-center gap-9 inline-flex'>
        <img
          src='/icons/aboutThink.svg'
          className='w-[100px] h-[100px] bg-fuchsia-100 bg-opacity-60 rounded-[100px]'
        />
        <span className='text-center text-zinc-900 text-[41px] font-medium leading-[44px]'>
          Think Big
        </span>
      </div>
      <div className='w-[380px] flex-col justify-start items-center gap-9 inline-flex'>
        <img
          src='/icons/aboutMove.svg'
          className='w-[100px] h-[100px] bg-fuchsia-100 bg-opacity-60 rounded-[100px]'
        />
        <span className='text-center text-zinc-900 text-[41px] font-medium leading-[44px]'>
          Move Fast & Iterate
        </span>
      </div>
      <div className='w-[380px] flex-col justify-start items-center gap-9 inline-flex'>
        <img
          src='/icons/aboutFocus.svg'
          className='w-[100px] h-[100px] bg-fuchsia-100 bg-opacity-60 rounded-[100px]'
        />
        <span className='text-zinc-900 text-[41px] font-medium leading-[38px]'>
          User Focused
        </span>
      </div>
    </div>
  </section>
);

export default AboutCore;
