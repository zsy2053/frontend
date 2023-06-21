import React from "react";
import { handshake, lightbulb, magnet } from "../../assets";
const AboutStyleUp = () => (
  <section id='styleup' className={`flex flex-col w-full h-full`}>
    <div className=' mb-28'>
      <h1 className='font-semibold text-[56px] leading-[68px] mb-8'>
        About StyleUp
      </h1>
      <span className='font-medium text-[24px] leading-[38px]'>
        subheading, why we are awesome! subheading, why we are awesome!
        subheading, why we are awesome!
      </span>
    </div>
    <div className='grid grid-cols-3 gap-x-16 h-full'>
      <div className='grid grid-rows-3 border-2 divide-y-2 h-full min-w-[322px]'>
        <div className='px-16 pt-8 flex flex-col '>
          <span className='font-bold text-[18px] leading-[20px]'>AUG 2021</span>
          <span className='font-bold text-[28px]'>
            Our globe icon, logo and branding are finalized.
          </span>
        </div>
        <div className='px-16 pt-8 flex flex-col'>
          <span className='font-bold text-[18px] leading-[20px]'>AUG 2021</span>
          <span className='font-bold text-[28px]'>
            Our globe icon, logo and branding are finalized.
          </span>
        </div>
        <div className='m-auto'>
          <img src={handshake}></img>
        </div>
      </div>
      <div className='grid grid-rows-3 border-2 divide-y-2 h-full min-w-[322px]'>
        <div className='m-auto'>
          <img src={lightbulb}></img>
        </div>
        <div>
          <img src='/images/fillerAbout.jpg' className='object-fill w-full h-full'></img>
        </div>
        <div className='px-16 pt-8 flex flex-col'>
          <span className='font-bold text-[18px] leading-[20px]'>AUG 2021</span>
          <span className='font-bold text-[28px]'>
            Our globe icon, logo and branding are finalized.
          </span>
        </div>
      </div>
      <div className='grid grid-rows-3 border-2 divide-y-2 h-full min-w-[322px]'>
        <div className='px-16 pt-8 flex flex-col'>
          <span className='font-bold text-[18px] leading-[20px]'>AUG 2021</span>
          <span className='font-bold text-[28px]'>
            Our globe icon, logo and branding are finalized.
          </span>
        </div>
        <div className='px-16 pt-8 flex flex-col'>
          <span className='font-bold text-[18px] leading-[20px]'>AUG 2021</span>
          <span className='font-bold text-[28px]'>
            Our globe icon, logo and branding are finalized.
          </span>
        </div>
        <div className='m-auto'>
          <img src={magnet}></img>
        </div>
      </div>
    </div>
  </section>
);

export default AboutStyleUp;
