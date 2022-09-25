import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import MainCard from '../components/MainCard';
import Grid from '@mui/material/Grid';
import { Card, CardContent, Typography } from '@mui/material';
import MainContent from '../components/MainContent';

import Heading from '../components/Heading';

function About() {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])

    return (
        <Box sx={{ width: "100%" }}>
            <Heading title={"About"} content={"Learn about Running Earth"} />
            <Box mt={10}>
                <MainContent isAbout={true} img={"/logo.png"} title={"What is Running Earth?"} content={"Running Earth is a non-profit organization that aims to run the earth. We plant one tree for every participant & supporter in marathon events around the world."} />
            </Box>

            <Box mt={10}>
                <MainContent isAbout={true} img={"/logo2.png"} title={"Have any questions?"} content={"Any questions or concerns may be submitted through the chatbot below!"}
                    credit={"SBUHack 2022, Tim Kim | Feel Free to Connet with me!"}
                />
            </Box>

        </Box>
    );
}

export default About;
