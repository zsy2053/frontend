import React from 'react'
import {
    LandingFooter,
    LandingNav,
} from "../components";
import styles from "../style";
import Marquee from "react-fast-marquee";

const HowItWorks = () => {
    return (
        <div className="h-[100vh] bg-[#0E0E0E] w-full">
            <div className={`${styles.paddingX} flex justify-center`}>
                <div className={`flex-1 xl:max-w-[1920px]`}>
                    <LandingNav />
                </div>
            </div>
            <div className="h-[80%] bg-[#0E0E0E] w-full flex justify-center items-center flex-col">
                <div className="max-w-[1036px] text-center text-neutral-200 text-[80px] font-bold leading-tight mb-6">Build AI apps in 5 minutes! Let GPT power your life and work!</div>
                <div className='flex flex-col relative justify-center items-center w-full'>
                    <div className="absolute z-0 w-[100vw]">
                        <Marquee autoFill="true" direction="left">
                            <div className="h-[50px] w-[50px] bg-white mr-[50px]"></div>
                            <div className="h-[50px] w-[50px] bg-white mr-[50px]"></div>
                            <div className="h-[50px] w-[50px] bg-white mr-[50px]"></div>
                        </Marquee>
                        <Marquee autoFill="true" direction="right">
                            <div className="h-[50px] w-[50px] bg-white mr-[50px]"></div>
                            <div className="h-[50px] w-[50px] bg-white mr-[50px]"></div>
                            <div className="h-[50px] w-[50px] bg-white mr-[50px]"></div>
                        </Marquee>
                        <Marquee autoFill="true" direction="left">
                            <div className="h-[50px] w-[50px] bg-white mr-[50px]"></div>
                            <div className="h-[50px] w-[50px] bg-white mr-[50px]"></div>
                            <div className="h-[50px] w-[50px] bg-white mr-[50px]"></div>
                        </Marquee>
                    </div>
                    <img src="/images/LaptopFrame.svg" className='z-10'></img>
                </div>

            </div>
        </div>
    )
}

export default HowItWorks