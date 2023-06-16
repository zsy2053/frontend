import { Stack, Box } from '@mui/system'
import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { SendIcon, CalendarAgentIcon } from "../../assets";

const ChatWindow = () => {
    const [showPlaceholder, setShowPlaceholder] = useState(true)
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
                                // FIXME: placeholder text will show before modals, with it's not supposed to
                                // placeholder='Type new question'
                                // this placeholder element is a hack.
                                onChange={(event) => setShowPlaceholder(event.target.value === '')}
                                disableUnderline
                                id="outlined-adornment-amount"
                                endAdornment={<InputAdornment position="end">
                                    <Box className='h-10 w-10 mr-4 flex justify-center'><img src={SendIcon} /></Box>
                                </InputAdornment>}
                            />
                        </FormControl>
                        <Box className='absolute top-2.5 left-2.5'>
                            {false /* showPlaceholder */ && <p className='text-[#555555]'>Type new question</p>}
                        </Box>
                    </Box>
                    <p className='flex justify-center mb-5'>Build with StyleUp</p>
                </Box>
            </Box>
        </Stack>
    )
}

export default ChatWindow