import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import MainCard from '../components/MainCard';
import Grid from '@mui/material/Grid';
import { Button, Typography, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import MainContent from '../components/MainContent';
import Chip from '@mui/material/Chip';

import Heading from '../components/Heading';
import { Link } from "react-router-dom";
import EVENTS_DATA from "../EventsData";
import InfiniteScroll from 'react-infinite-scroll-component';

function EventsList() {


    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })


    }, [])


    return (

        <Box sx={{ width: "100%" }}>
            <Heading title={"Events"} content={"Join the marathon events around the world."} />
            <Box mt={10}>

                <Grid container spacing={4}>
                    {EVENTS_DATA.sort(function (a, b) { return new Date(b.date) - new Date(a.date) })
                        .map(data => {
                            return (
                                <Grid item md={4} xs={6}>
                                    <Card sx={{ maxWidth: { xs: 245, md: 345 } }}>
                                        <Link to={`/events/${data.id}`} style={{ textDecoration: "none", color: "green" }}>
                                            <CardActionArea >
                                                <Box position={"absolute"} sx={{ right: 15, top: 15 }}>
                                                    <Chip size="small" label={data.badge} color={
                                                        data.badge.toLowerCase() === "upcoming" ? 'primary' :
                                                            data.badge.toLowerCase() === "ticketing" ? 'success' :
                                                                data.badge.toLowerCase() === "cancelled" || data.badge.toLowerCase() === "sold out" ? 'error' :
                                                                    data.badge.toLowerCase() === "delayed" ? 'warning' :
                                                                        "secondary"
                                                    } />
                                                </Box>
                                                <CardMedia
                                                    component="img"
                                                    height="200"
                                                    image={data.img}
                                                    alt="green iguana"
                                                >
                                                </CardMedia>
                                                <CardContent>
                                                    <Box display={'flex'} flexDirection={"row"} justifyContent={"space-between"}>
                                                        <Typography gutterBottom variant="h5" component="div" color={"#555656"}
                                                            sx={{ fontWeight: 'medium' }}
                                                        >
                                                            {data.name}
                                                        </Typography>
                                                    </Box>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {data.description}
                                                    </Typography>
                                                    <Typography variant="overline" color="text.secondary">
                                                        {data.date}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Link>
                                        <CardActions>
                                            <Link to={`/events/${data.id}`} style={{ textDecoration: "none" }}>
                                                <Button size="small">More Info</Button>
                                            </Link>
                                            <Link to={`/tickets/${data.id}`} style={{ textDecoration: "none" }}>
                                                <Button size="small">Buy Ticket</Button>
                                            </Link>
                                        </CardActions>

                                    </Card>
                                </Grid>
                            )
                        })}
                </Grid>
            </Box>

            {/* <Box mt={10}>
                <MainContent img={"https://picsum.photos/203"} title={"Have any questions?"} content={"Any questions or concerns may be submitted through the link here."} subtitle={"Feel free to ask any questions."} />
            </Box> */}

        </Box>
    );
}

export default EventsList;
