import React from "react";
import { Stack, Box } from "@mui/system";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";

const ApiPage = ({apiKeys}) => {
  console.log(apiKeys);
  return (
    <Stack className='flex flex-col h-[calc(100vh-44px)] w-full items-center' sx={{border:'0px'}}>
      <Box className='flex flex-col mt-12 mb-7 items-left'>
        <p className='text-[28px]'>API Keys</p>
        <p className='mt-2 text-sm text-gray-600'>
        Your secret API keys are listed below. Please note that we do not display your secret API keys again after you generate them.<br/><br/>

        Do not share your API key with others, or expose it in the browser or other client-side code. In order to protect the security of your account, OpenAI may also automatically rotate any API key that we've found has leaked publicly.
        </p>
      </Box>
      <Box className='flex flex-wrap overflow-scroll gap-6 mx-20 my-4 max-w-7xl'>
        {apiKeys.map((item, index) => (
          <p>{item['name']},{item['key']}, {item['created']}, {item['last_used']}</p>
        ))}
      </Box>
    </Stack>
  );
};

export default ApiPage;
