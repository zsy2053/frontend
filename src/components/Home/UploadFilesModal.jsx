import React, {useState} from 'react'
import { Box, Stack } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import OutlinedInput from '@mui/material/OutlinedInput';
import axios  from 'axios';

const handleFileUpload = (fileList) => {
  for (let i = 0; i < fileList.length; i++) {
    const item = fileList[i];
    const formData = new FormData();
    formData.append("collection_content", item);
    formData.append("collection_name", item.name.split('.')[0]);
    formData.append("collection_type", "file");
    axios({
        method: 'post',
        url: `${import.meta.env.VITE_API_URL}/api/bots/add_collection`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data",
        "x-access-token": localStorage.getItem('jwt'),
      "Access-Control-Allow-Origin": "*" },
    }).then((res) => {
        window.alert("Collection create success!");
        console.log(res);
    }).catch((err) => {
        window.alert("Collection create failed!");

        console.log(err);
       // navigate(-1);
    });
  }
}

const UploadFilesModal = ({ setActive }) => {
    const [fileList, setFileList] = useState([]);

    return (
        <Box className='fixed h-screen w-screen grid place-items-center bg-black/40 z-50'>
            <Box className='w-[30rem] rounded-xl border bg-white'>
                <Stack className='flex flex-col p-6'>
                    <Box className='flex justify-between mb-2'>
                        <p className='text-lg'>Upload files</p>
                        <button onClick={() => setActive(false)}>
                            <CloseIcon htmlColor='#1c1c1c' />
                        </button>
                    </Box>
                    <p className='text-[#555555] text-sm mb-5'>Upload files to this folder.</p>
                    <label htmlFor="file" className='flex flex-col justify-center items-center h-32 mb-4 rounded-lg border border-gray-200'>
                        <input type="file" onChange={(event) => setFileList(fileList.concat(Array.from(event.target.files)))} id="file" name="file" hidden multiple />
                        <Box className='flex'>
                            <p className='text-styleupPurple font-semibold mr-1'>Click to upload</p>
                            <p className='text-[#555555]'>or drag and drop</p>
                        </Box>
                        <p className='text-[#555555]'>XLS or CSV or PDF</p>
                    </label>
                    {fileList.length > 0 && fileList.map((item, index) => {
                      return(
                    <div key={index}>
                    <p
                      onClick={()=>{
                        setFileList(fileList.filter((subItem)=>subItem.name != item.name))}}
                      className='text-[#555555] text-sm font-medium mb-1.5'>{item.name}</p>
                    </div>);})}
                    <Box className='flex justify-stretch items-stretch'>
                        <button onClick={() => setActive(false)}
                            className='flex flex-auto justify-center items-center h-11 mr-3 rounded-lg border border-gray-300'>
                            Cancel
                        </button>
                        <button onClick={() => handleFileUpload(fileList)}
                          className='flex flex-auto justify-center items-center h-11 bg-styleupPurple rounded-lg'>
                            Upload
                        </button>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}

export default UploadFilesModal
