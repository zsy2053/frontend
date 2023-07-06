import React, { useState } from "react";
import { Box, Stack } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import OutlinedInput from "@mui/material/OutlinedInput";
import axios from "axios";

const UploadFilesModal = ({ setActive }) => {
  const [fileList, setFileList] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFileUpload = (fileList) => {
      const formData = new FormData();
      formData.append("collection_type", "file");
      for (let i = 0; i < fileList.length; i++) {
        const item = fileList[i];
        formData.append("collection_content", item);
        formData.append("collection_name", item.name.split(".")[0]);
      }
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
        setSubmitted(true);
        console.log(res);
        fetchCollectionData(setCollectionList);
      })
      .catch((err) => {
        window.alert("Collection create failed!");

        console.log(err);
        // navigate(-1);
      });
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const files = Array.from(event.dataTransfer.files).filter(
      (item) =>
        item.type.includes("pdf") ||
        item.type.includes("sheet") ||
        item.type.includes("excel")
    );
    if (files.length > 0) {
      setFileList(fileList.concat(files));
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(true);
  };

  return (
    <Box className='fixed h-screen w-screen grid place-items-center bg-black/40 z-50'>
      <Box className='w-[30rem] rounded-xl border bg-white'>
        {!submitted ? (
          <Stack className='flex flex-col p-6'>
            <Box className='flex justify-between mb-2'>
              <p className='text-lg'>Upload files</p>
              <button onClick={() => setActive(false)}>
                <CloseIcon htmlColor='#1c1c1c' />
              </button>
            </Box>
            <p className='text-[#555555] text-sm mb-5'>
              Upload files to this folder.
            </p>
            <label
              htmlFor='file'
              className={`flex flex-col justify-center items-center h-32 mb-4 rounded-lg border border-gray-200 hover:border-styleupPurple hover:bg-gray-100 cursor-pointer ${
                dragging && "border-styleupPurple bg-gray-100"
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={() => setDragging(false)}
            >
              <input
                type='file'
                accept='.xls,.csv,.pdf ,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet '
                onChange={(event) =>
                  setFileList(fileList.concat(Array.from(event.target.files)))
                }
                id='file'
                name='file'
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
                          {item.size >= 102400
                            ? Math.ceil(item.size / 10240) + "MB"
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
            <div className='flex h-6 items-center mb-9'>
              <img src='/icons/exclaimIcon.svg' className='mr-2' />
              <span className='text-zinc-900 text-opacity-80 text-[14px] font-medium leading-tight'>
                Free if your upload file is less than 20000 characters.
              </span>
            </div>
            <Box className='flex justify-stretch items-stretch'>
              <button
                onClick={() => setActive(false)}
                className='flex flex-auto justify-center items-center h-11 mr-3 rounded-lg border border-gray-300'
              >
                Cancel
              </button>
              <button
                onClick={() => handleFileUpload(fileList)}
                className='flex flex-auto justify-center items-center h-11 bg-styleupPurple rounded-lg text-white'
              >
                Upload
              </button>
            </Box>
          </Stack>
        ) : (
          <div className='flex flex-col justify-center items-center p-6'>
            <img src='/images/fileUploadModalSuccess.png' className='mb-8' />
            <div className='h-14 flex-col gap-2 inline-flex mb-12'>
              <div className='self-stretch text-zinc-900 text-[18px] font-semibold leading-7'>
                Congratulations
              </div>
              <div className='self-stretch text-neutral-600 text-[14px] font-normal leading-tight'>
                File uploaded successfully! Now you can start chat on the files.
              </div>
            </div>
            <Box className='flex w-full'>
              <button
                onClick={() => setActive(false)}
                className='flex-1 h-11 mr-3 rounded-lg border border-gray-300'
              >
                Cancel
              </button>
              <button
                onClick={() => setActive(false)}
                className='flex-1 h-11 bg-styleupPurple rounded-lg text-white'
              >
                Confirm
              </button>
            </Box>
          </div>
        )}
      </Box>
    </Box>
  );
};

export default UploadFilesModal;
