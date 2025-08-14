import { Dialog, DialogContent, DialogTitle, Slide, Stack } from '@mui/material'
import React from 'react'
import { Search, SearchIconWrapper, StyledInputBase } from '../../../components/Search';
import { MagnifyingGlass } from 'phosphor-react';
import { CallElement } from '../../../components/CallElement';
import { MemberList } from '../../../data';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose }) => {
    return (
        <Dialog
            fullWidth
            maxWidth="xs"
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            sx={{ p: 4 }}>
            <DialogTitle sx={{ mb: 3 }}>Start Call</DialogTitle>
            <DialogContent>
                <Stack spacing={2}>


                    <Stack sx={{ width: "100%" }}>
                        <Search>
                            <SearchIconWrapper>
                                <MagnifyingGlass color="#709CE6" />

                            </SearchIconWrapper>
                            <StyledInputBase placeholder="Search..." inputProps={{ "aria-label": "search" }} />
                        </Search>
                    </Stack>
                    {MemberList.map((el) => <CallElement key={el.id} {...el} />)}
                </Stack>
                <CallElement />
            </DialogContent>
        </Dialog>

    )
}

export default StartCall