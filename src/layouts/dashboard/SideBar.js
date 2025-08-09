
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import React, { useState } from 'react'
import { Gear } from "phosphor-react";
import useSettings from '../../hooks/useSettings';
import AntSwitch from '../../components/AntSwitch';

const SideBar = () => {
    const [selected, setSelected] = useState(0);
    const theme = useTheme();
    const { onToggleMode } = useSettings();
    return (
        <Box
            p={2}
            sx={{
                backgroundColor: theme.palette.background.paper,
                boxShadow: "0px 0px 2px",
                height: "100vh",
                width: 100,
            }}
        >
            <Stack
                direction="column"
                alignItems={"center"}
                justifyContent="space-between"
                sx={{ height: "100%" }}
                spacing={3}
            >

                <Stack alignItems={"center"} spacing={4} >
                    <Box
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            height: 64,
                            width: 64,
                            borderRadius: 1.5,
                        }}
                    >
                        <img src={Logo} alt="Chat App Logo" />
                    </Box>
                    <Stack
                        sx={{ width: "max-content" }}
                        direction="column"
                        alignItems="center"
                        spacing={2}
                    >
                        {Nav_Buttons.map((el) =>
                            el.index === selected ? (
                                <Box
                                    key={el.index}
                                    p={1}
                                    sx={{
                                        backgroundColor: theme.palette.primary.main,
                                        borderRadius: 1.5,
                                    }}
                                >
                                    <IconButton
                                        sx={{ width: "max-content", color: "#fff" }}

                                    >
                                        {el.icon}
                                    </IconButton>
                                </Box>
                            ) : (
                                <IconButton
                                    key={el.index}
                                    onClick={() => {
                                        setSelected(el.index);
                                    }}
                                    sx={{ width: "max-content", color: "#000" }}

                                >
                                    {el.icon}
                                </IconButton>
                            )
                        )}
                        <Divider sx={{ width: "48px" }} />
                        {selected === 3 ? (
                            <Box
                                p={1}
                                sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    borderRadius: 1.5,
                                }}
                            >
                                <IconButton sx={{ width: "max-content", color: "#fff" }}>
                                    <Gear />
                                </IconButton>
                            </Box>
                        ) : (
                            <IconButton
                                onClick={() => {
                                    setSelected(3);
                                }}
                                sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }}
                            >
                                <Gear />
                            </IconButton>
                        )}
                    </Stack>
                </Stack>

                <Stack spacing={4}>
                    <AntSwitch onChange={() => {
                        onToggleMode();
                    }} defaultChecked />
                    <Avatar
                        src={`https://i.pravatar.cc/150?u=${Math.random()}`}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/fallback-avatar.png";
                        }}
                    />
                </Stack>
            </Stack>
        </Box>

    )
}

export default SideBar

