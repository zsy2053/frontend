import React from 'react'
import { Stack, Box } from '@mui/system'
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';

const Label = ({text}) => {
  return (
    <Box className='bg-[#e5ecf6] text-gray-600 rounded px-1 mx-1 text-sm'>
      {text}
    </Box>
  )
}

const CommunityWindow = () => {
  return (
    <Stack className='flex flex-col flex-auto h-full items-center'>
      <Box className='flex flex-col mt-12 mb-7 items-center'>
        <p className='text-[28px]'>
          Find Your Favorate Agents
        </p>
        <p className='mt-2 text-sm text-gray-600'>
          Find agents to power your life and work
        </p>
      </Box>
      <Input
        className='bg-[#00000005] rounded-lg'
        placeholder='Search'
        disableUnderline
        id="search-agent"
        startAdornment={<InputAdornment position='start'>
          <SearchIcon />
        </InputAdornment>}
        endAdornment={<InputAdornment position="end">
          <Box>
            <button className='flex mr-2 justify-center items-center'>
              <KeyboardCommandKeyIcon fontSize='small'/>
              <p className='text-xl'>/</p>
            </button>
          </Box>
        </InputAdornment>}
      />
      <Box className='mt-3 flex'>
        <Label text='Game' />
        <Label text='Design' />
        <Label text='Coding' />
        <Label text='Productivity' />
      </Box>
      <Box className='mt-3 mb-6 flex'>
        <Label text='Social' />
        <Label text='Health' />
        <Label text='Travel' />
      </Box>
      Cards
    </Stack>
  )
}

export default CommunityWindow