import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
// You need to import this or define it
import React from 'react';
import StyledBadge from './StyledBadge';
import { ArrowDownLeft, ArrowUpRight, Phone, VideoCamera } from 'phosphor-react';

const CallLogElement = ({ online, incoming, missed }) => { // Added online prop with default value
    return (
        <>
            <Box sx={{
                width: "100%",
                height: 60,
                borderRadius: 1,
                backgroundColor: (theme) => theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
            }}
                p={2}
            >
                <Stack
                    direction="row"
                    alignItems={"center"}
                    justifyContent="space-between">
                    <Stack spacing={2} direction="row" alignItems={"center"}>
                        {online ? (
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar
                                    src={`https://i.pravatar.cc/150?u=${Math.random()}`}
                                    alt={`user-${Math.floor(Math.random() * 1000)}`}
                                />
                            </StyledBadge>
                        ) : (
                            <Avatar
                                src={`https://i.pravatar.cc/150?u=${Math.random()}`}
                                alt={`user-${Math.floor(Math.random() * 1000)}`}
                            />
                        )}
                        <Stack spacing={0.3}>
                            <Typography variant="subtitle2">{`user-${Math.floor(Math.random() * 1000)}`}</Typography>
                            {/* <Typography variant="caption">{msg}</Typography> */}
                            <Stack direction={"row"} alignItems="center" spacing={1}>
                                {incoming ? (<ArrowDownLeft color={missed ? "red" : "green"} />)
                                    : (<ArrowUpRight color={missed ? "red" : "green"} />)}
                                <Typography variant='caption'>
                                    Yesterday 21:24
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <IconButton>
                        <Phone color="Green" />
                    </IconButton>

                </Stack>
            </Box>
        </>
    );
}

const CallElement = ({ online }) => {
    return (
        <Box sx={{
            width: "100%",
            height: 60,
            borderRadius: 1,
            backgroundColor: (theme) => theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
        }}
            p={2}
        >
            <Stack
                direction="row"
                alignItems={"center"}
                justifyContent="space-between">
                <Stack spacing={2} direction="row" alignItems={"center"}>
                    {online ? (
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar
                                src={`https://i.pravatar.cc/150?u=${Math.random()}`}
                                alt={`user-${Math.floor(Math.random() * 1000)}`}
                            />
                        </StyledBadge>
                    ) : (
                        <Avatar
                            src={`https://i.pravatar.cc/150?u=${Math.random()}`}
                            alt={`user-${Math.floor(Math.random() * 1000)}`}
                        />
                    )}
                    <Stack spacing={0.3}>
                        <Typography variant="subtitle2">{`user-${Math.floor(Math.random() * 1000)}`}</Typography>
                        {/* <Typography variant="caption">{msg}</Typography> */}

                    </Stack>
                </Stack>
                <Stack direction="row" alignItems={"center"}>
                    <IconButton>
                        <Phone color="Green" />
                    </IconButton>
                    <IconButton>
                        <VideoCamera color="Green" />
                    </IconButton>
                </Stack>


            </Stack>
        </Box>
    );
}

export { CallLogElement, CallElement };