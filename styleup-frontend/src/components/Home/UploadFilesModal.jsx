import React from 'react'
import { Box, Stack } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import OutlinedInput from '@mui/material/OutlinedInput';

const UploadFilesModal = ({ setActive }) => {
    return (
        <Box className='fixed h-screen w-screen grid place-items-center bg-black/40'>
            <Box className='w-[30rem] rounded-xl border bg-white'>
                <Stack className='flex flex-col p-6'>
                    <Box className='flex justify-between mb-2'>
                        <p className='text-lg'>Upload files</p>
                        <button onClick={() => setActive(false)}>
                            <CloseIcon htmlColor='#1c1c1c' />
                        </button>
                    </Box>
                    <p className='text-[#555555] text-sm mb-5'>Upload files to this folder.</p>
                    <button className='flex flex-col justify-center items-center h-32 mb-4 rounded-lg border border-gray-200'>
                        <Box className='flex'>
                            <p className='text-[#6941c6] font-semibold mr-1'>Click to upload</p>
                            <p className='text-[#555555]'>or drag and drop</p>
                        </Box>
                        <p className='text-[#555555]'>XLS or CSV</p>
                    </button>
                    <p className='text-[#555555] text-sm font-medium mb-1.5'>Folder name</p>
                    <OutlinedInput
                        className='rounded-lg border border-gray-200 mb-8'
                        id="outlined-folder-name-input"
                        placeholder='e.g. Data testing'
                    />
                    <Box className='flex justify-stretch items-stretch'>
                        <button onClick={() => setActive(false)}
                            className='flex flex-auto justify-center items-center h-11 mr-3 rounded-lg border border-gray-300'>
                            Cancel
                        </button>
                        <button className='flex flex-auto justify-center items-center h-11 bg-[#7f56d9] rounded-lg'>
                            Upload
                        </button>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}

export default UploadFilesModal