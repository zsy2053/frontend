import { Stack, Box } from '@mui/system'
import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { SendIcon, CalendarAgentIcon } from "../../assets";

const ChatWindow = () => {
    return (
        <Stack className='flex flex-col h-full justify-between'>
            <Box className='flex p-6 items-center'>
                <Box className='h-10 w-10 flex justify-center mr-4'><img src={CalendarAgentIcon} /></Box>
                <p className='text-[24px]'>Calendar Agent</p>
            </Box>
            <Box className='flex justify-center'>
                Chat history
            </Box>
            <Box className='flex justify-center'>
                <Box className='flex-col w-5/6 justify-center' >
                    <Box className='border border-[#b09ae2] rounded-xl mb-4'>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <Input
                                placeholder='Type new question'
                                disableUnderline
                                id="outlined-adornment-amount"
                                endAdornment={<InputAdornment position="end">
                                    <button className='h-10 w-10 mr-4 flex justify-center'><img src={SendIcon} /></button>
                                </InputAdornment>}
                            />
                        </FormControl>
                    </Box>
                    <p className='flex justify-center mb-5'>Build with StyleUp</p>
                </Box>
            </Box>
        </Stack>
    )
}

export default ChatWindow