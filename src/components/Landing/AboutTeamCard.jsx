import { styled } from "@mui/system";
import Switch, { switchClasses } from "@mui/base/Switch";
import { useState } from "react";
const AboutTeamCard = ({ info, variant = false }) => {
  const [checked, setChecked] = useState(false);
  const Root = styled("span")(
    ({ theme }) => `
      font-size: 0;
      position: relative;
      display: inline-block;
      width: 36px;
      height: 24px;
      cursor: pointer;
    
      & .${switchClasses.track} {
        background: #fff;
        border-radius: 16px;
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        border: 2px solid #424242;
      }
    
      & .${switchClasses.thumb} {
        display: block;
        width: 16px;
        height: 16px;
        top: 4px;
        left: 4px;
        border-radius: 16px;
        background-color: ${info.switch};
        position: relative;
        
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 120ms;
      }
    
      &.${switchClasses.checked} {
        .${switchClasses.thumb} {
          left: 16px;
          top: 4px;
          background-color: #fff;
        }
    
        .${switchClasses.track} {
          background-color: ${info.switch};
        }
      }
    
      & .${switchClasses.input} {
        cursor: inherit;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        z-index: 1;
        margin: 0;
      }
      `
  );
  return (
    <div className='w-full h-full flex flex-col'>
      <div
        className={`relative w-full h-full shadow card-inner flex-grow rounded-2xl ${
          checked ? "card-flip" : ""
        }`}
      >
        <div className='backface-hidden absolute inset-0 w-full h-full flex flex-col transition-all duration-100 delay-200'>
          <img src={info.image} height={"100%"} />
          {variant ? (
            <div className='absolute bottom-[10px] right-0'>
              <Switch
                slots={{
                  root: Root,
                }}
                checked={checked}
                onClick={() => setChecked((prev) => !prev)}
              />
            </div>
          ) : (
            <div className='w-full py-6 flex flex-col'>
              <div className='text-zinc-900 text-[28px] font-medium'>
                {info.name}
              </div>
              <div className='flex items-center'>
                <div className='w-[360px] text-neutral-600 text-[20px] font-normal leading-relaxed tracking-wide'>
                  {info.role}
                </div>
                <Switch
                  slots={{
                    root: Root,
                  }}
                  checked={checked}
                  onClick={() => setChecked((prev) => !prev)}
                />
              </div>
            </div>
          )}
        </div>
        <div className='backface-hidden absolute inset-0 w-full h-full transition-all duration-100 delay-200 card-back flex flex-col'>
          <div className='h-[110px] p-[25px] flex-col justify-center items-start flex'>
            {/* top info */}
            <div className='self-stretch justify-start items-center inline-flex'>
              <div
                className={`w-[60px] h-[60px] rounded-[50%] bg-no-repeat bg-top bg-cover relative mr-[10px]`}
                style={{ backgroundImage: `url(${info.image})` }}
              ></div>
              <div className='flex-1 flex-col justify-center items-start gap-[3px] inline-flex w-44'>
                <div className='text-black text-[20px] font-medium '>
                  {info.name}
                </div>
                <div className='self-stretch text-slate-500 text-[16px] font-normal leading-relaxed tracking-wide'>
                  {info.role}
                </div>
              </div>
              <img
                src='/icons/aboutLinkedIn.svg'
                onClick={() => open(info.linkedIn)}
              />
            </div>
          </div>
          {/* gallery */}
          <div className='grid grid-rows-2 grid-flow-col gap-1 '>
            <img className={`row-span-2 rounded-l-[20px]`} src={info.image1} />
            <img className={`row-span-1 rounded-tr-[20px]`} src={info.image2} />
            <img className={`row-span-1 rounded-br-[20px]`} src={info.image3} />
          </div>
          <div className='w-full py-6 pl-6 flex flex-col relative flex-grow'>
            <span className='w-[310px] text-neutral-600 text-opacity-80 text-[16px] font-normal leading-snug tracking-wide'>
              {info.hashtags}
            </span>
            <span className='w-[310px] text-black text-[28px] font-bold'>
              {info.university}
            </span>
            <div className='w-[310px] text-black text-[16px] font-normal leading-snug tracking-wide'>
              {info.desc}
            </div>
            <div className='absolute bottom-[10px] right-0'>
              <Switch
                slots={{
                  root: Root,
                }}
                checked={checked}
                onClick={() => setChecked((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeamCard;
