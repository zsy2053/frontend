import React, { useState } from "react";
import ReactDOM from "react-dom";
import Divider from "@mui/material/Divider";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { addAgentSelectOptions } from "../../constants";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ClearIcon from "@mui/icons-material/Clear";
import Chip from "@mui/material/Chip";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddAgentWindow = ({ setSidebarSelection }) => {
  const [fileList, setFileList] = useState([]);
  const [dragging, setDragging] = useState(false);
  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const files = Array.from(event.dataTransfer.files).filter(
      (item) =>
        item.type.includes("png") ||
        item.type.includes("jpg") ||
        item.type.includes("jpeg")
    );
    if (files.length > 0) {
      if (files.length > 1) {
        setFileList(files.slice(0, 1));
      } else {
        setFileList(files);
      }
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(true);
  };

  const [phText, setPhText] = useState("Select category");
  const [openSelect, setOpenSelect] = useState(false);

  const handleSelect = (id, ph) => {
    setOpenSelect(false);
    setPhText(ph);
  };

  const [chipVal, setChipVal] = useState("");
  const [chips, setChips] = useState([]);
  const handleChips = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      if (chips.length < 3) {
        setChips([...chips, chipVal]);
        setChipVal("");
      }
    }
  };
  const handleChipDelete = (index) => () => {
    setChips(chips.filter((item, i) => i !== index));
  };

  const [textArea, setTextArea] = useState("");

  return (
    <div className='py-8 h-[calc(100vh-44px)] overflow-y-scroll'>
      {/* header */}
      <div className='w-[1128px] h-[82px] px-8 flex-col justify-start items-start inline-flex mb-8'>
        <div className='self-stretch text-zinc-900 text-[24px] font-semibold leading-9'>
          Publish your chat app
        </div>
        <div className='max-w-[544px] text-neutral-600 text-[14px] font-normal leading-tight'>
          Community members will be able to chat based on this data file and app
          settings. They will not see your previous conversation, your privacy
          is protected.
        </div>
      </div>
      {/* form */}
      <form className='flex w-full justify-start px-8 flex-col'>
        {/* App Name input */}
        <div className='flex'>
          <div className='w-[280px] text-zinc-900 text-opacity-80 text-[14px] font-semibold leading-tight mr-8'>
            App Name
          </div>
          <input
            className='w-[512px] h-11 inline-block px-[14px] py-[10px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-styleupPurple focus:border-transparent'
            placeholder='e.g. Chat with Environmental Economics Expert'
          ></input>
        </div>

        <div className='w-full my-8'>
          <Divider />
        </div>

        {/* Cover Image Input */}
        <div className='flex'>
          <div className='w-[280px] mr-8 flex flex-col'>
            <span className='text-zinc-900 text-opacity-80 text-[14px] font-semibold leading-tight'>
              Cover Image
            </span>
            <span className='text-neutral-600 text-[14px] font-normal leading-tight'>
              This will be displayed on the community.
            </span>
          </div>
          <div className='flex flex-col'>
            <label
              htmlFor='file'
              className={`flex flex-col justify-center items-center w-[512px] h-32 mb-4 rounded-lg border border-gray-200 hover:border-styleupPurple hover:bg-gray-100 cursor-pointer ${
                dragging && "border-styleupPurple bg-gray-100"
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={() => setDragging(false)}
            >
              <input
                type='file'
                accept='png, jpg, jpeg'
                onChange={(event) =>
                  setFileList(Array.from(event.target.files))
                }
                id='file'
                name='file'
                hidden
              />
              <div className='w-10 h-10 p-2.5 bg-gray-100 rounded-[28px] justify-center items-center inline-flex'>
                <img
                  src='/icons/uploadIcon.svg'
                  className='w-5 h-5 self-center'
                />
              </div>
              <div className='flex'>
                <div className='w-[464px] h-5 justify-center items-start gap-1 inline-flex'>
                  <div className='text-violet-700 text-[14px] font-semibold leading-tight'>
                    Click to upload
                  </div>
                  <div className='text-neutral-600 text-[14px] font-normal leading-tight'>
                    or drag and drop
                  </div>
                </div>
              </div>
              <div className='w-[464px] text-center text-neutral-600 text-[12px] font-normal leading-none'>
                PNG or JPG (max. 800x400px)
              </div>
            </label>
            {fileList.length > 0 &&
              fileList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='w-full overflow-hidden p-4 h-[72px] flex items-center border rounded-lg border-gray-200 hover:border-styleupPurple mb-3'
                  >
                    <img
                      src='/icons/coverImageUploadIcon.svg'
                      width={24}
                      height={24}
                      className='mr-4 flex-shrink-0'
                    />
                    <div className='flex flex-col w-[332px]'>
                      <p className='text-zinc-900 text-[14px] font-medium leading-tight text-ellipsis overflow-hidden'>
                        {item.name}
                      </p>
                      <span className='text-neutral-600 text-[14px] font-normal leading-tight'>
                        {item.size >= 102400
                          ? Math.ceil(item.size / 10240) + "MB"
                          : Math.ceil(item.size / 1024) + "KB"}
                      </span>
                    </div>

                    <img
                      src='/icons/trashIcon.svg'
                      onClick={() => {
                        setFileList([]);
                      }}
                      className='hover:cursor-pointer ml-auto hover:bg-gray-100 rounded-full p-1'
                    />
                  </div>
                );
              })}
          </div>
        </div>

        <div className='w-full my-8'>
          <Divider />
        </div>

        {/* category input */}
        <div className='flex'>
          <div className='w-[280px] text-zinc-900 text-opacity-80 text-[14px] font-semibold leading-tight mr-8'>
            Category
          </div>
          <ClickAwayListener onClickAway={() => setOpenSelect(false)}>
            <div className=' relative'>
              <button
                className={`inline-block px-[14px] py-[10px] w-[512px] h-11 text-menuText bg-transparent rounded-lg text-opacity-80 focus:outline-none appearance-none
                focus:ring-2 focus:ring-styleupPurple focus:border-transparent
                text-left text-ellipsis whitespace-nowrap overflow-hidden border border-gray-300
                `}
                id='select'
                type='button'
                onClick={() => {
                  setOpenSelect((prev) => !prev);
                }}
              >
                <div className='flex items-center'>
                  <BookmarkBorderIcon
                    sx={{ width: "20px", height: "20px" }}
                    className='mr-2'
                  />
                  {phText}
                  <div className='ml-auto flex items-center'>
                    {openSelect ? (
                      <ExpandLessIcon sx={{ width: "20px", height: "20px" }} />
                    ) : (
                      <ExpandMoreIcon sx={{ width: "20px", height: "20px" }} />
                    )}
                  </div>
                </div>
              </button>

              <ul
                className={`list-none flex flex-col justify-end items-start bg-white z-10 border
                        rounded-lg w-[512px] absolute top-[50px]
                        ${openSelect ? "" : "hidden"}`}
                style={{
                  boxShadow:
                    "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
                }}
              >
                {addAgentSelectOptions.map((op, index) => (
                  <li
                    key={op.id}
                    className={
                      "w-full font-inter font-medium cursor-pointer text-[16px] leading-6 text-menuText p-[14px] hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                    }
                    onClick={() => handleSelect(op.id, op.text)}
                  >
                    <div className='flex'>
                      <p className='flex-grow'>{op.text}</p>
                      <img
                        src='/icons/check.svg'
                        className={phText === op.text ? `` : "hidden"}
                      ></img>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ClickAwayListener>
        </div>

        <div className='w-full my-8'>
          <Divider />
        </div>

        {/* tags */}
        <div className='flex'>
          <div className='w-[280px] mr-8 flex flex-col'>
            <span className='text-zinc-900 text-opacity-80 text-[14px] font-semibold leading-tight'>
              Tags
            </span>
            <span className='text-neutral-600 text-[14px] font-normal leading-tight'>
              This will be displayed on the community.
            </span>
          </div>
          <div className='flex flex-col'>
            <div
              className='flex w-[512px] h-11 px-[14px] py-[10px] border 
            border-gray-300 rounded-lg focus:ring-2
            focus:ring-styleupPurple items-center'
            >
              <div className='flex flex-wrap gap-2 mr-2'>
                {chips.map((item, index) => (
                  <Chip
                    label={item}
                    key={index}
                    onDelete={handleChipDelete(index)}
                    size='small'
                    deleteIcon={<ClearIcon style={{ color: "#9E77ED" }} />}
                    sx={{
                      color: "#6941C6",
                      backgroundColor: "#F9F5FF",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  />
                ))}
              </div>
              <input
                className='inline-block disabled:bg-white focus:outline-none focus:border-transparent flex-1'
                placeholder={chips.length < 1 && "e.g. Book, Fun, Environment"}
                onKeyDown={(e) => handleChips(e)}
                value={chipVal}
                onChange={(e) => setChipVal(e.target.value)}
                disabled={chips.length >= 3}
              />
            </div>
            <div className='w-[512px] text-neutral-600 text-[14px] font-normal leading-tight mt-[6px]'>
              Add up to 3 tags
            </div>
          </div>
        </div>

        <div className='w-full my-8'>
          <Divider />
        </div>

        {/* text area */}
        <div className='flex'>
          <div className='w-[280px] mr-8 flex flex-col'>
            <span className='text-zinc-900 text-opacity-80 text-[14px] font-semibold leading-tight'>
              Initial Messages
            </span>
            <span className='text-neutral-600 text-[14px] font-normal leading-tight'>
              Write a short introduction and sample prompts for the chat app.
            </span>
          </div>
          <div className='flex flex-col w-[512px] h-[436px]'>
            <ReactQuill
              theme='snow'
              value={textArea}
              onChange={setTextArea}
              modules={{
                toolbar: [
                  [
                    "bold",
                    "italic",
                    { list: "ordered" },
                    { list: "bullet" },
                    "link",
                  ],
                ],
              }}
              formats={["bold", "italic", "list", "link"]}
            />
            <span className=' mt-auto text-neutral-600 text-[14px] font-normal leading-tight'>
              275 characters left
            </span>
          </div>
        </div>

        <div className='w-full my-8'>
          <Divider />
        </div>

        <div className='w-full h-10 justify-end items-center gap-3 inline-flex'>
          <button className='px-4 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-center items-center gap-2 flex'
          onClick={()=>setSidebarSelection('MySpace')}>
            <span className='text-zinc-900 text-opacity-80 text-[14px] font-semibold leading-tight'>
              Cancel
            </span>
          </button>

          <button className='px-4 py-2.5 bg-violet-500 rounded-lg shadow border border-violet-500 justify-center items-center gap-2 flex'>
            <span className='text-white text-[14px] font-semibold leading-tight'>
              Publish
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAgentWindow;
