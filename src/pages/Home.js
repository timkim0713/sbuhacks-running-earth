import { useState, useEffect, useMemo, forwardRef, useCallback } from 'react';
import Box from '@mui/material/Box';
import MainContent from '../components/MainContent';
import MainCarousel from "../components/MainCarousel"
import MiniGallery from '../components/MiniGallery';
import { Button, Typography, Grid, TextField } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindow } from '@react-google-maps/api';

import AgeChart from "../components/AgeChart"
import CountryChart from "../components/CountryChart"
import EventsData from "../EventsData"
import { mapStyles } from "../components/GoogleMapsSchema"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const contents = "This is the text in the main"

const DDAY_VALUE = 98 + 5

const containerStyle = {
    width: '100%',
    height: '500px'

};
const options = {
    styles: mapStyles,
};


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function Home() {
    const navigate = useNavigate()

    const [zipCodeLoaded, setZipCodeLoaded] = useState(true)
    const [zipCode, setZipCode] = useState()
    const [location, setLocation] = useState()
    const [dday, setDday] = useState(DDAY_VALUE);
    const [time, setTime] = useState();


    const [redirectTo, setRedirect] = useState("")

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const [open, setOpen] = useState(false);

    const [map, setMap] = useState(null)

    const handleClickOpen = () => {
        if (zipCode) {
            getCoordinates(zipCode)
        } else {
            alert("Please provide your zipcode!")
        }
    };

    const handleClose = () => {
        setOpen(false);
    };
    // const { isLoaded } = useLoadScript({
    //     googleMapsApiKey: "AIzaSyDUyLjtE4wq9VjJMm6Xw2xdE815ySSRJFw",
    // });



    function dataCountry(data) {

        const mapped_countries = {
            "usa": "USA", "us": "USA", "america": "USA", "united states": "USA",
            "korea": "Korea", "south korea": "Korea", "china": "China",
            "japan": "Japan", "ukraine": "Ukraine", "france": "France",
            "india": "India", "vietnam": "Vietnam", "uk": "UK", "united kingdom": "UK",
            "mexico": "Mexico", "singapore": "Singapore", "iran": "Iran"

        }

        const countries = {}
        for (let i of data) {
            if (i.country in mapped_countries) {
                let mapped_country = mapped_countries[i.country]
                if (mapped_country in countries) {
                    countries[mapped_country] = countries[mapped_country] + 1
                } else {
                    countries[mapped_country] = 1
                }

            }

        }

        const countryList = Object.keys(countries)
        const countList = Object.values(countries)

        const countryData = []
        for (let i = 0; i < countryList.length; i++) {
            countryData.push(
                { country: countryList[i], count: countList[i] }
            )
        }
        console.log((countryData))
        return countryData

    }




    function dataAge(data) {


        const ages = {}
        for (let i of data) {

            if (i.age in ages) {
                ages[i.age] = ages[i.age] + 1
            } else {
                ages[i.age] = 1
            }

        }



        const ageList = Object.keys(ages)
        const countList = Object.values(ages)

        const ageData = []
        for (let i = 0; i < ageList.length; i++) {
            ageData.push(
                { age: ageList[i], count: countList[i] }
            )
        }
        console.log((ageData))
        return ageData

    }
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDUyLjtE4wq9VjJMm6Xw2xdE815ySSRJFw"
    })
    // const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(location);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])



    function getCoordinates(address) {

        setZipCodeLoaded(false);
        fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + '&key=' + "AIzaSyDUyLjtE4wq9VjJMm6Xw2xdE815ySSRJFw")
            .then(response => response.json())
            .then(data => {

                const lat = data.results[0].geometry.location.lat;
                const lng = data.results[0].geometry.location.lng;
                console.log(setLocation({ lat, lng }))
                setZipCodeLoaded(true)
                setOpen(true);
            }).catch(e => { alert("Invalid Zipcode!"); setZipCodeLoaded(true); setZipCode("") })
    }



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


            setTime(`${remainingDays} Days ${remainingHours < 10 ? remainingHours.toString() + '0' : remainingHours.toString()}:${remainingMinutes < 10 ? remainingMinutes.toString() + "0" : remainingMinutes.toString()}:${remainingSeconds < 10 ? remainingSeconds.toString() + '0' : remainingSeconds.toString()}`, 1000)
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
        }, 30 * 1000);
    }, [])


    if (redirectTo !== "") {
        navigate(redirectTo)
    }

    return (
        <Box mt={-5}>
            <Box pb={5} pt={2}>
                {/* <MainCarousel /> */}


                <Grid container flexDirection={'column'} justifyContent={"center"} alignItems={"center"} rowGap={4} sx={{
                    backgroundColor: "white", color: '#616161', width: '100%', borderRadius: 3, borderTopLeftRadius: 1, borderTopRightRadius: 1,
                    boxShadow: "#F6f7f6 10px 10px 10px 10px",
                }}>

                    <Grid item p={6} pt={3} justifyContent={"center"}>

                        < img width={200} height={200}
                            className="img-animation"
                            alt={"loading"}
                            src='./logo.png' style={{ position: "relative", top: 100, left: 50 }} ></img >
                        <Box mt={-25} >
                            <CountryChart data={dataCountry(data)} />
                        </Box>
                    </Grid>


                    <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle>{"Find"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                Let's find the nearest marathon event around you.
                                More participants, the more trees we plant!
                            </DialogContentText>
                            <br />
                            {isLoaded ?
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={location}
                                    zoom={4}
                                    onLoad={onLoad}
                                    options={options}

                                    onUnmount={onUnmount}
                                >
                                    { /* Child components, such as markers, info windows, etc. */}
                                    {/* <Marker key={marker_idx} position={{ location }} /> */}

                                    {EventsData.map((marker, key) =>
                                        <MarkerF
                                            icon={'./1.png'}
                                            onClick={() => setRedirect(`/events/${marker.id}`)}
                                            key={key} title={marker.name} position={marker.position} >

                                        </MarkerF>
                                    )}
                                </GoogleMap>
                                : <p>Loading Google Maps...</p>}

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} >OK</Button>
                        </DialogActions>
                    </Dialog>


                    <Grid container spacing={6} justifyContent={"center"} flexDirection={"row"} pb={10} mt={-10}>
                        <Grid item flexDirection={'column'} >
                            <Grid item>
                                <Typography variant="body2" sx={{ color: "darkGrey" }}>Total Supporters</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" fontWeight={'bold'}>{data.length} Supporters</Typography>
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

                        <Grid container item flexDirection={'row'} columnGap={2} mt={-6}
                            sx={{ backgroundColor: "#eeeeee", borderRadius: 2, p: 1.5 }}
                        >
                            <Grid item>
                                <TextField placeholder='ZIP Code' size='small' value={zipCode} sx={{ backgroundColor: "white", input: { color: "#4e6b55", fontWeight: "bold" } }} onChange={(e) => { setZipCode(e.target.value) }}></TextField>
                            </Grid>
                            <Grid item>
                                <Button disabled={!zipCodeLoaded} variant='contained' sx={{ height: "40px" }} className={"blinking"} onClick={handleClickOpen}>Find Nearest Marathon</Button>
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

                <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} mt={10}>
                    <Typography variant={"body2"} sx={{ textAlign: "center" }}>
                        Running Earth &copy; is a nonprofit organization.
                    </Typography>

                    <Typography variant={"body1"} sx={{ textAlign: "center", color: "darkgreen" }}>
                        Your event funds directly support in saving our planet.
                    </Typography>


                    <Typography variant={"body1"} sx={{ textAlign: "center", color: "darkgreen" }}>
                        For every <span style={{ fontWeight: "bold", color: "green" }}>one</span> participants, we plant <span style={{ fontWeight: "bold", color: "green" }}>one</span>  tree
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




            <Box mt={5} pb={10} display={"flex"} justifyContent={"center"}>
                <AgeChart data={dataAge(data)} />
            </Box>

        </Box >
    );
}

export default Home;
