import React from "react";
import styles from "../style";
import {
  LandingHero,
  LandingNav,
  LandingFooter,
  LandingDesc1,
  LandingDesc2,
  LandingDesc3,
  LandingDesc4,
  LandingExplore,
  LandingFAQs,
  LandingChatbot,
} from "../components";

const Landing = () => (
  <div className='w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`w-full xl:max-w-[1920px]`}>
        <LandingNav />
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <div className={`w-full md:mt-[140px] mt-[70px]`}>
        <LandingHero />
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <div
        className={`w-full xl:max-w-[1920px] md:my-[140px] my-[70px] sm:px-16 px-6`}
      >
        <LandingDesc1 />
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <div
        className={`w-full xl:max-w-[1920px] md:my-[140px] my-[70px] sm:px-16 px-6`}
      >
        <LandingDesc2 />
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <div
        className={`w-full xl:max-w-[1920px] md:my-[140px] my-[70px] sm:px-16 px-6`}
      >
        <LandingDesc3 />
      </div>
    </div>
    {/* <div className={`${styles.flexCenter}`}>
      <div className={`w-full xl:max-w-[1920px] md:my-[140px] my-[70px]`}>
        <LandingDesc4 />
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <div className={`w-full xl:max-w-[1920px] md:mt-[140px] mt-[70px]`}>
        <LandingExplore />
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <div className={`w-full xl:max-w-[1920px] md:mt-[140px] mt-[70px]`}>
        <LandingFAQs />
      </div>
    </div> */}
    <div className='w-full'>
      <LandingFooter />
    </div>
    <LandingChatbot />
  </div>
);

export default Landing;
