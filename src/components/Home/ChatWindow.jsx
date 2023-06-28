import { Stack, Box } from '@mui/system'
import React, { useState, useRef, useEffect } from 'react'
import FormControl from '@mui/material/FormControl';
import CircularProgress from '@mui/material/CircularProgress';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import MicIcon from '@mui/icons-material/Mic';
import AudioAnalyser from "react-audio-analyser";

const AudioMessage = ({ src }) => {
    const [playing, setPlaying] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);

    const audioRef = useRef()

    const formatTime = (time) => {
        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60);
            const formatMinutes = `${minutes}`;
            const seconds = Math.floor(time % 60);
            const formatSeconds =
                seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${formatMinutes}:${formatSeconds}`;
        }
        return '0:00';
    };

    const handlePlay = () => {
        setPlaying(true)
        // Subtle: duration is only updated after 1 second of playing, so we need to explicitly
        // set the duration for the first second.
        setTimeLeft(audioRef.current.duration)
        audioRef.current.play()
    }

    const handlePause = () => {
        audioRef.current.pause()
        setPlaying(false)
    }

    const handleTimeUpdate = () => {
        setTimeLeft(audioRef.current.duration - audioRef.current.currentTime)
    }

    return (
        <Box className={'self-end justify-center px-2 py-2 rounded-full mb-8 max-w-xl ' + (playing ? 'bg-styleupPurple' : 'bg-[#f2eefb]')}>
            <audio
                ref={audioRef}
                src={src}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handlePause}
            />
            <div className='flex items-center'>
                <button onClick={playing ? handlePause : handlePlay}>
                    <img src={playing ? '/icons/PlayerPauseIcon.svg' : '/icons/PlayerPlayIcon.svg'} />
                </button>
                <img src={playing ? '/icons/WaveformLight.svg' : '/icons/Waveform.svg'} className='mx-2' />
                <span className={playing ? 'text-white' : 'text-[#1c1c1c] text-opacity-80'}>{
                    playing ? formatTime(timeLeft) :
                        (
                            audioRef.current == null ?
                                '0:00' : formatTime(audioRef.current.duration)
                        )}</span>
            </div>
        </Box>
    )
}

const GoogleCalendarSignInButton = ({ googleCalendarSignIn }) => {
    return (
        <button onClick={googleCalendarSignIn}
            className='border border-styleupPurple text-styleupPurple rounded-full px-5 py-2.5 mb-8'>
            Access Calendar
        </button>
    )
}

const messageMapper = (item, index, googleCalendarSignIn) => {
    if (item.startsWith("Audio: ")) {
        return <AudioMessage key={index} src={item.substring(item.indexOf(':') + 1)} />
    }

    return item.startsWith("Human: ") ?
        <Box key={index} className='self-end justify-center px-4 py-3 bg-[#f2eefb] rounded-2xl mb-8 max-w-xl'>
            <span style={{ whiteSpace: 'pre-line' }}>
                {item.substring(item.indexOf(':') + 1)}
            </span>
        </Box>
        :
        <Box key={index} className='self-start flex-col'>
            <Box key={index} className='px-4 py-3 bg-[#f9fafb] rounded-2xl mb-8 max-w-xl'>
                <span style={{ whiteSpace: 'pre-line' }}>
                    {item.substring(item.indexOf(':') + 1)}
                </span>
            </Box>
            {
                item.includes("Need to login to google")
                && <GoogleCalendarSignInButton googleCalendarSignIn={googleCalendarSignIn} />
            }
        </Box>
}

const ChatWindow = ({ chatTitle, chatWindowIcon, chatSuggestions, content, chatMessage, setMessage, sendMessage, googleCalendarSignIn, audioStatus, setAudioStatus, audioProps, isLoading }) => {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [content]);


    return (
        <Stack className='flex flex-col w-full h-screen'>
            <Box className='flex p-6 items-center mt-[44px]'>
                <Box className='h-10 w-10 flex justify-center mr-4'><img src={chatWindowIcon} /></Box>
                <p className='text-[24px]'>{chatTitle}</p>
            </Box>
            <Box className='flex flex-col self-center w-5/6 justify-start overflow-x-hidden h-full mb-[210px]'>
                {content && content.length > 0 ?
                    content.map((item, index) => messageMapper(item, index, googleCalendarSignIn))
                    : <Box className='flex justify-center'>Chat History</Box>}
                <div ref={messagesEndRef} />
            </Box>
            <Box className='flex justify-center fixed bottom-0 bg-white right-0 left-0 ml-[368px]'>
                <Box className='flex-col w-5/6 justify-center' >
                    {!isLoading && chatSuggestions && chatSuggestions.length > 0 &&
                        <Box className='flex justify-start mb-4'>
                            <p className='text-[#555555]'>Chat Suggestions</p>
                        </Box>
                    }
                    <Box className='flex justify-start mb-4 overflow-x-auto whitespace-nowrap'>
                        {!isLoading && chatSuggestions && chatSuggestions.length > 0 &&
                            <button onClick={() => {
                                sendMessage(chatSuggestions[0]);
                            }} className='flex px-4 mr-4 justify-center items-center h-11 rounded-lg bg-[#f2eefb]'>
                                {chatSuggestions[0]}
                            </button>
                        }
                        {!isLoading && chatSuggestions && chatSuggestions.length > 1 &&
                            <button onClick={() => {
                                sendMessage(chatSuggestions[1]);
                            }} className='flex px-4 mr-4 justify-center items-center h-11 rounded-lg border border-gray-300'>
                                {chatSuggestions[1]}
                            </button>
                        }
                        {!isLoading && chatSuggestions && chatSuggestions.length > 2 &&
                            <button onClick={() => {
                                sendMessage(chatSuggestions[2]);
                            }} className='flex px-4 mr-4 justify-center items-center h-11 rounded-lg border border-gray-300'>
                                {chatSuggestions[2]}
                            </button>
                        }
                    </Box>
                    <Box className={'rounded-xl mb-4 ' + (audioStatus == 'recording' ? 'bg-[#f2eefb]' : 'border border-[#b09ae2]')}>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <Input
                                placeholder={audioStatus == 'recording' ? '' : 'Type new question'}
                                value={chatMessage}
                                onChange={(event) => setMessage(event.target.value)}
                                onKeyDown={(event) => {
                                    if (event.key == "Enter") {
                                        sendMessage();
                                        setMessage('');
                                    }
                                }}
                                disableUnderline
                                id="outlined-adornment-amount"
                                endAdornment={<InputAdornment position="end">{
                                    isLoading ? <Box className='flex items-center'><CircularProgress className='h-10 w-10 flex justify-center items-center' /></Box> :
                                        <Box className='flex items-center'>
                                            <button className='h-10 w-10 flex justify-center items-center'
                                                // onClick={(e) => audioChat(e, setAudioStatus)}
                                                onMouseDown={() => setAudioStatus('recording')}
                                                onMouseUp={() => setAudioStatus('inactive')}
                                            >
                                                <MicIcon fontSize='large' />
                                            </button>
                                            <button onClick={() => {
                                                sendMessage();
                                                setMessage('');
                                            }} className='h-10 w-10 ml-4 mr-4 flex justify-center'>
                                                <img src='/icons/SendIcon.svg' />
                                            </button>
                                        </Box>
                                }
                                </InputAdornment>}
                            />
                        </FormControl>
                    </Box>
                    <p className='flex justify-center mb-5'>Build with StyleUp</p>
                </Box>
            </Box>
            <div style={{ display: "none" }}><AudioAnalyser {...audioProps} /></div>
        </Stack>
    )
}

export default ChatWindow
