import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Stack, Modal } from "@mui/material";
import { Box } from "@mui/system";

const libraryData = [
  {
    name: "Add file",
    icon: (
      <Box className='h-6 w-6 flex justify-center'>
        <img src='/icons/PlusIcon.svg' className='place-self-center' />
      </Box>
    ),
  },
  {
    name: "Add website",
    icon: (
      <Box className='h-6 w-6 flex justify-center'>
        <img src='/icons/PlusIcon.svg' className='place-self-center' />
      </Box>
    ),
  },
  /*{ name: "datafile_work.csv", icon: <Box className='h-6 w-6 flex justify-center'><img src={chatIcon} className='place-self-center' /></Box>},
    { name: "datafile_work.csv", icon: <Box className='h-6 w-6 flex justify-center'><img src={chatIcon} className='place-self-center' /></Box>},
    { name: "datafile_work.csv", icon: <Box className='h-6 w-6 flex justify-center'><img src={chatIcon} className='place-self-center' /></Box>},*/
];

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

const MySpaceMenu = ({
  collectionList,
  handleState,
  handleFocus,
  handleCollectionDelete,
  confirmDelete,
  setConfirmDelete,
  setCollectionList,
  setSidebarSelection,
  setActiveAgent,
  isLoading,
  setIsLoading,
  currentFocus,
}) => {
  const [contextMenu, setContextMenu] = React.useState(null);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu({
      mouseX: event.clientX + 2,
      mouseY: event.clientY - 6,
    });
    setSelectedItem(event.currentTarget.name)
    console.log(event.currentTarget.name)
    handleFocus(
      collectionList.filter(
        (item) => item.name === event.currentTarget.name
      )[0]
    )
  };
  const handleDelete = () => {
    setContextMenu(null);
    setConfirmDelete(true);
  };
  return (
    <Stack className='w-72 py-8 bg-white border-r flex-shrink-0'>
      <Box className='text-menuText'>
        <div className='mb-4 px-4'>Agents</div>

        <Stack className='h-40 gap-3'>
          {collectionList.map((item, index) => (
            <button
              key={index}
              onClick={(event) =>
                item.name == "Add agent"
                  ? setSidebarSelection("AddAgent")
                  : handleFocus(
                    collectionList.filter(
                      (item) => item.name === event.currentTarget.name
                    )[0]
                  )
              }
              onContextMenu={handleContextMenu}
              name={item.name}
              className='flex h-10 items-center px-4 hover:bg-zinc-100 rounded'
            >
              <span className='mr-2'>{item.menuIcon}</span>
              <p className='text-menuText overflow-hidden text-ellipsis line-clamp-1'>
                {item.name}
              </p>
            </button>
          ))}
          <Menu
            open={contextMenu !== null}
            onClose={() => setContextMenu(null)}
            anchorReference='anchorPosition'
            anchorPosition={
              contextMenu !== null
                ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                : undefined
            }
          >
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
          </Menu>
        </Stack>
      </Box>
      <Modal open={confirmDelete} onClose={() => setConfirmDelete(false)}>
        <div className='bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[464px] rounded-xl p-6 flex flex-col items-center'>
          <img src='/icons/attentionIcon.svg' className='self-start mb-5' />
          <div className='w-full text-slate-700 text-[14px] font-bold leading-tight mb-2 text-start '>
            Are you sure you want to delete this?
          </div>
          <div className='w-full text-neutral-600 text-[14px] font-normal leading-tight mb-12'>
            File deleted can't be recovered, be cautious with this action.
          </div>
          {isLoading ? <div className='flex w-full'><img src='/icons/Spinner.svg'
              class="h-10 w-10 ml-5 mr-7 animate-spin motion-reduce:animate-[spin_1.5s_linear_infinite]" /></div>
            :
            <div className='flex w-full'>
              <button
                onClick={() => setConfirmDelete(false)}
                className='flex-1 h-11 mr-3 rounded-lg border border-gray-300'
              >
                Cancel
              </button>
              <button
                onClick={() => handleCollectionDelete(currentFocus.name, setCollectionList, setConfirmDelete, setIsLoading)}
                className='flex-1 h-11 bg-rose-600 rounded-lg text-white'
              >
                Delete
              </button>
            </div>
          }
        </div>
      </Modal>
    </Stack>
  );
};

export default MySpaceMenu;
