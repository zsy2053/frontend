import React from "react";

const LandingDesc1 = () => (
  <section
    id='description1'
    className={`flex sm:flex-row flex-col items-center w-full h-full text-black justify-center`}
  >
    <div className='lg:mr-[180px] mr-[45px] mb-4'>
      <img src='/images/landingDesc1.png'></img>
    </div>
    <div className='flex flex-col'>
      <div className='text-black xs:text-[48px] text-2xl font-bold leading-tight mb-[24px]'>
        One-click Generation.
      </div>
      <div className='max-w-[567px] text-neutral-600 xs:text-[24px] text-base font-medium mb-5'>
        Build custom agents with pre-built flows in 5 minutes. Launch your
        branded site agent, it's just that easy!
      </div>
      <a
        href='/signin'
        className='text-violet-500 xs:text-2xl text-base font-semibold'
      >
        Sign Up Free →
      </a>
    </div>
  </section>
);

export default LandingDesc1;
