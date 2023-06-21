import React from "react";
const AboutHero = () => (
  <section
    id='hero'
    className={`flex flex-col justify-center items-center w-full h-full text-black text-center bg-right-bottom`}
    style={{ backgroundImage: `url(/images/rock.svg)` }}
  >
    <h1 className='font-inter font-medium text-[80px] leading-[97px] text-center max-w-7xl mb-9'>
      Introduction title Introduction title Introduction title
    </h1>
    <span className='font-inter font-medium leading-[38px] text-[24px] text-center max-w-3xl'>
      subheading, why we are awesome! subheading, why we are awesome!
      subheading, why we are awesome!
    </span>
  </section>
);

export default AboutHero;
