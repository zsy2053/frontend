import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Box, Stack, Typography, Icon } from '@mui/material';
import { chatIcon } from '../assets';
import Sidebar from '../components/Home/Sidebar';
import MySpaceMenu from '../components/Home/MySpaceMenu';
import Navbar from '../components/Home/Navbar';
import ChatWindow from '../components/Home/ChatWindow';
import agentsData from '../components/Home/Agents';
import UploadFilesModal from '../components/Home/UploadFilesModal';
import AddWebsiteModal from '../components/Home/AddWebsiteModal';
import axios from 'axios';
import CommunityMenu from '../components/Home/CommunityMenu';
import CommunityWindow from '../components/Home/CommunityWindow';

const fetchCollectionData = (setCollectionList) => {
  axios({
      method: 'get',
      url: `${import.meta.env.VITE_API_URL}/api/bots/get_collections`,
      headers: { "Content-Type": "application/json",
      "x-access-token": localStorage.getItem('jwt')},
  }).then((res) => {
      let resData = []
      for (let i = 0; i < res.data.data.length; i++) {
        resData.push(
          {
            name: res.data.data[i],
            icon: <Box className='h-6 w-6 flex justify-center'><img src={chatIcon} className='place-self-center' /></Box>,
            chatWindowIcon: chatIcon
          }
        )
      }
      setCollectionList(resData);
  }).catch((err) => {
      window.alert(err.message);
      console.log(err);
     // navigate(-1);
  });
}

const fetchChatHistory = (setChatHistory, chat_type) => {
  axios({
    method: 'get',
    url: `${import.meta.env.VITE_API_URL}/api/bots/get_chat_history`,
    params: {
      'chat_type': chat_type
    },
    headers: { "Content-Type": "application/json",
    "x-access-token": localStorage.getItem('jwt')},
  }).then((res) => {
    setChatHistory(res.data.data)
  }).catch((err) => {
    window.alert(err.message);
    console.log(err)
  });
}

const googleCalendarSignIn = () => {
  axios({
    method: 'post',
    url: `${import.meta.env.VITE_API_URL}/api/bots/authenticate_google_calendar`,
    headers: { "Content-Type": "application/json",
    "x-access-token": localStorage.getItem('jwt')},
  }).then((res) => {
    window.open(res.data.data[0], "_blank", "noreferrer");
  }).catch((err) => {
    window.alert(err.message);
    console.log(err)
  });
}


const mapStatesUpdate = (states, targetName) => {
    return states.map((item) => {
        if (item.name === targetName) {
            item.state = true;
        } else {
            item.state = false;
        }
        item.setActiveFunc(item.state)
        return item
    });
}

const handleMessageSend = (currentFocus, chatMessage, setChatHistory) => {
  switch (currentFocus['name']) {
    case 'Calendar agent':
      const res = localStorage.getItem('googleCred');
      if (!res || res == "") {
        addMyChat(setChatHistory, "AIMessage: Need to login to google");
        return;
      }

      axios({
        method: 'post',
        url: `${import.meta.env.VITE_API_URL}/api/bots/get_google_calendars`,
        data: {
          'input': chatMessage,
          'user_info': res
        },
        headers: { "Content-Type": "application/json",
        "x-access-token": localStorage.getItem('jwt')},
      }).then((res) => {
        addMyChat(setChatHistory, "AIMessage: " + res.data.data);
      }).catch((err) => {
        window.alert(err.message);
        console.log(err);
      });
      break;
    case 'AI tutor':
      axios({
        method: 'post',
        url: `${import.meta.env.VITE_API_URL}/api/bots/tutor_agent`,
        data: {
          'input': chatMessage,
        },
        headers: { "Content-Type": "application/json",
        "x-access-token": localStorage.getItem('jwt')},
      }).then((res) => {
        addMyChat(setChatHistory, "AIMessage: " + res.data.data);
      }).catch((err) => {
        window.alert(err.message);
        console.log(err)
      });
      break;
    case 'Audio agent':
      /*var formData = new FormData();
      formData.append("audio_file", imagefile.files[0]);
      axios({
        method: 'post',
        url: `${import.meta.env.VITE_API_URL}/api/bots/audio_agent`,
        data: formData,
        headers: { "Content-Type": "application/json",
        "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYzkzN2ExZTMtNDQ4MC00OGU0LWE0MDctMzAyMWFjYTNmOWYwIiwiZXhwIjoxNjg3NjQyMzQ0fQ.1Tx0eAuNAqu9hfZ2dXSxIPNX7fSgAOwqOpQDVw_cG9M"},
      }).then((res) => {
        console.log(res);
      }).catch((err) => console.log(err));*/
      break;
    default:
      axios({
        method: 'post',
        url: `${import.meta.env.VITE_API_URL}/api/bots/chat`,
        data: {
          'input': chatMessage,
          'collection_name': currentFocus['name']
        },
        headers: { "Content-Type": "application/json",
        "x-access-token": localStorage.getItem('jwt')},
      }).then((res) => {
        addMyChat(setChatHistory, "AIMessage: " + res.data.data);
      }).catch((err) => {
        window.alert(err.message);
        console.log(err)
      });
      break;
  }
}

