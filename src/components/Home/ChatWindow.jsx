import { Stack, Box } from '@mui/system'
import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { SendIcon, CalendarAgentChatIcon, AITutorChatIcon, ChatWithDataFileChatIcon } from "../../assets";
import AgentType from './AgentType';
import MicIcon from '@mui/icons-material/Mic';
import Divider from '@mui/material/Divider';

const checkAIMessage = (message, googleCalendarSignIn) => {
   return message === " Need to login to google" ? <div><p>{message}</p><button onClick={googleCalendarSignIn}>Google Signin</button></div> : message
}

const messageMapper = (item, index, googleCalendarSignIn) => {
    return item.startsWith("Human: ") ?
        <Box key={index} className='self-end justify-center px-4 py-3 bg-[#f2eefb] rounded-2xl mb-8 max-w-xl'>{item.split(':')[1]}</Box>
        : <Box key={index} className='self-start justify-center px-4 py-3 bg-[#f9fafb] rounded-2xl mb-8 max-w-xl'>{checkAIMessage(item.split(':')[1], googleCalendarSignIn)}</Box>
}

const ChatWindow = ({ agentType, chatTitle, content, chatMessage, setMessage, sendMessage, googleCalendarSignIn }) => {
    const metadata = [
        {
            type: AgentType.CalendarAgent, icon: CalendarAgentChatIcon, title: "Calendar Agent", chatSuggestions: [
                "How does my week look like?", "Am I free at 10am tomorrow?", "What's on my calendar for this week?"
            ]
        },
        {
            type: AgentType.AITutor, icon: AITutorChatIcon, title: "AI Tutor", chatSuggestions: [
                "Why is the sky blue?", "Explain more", "Quiz me"
            ]
        },
        {
            type: AgentType.ChatWithDataFile, icon: ChatWithDataFileChatIcon, title: "Chat with your data files", chatSuggestions: [
                "Summarize the file", "Explain more", "Quiz me"
            ]
        }
    ]
    const { icon, title, chatSuggestions } = metadata.find((e) => e.type == agentType)
    return (
        <Stack className='flex flex-col h-full justify-between'>
            <Box className='flex p-6 items-center'>
                <Box className='h-10 w-10 flex justify-center mr-4'><img src={chatTitle.icon_raw} /></Box>
                <p className='text-[24px]'>{chatTitle.name}</p>
            </Box>
            <Box className='flex flex-col self-center w-5/6 justify-start flex-grow'>
                {content && content.length > 0 ?
                    content.map((item, index) => messageMapper(item, index, googleCalendarSignIn))
                    : <Box className='flex justify-center'>Chat History</Box>}
            </Box>
            <Box className='flex justify-center'>
                <Box className='flex-col w-5/6 justify-center' >
                    <Box className='flex justify-start mb-4'>
                        <p className='text-[#555555]'>Chat Suggestions</p>
                    </Box>
                    <Box className='flex justify-start mb-4'>
                        <button onClick={() => {
                          sendMessage(chatSuggestions[0]);
                        }} className='flex px-4 mr-4 justify-center items-center h-11 rounded-lg bg-[#f2eefb]'>
                            {chatSuggestions[0]}
                        </button>
                        <button onClick={() => {
                          sendMessage(chatSuggestions[1]);
                        }} className='flex px-4 mr-4 justify-center items-center h-11 rounded-lg border border-gray-300'>
                            {chatSuggestions[1]}
                        </button>
                        <button onClick={() => {
                          sendMessage(chatSuggestions[2]);
                        }} className='flex px-4 mr-4 justify-center items-center h-11 rounded-lg border border-gray-300'>
                            {chatSuggestions[2]}
                        </button>
                    </Box>
                    <Box className='border border-[#b09ae2] rounded-xl mb-4'>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <Input
                                placeholder='Type new question'
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
                                endAdornment={<InputAdornment position="end">
                                    <Box className='flex'>
                                        <button className='h-10 w-10 pt-0.5 flex justify-center mr-2'>
                                            <MicIcon fontSize='large' />
                                        </button>
                                        <Box className='flex'>
                                            <Divider orientation='vertical' variant='middle' flexItem />
                                        </Box>
                                        <button onClick={() => {
                                            sendMessage();
                                            setMessage('');
                                        }} className='h-10 w-10 ml-4 mr-4 flex justify-center'>
                                            <img src={SendIcon} />
                                        </button>
                                    </Box>
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