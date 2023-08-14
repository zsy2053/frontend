import React from "react";
import { Stack, Box } from "@mui/system";
import StyledTooltip from "./StyledTooltip";
import { Modal, Popper, Tooltip, ClickAwayListener } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CustomButton from "./CustomButton";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";
import {
  FacebookIcon,
  InstapaperIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon
} from "react-share";

// setOpen2 comes from parent Component, it closes the LandingAgentChatWindow
const Navbar = ({ resetContext, setOpen2=null }) => {
  const [open, setOpen] = React.useState(false);
  const [anchor, setAnchor] = React.useState(null);
  const [openCopy, setOpenCopy] = React.useState(false);
  //codeString should be a useState
  //adjust method of linebreaking to \n if needed?
  const codeString = `(num) => num + 1\n(num) => num + 1 \n (num) => num + 1 \n \n \n (num) => num + 1`;
  return (
    <Stack className='h-[44px] flex-shrink-0 w-full bg-[#f9fafb] border-b border-[#eaecf0] justify-center items-end'>
      <ClickAwayListener onClickAway={() => setAnchor(null)}>
        <Box className='flex'>
          <StyledTooltip text='Reset Chat'>
            <button className='mr-5' onClick={resetContext}>
              <img src='/icons/refresh.svg' />
            </button>
          </StyledTooltip>
          <>
            <StyledTooltip text='Share Link'>
              <button className='mr-5 h-full' onClick={() => setOpen(true)}>
                <img src='/icons/share.svg' />
              </button>
            </StyledTooltip>
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
            >
              <Box className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[585px] h-[285px] p-6 bg-white rounded-xl shadow flex-col flex'>
                <h2 className='text-zinc-900 text-[18px] font-semibold leading-7 mb-2'>
                  Share Link
                </h2>
                <span className='text-neutral-600 text-[14px] font-normal leading-tight mb-5'>
                  Share your happiness with your friends
                </span>
                <div className='w-full justify-start items-center flex mb-8'>
                  <div className='flex-1 h-11 px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 text-zinc-900'>
                    https://www.styleup.fun
                  </div>
                  <CopyToClipboard text="https://www.styleup.fun" onCopy={() => window.alert("Link Copied")} className='w-11 h-11  rounded-lg justify-center items-center gap-2 inline-flex hover:bg-gray-50'>
                    <img src='/icons/homeLinkBtn.svg' />
                  </CopyToClipboard>
                </div>
                <div className='flex-1'><FacebookShareButton url="https://www.styleup.fun">
                      <FacebookIcon size={28} round />
                      </FacebookShareButton>
                <InstapaperShareButton url="https://www.styleup.fun">
                <InstapaperIcon size={28} round />
                </InstapaperShareButton>
                <LinkedinShareButton url="https://www.styleup.fun">
                <LinkedinIcon size={28} round />
                </LinkedinShareButton>
                <PinterestShareButton url="https://www.styleup.fun">
                <PinterestIcon size={28} round />
                </PinterestShareButton>
                <RedditShareButton url="https://www.styleup.fun">
                <RedditIcon size={28} round />
                </RedditShareButton>
                <TwitterShareButton url="https://www.styleup.fun">
                <TwitterIcon size={28} round />
                </TwitterShareButton>
                <WhatsappShareButton url="https://www.styleup.fun">
                <WhatsappIcon size={28} round />
                </WhatsappShareButton>
                </div>
                <div className='w-full justify-start items-start gap-2 inline-flex'>
                  <CustomButton title="Done" size="expand" type="sub" onClick={() => setOpen(false)} />
                </div>
              </Box>
            </Modal>
          </>
          <>
            <StyledTooltip text='API'>
              <button
                className='mr-4 h-full'
                onClick={(event) =>
                  setAnchor(anchor ? null : event.currentTarget)
                }
              >
                <img src='/icons/three-dot.svg' />
              </button>
            </StyledTooltip>

            {setOpen2 &&
              <StyledTooltip text='Exit'>
                <button
                  className='mr-5 h-full'
                  onClick={(event) =>
                    setOpen2(false)
                  }
                >
                  <img
                    src='/icons/chatbotX.svg'
                    width={24}
                    height={24}
                />
                </button>
              </StyledTooltip>
            }
            <>
              <Popper
                open={Boolean(anchor)}
                anchorEl={anchor}
                placement='bottom-end'
                disablePortal={true}
                className='w-[700px] min-h-[533px] bg-white border border-gray-100 rounded-lg shadow flex-col justify-start items-start flex gap-4 px-6 pt-4 pb-6'
              >
                <div className='flex-col gap-5 flex'>
                  <h1 className='text-zinc-900 text-[18px] font-semibold leading-7'>
                    Agent API - Run Agents Anywhere
                  </h1>
                  <div>
                    <span className='text-neutral-600 text-[14px] font-normal leading-tight'>
                      Agents can be executed on a variety of platforms
                      including:
                    </span>{" "}
                    <span className='text-black text-[14px] font-medium leading-tight'>
                      Web interface, Chrome extension, Google Sheets, Snowflake,
                      Zapier or in your own website, app and products.
                    </span>
                  </div>
                </div>
                <div className='flex-1 w-full flex-grow flex flex-col relative mb-12'>
                  <div className='h-[68px] w-full top-0 bg-neutral-700 rounded-tl-lg rounded-tr-lg absolute' />
                  <SyntaxHighlighter
                    language='javascript'
                    style={a11yDark}
                    showLineNumbers
                    customStyle={{ width: "100%", height: "100%" }}
                    wrapLongLines
                    className='rounded-lg absolute top-12 bg-zinc-600'
                  >
                    {codeString}
                  </SyntaxHighlighter>
                  <Tooltip
                    PopperProps={{
                      disablePortal: true,
                    }}
                    title='COPIED!'
                    placement='top'
                    leaveTouchDelay={1000}
                    enterTouchDelay={0}
                    disableHoverListener
                    open={openCopy}
                    className={`${openCopy ? "transition duration-1000" : ""}`}
                    onTransitionEnd={() => setOpenCopy(false)}
                    arrow
                  >
                    <div
                      className='w-10 h-10 p-2.5 rounded-lg absolute top-1 right-1 gap-2 hover:bg-slate-500 hover:cursor-pointer'
                      onClick={() => {
                        navigator.clipboard.writeText(codeString);
                        setOpenCopy(true);
                      }}
                    >
                      <img src='/icons/homeCopyBtn.svg' />
                    </div>
                  </Tooltip>
                </div>
              </Popper>
            </>
          </>
        </Box>
      </ClickAwayListener>
    </Stack>
  );
};

export default Navbar;
