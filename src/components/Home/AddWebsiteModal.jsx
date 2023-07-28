import React, { useState } from "react";
import { Box, Stack } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import Input from "@mui/material/Input";
import axios from "axios";
import CustomButton from "./CustomButton";

const AddWebsiteModal = ({ setActive, addWebsiteModalActive, fetchCollectionData, setCollectionList }) => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [crawlLevel, setCrawlLevel] = useState(1);
  const [includedLinks, setIncludedLinks] = useState([]);
  const [count, setCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleLinkCreate = (websiteUrl, crawlLevel) => {
    if (includedLinks.length == 0) {
      window.alert("Please give seed url first");
      return;
    }
    //this will probably mess up if the address has http in it... ex: www.http.com
    if (!websiteUrl.includes("http") || !websiteUrl.includes("https")) {
      websiteUrl = "https://" + websiteUrl;
    }
    let readyUrls = [websiteUrl];
    const domainName = new URL(websiteUrl).hostname
      .replace("www.", "")
      .split(".")[0];

    const data = {
      collection_content: readyUrls,
      collection_name: domainName,
      collection_type: "link",
      link_levels: crawlLevel,
    };
    axios({
      method: "post",
      url: `${import.meta.env.VITE_API_URL}/api/bots/add_collection`,
      data,
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("jwt"),
      },
    })
      .then((res) => {
        console.log(res);
        setSubmitted(true);
        //fetchCollectionData(setCollectionList);
      })
      .catch((err) => {
        console.log(err);
        // navigate(-1);
      });
  };
  /*const newIncludedLink = (link) => {
    setIncludedLinks([...includedLinks, { id: count, link: link }]);
    setCount(count + 1);
  };*/
  const setIncludedLinkVal = (key, val) => {
    const newLinks = includedLinks.map((item) => {
      if (item.id == key) {
        item.link = val;
      }
      return item;
    });
    setIncludedLinks(newLinks);
  };

  const deleteIncludedLink = (key) => {
    const newLinks = includedLinks.filter((link) => link.id != key);
    setIncludedLinks(newLinks);
  };
  return (
    <Box className='fixed h-screen w-screen grid place-items-center bg-black/40 z-50'>
      <Box className='w-[512px] rounded-xl border bg-white'>
        {!submitted ? (
          <Stack className='flex flex-col p-6'>
            <Box className='flex justify-between mb-5'>
              <p className='text-lg'>Type website</p>
              <button onClick={() => setActive(false)}>
                <CloseIcon htmlColor='#1c1c1c' />
              </button>
            </Box>
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
              <CustomButton title="Fetch" size="expand" onClick={() => fetchLinks(websiteUrl)} />
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
            {/*<button
              className='flex justify-center items-center w-40 h-10 bg-[#10182810] rounded-lg mb-6'
              onClick={() => newIncludedLink()}
            >
              <p className='text-[20px] leading-[20px] mr-3'>+</p>
              Add more links
            </button>*/}
            {isLoading ? <Box className='flex justify-stretch items-stretch gap-2'><img src='/icons/Spinner.svg'
                class="h-10 w-10 ml-5 mr-7 animate-spin motion-reduce:animate-[spin_1.5s_linear_infinite]" /></Box>
              :
              <Box className='flex justify-stretch items-stretch gap-2'>
                <CustomButton onClick={() => setActive(false)} title="Cancel" size="expand" type="sub" />
                <CustomButton onClick={() => handleLinkCreate(websiteUrl, crawlLevel)} title="Create" size="expand" />
              </Box>
            }
          </Stack>
        ) : (
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
              onClick={() => setActive(false)}
              className='w-[202px] h-11 bg-styleupPurple rounded-lg text-white'
            >
              Confirm
            </button>
          </div>
        )}
      </Box>
    </Box>
  );
};

export default AddWebsiteModal;
