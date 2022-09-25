import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { CircularProgress, Divider, Typography } from '@mui/material';
import EventDetail from "../components/EventDetail"
import { useParams } from "react-router-dom"
import EventsData from "../EventsData"
import Heading from "../components/Heading"
import Chip from '@mui/material/Chip';

function Ticket() {

    const ticketId = useParams()
    const currentTicket = EventsData.find(data => data.id === ticketId.id)


    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })


    }, [])


    return (
        <Box mt={20} mb={20}>
            <Box sx={{ position: "absolute", right: { xs: 80, md: 150 }, top: { xs: 240, md: 200 } }}>
                <Chip size="small" label={currentTicket.badge} color={
                    currentTicket.badge.toLowerCase() === "upcoming" ? 'primary' :
                        currentTicket.badge.toLowerCase() === "ticketing" ? 'success' :
                            currentTicket.badge.toLowerCase() === "cancelled" || currentTicket.badge.toLowerCase() === "sold out" ? 'error' :
                                currentTicket.badge.toLowerCase() === "delayed" ? 'warning' :
                                    "secondary"
                } />
            </Box>
            <Heading title={currentTicket.name} content={currentTicket.description + ", " + currentTicket.date} />



            <Box display={'flex'} justifyContent='center' pt={5} pb={20}>
                <Typography variant='h4' color={'primary'} sx={{ mr: { xs: 0, md: 6 } }}>Ticket System Under Construction</Typography>
                <CircularProgress></CircularProgress>

            </Box>

        </Box>
    );
}

export default Ticket;
