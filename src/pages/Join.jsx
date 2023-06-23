import { React, useState } from "react";
import axios from "axios";
import styles from "../style";
import {
  LandingFooter,
  LandingNav,
  LandingChatbot,
  EAInput,
  EAButton,
  EASelect,
} from "../components";
import { earlyAccessOptions } from "../constants";
import CustomizedCheckbox from "../components/Landing/CustomCheckbox";
import { ClickAwayListener } from "@mui/base";
const Join = () => {
  return (
    <div className='w-full overflow-hidden flex flex-col min-h-screen'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`w-full xl:max-w-[1920px]`}>
          <LandingNav />
        </div>
      </div>

      <div className='lg:px-48 px-5 flex justify-center items-center flex-grow '>
        <div className='w-full xl:max-w-[1920px] flex flex-shrink justify-between items-center sm:flex-row sm:mt-0 mt-4 flex-col'>
          {/* body left*/}
          <div className='flex flex-col max-w-2xl sm:mb-0 mb-7'>
            <h1 className='w-[588px] text-zinc-900 text-[52px] font-bold mb-9'>
              Welcome to the AI Builder Community!
            </h1>
            <span className='w-[505px] text-neutral-600 text-[24px] font-normal mb-10'>
              AI Builder Community, we are a network of thinkers, creators,
              developers, and enthusiasts from every corner of the globe, all
              united by our passion for AI.
              <br />
              You will enjoy access to:
            </span>

            <ul className='list-none w-[588px] h-[188px] relative'>
              <li className='w-[588px] left-[0px] top-[0px] absolute text-neutral-900 text-[24px] font-medium'>
                Resources and new features of StyleUp;
              </li>
              <li className='w-[588px] left-[0px] top-[53px] absolute text-neutral-900 text-[24px] font-medium'>
                Showcase your work;
              </li>
              <li className='w-[588px] left-[0px] top-[106px] absolute text-neutral-900 text-[24px] font-medium'>
                Collaboration Opportunities;
              </li>
              <li className='w-[588px] left-[0px] top-[159px] absolute text-neutral-900 text-[24px] font-medium'>
                Connect with the like-minded.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className='w-full'>
        <LandingFooter />
      </div>
      <LandingChatbot />
    </div>
  );
};

export default Join;
