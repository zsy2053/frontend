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
        <div className='w-full xl:max-w-[1920px] flex justify-center items-center sm:flex-row sm:mt-0 mt-4 flex-col'>
          {/* body left*/}
          <div className='flex flex-col max-w-2xl sm:mb-0 mb-7 flex-shrink'>
            <h1 className='max-w-[588px] text-zinc-900 xl:text-[52px] text-[36px] font-bold mb-9'>
              Welcome to the AI Builder Community!
            </h1>
            <span className='max-w-[505px] text-neutral-600 xl:text-[24px] text-[20px] font-normal mb-10'>
              AI Builder Community, we are a network of thinkers, creators,
              developers, and enthusiasts from every corner of the globe, all
              united by our passion for AI.
              <br />
              You will enjoy access to:
            </span>

            <ul className='list-none max-w-[588px] max-h-[188px] xl:text-[24px] text-[20px]'>
              <li className='max-w-[588px] text-neutral-900 font-medium'>
                Resources and new features of StyleUp;
              </li>
              <li className='max-w-[588px] text-neutral-900 font-medium'>
                Showcase your work;
              </li>
              <li className='max-w-[588px] text-neutral-900 font-medium'>
                Collaboration Opportunities;
              </li>
              <li className='max-w-[588px] text-neutral-900 font-medium'>
                Connect with the like-minded.{" "}
              </li>
            </ul>
          </div>
          <div className='xs:min-w-[488px] max-w-[588px] h-[670px] grid xs:grid-cols-2 xs:grid-rows-[repeat(8,minmax(0,1fr))] grid-rows-[repeat(12,minmax(0,1fr))] gap-6 auto-rows-fr xs:p-0 p-5'>
            <div className='xs:col-start-1 xs:row-start-2 xs:row-end-5 row-start-1 row-end-5 relative'>
              <img
                src='/images/joinTwitter.png'
                className='h-[100%] w-[100%] object-cover rounded-[32px]'
                alt='Twitter image'
              />
              <EAButton
                name='Follow Twitter'
                className='w-[164px] h-[49px] absolute xs:top-4 bottom-4 right-4'
              ></EAButton>
            </div>
            <div className='xs:col-start-2 xs:row-start-1 xs:row-end-5 relative row-start-5 row-end-[9]'>
              <img
                src='/images/joinLinkedIn.png'
                className='h-[100%] w-[100%] object-cover rounded-[32px]'
                alt='LinkedIn image'
              />
              <EAButton
                name='LinkedIn'
                className='w-[164px] h-[49px] absolute bottom-4 right-4'
              ></EAButton>
            </div>
            <div className='xs:col-span-2 xs:row-start-5 xs:row-end-[8] relative row-start-[9] row-end-[13]'>
              <img
                src='/images/joinDiscord.png'
                className='h-[100%] w-[100%] object-cover rounded-[32px]'
                alt='Discord image'
              />
              <EAButton
                name='Discord'
                className='w-[164px] h-[49px] absolute bottom-4 right-4'
              ></EAButton>
            </div>
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
