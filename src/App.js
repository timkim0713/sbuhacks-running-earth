import { useEffect, useState } from 'react';

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import { Container } from "@mui/system";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from "@mui/material/Box"
import Home from "./pages/Home"
import EventsList from "./pages/EventsList"
import Event from "./pages/Event"
import About from "./pages/About"
import Ticket from "./pages/Ticket"

import theme from "./theme"

import InitialLoading from "./components/InitialLoading";

function App() {


  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    setIsLoading(true)
    setTimeout(() => {

      setIsLoading(false)

    }, 3000);


  }, [])




  return (
    <>
      <ThemeProvider theme={theme}>


        {isLoading ?
          <InitialLoading />
          :
          <>
            <Navbar></Navbar>
            <Container sx={{
              mt: 10, mb: 10, backgroundColor: "#F6f7f6", borderRadius: 6,
              borderTopLeftRadius: 2, borderTopRightRadius: 2,
              boxShadow: "#F6f7f6 10px 10px 10px 10px"
            }}>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="events" element={<EventsList />} />
                <Route
                  exact
                  path="/events/:id"
                  element={<Event />}
                />
                <Route exact
                  path="/tickets/:id"
                  element={<Ticket />}
                />

                <Route path="about" element={<About />} />

              </Routes>


            </Container>
            <Footer></Footer>
          </>
        }
      </ThemeProvider>
    </>
  );
}


export default App;
