import React from "react";
import AboutTeamCard from "./AboutTeamCard";
import { aboutTeamInfo } from "../../constants";
const AboutTeam = () => (
  <section id='team' className={`flex flex-col w-full h-full`}>
    <h1 className='font-inter font-semibold text-[48px] self-center mb-[100px]'>
      Meet the Team
    </h1>
    <div className='flex justify-between [&>div]:min-w-[360px] [&>div]:min-h-[572px] gap-14'>
      {aboutTeamInfo.slice(1).map((info, index) => (
        <div>
          <AboutTeamCard info={info} />
        </div>
      ))}
    </div>
  </section>
);

export default AboutTeam;
