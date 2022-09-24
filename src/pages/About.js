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
            <Heading title={"About"} content={"Learn about what we do."} />
            <Box mt={10}>
                <MainContent img={"https://picsum.photos/202"} title={"What is runningEarth?"} content={"runningEarth is an interactive tool that allows anyone to participate in the collection of monkey and primate images. By locating the eyes, noses, mouths, and ears of monkeys, users can directly contribute to creating a big data base of facial structures of monkeys. The data base is used by an AI that would be used to identify the emotional states of monkeys simply by scanning their faces. It is currently being used in a study - conducted by Carnegie Mellon University - related to olive baboons located at the Seneca Park Zoo."} subtitle={"runningEarth is a combination of the words 'monkey' and 'emotion'."} />
            </Box>

            <Box mt={10}>
                <MainContent img={"https://picsum.photos/203"} title={"Have any questions?"} content={"Any questions or concerns may be submitted through the link here."} subtitle={"Feel free to ask any questions."} />
            </Box>

        </Box>
    );
}

export default About;
