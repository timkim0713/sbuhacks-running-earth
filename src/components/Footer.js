import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";

function Footer() {

    const navItems = ['Home', 'Events', 'About'];
    const navItemsPath = ['', 'events', 'about'];


    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            backgroundColor={"primary.main"}
            sx={{ height: "40vh", paddingTop: 10 }}
        >
            <Typography variant={"body1"} color={"secondary.main"}>2022 Running Earth©</Typography>
            <Grid container direction="row" justifyContent={"center"}>

                {navItems.map((item, idx) => (
                    <Link to={navItemsPath[idx]} style={{ textDecoration: 'none' }}>
                        <ListItemButton><Typography color={"secondary.main"}>{item}</Typography>
                        </ListItemButton>
                    </Link>

                ))}
            </Grid>

        </Grid >
    );
}

export default Footer;
