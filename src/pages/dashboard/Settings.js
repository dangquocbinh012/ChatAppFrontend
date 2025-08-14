
import { Avatar, Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Bell, CaretLeft, Image, Info, Key, Keyboard, Lock, Note, PencilCircle } from 'phosphor-react';
import React, { useState } from 'react'
import Shortcuts from '../../sections/settings/Shortcuts';

const Settings = () => {
    const theme = useTheme();

    const [openShortcuts, setOpenShortcuts] = useState(false);

    const handleOpenShortcuts = () => {
        setOpenShortcuts(true);
    }
    const handleCloseShortcuts = () => {
        setOpenShortcuts(false);
    }

    const list = [
        {
            key: 0,
            icon: <Bell size={20} />,
            title: "Notifications",
            onclick: () => { },
        },
        {
            key: 1,
            icon: <Lock size={20} />,
            title: "Privacy",
            onclick: () => { },
        },
        {
            key: 2,
            icon: <Key size={20} />,
            title: "Security",
            onclick: () => { },
        },
        {
            key: 3,
            icon: <PencilCircle size={20} />,
            title: "Theme",
            //onclick: handleOpenTheme,
            onclick: () => { }
        },
        {
            key: 4,
            icon: <Image size={20} />,
            title: "Chat Wallpaper",
            onclick: () => { },
        },
        {
            key: 5,
            icon: <Note size={20} />,
            title: "Request Account Info",
            onclick: () => { },
        },
        {
            key: 6,
            icon: <Keyboard size={20} />,
            title: "Keyboard Shortcuts",
            onclick: handleOpenShortcuts,
            //onclick: () => { }
        },
        {
            key: 7,
            icon: <Info size={20} />,
            title: "Help",
            onclick: () => { },
        },
    ];

    return (
        <>
            <Stack direction={"row"} sx={{ width: "100%" }}>

                {/*LeftPanel*/}
                <Box sx={{
                    overflowY: "scroll",
                    height: "100vh",
                    width: 320,
                    backgroundColor
                        : theme.palette.mode === "light"
                            ? "#F8FAFF"
                            : theme.palette.background,
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"

                }}>
                    <Stack p={4} spacing={5}>

                        <Stack direction={"row"} alignItems="center" spacing={3}>
                            <IconButton>
                                <CaretLeft size={24} color={"#4B4B4B"} />
                            </IconButton>
                            <Typography variant='h6'>
                                Settings
                            </Typography>
                        </Stack>


                        <Stack>
                            <Avatar sx={{ width: 56, height: 56 }} src={`https://i.pravatar.cc/150?u=${Math.random()}`}
                                alt={`user-${Math.floor(Math.random() * 1000)}`} />
                            <Stack spacing={0.5}>
                                <Typography variant='body1'>
                                    {`user-${Math.floor(Math.random() * 1000)}`}
                                </Typography>
                                <Typography variant='body2'>
                                    {`user-${Math.floor(Math.random() * 1000)}`}
                                </Typography>

                            </Stack>

                        </Stack>
                        <Stack spacing={4}>
                            {list.map(({ key, icon, title, onclick }) => (
                                <React.Fragment key={key}>

                                    <>
                                        <Stack key={key} spacing={2} sx={{ cursor: "pointer" }} onClick={onclick}>
                                            <Stack direction="row" spacing={2} alignItems="center">
                                                {icon}
                                                <Typography>{title}</Typography>
                                            </Stack>
                                            {key !== 7 && <Divider />}
                                        </Stack>

                                    </>

                                </React.Fragment>
                            ))}
                        </Stack>



                    </Stack>


                </Box>
                {/*RightPanel*/}
            </Stack>
            {openShortcuts && <Shortcuts open={openShortcuts} handleClose={handleCloseShortcuts} />}

        </>


    )
}

export default Settings
