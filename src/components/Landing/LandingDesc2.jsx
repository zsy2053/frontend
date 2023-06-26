import React from "react";
const LandingDesc2 = () => (
  <section
    id='description2'
    className={`flex sm:flex-row flex-col items-center w-full h-full text-black justify-center`}
  >
    <div className='flex flex-col mb-4'>
      <div className='text-black text-[56px] font-bold mb-[24px] leading-tight'>
        No-code Builder.
      </div>
      <div className='max-w-[567px] text-neutral-600 text-[24px] font-medium'>
        Build custom agents with pre-built flows in 5 minutes. User flow,
        features, language UI...
      </div>
    </div>
    <div className='lg:ml-[100px] ml-[25px]'>
      <img src='/images/landingDesc2.png'></img>
    </div>
  </section>
);

export default LandingDesc2;
