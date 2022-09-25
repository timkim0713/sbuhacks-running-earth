import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = ['Home', 'Events', 'About'];
const navItemsPath = ['', 'events', 'about'];


function Navbar(props) {
    const { window } = props;

    const [mobileOpen, setMobileOpen] = React.useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} >
            <Typography variant="overline" sx={{ my: 2, color: 'grey' }}>
                RUNNING EARTH
            </Typography>
            <Divider />
            {navItems.map((item, idx) => (
                <Link to={navItemsPath[idx]} style={{ textDecoration: 'none', color: "green" }}>
                    <ListItemButton >
                        <Typography variant="body2" color={"primary"}>
                            {item}
                        </Typography>

                    </ListItemButton>
                </Link>
            ))
            }
        </Box >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <AppBar component="nav" sx={{ bgcolor: "white", background: "transparent", zIndex: { xs: "-1", md: "999" }, backdropFilter: { xs: "blur(0px)", md: "blur(4px)", }, boxShadow: "rgba(246,247,246,.1) 1px 1px 1px 1px", transition: "1000ms" }} >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon color='primary' />
                    </IconButton>
                    <Typography
                        variant="overline"
                        component="div"
                        color="primary"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontSize: "16px" }}
                    >
                        <Link to={navItemsPath[0]} style={{ textDecoration: "none", color: "darkgreen" }}>
                            Running Earth
                        </Link>

                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' }, transition: '2000ms' }}>
                        {navItems.map((item, idx) => (
                            <Link to={navItemsPath[idx]} style={{ textDecoration: 'none', color: "green" }}>
                                <Button key={item}>
                                    <Typography color="primary">{item}</Typography>
                                </Button>
                            </Link>

                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>

    );
}

export default Navbar;
