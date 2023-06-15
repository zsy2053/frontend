import { Stack, Box } from '@mui/system'
import React from 'react'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
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
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            placeholder='Type new question'
                            endAdornment={<InputAdornment position="end">
                                <Box className='h-10 w-10 flex justify-center'><img src={SendIcon} /></Box>
                            </InputAdornment>}
                        />
                    </FormControl>
                    <p className='flex justify-center'>Build with StyleUp</p>
                </Box>
            </Box>
        </Stack>
    )
}

export default ChatWindow