import React from "react";
const AboutStyleUp = () => (
  <section id='styleup' className={`flex flex-col w-full h-full`}>
    <div className=' mb-28'>
      <h1 className='font-semibold text-[56px] leading-[68px] mb-8 font-playfair'>
        The Timeline
      </h1>
      <span className='text-zinc-900 text-[32px] font-normal leading-[50px]'>
        We are thrilled to share you every process we made. After months of hard
        & fun work, we're excited to announce that, our beta version is now
        ready for testing.
      </span>
    </div>
    <div className='grid grid-cols-3 grid-rows-3 gap-6 h-full'>
      {/* block 1 */}
      <div className='pl-6 pr-12 pt-6 pb-[100px] bg-neutral-50 rounded-2xl flex-col justify-center items-start gap-1 inline-flex'>
        <span className='text-neutral-600 text-xl font-semibold leading-[38px]'>
          APRIL 30
        </span>
        <span className='text-zinc-900 text-[28px] font-semibold leading-[38px]'>
          We decide to dedicate on building StyleUp
        </span>
      </div>
      {/* block 2 */}
      <div className='pl-6 pr-12 pt-6 pb-[100px] bg-neutral-50 rounded-2xl flex-col justify-center items-start gap-1 inline-flex'>
        <span className='text-neutral-600 text-xl font-semibold leading-[38px]'>
          MAY 30
        </span>
        <span className='text-zinc-900 text-[28px] font-semibold leading-[38px]'>
          We created 2 agents. AI tutor, Calendar.
        </span>
      </div>
      {/* Block 3 */}
      <div className='pl-6 pr-12 pt-6 pb-[100px] bg-purple-400 bg-opacity-5 rounded-2xl flex-col justify-center items-start gap-1 inline-flex'>
        <span className='text-neutral-600 text-xl font-semibold leading-[38px]'>
          JULY 10
        </span>
        <span className='text-zinc-900 text-[28px] font-semibold leading-[38px]'>
          Create an agent based on website.
        </span>
      </div>
      {/* block 4 */}
      <div className='pl-6 pr-12 pt-6 pb-[100px] bg-neutral-50 rounded-2xl flex-col justify-center items-start gap-1 inline-flex'>
        <span className='text-neutral-600 text-xl font-semibold leading-[38px]'>
          MAY 12
        </span>
        <span className='text-zinc-900 text-[28px] font-semibold leading-[38px]'>
          Vector Database
        </span>
      </div>
      {/* block 5 */}
      <div className='col-span-2 rounded-2xl bg-[url("/images/aboutGrid.png")] relative'>
        <span className='w-[763.41px] left-[57.46px] top-[112px] absolute text-white text-[28px] font-semibold leading-[38px]'>
          The Team
          <br />
          is based in Silicon Valley and Canada.
        </span>
      </div>
      {/* block 6 */}
      <div className='rounded-2xl bg-[url("/images/aboutGrid2.png")] bg-cover relative'></div>
      {/* block 7 */}
      <div className='pl-6 pr-12 pt-6 pb-[100px] bg-neutral-50 rounded-2xl flex-col justify-center items-start gap-1 inline-flex'>
        <span className='text-neutral-600 text-xl font-semibold leading-[38px]'>
          JULY 6
        </span>
        <span className='text-zinc-900 text-[28px] font-semibold leading-[38px]'>
          Create an agent
          <br />
          based on uploaded pdf.
        </span>
      </div>
    </div>
  </section>
);

export default AboutStyleUp;
