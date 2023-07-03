import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import agentsData from "./Agents";

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
  setCollectionList,
  setSidebarSelection,
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
  };

  return (
    <Stack className='w-72 py-8 bg-white border-r flex-shrink-0'>
      <Box className='text-menuText'>
        <div className='mb-4 px-4'>Agents</div>

        <Stack className='h-40'>
          {agentsData.map((item, index) => (
            <button
              key={index}
              onClick={(event) =>
                item.name == "Add agent"
                  ? setSidebarSelection("Community")
                  : handleFocus(
                      agentsData.filter(
                        (item) => item.name === event.currentTarget.name
                      )[0]
                    )
              }
              name={item.name}
              className='flex h-10 items-center px-4'
            >
              <span className='mr-2'>{item.menuIcon}</span>
              <p className='text-menuText overflow-hidden text-ellipsis'>
                {item.name}
              </p>
            </button>
          ))}
        </Stack>
      </Box>
      <Box className='mt-8 '>
        <div className='mb-4 px-4'>Library</div>
        <Stack className='h-50 mt-4'>
          {libraryData.map((item, index) => (
            <button
              key={index}
              className='flex h-10 items-center px-4'
              name={item.name}
              onClick={handleState}
            >
              <span className='mr-2'>{item.icon}</span>
              <p className='text-menuText overflow-hidden text-ellipsis'>
                {item.name}
              </p>
            </button>
          ))}
          {collectionList.map((item, index) => (
            <button
              className='flex h-10 items-center text-start px-4 hover:bg-zinc-300'
              onClick={(event) =>
                handleFocus(
                  collectionList.filter(
                    (item) => item.name === event.currentTarget.name
                  )[0]
                )
              }
              onContextMenu={handleContextMenu}
              name={item.name}
              key={index}
            >
              <span className='mr-2'>{item.icon}</span>
              <p className='text-menuText flex-1 overflow-hidden text-ellipsis'>
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
            <MenuItem onClick={(e) => {
              handleCollectionDelete(selectedItem, setCollectionList)
              setContextMenu(null)
            }}>Delete</MenuItem>
          </Menu>
        </Stack>
      </Box>
    </Stack>
  );
};

export default MySpaceMenu;
