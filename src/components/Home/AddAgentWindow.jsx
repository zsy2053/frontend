import React, { useState } from "react";
import axios from 'axios'
import ReactDOM from "react-dom";
import { Box, Stack } from "@mui/system";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { addAgentSelectOptions } from "../../constants";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ClearIcon from "@mui/icons-material/Clear";
import Chip from "@mui/material/Chip";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Modal from "@mui/material/Modal";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CustomButton from "./CustomButton";
import AddWebsiteModal from "./AddWebsiteModal";

const AddAgentWindow = ({ setSidebarSelection, handleCollectionDelete, setCollectionList, currentFocus, fetchCollectionData }) => {
  const [collectionName, setCollectionName] = useState("")
  const [fileList, setFileList] = useState([]);
  const [coverImg, setCoverImg] = useState("");
  const [count, setCount] = useState(0);
  const [chips, setChips] = useState([]);
  const [phText, setPhText] = useState("Select category");
  const [textArea, setTextArea] = useState("");
  const [linkCollectionList, setLinkCollectionList] = useState([]);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [crawlLevel, setCrawlLevel] = useState(1);
  const [includedLinks, setIncludedLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [addWebsiteModalActive, setAddWebsiteModalActive] = useState(false);

  const handleLinkCreate = (websiteUrl, crawlLevel = 2) => {
    if (includedLinks.length == 0) {
      window.alert("Please give seed url first");
      return;
    }
    //this will probably mess up if the address has http in it... ex: www.http.com
    if (!websiteUrl.includes("http") || !websiteUrl.includes("https")) {
      websiteUrl = "https://" + websiteUrl;
    }
    let readyUrls = websiteUrl;
    const domainName = new URL(websiteUrl).hostname
      .replace("www.", "")
      .split(".")[0];

    let formData = new FormData();
    formData.append("collection_content", readyUrls);
    formData.append("agent_name", collectionName);
    formData.append("coverImg", coverImg);
    formData.append("category", phText);
    formData.append("introduction", textArea);
    formData.append("tags", chips);
    formData.append("agent_type", "link");
    axios({
      method: "post",
      url: `${import.meta.env.VITE_API_URL}/api/bots/add_collection`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": localStorage.getItem("jwt"),
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        console.log(res);
        setOpenModal(true);
        setModalState(2);
        setSidebarSelection("MySpace");
      })
      .catch((err) => {
        console.log(err);
        // navigate(-1);
      });
  };

  const fetchLinks = (websiteUrl) => {
    setIsLoading(true);
    if (!websiteUrl.includes("http") || !websiteUrl.includes("https")) {
      websiteUrl = "https://" + websiteUrl;
    }
    axios({
      method: "post",
      url: `${import.meta.env.VITE_API_URL}/api/bots/fetch_links`,
      data: {
        urls: [websiteUrl],
        link_levels: crawlLevel
      },
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("jwt"),
      },
    })
      .then(response => {
        //setLinks(hrefs);
        let dataList = []
        for (let i = 0; i < response.data.data.length; i++) {
          if(response.data.data[i] && response.data.data[i].includes("https")) {
            dataList.push({id: i, link: response.data.data[i]});
          }
        }
        setIncludedLinks(dataList);
        setCount(dataList.length);
        setIsLoading(false);
      })
      .catch(err => {
        window.alert(err);
        setIsLoading(false);
      });
  }

  const handleFileUpload = (fileList, setIsLoading) => {
    setIsLoading(true);
    const formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      const item = fileList[i];
      formData.append("collection_content", item);
      formData.append("collection_name", item.name.split(".")[0]);
    }
    formData.append("agent_name", collectionName);
    formData.append("coverImg", coverImg);
    formData.append("category", phText);
    formData.append("introduction", textArea);
    formData.append("tags", chips);
    formData.append("agent_type", "file");
    axios({
      method: "post",
      url: `${import.meta.env.VITE_API_URL}/api/bots/add_collection`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": localStorage.getItem("jwt"),
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        console.log(res);
        fetchCollectionData(setCollectionList);
        setOpenModal(true);
        setModalState(0);
        setIsLoading(false);
      })
      .catch((err) => {
        //fetchCollectionData(setCollectionList);
        window.alert(err);
        console.log(err);
        // navigate(-1);
        setIsLoading(false);
      });
  };

  const [dragging, setDragging] = useState(false);
  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (
      event.dataTransfer.files[0].type.includes("png") ||
      event.dataTransfer.files[0].type.includes("jpg") ||
      event.dataTransfer.files[0].type.includes("jpeg")
    ) {
      setCoverImg(event.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(true);
  };

  const [openSelect, setOpenSelect] = useState(false);

  const handleSelect = (id, ph) => {
    setOpenSelect(false);
    setPhText(ph);
  };

  const [chipVal, setChipVal] = useState("");
  const handleChips = (e) => {
    if (e.key === "Enter") {
      if (chips.length < 3) {
        setChips([...chips, chipVal]);
        setChipVal("");
      } else {
        window.alert("Can only add 3 tags at most")
      }
    }
  };
  const handleChipDelete = (index) => () => {
    setChips(chips.filter((item, i) => i !== index));
  };

  const [openModal, setOpenModal] = useState(false);
  const [modalState, setModalState] = useState(0);
  const handlePublish = () => {
    if (fileList.length > 0) {
      handleFileUpload(fileList, setIsLoading);
    } else if (websiteUrl.length > 0) {
      handleLinkCreate(websiteUrl);
    } else {
      window.alert("Please upload file or provide website url as data source")
    }
  };

  return (
    <div className='py-8 h-[100vh] overflow-y-scroll'>
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
      <form
        className='flex w-full justify-start px-8 flex-col'
        onSubmit={(e) => e.preventDefault()}
      >
        {/* App Name input */}
        <div className='flex'>
          <div className='w-[280px] text-zinc-900 text-opacity-80 text-[14px] font-semibold leading-tight mr-8'>
            App Name
          </div>
          <input
            className='w-[512px] h-11 inline-block px-[14px] py-[10px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-styleupPurple focus:border-transparent'
            placeholder='e.g. Chat with Environmental Economics Expert'
            onChange={(e) => setCollectionName(e.target.value)}
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
              htmlFor='image_file'
              className={`flex flex-col justify-center items-center w-[512px] h-32 mb-4 rounded-lg border border-gray-200 hover:border-styleupPurple hover:bg-gray-100 cursor-pointer ${dragging && "border-styleupPurple bg-gray-100"
                }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={() => setDragging(false)}
            >
              <input
                type='file'
                accept='.png,.jpg,.jpeg'
                onChange={(event) => setCoverImg(event.target.files[0])}
                id='image_file'
                name='image_file'
                key={coverImg && coverImg.name} // to reset the input. Otherwise, the same file won't be accepted
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
            {coverImg && (
              <div className='w-full overflow-hidden p-4 h-[72px] flex items-center border rounded-lg border-gray-200 hover:border-styleupPurple mb-3'>
                <div className='flex flex-col w-[332px]'>
                  <p className='text-zinc-900 text-[14px] font-medium leading-tight text-ellipsis overflow-hidden'>
                    <img src={URL.createObjectURL(coverImg)} />
                  </p>
                  <span className='text-neutral-600 text-[14px] font-normal leading-tight'>
                    {coverImg.size >= 10000024
                      ? Math.ceil(coverImg.size / 1000024) + "MB"
                      : Math.ceil(coverImg.size / 1024) + "KB"}
                  </span>
                </div>

                <img
                  src='/icons/trashIcon.svg'
                  onClick={() => {
                    setCoverImg("");
                  }}
                  className='hover:cursor-pointer ml-auto hover:bg-gray-100 rounded-full p-1'
                />
              </div>
            )}
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
              className='flex w-[512px] min-h-11 px-[14px] py-[10px] border
            border-gray-300 rounded-lg focus:ring-2
            focus:ring-styleupPurple items-center overflow-hidden'
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
                      maxWidth: "150px",
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

        {/* Upload agent data */}
        <div className='flex'>
          <div className='w-[280px] mr-8 flex flex-col'>
            <span className='text-zinc-900 text-opacity-80 text-[14px] font-semibold leading-tight'>
              Agent data
            </span>
            <span className='text-neutral-600 text-[14px] font-normal leading-tight'>
              Uploading a file as agent data
            </span>
          </div>
          <div className='flex flex-col w-[512px]'>
          <label
            htmlFor='data_file'
            className={`flex flex-col justify-center items-center h-32 mb-4 rounded-lg border border-gray-200 hover:border-styleupPurple hover:bg-gray-100 cursor-pointer ${dragging && "border-styleupPurple bg-gray-100"
              }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={() => setDragging(false)}
          >
            <input
              type='file'
              accept='.xls,.csv,.pdf,.txt'
              onChange={(event) => {
                setFileList(fileList.concat(Array.from(event.target.files)))
                setCrawlLevel(1)
                setIncludedLinks([])
                setWebsiteUrl("")
                }
              }
              id='data_file'
              name='data_file'
              key={fileList.length > 0 && fileList[0].name} // to reset input. otherwise, same file cannot be uploaded again
              hidden
              multiple
            />
            <img
              src='/icons/uploadIcon.svg'
              className='w-5 h-5 self-center'
            />
            <Box className='flex'>
              <p className='text-styleupPurple font-semibold mr-1'>
                Click to upload
              </p>
              <p className='text-[#555555]'>or drag and drop</p>
            </Box>
            <p className='text-[#555555]'>XLS or CSV or PDF</p>
          </label>
          <div
            className={fileList.length > 3 && "overflow-y-scroll h-72 mb-4"}
          >
            {fileList.length > 0 &&
              fileList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='w-full overflow-hidden p-4 h-[72px] flex items-center border rounded-lg border-gray-200 hover:border-styleupPurple mb-3'
                  >
                    <img
                      src='/icons/fileIcon.svg'
                      width={24}
                      height={24}
                      className='mr-4 flex-shrink-0'
                    />
                    <div className='flex flex-col w-[332px]'>
                      <p className='text-zinc-900 text-[14px] font-medium leading-tight text-ellipsis overflow-hidden'>
                        {item.name}
                      </p>
                      <span className='text-neutral-600 text-[14px] font-normal leading-tight'>
                        {item.size >= 1000024
                          ? Math.ceil(item.size / 1000024) + "MB"
                          : Math.ceil(item.size / 1024) + "KB"}
                      </span>
                    </div>

                    <img
                      src='/icons/trashIcon.svg'
                      onClick={() => {
                        setFileList(
                          fileList.filter(
                            (subItem) => subItem.name != item.name
                          )
                        );
                      }}
                      className='hover:cursor-pointer ml-auto hover:bg-gray-100 rounded-full p-1'
                    />
                  </div>
                );
              })}
          </div>
          </div>
        </div>

        <div className='w-full my-8'>
          <Divider />
        </div>

        {/* Upload agent data */}
        <div className='flex'>
          <div className='w-[280px] mr-8 flex flex-col'>
            <span className='text-zinc-900 text-opacity-80 text-[14px] font-semibold leading-tight'>
              Agent data
            </span>
            <span className='text-neutral-600 text-[14px] font-normal leading-tight'>
              Crawling website as agent data
            </span>
          </div>
          <div className='flex flex-col w-[512px]'>
          <Stack className='flex flex-col p-6'>
            <Box className='flex gap-6 mb-8'>
              <Box className='flex h-11 rounded-lg border border-gray-300 flex-1'>
                <div className='px-3 py-2.5 rounded-l-lg justify-start items-center flex border-r'>
                  <span className='text-neutral-400 text-[16px] font-normal leading-normal select-none'>
                    http://
                  </span>
                </div>
                <input
                  type='text'
                  id='outlined-folder-name-input'
                  placeholder='www.untitledui.com'
                  className='text-[16px] font-normal leading-normal focus:outline-none px-[14px] py-[10px] rounded-lg flex-1'
                  onChange={(event) => setWebsiteUrl(event.target.value)}
                />
              </Box>
              <CustomButton title="Fetch" size="expand" onClick={() => {
                fetchLinks(websiteUrl)
                setFileList([])
              }} />
            </Box>
            <p className='text-lg mb-2'>Crawling Levels</p>
            <Box className='flex justify-between gap-6 mb-6'>
              <button
                onClick={() => setCrawlLevel(1)}
                className={
                  `h-11 rounded-lg border border-gray-300 flex-auto ${crawlLevel == 1 ? "bg-lime-400 hover:bg-lime-500" : "bg-white hover:bg-gray-100"} transition`}
              >
                Level 1
              </button>
              <button
                onClick={() => setCrawlLevel(2)}
                className={
                  `h-11 rounded-lg border border-gray-300 flex-auto ${crawlLevel == 2 ? " bg-lime-400 hover:bg-lime-500" : "bg-white hover:bg-gray-100"} transition`}
              >
                Level 2
              </button>
              <button
                onClick={() => setCrawlLevel(3)}
                className={
                  `h-11 rounded-lg border border-gray-300 flex-auto ${crawlLevel == 3 ? " bg-lime-400 hover:bg-lime-500" : "bg-white hover:bg-gray-100"} transition`}
              >
                Level 3
              </button>
            </Box>
            <p className='text-lg mb-2'>Included Links</p>
            <p className='text-sm text-[#1c1c1c60] mb-6 overflow-auto'>
              This will crawl all the links starting with the URL (not including
              files on the website).
            </p>
            <div
              className={`flex flex-col gap-5 mb-5 justify-start max-h-64 ${includedLinks.length > 4 && "overflow-y-scroll"
                }`}
            >
              {includedLinks.map((link) => (
                <div
                  className='flex flex-1 rounded-lg items-center gap-2'
                  key={link.id}
                >
                  <Box className='flex h-11 rounded-lg border border-gray-300 flex-1 items-center'>
                    <div className='px-3 py-2.5 rounded-l-lg border-r'>
                      <span className='text-neutral-400 text-[16px] font-normal leading-normal select-none'>
                        http://
                      </span>
                    </div>
                    <input
                      type='text'
                      id={link.id}
                      placeholder='www.untitledui.com'
                      value={link.link.split("https://")[1]}
                      className='text-[16px] font-normal leading-normal focus:outline-none px-[14px] rounded-lg flex-1'
                      onChange={(event) => {
                        setIncludedLinkVal(link.id, event.target.value);
                      }}
                    />
                  </Box>
                  <div
                    className='w-[28px] h-[28px] hover:cursor-pointer hover:bg-gray-100 rounded-full p-1'
                    onClick={() => deleteIncludedLink(link.id)}
                  >
                    <img src='/icons/trashIcon.svg' />
                  </div>
                </div>
              ))}
            </div>
          </Stack>
          </div>
        </div>
        {/* buttons */}
        {isLoading ? <div className='flex w-full'><img src='/icons/Spinner.svg'
            class="h-10 w-10 ml-5 mr-7 animate-spin motion-reduce:animate-[spin_1.5s_linear_infinite]" /></div>
            :
            <div className='w-full h-10 justify-end items-center gap-3 inline-flex'>
              <CustomButton onClick={() => setSidebarSelection("MySpace")} title='Cancel' type='sub' />
              <CustomButton onClick={handlePublish} title='Publish' type='main' />
            </div>
          }

        <Modal
          open={openModal}
          onClose={() => modalState === 1 && setOpenModal(false)}
        >
          <div className='bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[464] rounded-xl p-6 flex flex-col items-center'>
            {modalState === 0 && (
              <>
                <img
                  src={coverImg && URL.createObjectURL(coverImg)}
                  className='w-[464px] rounded-3xl mb-6'
                ></img>
                <div className='w-[464px] text-center text-zinc-900 text-[24px] font-semibold leading-7 mb-4'>
                  Congratulations
                </div>
                <div className='w-[464px] text-center text-neutral-600 text-[14px] font-normal leading-tight mb-6'>
                  This chat app has been published. Community members will be
                  able to chat based on this data file and app settings.
                </div>
                <div className='flex w-full'>
                  <button
                    onClick={() => setOpenModal(false)} //filler. this is supposed to delete the agent?
                    className='flex-1 h-11 mr-3 rounded-lg border border-gray-300'
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setOpenModal(false)}
                    className='flex-1 h-11 bg-styleupPurple rounded-lg text-white'
                  >
                    Confirm
                  </button>
                </div>
              </>
            )}
            {modalState === 1 && (
              <>
                <img
                  src='/images/addAgentModalSuccess.png'
                  className='w-[312px] rounded-3xl mb-6'
                ></img>
                <div className='w-[464px] text-center text-zinc-900 text-[24px] font-semibold leading-7 mb-4'>
                  Share with others
                </div>
                <div className='w-full justify-start items-center flex'>
                  <div className='flex-1 h-11 px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 text-zinc-900 mr-1'>
                    Link goes here...
                  </div>
                  <div className='w-10 h-10 p-2.5 justify-center items-center gap-2 inline-flex'>
                    <ContentCopyIcon />
                  </div>
                </div>
              </>
            )}
            {modalState === 2 && (
              <div className='flex flex-col justify-center items-center p-6'>
                <img src='/images/websiteUploadModalSuccess.png' className='mb-9' />
                <div className='text-center text-neutral-600 text-[32px] font-semibold mb-5'>
                  Hang Tight
                </div>
                <div className='w-[398px] text-center text-neutral-600 text-[16px] font-normal leading-snug mb-6'>
                  We're preparing your data upload. We'll notify you by email as
                  soon as it's ready!
                </div>
                <button
                  onClick={() => setOpenModal(false)}
                  className='w-[202px] h-11 bg-styleupPurple rounded-lg text-white'
                >
                  Confirm
                </button>
              </div>
            )}
          </div>
        </Modal>
      </form>
    </div>
  );
};

export default AddAgentWindow;
