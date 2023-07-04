import React from "react";
import { Stack, Box } from "@mui/system";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";

const ApiPage = ({ apiKeys }) => {
  console.log(apiKeys);
  return (
    <Stack
      className='flex flex-col h-[calc(100vh-44px)] max-w-[787px] items-center'
      sx={{ border: "0px" }}
    >
      <div className='flex flex-col mt-12 items-left mb-7'>
        <span className='text-zinc-700 text-[28px] font-medium leading-tight mb-7 '>
          API keys
        </span>
        <span className='text-neutral-600 text-[16px] font-normal leading-tight'>
          Your secret API keys are listed below. Please note that we do not
          display your secret API keys again after you generate them.
          <br />
          <br />
          Do not share your API key with others, or expose it in the browser or
          other client-side code. In order to protect the security of your
          account, OpenAI may also automatically rotate any API key that we've
          found has leaked publicly.
        </span>
      </div>

      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table class='table-fixed text-left w-full border-gray-200 border text-neutral-600 text-[14px] font-normal leading-tight'>
          <thead className='bg-gray-50 border '>
            <tr className='[&_th]:px-6 [&_th]:py-3 [&_th]:text-neutral-600 [&_th]:text-[12px] [&_th]:font-medium'>
              <th className='w-3/12'>NAME</th>
              <th className='w-3/12'>KEY</th>
              <th className='w-2/12'>CREATED</th>
              <th className='w-2/12'>LAST USED</th>
              <th className='w-1/12'></th>
            </tr>
          </thead>
          <tbody>
            {apiKeys.map((item, index) => (
              <tr className='h-10 [&_td]:px-6 [&_td]:py-4 text-neutral-600 whitespace-nowrap [&_td]:overflow-hidden [&_td]:text-ellipsis text-[14px] font-medium leading-none'>
                <td>{item["name"]}</td>
                <td>{item["key"]}</td>
                <td>{item["created"]}</td>
                <td>{item["last_used"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Box className='flex flex-wrap overflow-scroll gap-6 mx-20 my-4 max-w-7xl'></Box>
    </Stack>
  );
};

export default ApiPage;
