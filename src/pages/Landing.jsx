import React from "react";
import styles from "../style";
import { LandingHero, LandingNav } from "../components";
import { rock } from "../assets";

const Landing = () => (
  <div className='w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`w-full xl:max-w-[1920px]`}>
        <LandingNav />
      </div>
    </div>

    <div
      style={{ backgroundImage: `url(${rock})` }}
      className={
        "bg-no-repeat bg-local lg:bg-[center_top_5rem] bg-[right_top_25rem] min-h-screen"
      }
    >
      <div className={`${styles.flexCenter}`}>
        <div className={`w-full xl:max-w-[1920px] sm:mt-0 mt-[35%]`}>
          <LandingHero />
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
