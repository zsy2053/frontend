import React, { useState, useContext } from "react";
import axios from "axios";
import { Grow, Box, Fade } from "@mui/material";
import EAButton from "./EAButton.jsx";
import CircularProgress from "@mui/material/CircularProgress";
import { StyleUpContext } from "../../context/StyleUpContext.jsx";
import Label from "../Home/Label";
import ChatWindow from "../Home/ChatWindow";
import agentsData from "../Home/Agents"
import { Link, useNavigate } from "react-router-dom";
import {
    chatbotTipsOptions,
    styleUpCollection,
    styleUpAPIKey,
    exampleChat,
    chatbotSelectors,
} from "../../constants";

// const fetchCollectionData = (setCollectionList) => {
//     let oldAgents = agentsData
//     console.log(agentsData)
//     axios({
//       method: "get",
//       url: `${import.meta.env.VITE_API_URL}/api/bots/get_collections`,
//       headers: {
//         "Content-Type": "application/json",
//         "x-access-token": localStorage.getItem("jwt"),
//       },
//     })
//       .then((res) => {
//         console.log(res.data.data.length)
//         let newAgents = []
//         for (let i = 0; i < res.data.data.length; i++) {
//           newAgents.push({
//             name: res.data.data[i]['name'],
//                 menuIcon: <Box className='h-6 w-6 flex justify-center'>
//               <img src={res.data.data[i]['coverImg'] || "/icons/Icon.svg"} className='place-self-center' />
//             </Box>,
//                 chatWindowIcon: res.data.data[i]['coverImg'] || "/icons/Icon.svg",
//                 chatSuggestions: ["Summarize the content", "Who is the author"]
//           });
//         }
//         setCollectionList([...oldAgents, ...newAgents]);
//       })
//       .catch((err) => {
//         window.alert(err.message);
//         console.log(err);
//         // navigate(-1);
//       });
//   };

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
              "bot-api-key": styleUpAPIKey,
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
              "bot-api-key": styleUpAPIKey,
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
              "bot-api-key": styleUpAPIKey,
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
              "bot-api-key": styleUpAPIKey,
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
            "bot-api-key": styleUpAPIKey,
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
              "bot-api-key": styleUpAPIKey,
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
              "bot-api-key": styleUpAPIKey,
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
              "bot-api-key": styleUpAPIKey,
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
              "bot-api-key": styleUpAPIKey,
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


const sendStyleUpMsg = (msg, setStyleMsgHistory, setIsLoading) => {
    setStyleMsgHistory((oldMessages) => [...oldMessages, "Human: " + msg]);
    setIsLoading(true);
    axios({
        method: "post",
        url: `${import.meta.env.VITE_API_URL}/api/bots/chat`,
        data: {
            input: msg,
            collection_name: styleUpCollection,
        },
        headers: {
            "Content-Type": "application/json",
            "bot-api-key": styleUpAPIKey,
        },
    })
        .then((res) => {
            setIsLoading(false);
            console.log(res);
            setStyleMsgHistory((oldMessages) => [
                ...oldMessages,
                "AI: " + res.data.data,
            ]);
        })
        .catch((err) => {
            setIsLoading(false);
            window.alert(err.message);
            console.log(err);
            // navigate(-1);
        });
};


const LandingAgentChatWindow = ({ index, item, AgentCard }) => {


    const [currentFocus, setCurrentFocus] = useState(agentsData[2]);
    
    //setCurrentFocus(agentsData.filter((agent) => agent.title == item.name))

    const [chatHistory, setChatHistory] = useState([
      "Agent: how can I help you?",
    ]);
    const [chatMessage, setChatMessage] = useState("");
    const [audioStatus, setAudioStatus] = useState("inactive");
    const [audioSrc, setAudioSrc] = useState("");
    const [isLoading, setIsLoading] = useState(false);
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

    const sendMessage= (tip = "") => {
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
    }


    const useStyleUp = useContext(StyleUpContext);
    const [open, setOpen] = useState(false);
    const [chatbotTips, setChatbotTips] = useState(false);
    const navigate = useNavigate();
    const useExampleChat = false;
    return (
        <div >
            <div onClick={() => {
                setOpen(true)
                setCurrentFocus(agentsData.filter((agent) => agent.name == item.title)[0])
            }} className="relative z-10">
                <AgentCard index={index} item={item} />
            </div>

            <div className="relative z-40">
                {/* Chatbox */}
                <Grow direction='up' in={open} mountOnEnter unmountOnExit>
                    <div
                        className={`sm:w-[1067px] sm:h-[88vh] fixed right-16 bottom-16 flex justify-end `}
                    >
                    <div
                            className='sm:w-3/5 bg-white mr-2 sm:border-[2px] border-[#EAECF0] rounded-[20px] flex flex-col sm:static
                            w-full fixed top-0 left-0 h-full overflow-hidden'
                        >
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
                            setOpen={setOpen}
                            sendMessage={sendMessage}
                        />
                    </div>

                        {/* right */}
                        <div className='w-2/5 h-full bg-white border-[2px] border-[#EAECF0] rounded-[20px] flex-col lg:flex hidden'>
                            <div className='flex flex-col justify-start px-11 mt-11 max-h-[324px] w-full flex-shrink overflow-y-scroll scrollbar-none shadow'>
                                <span className='font-medium text-[18px] leading-5 text-primary mb-6'>
                                    ✦Try Prompts
                                </span>

                            <ul className='list-none space-y-[16px] mb-8'>
                                {currentFocus.chatSuggestions && currentFocus.chatSuggestions.length > 0 &&
                                    <li
                                        className={"font-medium text-[16px] leading-5 text-primary"}
                                    >
                                        <button onClick={() => {
                                            sendMessage(currentFocus.chatSuggestions[0]);
                                        }} className='flex mr-4 justify-start items-start h-8'>
                                            {currentFocus.chatSuggestions[0]}
                                        </button>
                                    </li>
                                }
                                {currentFocus.chatSuggestions && currentFocus.chatSuggestions.length > 1 &&
                                    <li
                                        className={"font-medium text-[16px] leading-5 text-primary"}
                                    >
                                        <button onClick={() => {
                                            sendMessage(currentFocus.chatSuggestions[1]);
                                        }} className='flex mr-4 justify-start items-start h-8'>
                                            {currentFocus.chatSuggestions[1]}
                                        </button>
                                    </li>
                                }
                                {currentFocus.chatSuggestions && currentFocus.chatSuggestions.length > 2 &&
                                    <li
                                        className={"font-medium text-[16px] leading-5 text-primary"}
                                    >
                                        <button onClick={() => {
                                            sendMessage(currentFocus.chatSuggestions[2]);
                                        }} className='flex mr-4 justify-start items-start h-8'>
                                            {currentFocus.chatSuggestions[2]}
                                        </button>
                                    </li>
                                }
                            </ul>

                            </div>
                            <div className='px-20 flex items-center text-center flex-1'>
                                <span className='font-medium text-[24px] leading-[29px] text-primary'>
                                    Create your first ChatGPT App with StyleUp AI.
                                </span>
                            </div>
                            <div className='sticky bottom-0 px-20 mb-10 flex items-center'>
                                <img
                                    src='images/illustChatbox.png'
                                    className='absolute bottom-[18px] right-[72px]'
                                />
                                <EAButton
                                    type='button'
                                    name={"Get Started"}
                                    onClick={() => navigate("/signin")}
                                    className={`w-full h-[48px] overflow-visible mt-72`}
                                ></EAButton>
                            </div>
                        </div>
                    </div>
                </Grow>
            </div>
        </div>
    );
};

export default LandingAgentChatWindow;