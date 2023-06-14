import React from 'react'

import {
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import {
    CheckBoxOutlineBlankOutlined,
    HomeOutlined,
    InboxOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    paper: {
        background: '#F2EEFB',
        color: '#7F56D9'
    }
});

const data = [
    {
        name: "MySpace",
        icon: <HomeOutlined />,
    },
    { name: "Community", icon: <InboxOutlined /> },
    { name: "Build", icon: <CheckBoxOutlineBlankOutlined /> },
    { name: "Learn", icon: <CheckBoxOutlineBlankOutlined /> },
];


function Home() {
    const [open, setOpen] = useState(true);
    const styles = useStyles();
    const getList = () => (
        <div style={{
            width: 100,
        }} onClick={() => { }}>
            {data.map((item, index) => (
                <ListItem button key={index} style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <ListItemIcon style={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: '#7F56D9',
                    }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                </ListItem>
            ))}
        </div>
    );
    return (
        <div className="App">
            <header className="App-header">
                <Drawer open={open} anchor={"left"} onClose={() => { }}
                    classes={{ paper: styles.paper }}>
                    {getList()}
                </Drawer>
            </header>
        </div>
    );
}


export default Home