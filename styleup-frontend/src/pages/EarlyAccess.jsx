import React from "react";
import styles from "../style";
import {
  LandingFooter,
  LandingNav,
  Input,
  Button,
  Select,
} from "../components";
import { earlyAccessOptions } from "../constants";

const EarlyAccess = () => {
  return (
    <div className='w-full overflow-hidden flex flex-col min-h-screen'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`w-full xl:max-w-[1920px]`}>
          <LandingNav />
        </div>
      </div>
      {/* body */}
      <div className='px-48 flex justify-center items-center flex-grow'>
        <div className='w-full xl:max-w-[1920px] flex flex-grow justify-between'>
          <div className='flex flex-col max-w-2xl'>
            <h1 className='font-semibold text-[72px] text-headerGray leading-[1.12]'>
              Early Access
            </h1>
            <h1 className='font-semibold text-[72px] text-primary leading-[1.15]'>
              It all starts here.
            </h1>
            <span className='font-normal text-[25px] text-black leading-[1.30] mt-6'>
              Thanks for your interest in StyleUp AI! As soon as the platform is
              ready for the official launch, you will be notified by email.
            </span>
          </div>
          <form className='w-full flex flex-col max-w-xl' noValidate>
            <div className='flex mb-9'>
              <div className='flex-1 mr-[18px]'>
                <Input label='Name' id='name' required />
              </div>
              <div className='flex-1'>
                <Input label='Email Address' id='email' required />
              </div>
            </div>
            <div className='mb-24'>
              <Select
                options={earlyAccessOptions}
                placeholder='What tasks do you want to use StyleUp to help you with?'
                tooltipMsg='Please select an option from dropdown menu '
                id='email'
                required
              />
            </div>
            <div className=''>d</div>
            <div className=''>e</div>

            <Button
              type='submit'
              name='Submit'
              onClick={(e) => e.preventDefault()}
            />
          </form>
        </div>
      </div>
      <div className='w-full'>
        <LandingFooter />
      </div>
    </div>
  );
};

export default EarlyAccess;
