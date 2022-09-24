import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Divider, Typography } from '@mui/material';
import EventDetail from "../components/EventDetail"
import { useParams } from "react-router-dom"
import EventsData from "../EventsData"
import Heading from "../components/Heading"


function Event() {

    const eventId = useParams()
    const currentEvent = EventsData.find(data => data.id === eventId.id)

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })


    }, [])


    return (
        <Box mt={20} mb={20} pt={10}>
            {/* <Heading title={"Events"} content={"Read more about the event."} /> */}

            {currentEvent.EVENTS_CONTENT.map((data, index) =>
                <>
                    <EventDetail
                        key={String(index)}
                        id={eventId.id}
                        index={index}
                        title={data.title}
                        date={data.date}
                        author={data.author}
                        content={data.content}
                        topImg={data.topImg}
                        bottomImg={data.bottomImg}
                    />
                    {/* <Divider sx={{ mt: 10, mb: 10 }} /> */}
                </>
            )}
        </Box>
    );
}

export default Event;
