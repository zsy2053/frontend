import React from "react";
import { Stack, Box } from "@mui/system";
import StyledTooltip from "./StyledTooltip";
import { Modal, Popper, Tooltip, ClickAwayListener } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Navbar = ({ resetContext }) => {
  const [open, setOpen] = React.useState(false);
  const [anchor, setAnchor] = React.useState(null);
  const [openCopy, setOpenCopy] = React.useState(false);
  //codeString should be a useState
  //adjust method of linebreaking to \n if needed?
  const codeString = `(num) => num + 1\nasdASDDDDDDDDDDDDDDDD DDDDDDDDDDDDDDDDDDDDDD
  DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD DDDDDDDD\n DDD DDDDDDDD\n\nD\n DDD DDDDDDDD\n\n\n\n\n\n\n\n\n`;
  return (
    <Stack className='h-[44px] flex-shrink-0 w-full bg-[#f9fafb] border-b border-[#eaecf0] justify-center items-end'>
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
            <Box className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[512px] h-[244px] p-6 bg-white rounded-xl shadow flex-col flex'>
              <h2 className='text-zinc-900 text-[18px] font-semibold leading-7 mb-2'>
                Share Link
              </h2>
              <span className='text-neutral-600 text-[14px] font-normal leading-tight mb-5'>
                The shared content is only this chat content.
              </span>
              <div className='w-full justify-start items-center flex mb-8'>
                <div className='flex-1 h-11 px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 text-zinc-900'>
                  Link goes here...
                </div>
                <img src='/icons/homeLinkBtn.svg' />
              </div>

              <div className='w-full justify-start items-start gap-3 inline-flex'>
                <button
                  className='text-slate-700 text-[16px] font-semibold leading-normal flex-1 h-11 px-[18px] py-2.5 bg-white rounded-lg
                  shadow border border-gray-300 flex items-center justify-center'
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className='text-white text-[16px] font-semibold leading-normal
                  flex-1 h-11 px-[18px] py-2.5 bg-violet-500 rounded-lg shadow border border-violet-500 flex items-center justify-center'
                >
                  Copy Link
                </button>
              </div>
            </Box>
          </Modal>
        </>
        <>
          <StyledTooltip text='API'>
            <button
              className='mr-5 h-full'
              onClick={(event) =>
                setAnchor(anchor ? null : event.currentTarget)
              }
            >
              <img src='/icons/three-dot.svg' />
            </button>
          </StyledTooltip>
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
                  Agents can be executed on a variety of platforms including:
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
                placement="top"
                leaveTouchDelay={1000}
                enterTouchDelay={0}
                disableHoverListener
                open={openCopy}
                className={`${openCopy ? 'transition duration-1000' : ''}`}
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
      </Box>
    </Stack>
  );
};

export default Navbar;
