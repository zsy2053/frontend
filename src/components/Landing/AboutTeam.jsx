import React from "react";
import AboutTeamCard from "./AboutTeamCard";
const AboutTeam = () => (
  <section id='team' className={`flex flex-col w-full h-full`}>
    <h1 className='font-inter font-semibold text-[48px]'>Our Team</h1>
    <div className='flex justify-between [&>div]:w-1/4'>
      <div className='flex flex-col items-center'>
        <div className='mt-[145px]'>
          <AboutTeamCard />
        </div>
        <div className='mt-[220px]'>
          <AboutTeamCard />
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='mt-[385px]'>
          <AboutTeamCard />
        </div>
        <div className='mt-[220px]'>
          <AboutTeamCard />
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className=''>
          <AboutTeamCard />
        </div>
        <div className='mt-[220px]'>
          <AboutTeamCard />
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='mt-[445px]'>
          <AboutTeamCard />
        </div>
      </div>
    </div>
  </section>
);

export default AboutTeam;
