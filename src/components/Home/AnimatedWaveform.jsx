import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'

const AnimatedWaveform = () => {
    const [start, setStart] = useState(false)
    useEffect(() => {
        setStart(true)
    }, [])
    return (
        <Box className='flex w-[350px] relative'>
            <img src='/icons/Waveform.svg' />
            <img src='/icons/Waveform.svg' />
            <img src='/icons/Waveform.svg' />
            <img src='/icons/Waveform.svg' />
            <Box className={
                'absolute right-0 bg-[#f2eefb] h-10 w-[350px] '
                + (start ? 'transition-transform duration-[5000ms] ease-linear origin-right scale-x-0' : '')} />
        </Box>
    )
}

export default AnimatedWaveform