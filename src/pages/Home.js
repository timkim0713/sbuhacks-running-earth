import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import MainContent from '../components/MainContent';
import MainCarousel from "../components/MainCarousel"
import MiniGallery from '../components/MiniGallery';
import { Button, Typography, Grid, TextField } from '@mui/material';
import { Link } from "react-router-dom";

const contents = "This is the text in the main"

const DDAY_VALUE = 98 + 5

function Home() {

    const [dday, setDday] = useState(DDAY_VALUE);
    const [time, setTime] = useState();

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })


        const interval = setInterval(() => {

            let remainingDays = DDAY_VALUE - new Date(Date.now()).getDay()

            let remainingHours = 24 - new Date(Date.now()).getHours()
            let remainingMinutes = 60 - new Date(Date.now()).getMinutes()
            let remainingSeconds = 60 - new Date(Date.now()).getSeconds()
            if (remainingSeconds === 60) {
                remainingSeconds = 0
                remainingMinutes = remainingMinutes + 1
            }
            if (remainingMinutes === 60) {
                remainingMinutes = 0
                remainingHours = remainingHours + 1
            }

            if (remainingHours === 24) {
                remainingHours = 0
                remainingDays = remainingDays + 1
            }


            setTime(`D${remainingDays}: H${remainingHours.toString()}: M${remainingMinutes.toString()}: ${remainingSeconds.toString()}`, 1000)
        })
        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false)
        }, 2000);

        const fetchData = async () => {
            const response = await fetch('https://firestore.googleapis.com/v1/projects/running-earth/databases/(default)/documents/users?key=AIzaSyA4g6qjIOMjhAfbeLdr4YZ4rZnyN7etnas');
            const parsed = await response.json();
            const data = parsed.documents;
            console.log(data[0].fields)
            const alldata = []
            for (let i = 0; i < data.length; i++) {
                let parsedData = {}
                parsedData['age'] = (data[i].fields.age.stringValue)
                parsedData['country'] = (data[i].fields.country.stringValue)

                alldata.push(parsedData)
                // console.log("@", alldata)
            }

            setData(alldata)
        }
        fetchData();


        setInterval(function () {
            // your code goes here...

            console.log("data updated...")
            fetchData();
        }, 60 * 1000);
    }, [])


    return (
        <Box mt={-5}>
            <Box pb={5} pt={2}>
                {/* <MainCarousel /> */}

                <Grid container flexDirection={'column'} justifyContent={"center"} alignItems={"center"} rowGap={4} sx={{
                    backgroundColor: "white", color: '#616161', width: '100%', borderRadius: 3, borderTopLeftRadius: 1, borderTopRightRadius: 1,
                    boxShadow: "#F6f7f6 5px 10px 10px 10px",



                }}>

                    <Grid item p={6} pt={8}>

                        < img width={100} height={100}
                            className="img-animation"
                            alt={"loading"}
                            src='./logo.png' ></img >

                    </Grid>


                    <Grid container spacing={6} justifyContent={"center"} flexDirection={"row"} pb={10}>
                        <Grid item flexDirection={'column'} >
                            <Grid item>
                                <Typography variant="body2" sx={{ color: "darkGrey" }}>Total Participants</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" fontWeight={'bold'}>800 Runners</Typography>
                            </Grid>
                        </Grid>
                        <Grid item flexDirection={'column'}  >
                            <Grid item>
                                <Typography variant="body2" sx={{ color: "darkGrey" }}>Miles Left</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" fontWeight={'bold'}>561 Miles</Typography>
                            </Grid>
                        </Grid>
                        <Grid item flexDirection={'column'}>
                            <Grid item>
                                <Typography variant="body2" sx={{ color: "darkGrey" }}>2022 Countdown</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" fontWeight={'bold'}>{time}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item pb={10}>

                        <Grid container item flexDirection={'row'} columnGap={2}
                            sx={{ backgroundColor: "#eeeeee", borderRadius: 2, p: 1.5 }}
                        >
                            <Grid item>
                                <TextField placeholder='ZIP Code' size='small' sx={{ backgroundColor: "white", input: { color: "#4e6b55", fontWeight: "bold" } }}></TextField>
                            </Grid>
                            <Grid item>
                                <Button variant='contained' sx={{ height: "40px" }} className={"blinking"}>Find Nearest Marathon</Button>
                            </Grid>
                        </Grid>
                    </Grid>


                    {/* <Grid container item spacing={4} flexDirection={'row'} justifyContent={"center"} pb={5}>
                        <Grid item >
                            <Box>
                                <Typography variant="body1" fontWeight={'bold'} color={"darkGrey"}>Done</Typography>
                            </Box>

                        </Grid>
                        <Grid item >
                            <Box>
                                <Typography variant="body1" fontWeight={'bold'} color={"darkGrey"}>Minting</Typography>
                            </Box>

                        </Grid>
                        <Grid item>
                            <Box>
                                <Typography variant="body1" fontWeight={'bold'} color={"error"}>Error</Typography>
                            </Box>

                        </Grid>
                    </Grid> */}



                </Grid>


            </Box>


            <Box mt={10}>

                <MiniGallery />

                <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} mt={6}>
                    <Typography variant={"body2"} sx={{ textAlign: "center" }}>
                        Running Earth &copy; is a nonprofit organization.
                    </Typography>

                    <Typography variant={"body1"} sx={{ textAlign: "center", color: "darkgreen" }}>
                        Your event funds directly support in saving our planet.
                    </Typography>


                    <Typography variant={"body1"} sx={{ textAlign: "center", color: "darkgreen" }}>
                        For every one participants, we plant one tree
                    </Typography>
                    <Box display={"flex"} justifyContent={"center"} width={"100%"} mt={3}>


                        <Link to={"/events"} style={{ textDecoration: 'none' }}>
                            <Button variant={"outlined"} size={'large'} >
                                <Typography variant={"h6"}>
                                    RUN EARTH NOW
                                </Typography>
                            </Button>
                        </Link>


                    </Box>
                </Box>



            </Box>




            <Box mt={15} pb={10}>
                <MainContent img={"https://senecaparkzoo.org/wp-content/uploads/2016/03/Olive-Baboon-2014-Cathy-Stolz.jpg"} title={"Title 1"} content={contents} subtitle={"August 3rd 2022"} />
            </Box>

        </Box >
    );
}

export default Home;
