import { Box, Typography, Stack, Avatar, Badge } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import React from "react";
import StyledBadge from "./StyledBadge";




const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
    const theme = useTheme();
    return (
        <Box sx={{
            width: "100%",
            height: 60,
            borderRadius: 1,
            backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
        }}
            p={2}
        >
            <Stack
                direction="row" alignItems={"center"} justifyContent="space-between">
                <Stack direction="row" spacing={2}>
                    {online ? (<StyledBadge overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot">
                        <Avatar src={`https://i.pravatar.cc/150?u=${Math.random()}`} />
                    </StyledBadge>) : (<Avatar src={`https://i.pravatar.cc/150?u=${Math.random()}`} />)}
                    <Stack spacing={0.3}>
                        <Typography variant="subtitle2">{name}</Typography>
                        <Typography variant="caption">{msg}</Typography>
                    </Stack>
                </Stack>
                <Stack spacing={2} alignItems="center">
                    <Typography sx={{ fontWeight: 600 }} variant="caption">
                        {time}
                    </Typography>
                    <Badge color="primary" badgeContent={unread}>

                    </Badge>

                </Stack>
            </Stack>
        </Box>
    )
}

export default ChatElement