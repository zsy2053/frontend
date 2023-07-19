import React from "react";
const AboutHero = () => (
  <section
    id='hero'
    className={`flex sm:flex-row flex-col items-center w-full h-full text-black justify-center`}
  >
    <div className='flex flex-col mb-4 relative'>
      <button className='w-[284px] h-16 origin-top-left rotate-[30deg] justify-center items-center inline-flex absolute bg-purple-400 rounded-[32px] -top-20 -right-10'>
        <span className='text-center text-zinc-900 text-2xl font-medium'>
          Schedule a meeting
        </span>
      </button>
      <h1 className='w-[568px] text-zinc-900 text-[80px] font-semibold font-playfair mb-[50px]'>
        Join us to <br />
        build the future
      </h1>
      <span className='w-[568px] h-[163px] text-zinc-900 text-xl font-normal leading-[33px] tracking-tight'>
        StyleUp built an ambitious platform that individuals and companies use
        to launch their products. Our customers range from hours-old startups to
        complex global businesses. Collectively, they are growing the GDP of the
        internet. You can be part of this.
      </span>
    </div>
    <div className='ml-[100px] inline'>
      <img src='/images/AboutHero.png'></img>
    </div>
  </section>
);

export default AboutHero;
