import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Typography, Icon } from "@mui/material";
import Sidebar from "../components/Home/Sidebar";
import MySpaceMenu from "../components/Home/MySpaceMenu";
import ChatWindow from "../components/Home/ChatWindow";
import ApiPage from "../components/Home/ApiPage";
import agentsData from "../components/Home/Agents";
import UploadFilesModal from "../components/Home/UploadFilesModal";
import AddWebsiteModal from "../components/Home/AddWebsiteModal";
import axios from "axios";
import CommunityMenu from "../components/Home/CommunityMenu";
import CommunityWindow from "../components/Home/CommunityWindow";
import BuildWindow from "../components/Home/BuildWindow";
import AddAgentWindow from "../components/Home/AddAgentWindow";

const fetchCollectionData = (setCollectionList) => {
  axios({
    method: "get",
    url: `${import.meta.env.VITE_API_URL}/api/bots/get_collections`,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("jwt"),
    },
  })
    .then((res) => {
      let resData = [];
      for (let i = 0; i < res.data.data.length; i++) {
        resData.push({
          name: res.data.data[i],
          icon: (
            <Box className='h-6 w-6 flex justify-center'>
              <img src='/icons/Icon.svg' className='place-self-center' />
            </Box>
          ),
          chatWindowIcon: "/icons/Icon.svg",
        });
      }
      setCollectionList(resData);
    })
    .catch((err) => {
      window.alert(err.message);
      console.log(err);
      // navigate(-1);
    });
};

const deleteCollection = (collection_name, setCollectionList, setConfirmDelete) => {
  axios({
    method: "delete",
    url: `${import.meta.env.VITE_API_URL}/api/bots/delete_collection?collection_name=${collection_name}`,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("jwt"),
    },
  }).then((res) => {
      console.log(res);
      fetchCollectionData(setCollectionList);
      setConfirmDelete(false);
    })
    .catch((err) => {
      window.alert(err.message);
      console.log(err);
      setConfirmDelete(false);
      // navigate(-1);
    });
}

const fetchApiKeyListData = (setApiKeyList) => {
  axios({
    method: "get",
    url: `${import.meta.env.VITE_API_URL}/api/users/get_api_keys`,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("jwt"),
    },
  })
    .then((res) => {
      setApiKeyList(res.data.data);
    })
    .catch((err) => {
      window.alert(err.message);
      console.log(err);
      // navigate(-1);
    });
};

const resetContext = (currentFocus, mapFocusContext, setChatHistory) => {
  console.log(currentFocus);
  axios({
    method: "post",
    url: `${import.meta.env.VITE_API_URL}/api/bots/reset_context`,
    data: {
      context: mapFocusContext(currentFocus),
    },
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("jwt"),
    },
  })
    .then((res) => {
      console.log(res);
      setChatHistory([]);
    })
    .catch((err) => {
      window.alert(err.message);
      console.log(err);
      // navigate(-1);
    });
};

const fetchChatHistory = (setChatHistory, chat_type, file_name = null) => {
  axios({
    method: "get",
    url: `${import.meta.env.VITE_API_URL}/api/bots/get_chat_history`,
    params: {
      chat_type: chat_type,
      file_name: file_name,
    },
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("jwt"),
    },
  })
    .then((res) => {
      if (res.data.data.length == 0 && chat_type == "tutor_context") {
        setChatHistory([
          "1.Adjust the depth of knowledge to match your learning needs\n2.Customize your learning style, communication type, tone, and reasoning framework\n3.Create the ultimate AI tutor tailored just for you",
        ]);
      } else {
        setChatHistory(res.data.data);
      }
    })
    .catch((err) => {
      window.alert(err.message);
      console.log(err);
    });
};

const googleCalendarSignIn = () => {
  axios({
    method: "post",
    url: `${import.meta.env.VITE_API_URL
      }/api/bots/authenticate_google_calendar`,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("jwt"),
    },
  })
    .then((res) => {
      window.open(res.data.data[0], "_blank", "noreferrer");
    })
    .catch((err) => {
      window.alert(err.message);
      console.log(err);
    });
};

