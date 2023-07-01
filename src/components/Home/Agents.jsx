import { Box } from '@mui/system';
import { Icon } from '@mui/material';

const agentsData = [
	{
		name: "Add agent",
		menuIcon: <Box className='h-6 w-6 flex justify-center'><img src='/icons/PlusIcon.svg' className='place-self-center' /></Box>,
		chatWindowIcon: '/icons/PlusIcon.svg',
		chatSuggestions: []
	},
	{
		name: "Calendar agent",
		menuIcon: <Icon><img src='/icons/CalendarAgentMenuIcon.svg' /></Icon>,
		chatWindowIcon: '/icons/CalendarAgentMenuIcon.svg',
		chatSuggestions: [
			"How does my week look like?", "Am I free at 10am tomorrow?", "What's on my calendar for this week?"
		]
	},
	{
		name: "AI tutor",
		menuIcon: <Icon><img src='/icons/AITutorIcon.svg' /></Icon>,
		chatWindowIcon: '/icons/AITutorIcon.svg',
		chatSuggestions: [
			"Why is the sky blue?", "Explain more", "Quiz me"
		]
	},
	{
		name: "Any topic friend?",
		menuIcon: <Icon><img src='/icons/BlenderBot.svg' /></Icon>,
		chatWindowIcon: '/icons/BlenderBot.svg',
		chatSuggestions: []
	}
]

export default agentsData
