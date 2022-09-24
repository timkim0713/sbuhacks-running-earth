import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Divider, Typography } from '@mui/material';
import EventDetail from "../components/EventDetail"
import { useParams } from "react-router-dom"
import EventsData from "../EventsData"
import Heading from "../components/Heading"

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
            {/* <Heading title={"Events"} content={"Read more about the event."} /> */}
            <Typography>hello id:{currentTicket.id}</Typography>
            <Typography>hello id:{currentTicket.badge}</Typography>
            <Typography>hello id:{currentTicket.description}</Typography>
            <Typography>hello id:{currentTicket.price}</Typography>
            <Typography>hello id:{currentTicket.date}</Typography>

        </Box>
    );
}

export default Ticket;
