import React from "react";
import { Stack, Box } from "@mui/system";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import {CopyToClipboard} from 'react-copy-to-clipboard';


const ApiPage = ({ apiKeys, deleteKey, fetchApiKeyListData, setApiKeyList, addNewKey, setNewKey, newApiKey }) => {
  const [modalState, setModalState] = useState(0);
  const [keyName, setKeyName] = useState("");
  return (
    <Stack
      className='flex flex-col h-[100vh] max-w-[787px] items-center'
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

      <div className='relative overflow-x-auto shadow-md border-gray-200 border rounded-lg mb-7'>
        <table className='table-fixed text-left w-full  text-neutral-600 text-[14px] font-normal leading-tight rounded-lg border-0'>
          <thead className='bg-gray-50 border-b rounded-lg'>
            <tr className='[&_th]:px-6 [&_th]:py-3 [&_th]:text-neutral-600 [&_th]:text-[12px] [&_th]:font-medium'>
              <th className='w-3/12'>NAME</th>
              <th className='w-3/12'>KEY</th>
              <th className='w-2/12'>CREATED</th>
              <th className='w-2/12'>LAST USED</th>
              <th className='w-2/12'></th>
            </tr>
          </thead>
          <tbody>
            {apiKeys.map((item, index) => (
              <tr key={index} className='h-10 [&_td]:px-6 [&_td]:py-4 text-neutral-600 whitespace-nowrap [&_td]:overflow-hidden [&_td]:text-ellipsis text-[14px] font-medium leading-none'>
                <td>{item["name"]}</td>
                <td>{item["key"]}</td>
                <td>{item["created"]}</td>
                <td>{item["last_used"]}</td>
                <td className='flex justify-center'>
                   {item["name"] != "Default Key" && <button name={item["key"]} onClick={(e) => deleteKey(e.currentTarget.name, setApiKeyList, fetchApiKeyListData)}><DeleteIcon /></button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        type='button'
        className='flex h-10 items-center px-4 py-[10px] self-start rounded-lg bg-gray-50 hover:bg-zinc-100'
        onClick={() => setModalState(1)}
      >
        <span className='mr-2'>
          <img src='/icons/PlusIcon.svg' />
        </span>
        <p className='text-menuText overflow-hidden text-ellipsis'>
          Create new secret key
        </p>
      </button>
      <Modal
        open={modalState === 1 || modalState === 2}
        onClose={() => modalState === 1 && setModalState(0)}
      >
        <div className='bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[464] rounded-xl p-6 flex flex-col items-center'>
          {modalState === 1 && (
            <>
              <div className='w-full text-gray-900 text-[18px] font-semibold leading-7 mb-5'>
                Create new secret key
              </div>
              <div className='w-full text-slate-700 text-[14px] font-bold leading-tight mb-[6px] text-start '>
                Name
              </div>
              <input
                className='mb-8 w-[512px] h-11 inline-block px-[14px] py-[10px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-styleupPurple focus:border-transparent'
                placeholder='My Test Key'
                onChange={(e) => setKeyName(e.target.value)}
              ></input>
              <div className='flex w-full'>
                <button
                  onClick={() => setModalState(0)}
                  className='flex-1 h-11 mr-3 rounded-lg border border-gray-300'
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                      console.log(keyName);
                      addNewKey(keyName, setNewKey, setApiKeyList,fetchApiKeyListData)
                      setModalState(2)
                    }
                  }
                  className='flex-1 h-11 bg-styleupPurple rounded-lg text-white'
                >
                  Create secret key
                </button>
              </div>
            </>
          )}
          {modalState === 2 && (
            <>
              <div className='w-full text-gray-900 text-[18px] font-semibold leading-7 mb-2'>
                Create new secret key
              </div>
              <div className='w-[512px] text-neutral-600 text-[14px] font-normal leading-tight mb-5'>
                Please save this secret key somewhere safe and accessible. For
                security reasons, you won't be able to view it again through
                your OpenAI account. If you lose this secret key, you'll need to
                generate a new one.
              </div>
              <div className='w-full justify-start items-center flex mb-8'>
                <div className='flex-1 h-11 px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 text-zinc-900 mr-1'>
                  {newApiKey}
                </div>
                <CopyToClipboard text={newApiKey} onCopy={() => window.alert("Api Key Copied")} className='w-11 h-11  rounded-lg justify-center items-center gap-2 inline-flex hover:bg-gray-50'>
                  <img src='/icons/homeLinkBtn.svg' />
                </CopyToClipboard>
              </div>
              <div className='flex w-full'>
                <button
                  onClick={() => setModalState(0)}
                  className='flex-1 h-11 mr-3 rounded-lg border border-gray-300'
                >
                  Cancel
                </button>
                <button
                  onClick={() => setModalState(0)}
                  className='flex-1 h-11 bg-styleupPurple rounded-lg text-white'
                >
                  Done
                </button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </Stack>
  );
};

export default ApiPage;
