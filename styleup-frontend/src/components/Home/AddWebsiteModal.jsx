import React, { useState } from 'react'
import { Box, Stack } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import Input from '@mui/material/Input';
import axios from 'axios';

const handleLinkCreate = (websiteUrl, crawlLevel) => {
    const data = {
        "collection_content": websiteUrl,
        "collection_name": websiteUrl,
        "collection_type": "link",
        "link_levels": crawlLevel
    }
    axios({
        method: 'post',
        url: `${import.meta.env.VITE_API_URL}/api/bots/add_collection`,
        data,
        headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem('jwt')
        },
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
        // navigate(-1);
    });
}

const AddWebsiteModal = ({ setActive }) => {
    const [websiteUrl, setWebsiteUrl] = useState("");
    const [crawlLevel, setCrawlLevel] = useState(1);
    return (
        <Box className='fixed h-screen w-screen grid place-items-center bg-black/40 z-50'>
            <Box className='w-[30rem] rounded-xl border bg-white'>
                <Stack className='flex flex-col p-6'>
                    <Box className='flex justify-between mb-5'>
                        <p className='text-lg'>Type website</p>
                        <button onClick={() => setActive(false)}>
                            <CloseIcon htmlColor='#1c1c1c' />
                        </button>
                    </Box>
                    <Box className='flex justify-stretch items-stretch'>
                        <Box className='flex flex-auto pl-2 mb-6 h-11 rounded-lg border border-gray-300'>
                            <Input
                                disableUnderline
                                id="outlined-folder-name-input"
                                placeholder='https://www.styleup.fun'
                                onChange={(event) => setWebsiteUrl(event.target.value)}
                            />
                        </Box>
                        {/*<button className='flex w-40 justify-center items-center h-11 bg-[#7f56d9] rounded-lg'>
                            Fetch
                        </button>*/}
                    </Box>
                    <Box className='flex justify-stretch items-stretch mb-6'>
                        <button onClick={() => setCrawlLevel(1)}
                            className={'flex flex-auto justify-center items-center h-11 mr-6 rounded-lg border border-gray-300'
                                + ((crawlLevel == 1) ? ' bg-[#7f56d9]' : '')} >
                            level 1
                        </button>
                        <button onClick={() => setCrawlLevel(2)}
                            className={'flex flex-auto justify-center items-center h-11 rounded-lg border border-gray-300'
                                + ((crawlLevel == 2) ? ' bg-[#7f56d9]' : '')} >
                            level 2
                        </button>
                    </Box>
                    <p className='text-lg mb-2'>Included Links</p>
                    <p className='text-sm text-[#1c1c1c60] mb-6 overflow-auto'>
                        This will crawl all the links starting with the URL (not including files on the website).</p>
                    {/*<OutlinedInput
                        className='flex flex-auto h-11 rounded-lg border border-gray-200 mb-4'
                        id="outlined-folder-name-input"
                        placeholder='http://www.styleup.fun'
                    />
                    <OutlinedInput
                        className='flex flex-auto h-11 rounded-lg border border-gray-200 mb-4'
                        id="outlined-folder-name-input"
                        placeholder='http://www.untitledui.com'
                    />
                    <OutlinedInput
                        className='flex flex-auto h-11 rounded-lg border border-gray-200 mb-4'
                        id="outlined-folder-name-input"
                        placeholder='http://www.untitledui.com'
                    />
                    <OutlinedInput
                        className='flex flex-auto h-11 rounded-lg border border-gray-200 mb-4'
                        id="outlined-folder-name-input"
                        placeholder='http://www.untitledui.com'
                    />
                    <OutlinedInput
                        className='flex flex-auto h-11 rounded-lg border border-gray-200 mb-4'
                        id="outlined-folder-name-input"
                        placeholder='http://www.untitledui.com'
                    />
                    <button className='flex justify-center items-center w-40 h-10 bg-[#10182810] rounded-lg mb-6'>
                        <p className='text-xl mr-3'>
                            +
                        </p>
                        Add more links
                    </button>*/}

                    <Box className='flex justify-stretch items-stretch'>
                        <button onClick={() => setActive(false)}
                            className='flex flex-auto justify-center items-center h-11 mr-3 rounded-lg border border-gray-300'>
                            Cancel
                        </button>
                        <button onClick={() => handleLinkCreate(websiteUrl, crawlLevel)} className='flex flex-auto justify-center items-center h-11 bg-[#7f56d9] rounded-lg'>
                            Create
                        </button>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}

export default AddWebsiteModal
