import { React, useState } from "react";
import axios from "axios";
import styles from "../style";
import {
  LandingFooter,
  LandingNav,
  EAInput,
  EAButton,
  EASelect,
} from "../components";
import { earlyAccessOptions } from "../constants";
import CustomizedCheckbox from "../components/Landing/CustomCheckbox";
import { ClickAwayListener } from "@mui/base";
const EarlyAccess = () => {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [selectVal, setSelectVal] = useState(null);

  const [inputOneErr, setInputOneErr] = useState(false);
  const [inputTwoErr, setInputTwoErr] = useState(false);
  const [selectValErr, setSelectValErr] = useState(false);

  const [sucess, setSuccess] = useState(false);
  const onSubmit = (e) => {
    // handle form value checks here
    e.preventDefault();
    if (inputOne != "" && inputTwo != "" && selectVal != null) {
      //Handle success api call
      axios({
        method: "post",
        url: `${import.meta.env.VITE_API_URL}/api/users/early_access`,
        headers: { "Content-Type": "application/json" },
        data: {
          email: inputTwo,
          task: selectVal,
          name: inputOne,
        },
      })
        .then((res) => {
          console.log(res);
          setSuccess(true);
        })
        .catch((err) => {
          console.log(err);
          window.alert(err);
        });
    }
    if (inputOne == "") {
      setInputOneErr(true);
    }
    if (inputTwo == "") {
      setInputTwoErr(true);
    }
    if (selectVal == null) {
      setSelectValErr(true);
    }
  };

  const hideTooltip = () => {
    console.log("hit");
    setInputOneErr(false);
    setInputTwoErr(false);
    setSelectValErr(false);
  };
  return (
    <div className='w-full overflow-hidden flex flex-col min-h-screen'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`w-full xl:max-w-[1920px]`}>
          <LandingNav />
        </div>
      </div>
      {/* body left*/}
      <div className='px-48 flex justify-center items-center flex-grow'>
        <div className='w-full xl:max-w-[1920px] flex flex-grow justify-between items-center'>
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
          {/* body right */}
          {sucess ? (
            <div className='w-full bg-[#7F56D933] h-14 rounded-2xl max-w-xl text-center flex items-center justify-center'>
              <span className='font-medium text-[16px] text-menuText leading-6'>
                Your request has been submitted successfully!
              </span>
            </div>
          ) : (
            <form className='w-full flex flex-col max-w-xl' noValidate>
              <div className='flex mb-9'>
                <div className='flex-1 mr-[18px]'>
                  <EAInput
                    label='Name'
                    id='name'
                    onChange={setInputOne}
                    required
                    showTooltip={inputOneErr}
                    setTooltip={setInputOneErr}
                  />
                </div>
                <div className='flex-1'>
                  <EAInput
                    label='Email Address'
                    id='email'
                    onChange={setInputTwo}
                    required
                    showTooltip={inputTwoErr}
                    setTooltip={setInputTwoErr}
                  />
                </div>
              </div>
              <div className='mb-24'>
                <EASelect
                  options={earlyAccessOptions}
                  placeholder='What tasks do you want to use StyleUp to help you with?'
                  id='email'
                  onChange={setSelectVal}
                  required
                  tooltipMsg='Please select an option from dropdown menu'
                  showTooltip={selectValErr}
                  setTooltip={setSelectValErr}
                />
              </div>
              <div className='flex items-center mb-8'>
                <div className='mr-2'>
                  <CustomizedCheckbox />
                </div>
                <span className='font-normal text-[16px] text-menuText leading-4'>
                  I want to receive updates about new features and products from
                  StyleUp
                </span>
              </div>
              <div className='flex items-center'>
                <span className='font-normal text-[16px] leading-[19px] mr-[34px] text-[#555555] text-opacity-80 flex-1'>
                  By submitting this form you agree to our{" "}
                  <a className='text-menuText text-opacity-100 underline'>
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a className='text-menuText text-opacity-100 underline'>
                    Privacy Policy
                  </a>
                </span>
                <ClickAwayListener onClickAway={hideTooltip}>
                  <div>
                    <EAButton
                      className='w-[103px]'
                      type='submit'
                      name='Submit'
                      onClick={(e) => onSubmit(e)}
                    />
                  </div>
                </ClickAwayListener>
              </div>
            </form>
          )}
        </div>
      </div>
      {/* footer */}
      <div className='w-full'>
        <LandingFooter />
      </div>
    </div>
  );
};

export default EarlyAccess;