const addMyChat = (setChatHistory, chatMessage) => {
    setChatHistory(oldMessages => [...oldMessages, chatMessage])
}

const mapFocusContext = (focus) => {
    switch(focus['name']) {
      case 'Calendar agent':
        return 'calendar_context';
      case 'AI tutor':
        return 'tutor_context';
      case 'Audio agent':
        return 'audio_context';
      default:
        return 'context'
    }
}


function Home() {
    const [uploadFilesModalActive, setUploadFilesModalActive] = useState(false)
    const [addWebsiteModalActive, setAddWebsiteModalActive] = useState(false)
    const [sidebarSelection, setSidebarSelection] = useState('MySpace')
    const spaceStateInit = [
        { name: "Add file", state: false, setActiveFunc: setUploadFilesModalActive},
        { name: "Add website", state: false, setActiveFunc: setAddWebsiteModalActive },
    ];
    const [currentFocus, setCurrentFocus] = useState(agentsData[1])
    const [spaceState, setSpaceState] = useState(spaceStateInit);
    const [collectionList, setCollectionList] = useState([]);
    const [chatHistory, setChatHistory] = useState(["Agent: how can I help you?"]);
    const [chatMessage, setChatMessage] = useState("");
    const handleState = (event) => setSpaceState(mapStatesUpdate(spaceState, event.currentTarget.name));
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("jwt") === null) {
          navigate("/signin")
        } else {
          fetchCollectionData(setCollectionList);
          fetchChatHistory(setChatHistory, 'calendar_context');
        }
      }, []);
    return (
        <Stack className='h-screen flex flex-col'>
            <Navbar />
            {uploadFilesModalActive && <UploadFilesModal setActive={setUploadFilesModalActive} />}
            {addWebsiteModalActive && <AddWebsiteModal setActive={setAddWebsiteModalActive} />}
            <Stack className='flex flex-auto' sx={{ flexDirection: 'row' }}>
              <Sidebar className='flex flex-col'
                sidebarSelection={sidebarSelection}
                setSidebarSelection={setSidebarSelection}
              />
              {sidebarSelection === 'MySpace' &&
                <Box className='flex flex-auto divide-x' >
                  <MySpaceMenu
                    collectionList={collectionList}
                    handleState={handleState}
                    handleFocus={(focus) => {
                      fetchChatHistory(setChatHistory, mapFocusContext(focus));
                      setCurrentFocus(focus);
                    }}
                    setActiveAgent={setCurrentFocus}
                  />
                <Box className='flex-auto'>
                    <ChatWindow
                      chatTitle={currentFocus.name}
                      chatWindowIcon={currentFocus.chatWindowIcon}
                      chatSuggestions={currentFocus.chatSuggestions}
                      content={chatHistory}
                      setMessage={setChatMessage}
                      chatMessage={chatMessage}
                      googleCalendarSignIn={googleCalendarSignIn}
                      sendMessage={(tip="") => {
                        if (tip == "") {
                          addMyChat(setChatHistory, "Human: " + chatMessage);
                          handleMessageSend(currentFocus, chatMessage, setChatHistory);
                        } else {
                          addMyChat(setChatHistory, "Human: " + tip);
                          handleMessageSend(currentFocus, chatMessage, setChatHistory);
                        }
                      }}
                      />
                  </Box>
                </Box>
              }
              {
                sidebarSelection === 'Community' &&
                <Box className='flex flex-auto divide-x'>
                  <CommunityMenu />
                  <CommunityWindow />
                </Box>
              }
            </Stack>
        </Stack>
    );
}

export default Home
