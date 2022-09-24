import * as React from 'react';
import Box from '@mui/material/Box';
import Heading from './Heading';
import "../App.css"
import { CircularProgress, Typography } from '@mui/material';

function InitialLoading() {
    return (
        <Box width={"100vw"} height={"100vh"} backgroundColor={"#E4eee6"} display={"flex"} flexDirection={'column'} justifyContent="center" alignItems={'center'}>
            < img width={100} height={100}
                className="img-animation"
                alt={"loading"}
                src='./logo.png' ></img >

            <Box mt={5}>
                <Typography variant={"overline"} color={'primary'}
                    sx={{ letterSpacing: "10px", fontSize: "28px" }}
                >Running Earth</Typography>
                <Box m={10} display={"flex"} justifyContent={"center"}>
                    <CircularProgress size="2rem" />
                </Box>
            </Box>
        </Box >
    );
}

export default InitialLoading;
