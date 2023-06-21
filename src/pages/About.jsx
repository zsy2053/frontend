import React from "react";
import styles from "../style";
import {
  LandingFooter,
  LandingNav,
  AboutHero,
  AboutCEO,
  AboutCore,
  AboutStyleUp,
  AboutTeam,
  LandingChatbot,
} from "../components";
const About = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className={`${styles.paddingX} flex justify-center`}>
        <div className={`flex-1 xl:max-w-[1920px]`}>
          <LandingNav />
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className={`w-full sm:mt-0 mt-[35%] h-screen `}>
          <AboutHero />
        </div>
      </div>
      <div className='mx-52 mt-64 flex justify-center items-center'>
        <div className={`w-full h-screen xl:max-w-[1920px]`}>
          <AboutCEO />
        </div>
      </div>
      <div className='mx-52 mt-64 flex justify-center items-center'>
        <div className={`w-full min-h-screen xl:max-w-[1920px]`}>
          <AboutTeam />
        </div>
      </div>
      <div className='mx-52 mt-64 flex justify-center items-center'>
        <div className={`w-full min-h-screen xl:max-w-[1920px]`}>
          <AboutStyleUp />
        </div>
      </div>
      <div className='mx-52 mt-64 flex justify-center items-center'>
        <div className={`w-full h-screen xl:max-w-[1920px]`}>
          <AboutCore />
        </div>
      </div>

      <div className={`${styles.paddingX} flex justify-center`}>
        <div className={`flex-1 xl:max-w-[1920px]`}>
          <LandingChatbot />
        </div>
      </div>
      {/* footer */}
      <div className='w-full'>
        <LandingFooter />
      </div>
    </div>
  );
};

export default About;