const handleLinkCreate = (websiteUrl, crawlLevel = 2) => {
  console.log(websiteUrl);
  const domainName = new URL(websiteUrl).hostname
    .replace("www.", "")
    .split(".")[0];
  const data = {
    collection_content: websiteUrl,
    collection_name: domainName,
    collection_type: "link",
    link_levels: crawlLevel,
  };
  axios({
    method: "post",
    url: `${import.meta.env.VITE_API_URL}/api/bots/add_collection`,
    data,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("jwt"),
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      // navigate(-1);
    });
};

const mapStatesUpdate = (states, targetName) => {
  return states.map((item) => {
    if (item.name === targetName) {
      item.state = true;
    } else {
      item.state = false;
    }
    item.setActiveFunc(item.state);
    return item;
  });
};

const handleMessageSend = (
  currentFocus,
  chatMessage,
  setChatHistory,
  setIsLoading,
  audioFile = null
) => {
  setIsLoading(true);
  switch (currentFocus["name"]) {
    case "Calendar agent":
      if (audioFile == null) {
        const res = localStorage.getItem("googleCred") || "";
        axios({
          method: "post",
          url: `${import.meta.env.VITE_API_URL}/api/bots/get_google_calendars`,
          data: {
            input: chatMessage,
            user_info: res,
          },
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("jwt"),
          },
        })
          .then((res) => {
            setIsLoading(false);
            addMyChat(setChatHistory, "AIMessage: " + res.data.data);
          })
          .catch((err) => {
            setIsLoading(false);
            window.alert(err.message);
            console.log(err);
          });
      } else {
        var formData = new FormData();
        formData.append("audio_file", audioFile);
        axios({
          method: "post",
          url: `${import.meta.env.VITE_API_URL}/api/bots/get_google_calendars`,
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            "x-access-token": localStorage.getItem("jwt"),
          },
        })
          .then((res) => {
            setIsLoading(false);
            addMyChat(setChatHistory, "AIMessage: " + res.data.data);
            console.log(res);
          })
          .catch((err) => {
            setIsLoading(false);
            console.log(err);
          });
      }
      break;
    case "AI tutor":
      if (audioFile == null) {
        axios({
          method: "post",
          url: `${import.meta.env.VITE_API_URL}/api/bots/tutor_agent`,
          data: {
            input: chatMessage,
          },
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("jwt"),
          },
        })
          .then((res) => {
            setIsLoading(false);
            addMyChat(setChatHistory, "AIMessage: " + res.data.data);
          })
          .catch((err) => {
            setIsLoading(false);
            window.alert(err.message);
            console.log(err);
          });
      } else {
        var formData = new FormData();
        formData.append("audio_file", audioFile);
        axios({
          method: "post",
          url: `${import.meta.env.VITE_API_URL}/api/bots/tutor_agent`,
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            "x-access-token": localStorage.getItem("jwt"),
          },
        })
          .then((res) => {
            setIsLoading(false);
            addMyChat(setChatHistory, "AIMessage: " + res.data.data);
            console.log(res);
          })
          .catch((err) => {
            setIsLoading(false);
            console.log(err);
          });
      }
      break;
    case "Audio agent":
      var formData = new FormData();
      formData.append("audio_file", audioFile);
      axios({
        method: "post",
        url: `${import.meta.env.VITE_API_URL}/api/bots/audio_agent`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          "x-access-token": localStorage.getItem("jwt"),
        },
      })
        .then((res) => {
          setIsLoading(false);
          addMyChat(setChatHistory, "AIMessage: " + res.data.data);
          console.log(res);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
      break;
    case "Blender bot":
      if (audioFile == null) {
        axios({
          method: "post",
          url: `${import.meta.env.VITE_API_URL}/api/bots/blenderbot_agent`,
          data: {
            input: chatMessage,
            collection_name: currentFocus["name"],
          },
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("jwt"),
          },
        })
          .then((res) => {
            setIsLoading(false);
            addMyChat(setChatHistory, "AIMessage: " + res.data.data);
          })
          .catch((err) => {
            setIsLoading(false);
            window.alert(err.message);
            console.log(err);
          });
      } else {
        var formData = new FormData();
        formData.append("audio_file", audioFile);
        formData.append("collection_name", currentFocus["name"]);
        axios({
          method: "post",
          url: `${import.meta.env.VITE_API_URL}/api/bots/blenderbot_agent`,
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            "x-access-token": localStorage.getItem("jwt"),
          },
        })
          .then((res) => {
            setIsLoading(false);
            addMyChat(setChatHistory, "AIMessage: " + res.data.data);
            console.log(res);
          })
          .catch((err) => {
            setIsLoading(false);
            console.log(err);
          });
      }
      break;
    default:
      if (audioFile == null) {
        axios({
          method: "post",
          url: `${import.meta.env.VITE_API_URL}/api/bots/chat`,
          data: {
            input: chatMessage,
            collection_name: currentFocus["name"],
          },
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("jwt"),
          },
        })
          .then((res) => {
            setIsLoading(false);
            addMyChat(setChatHistory, "AIMessage: " + res.data.data);
          })
          .catch((err) => {
            setIsLoading(false);
            window.alert(err.message);
            console.log(err);
          });
      } else {
        var formData = new FormData();
        formData.append("audio_file", audioFile);
        formData.append("collection_name", currentFocus["name"]);
        axios({
          method: "post",
          url: `${import.meta.env.VITE_API_URL}/api/bots/chat`,
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            "x-access-token": localStorage.getItem("jwt"),
          },
        })
          .then((res) => {
            setIsLoading(false);
            addMyChat(setChatHistory, "AIMessage: " + res.data.data);
            console.log(res);
          })
          .catch((err) => {
            setIsLoading(false);
            console.log(err);
          });
      }
      break;
  }
};

