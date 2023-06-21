import { styled } from "@mui/system";
import Switch, { switchClasses } from "@mui/base/Switch";
import { useState } from "react";
const AboutTeamCard = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className='w-full h-full'>
      <div
        className={`relative w-[280px] h-[440px] bg-slate-300 card-inner ${
          checked ? "card-flip" : ""
        }`}
      >
        <div className='backface-hidden absolute inset-0 w-full h-full flexbg-gray-900 transition-all duration-100 delay-200'>
          FRONT OF CARD
        </div>
        <div className='backface-hidden absolute inset-0 w-full h-full flexbg-gray-900 transition-all duration-100 delay-200 card-back'>
          Back OF CARD
        </div>
      </div>
      <div className='w-full flex justify-end'>
        <Switch
          slots={{
            root: Root,
          }}
          checked={checked}
          onClick={() => setChecked((prev) => !prev)}
        />
      </div>
    </div>
  );
};

const Root = styled("span")(
  ({ theme }) => `
    font-size: 0;
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
    margin: 10px;
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
      background-color: #7F56D9;
      position: relative;
      
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 120ms;
    }
  
    &.${switchClasses.checked} {
      .${switchClasses.thumb} {
        left: 20px;
        top: 4px;
        background-color: #fff;
      }
  
      .${switchClasses.track} {
        background-color: #7F56D9;
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
export default AboutTeamCard;
