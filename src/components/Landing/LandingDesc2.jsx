import React from "react";
const LandingDesc2 = () => (
  <section
    id='description2'
    className={`flex sm:flex-row flex-col items-center w-full h-full text-black justify-center`}
  >
    <div className='lg:mr-[180px] mr-[45px] mb-4 lg:hidden'>
      <img src='/images/landingDesc2.png'></img>
    </div>
    <div className='flex flex-col mb-4'>
      <div className='text-black xs:text-[48px] text-2xl font-bold mb-[24px] leading-tight'>
        No-code Builder.
      </div>
      <div className='max-w-[567px] text-neutral-600 xs:text-[24px] text-base font-medium mb-5'>
        Build custom agents with pre-built flows in 5 minutes. User flow,
        features, language UI...
      </div>
      <a
        href='/early-access'
        className='text-violet-500 xs:text-2xl text-base font-semibold'
      >
        Early Access →
      </a>
    </div>
    <div className='lg:ml-[100px] ml-[25px] lg:inline hidden'>
      <img src='/images/landingDesc2.png'></img>
    </div>
  </section>
);

export default LandingDesc2;
