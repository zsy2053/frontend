import React from "react";
import styles from "../style";
import { LandingHero, LandingNav, LandingFooter, LandingDesc1, LandingDesc2, LandingDesc3, LandingDesc4, LandingExplore, LandingFAQs } from "../components";

const Landing = () => (
  <div className='w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`w-full xl:max-w-[1920px]`}>
        <LandingNav />
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <div className={`w-full xl:max-w-[1920px] md:mt-[140px] mt-[70px]`}>
        <LandingHero />
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <div className={`w-full xl:max-w-[1920px] md:my-[140px] my-[70px]`}>
        <LandingDesc1 />
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <div className={`w-full xl:max-w-[1920px] md:my-[140px] my-[70px]`}>
        <LandingDesc2 />
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <div className={`w-full xl:max-w-[1920px] md:my-[140px] my-[70px]`}>
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
  </div>
);

export default Landing;
