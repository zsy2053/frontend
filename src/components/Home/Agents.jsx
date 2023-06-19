import { AITutorMenuIcon, AudioAgentMenuIcon, CalendarAgentMenuIcon, PlusIcon } from "../../assets";
import { CalendarAgentChatIcon, AITutorChatIcon, ChatWithDataFileChatIcon } from "../../assets";
import { Box } from '@mui/system';
import { Icon } from '@mui/material';

const agentsData = [
	{
		name: "Add agent",
		menuIcon: <Box className='h-6 w-6 flex justify-center'><img src={PlusIcon} className='place-self-center' /></Box>,
		chatWindowIcon: PlusIcon,
		chatTitle: "Add Agent",
		chatSuggestions: []
	},
	{
		name: "Calendar agent",
		menuIcon: <Icon><img src={CalendarAgentMenuIcon} /></Icon>,
		chatWindowIcon: CalendarAgentChatIcon,
		chatTitle: "Calendar Agent",
		chatSuggestions: [
			"How does my week look like?", "Am I free at 10am tomorrow?", "What's on my calendar for this week?"
		]
	},
	{
		name: "AI tutor",
		menuIcon: <Icon><img src={AITutorMenuIcon} /></Icon>,
		chatWindowIcon: AITutorChatIcon,
		chatTitle: "AI Tutor",
		chatSuggestions: [
			"Why is the sky blue?", "Explain more", "Quiz me"
		]
	},
	{
		name: "Audio agent",
		menuIcon: <Icon><img src={AudioAgentMenuIcon} /></Icon>,
		chatWindowIcon: ChatWithDataFileChatIcon,
		chatTitle: "Audio Agent",
		chatSuggestions: [
			"Summarize the file", "Explain more", "Quiz me"
		]
	}
]

export default agentsData
