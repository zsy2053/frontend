import React from "react";
const LandingDesc1 = () => (
    <section id='description1' className={`flex lg:flex-row flex-col items-center w-full h-full text-black justify-center`}>
        <div className='lg:mr-[180px] mr-[45px] mb-4'>
            <img src='/images/landingDesc1.png'></img>
        </div>
        <div className='flex flex-col'>
            <div class="text-black text-[56px] font-bold leading-10 mb-[24px]">One-click Generation.</div>
            <div class="w-[567px] text-neutral-600 text-[24px] font-medium">Build custom agents with pre-built flows in 5 minutes. Launch your branded site agent, it’s just that easy!</div>
        </div>
    </section>
);

export default LandingDesc1;
