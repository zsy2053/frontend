import React from "react";
const LandingDesc3 = () => (
  <section
    id='description3'
    className={`flex sm:flex-row flex-col items-center w-full h-full text-black justify-center`}
  >
    <div className='lg:mr-[180px] mr-[45px]'>
      <img src='/images/landingDesc3.png'></img>
    </div>
    <div className='flex flex-col'>
      <div className='text-black text-[48px] font-bold leading-tight mb-[24px]'>
        Agent Maker.
      </div>
      <div className='max-w-[567px] text-neutral-600 text-[24px] font-medium'>
        Our platform enables everyone to create AI agents with just a few
        clicks, and we offer unlimited use cases. Our platform is easy to use
        and brings ideas to life anytime, anywhere.
      </div>
    </div>
  </section>
);

export default LandingDesc3;
