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
import { landingSectionText, landingCategories } from "../constants";
import Label from "../components/Home/Label";
import { landingAgentCards } from "../constants";
const AppCard = ({ item }) => {
  return (
    <div className='w-full h-full bg-white rounded-[14px] flex flex-col relative z-10'>
      <div className='flex-grow w-full overflow-hidden rounded-t-[14px]'>
        <img src={item.bg} />
      </div>

      <div className=' flex-shrink-0 px-5 py-6 bg-white rounded-b-[14px] flex flex-col gap-5'>
        <div className='justify-start items-center inline-flex gap-1'>
          <span className='text-black text-sm font-normal tracking-wide'>
            BY
          </span>
          <img
            className='w-[19px] h-[19px] relative rounded-[100px]'
            src='/icons/Female06.svg'
          />
          <span className='text-zinc-900 text-[13px] font-medium'>
            @wadewarren
          </span>
        </div>
        <span className='text-zinc-900 text-base font-medium tracking-wide'>
          {item.body}
        </span>
      </div>
    </div>
  );
};
const AgentCard = ({ item }) => {
  return (
    <div className='w-[270px] h-80 bg-white rounded shadow flex flex-col'>
      <img src={item.image} className='aspect-[270/192]' />
      <div className='p-2 flex-col justify-start items-start gap-2 flex flex-grow'>
        <div className='w-[230px] h-10 justify-start items-center gap-2 inline-flex'>
          <img className='w-10 h-10 relative' src='/icons/Female06.svg' />
          <div className='text-zinc-900 text-[14px] font-semibold leading-tight whitespace-nowrap overflow-hidden text-ellipsis'>
            {item.title}
          </div>
        </div>
        <div className='text-zinc-900 text-opacity-80 text-[12px] font-normal leading-none w-full line-clamp-2'>
          {item.desc}
        </div>
        <div className='flex flex-wrap gap-2'>
          {item.labels.map((l, index) => (
            <Label key={index} text={l} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Landing = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`w-full xl:max-w-[1920px]`}>
          <LandingNav />
        </div>
      </div>

      {/* categories bar */}
      <div className={`${styles.paddingX} ${styles.flexCenter} shadow`}>
        <div
          className={`w-full xl:max-w-[1920px] h-[118px] flex justify-center items-center gap-[74px] py-6  `}
        >
          {/* left 3 buttons */}
          <div className='flex gap-[50px] select-none'>
            <div className='flex flex-col gap-2'>
              <div className='w-[50px] h-[50px] bg-purple-400 rounded-[50%] justify-center items-center inline-flex hover:cursor-pointer'>
                <img src='/icons/landingFire.svg' />
              </div>
              <span className='text-center text-zinc-900 text-sm font-medium leading-tight'>
                Popular
              </span>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='w-[50px] h-[50px] bg-orange-500 rounded-[50%] justify-center items-center inline-flex hover:cursor-pointer'>
                <img src='/icons/landingFun.svg' />
              </div>
              <span className='text-center text-zinc-900 text-sm font-medium leading-tight'>
                Fun
              </span>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='w-[50px] h-[50px] bg-cyan-300 rounded-[50%] justify-center items-center inline-flex hover:cursor-pointer'>
                <img src='/icons/landingWork.svg' />
              </div>
              <span className='text-center text-zinc-900 text-sm font-medium leading-tight'>
                Work
              </span>
            </div>
          </div>
          {/* right categories */}
          <div className='flex gap-10 select-none'>
            {landingCategories.map((i, index) => (
              <div
                className='flex flex-col gap-2 justify-center items-center cursor-pointer'
                key={index}
              >
                <div className='w-6 h-6'>
                  <img src={i.img} />
                </div>
                <div className='text-zinc-900 text-opacity-80 text-sm font-medium leading-tight'>
                  {i.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.flexCenter}`}>
        <div
          className={`w-full md:mt-[140px] mt-[70px] xl:max-w-[1514px] px-4 flex flex-col gap-[54px] justify-center items-center`}
        >
          <div className='h-[29px] justify-center items-center inline-flex self-start'>
            <img
              src='/icons/landing/collection.svg'
              className='w-6 h-6 relative'
            />
            <span className='text-black text-2xl font-semibold'>
              Marketplace
            </span>
          </div>
          <div className='w-full h-[532px] flex justify-center items-center gap-16 relative'>
            <div className='absolute w-full h-[532px] overflow-hidden rounded-xl brightness-50'>
              <img src='/images/landingBg1.jpg' />
            </div>
            <div className='w-[408px] h-[468px]'>
              <AppCard item={{ bg: "/images/landingBg2.jpg" }} />
            </div>
            <div className='w-[333px] h-[252px] flex-col justify-center items-center gap-6 inline-flex relative z-10'>
              <div className='flex-col justify-center items-center gap-[18px] flex'>
                <div className='w-[132px] h-[132px] p-2.5 bg-white bg-opacity-25 rounded-[20px] justify-center items-center inline-flex'>
                  <div className='relative'>
                    <img
                      className='w-28 h-28 rounded-[14px]'
                      src='/icons/landing/poker.svg'
                    />
                  </div>
                </div>
                <div className='flex-col justify-center items-center gap-3 flex'>
                  <div className='text-white text-[34px] font-semibold tracking-[2.72px] font-playfair'>
                    Build your Library
                  </div>
                </div>
              </div>
              <div className='px-3.5 py-[7px] opacity-80 bg-white bg-opacity-80 rounded-3xl justify-center items-center gap-3 inline-flex'>
                <div className='text-indigo-600 text-base font-medium tracking-wide'>
                  #Reading
                </div>
              </div>
            </div>
            <div className='w-[408px] h-[468px]'>
              <AppCard item={{ bg: "/images/landingBg3.jpg" }} />
            </div>
          </div>

          <div className='w-full h-[532px] flex justify-center items-center gap-16 relative'>
            <div className='absolute w-full h-[532px] overflow-hidden rounded-xl brightness-50 -z-10'>
              <img src='/images/landingBg4.png' />
            </div>

            <div className='w-[356px] h-[215px] flex-col gap-[38px] flex'>
              <div className='justify-center items-center gap-6 inline-flex'>
                <div className='w-[132px] h-[132px] p-2.5 bg-white bg-opacity-25 rounded-[20px] justify-center items-center inline-flex'>
                  <div className='relative w-28 h-28 overflow-hidden'>
                    <div className='w-28 h-28 left-0 top-0 absolute bg-[#F29500] rounded-[14px] -z-10' />
                    <img src='/icons/landing/stars.svg' />
                  </div>
                </div>

                <div className='flex-col gap-[11px] inline-flex'>
                  <span className='text-white text-[34px] font-semibold'>
                    Must have
                    <br />
                    Fun Apps
                  </span>
                  <span className='text-white text-[21px] font-normal'>
                    #Fun #Social #Tools
                  </span>
                </div>
              </div>
              <button className='w-[210px] px-3.5 py-[7px] bg-white bg-opacity-25 rounded-3xl justify-center items-center gap-3 inline-flex'>
                <img
                  className='w-[31px] h-[31px] relative rounded-[100px]'
                  src='/icons/Female06.svg'
                />
                <div className='text-yellow-100 text-base font-medium tracking-wide'>
                  Create your own
                </div>
              </button>
            </div>

            <div className='flex gap-[34px]'>
              <div className='w-[312px] h-[468px]'>
                <AppCard
                  item={{
                    bg: "/icons/landing/dog.png",
                    body: "Discover endless joy and excitement with our captivating... ",
                  }}
                />
              </div>
              <div className='w-[312px] h-[468px]'>
                <AppCard
                  item={{
                    bg: "/icons/landing/sculpt.png",
                    body: "Discover endless joy and excitement with our captivating... ",
                  }}
                />
              </div>
              <div className='w-[312px] h-[468px]'>
                <AppCard
                  item={{
                    bg: "/icons/landing/egg.png",
                    body: "Discover endless joy and excitement with our captivating... ",
                  }}
                />
              </div>
            </div>
          </div>

          <div className='w-full h-[47px] flex justify-between items-center'>
            <div className='h-[29px] inline-flex justify-center items-center gap-3'>
              <img
                src='/icons/landing/collection.svg'
                className='w-6 h-6 relative'
              />
              <div className='text-black text-2xl font-semibold'>
                More to Explore
              </div>
            </div>
            <button className='h-[47px] inline-flex items-center'>
              <span className='text-black text-lg font-semibold'>
                Create your own
              </span>
              <img
                src='/icons/landing/rightArrow.svg'
                className='w-[18px] h-[18px] relative'
              />
            </button>
          </div>
          <div className='flex flex-wrap gap-8 max-w-[1514px] justify-center items-center py-6'>
            {landingAgentCards.map((item, index) => (
              <AgentCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className='w-full relative mt-36'>
        <LandingFooter variant />
      </div>
      <LandingChatbot />
    </div>
  );
};

export default Landing;