const addMyChat = (setChatHistory, chatMessage) => {
  setChatHistory((oldMessages) => [...oldMessages, chatMessage]);
};

const mapFocusContext = (focus) => {
  switch (focus["name"]) {
    case "Calendar agent":
      return "calendar_context";
    case "AI tutor":
      return "tutor_context";
    case "Audio agent":
      return "audio_context";
    default:
      return "context";
  }
};

function Home() {
  const [uploadFilesModalActive, setUploadFilesModalActive] = useState(false);
  const [addWebsiteModalActive, setAddWebsiteModalActive] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [sidebarSelection, setSidebarSelection] = useState("MySpace");
  const [apiKeyList, setApiKeyList] = useState([]);
  const spaceStateInit = [
    {
      name: "Add file",
      state: false,
      setActiveFunc: setUploadFilesModalActive,
    },
    {
      name: "Add website",
      state: false,
      setActiveFunc: setAddWebsiteModalActive,
    },
  ];
  const [currentFocus, setCurrentFocus] = useState(agentsData[1]);
  const [spaceState, setSpaceState] = useState(spaceStateInit);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [collectionList, setCollectionList] = useState([]);
  const [chatHistory, setChatHistory] = useState([
    "Agent: how can I help you?",
  ]);
  const [chatMessage, setChatMessage] = useState("");
  const [audioStatus, setAudioStatus] = useState("inactive");
  const [audioSrc, setAudioSrc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hideMenu, setHideMenu] = useState(false);
  const audioProps = {
    audioType: "audio/wav",
    // audioOptions: {sampleRate: 30000}, // 设置输出音频采样率
    status: audioStatus,
    audioSrc,
    timeslice: 1000, // timeslice（https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/start#Parameters）
    startCallback: (e) => {
      console.log("succ start", e);
    },
    pauseCallback: (e) => {
      console.log("succ pause", e);
    },
    stopCallback: (e) => {
      const audioURL = window.URL.createObjectURL(e);
      setAudioSrc(audioURL);
      const audioFile = new File([e], "myaudio.wav");
      addMyChat(setChatHistory, "Audio: " + audioURL);
      handleMessageSend(
        currentFocus,
        "Human:" + chatMessage,
        setChatHistory,
        setIsLoading,
        audioFile
      );
      console.log("succ stop", audioFile);
    },
    onRecordCallback: (e) => {
      console.log("recording", e);
    },
    errorCallback: (err) => {
      console.log("error", err);
    },
  };
  const handleState = (event) =>
    setSpaceState(mapStatesUpdate(spaceState, event.currentTarget.name));
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("jwt") === null) {
      navigate("/signin");
    } else {
      fetchCollectionData(setCollectionList);
      fetchChatHistory(setChatHistory, "calendar_context");
      fetchApiKeyListData(setApiKeyList);
    }
  }, []);
  return (
    <div className='w-full overflow-hidden flex flex-col min-h-screen'>
      {uploadFilesModalActive && (
        <UploadFilesModal
          setActive={setUploadFilesModalActive}
          fetchCollectionData={fetchCollectionData}
          setCollectionList={setCollectionList}
        />
      )}
      {addWebsiteModalActive && (
        <AddWebsiteModal setActive={setAddWebsiteModalActive} />
      )}

      <div className='flex flex-grow'>
        <Sidebar
          sidebarSelection={sidebarSelection}
          setSidebarSelection={setSidebarSelection}
        />
        <div className='flex-1 flex-grow justify-center flex'>
          {sidebarSelection === "MySpace" && (
            <Box className='flex w-full h-full'>
              <MySpaceMenu
                collectionList={collectionList}
                handleState={handleState}
                setSidebarSelection={setSidebarSelection}
                handleCollectionDelete={deleteCollection}
                setConfirmDelete={setConfirmDelete}
                confirmDelete={confirmDelete}
                setCollectionList={setCollectionList}
                handleFocus={(focus) => {
                  const focusType = mapFocusContext(focus);
                  if (focusType !== "context") {
                    fetchChatHistory(setChatHistory, focusType);
                  } else {
                    fetchChatHistory(setChatHistory, focusType, focus["name"]);
                  }
                  setCurrentFocus(focus);
                }}
                setActiveAgent={setCurrentFocus}
                currentFocus={currentFocus}
              />
              <ChatWindow
                chatTitle={currentFocus.name}
                chatWindowIcon={currentFocus.chatWindowIcon}
                chatSuggestions={currentFocus.chatSuggestions}
                content={chatHistory}
                setMessage={setChatMessage}
                chatMessage={chatMessage}
                googleCalendarSignIn={googleCalendarSignIn}
                audioStatus={audioStatus}
                resetContext={resetContext}
                currentFocus={currentFocus}
                mapFocusContext={mapFocusContext}
                setChatHistory={setChatHistory}
                setAudioStatus={setAudioStatus}
                audioProps={audioProps}
                isLoading={isLoading}
                sendMessage={(tip = "") => {
                  if (tip == "") {
                    addMyChat(setChatHistory, "Human: " + chatMessage);
                    handleMessageSend(
                      currentFocus,
                      chatMessage,
                      setChatHistory,
                      setIsLoading
                    );
                  } else {
                    addMyChat(setChatHistory, "Human: " + tip);
                    handleMessageSend(
                      currentFocus,
                      tip,
                      setChatHistory,
                      setIsLoading
                    );
                  }
                }}
              />
            </Box>
          )}
          {sidebarSelection === "Community" && (
            <Box className='flex w-full h-full'>
              {!hideMenu ? <CommunityMenu setHide={setHideMenu} /> : <></>}

              <CommunityWindow />
            </Box>
          )}
          {sidebarSelection === "API Keys" && <ApiPage apiKeys={apiKeyList} />}
          {sidebarSelection === "AddAgent" && (
            <AddAgentWindow
              setSidebarSelection={setSidebarSelection}
              handleCollectionDelete={deleteCollection}
              setCollectionList={setCollectionList}
              currentFocus={currentFocus}
              setCurrentFocus={setCurrentFocus}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
