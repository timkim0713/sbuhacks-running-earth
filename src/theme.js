import { createTheme } from '@mui/material';
let theme = createTheme({

    palette: {
        primary: { main: "#8AAE92", contrastText: "#fff" },
        secondary: { main: "#C4E3CB", contrastText: "#fff" },

        runningEarth: {
            primary: {
                main: "#8AAE92"
            },
            secondary: {
                main: "#C4E3CB",
            },
            light: {
                main: "rgb(244, 249, 244)"
            },
            lighter: {
                main: "#f7f6f2"
            },

        }



    },

    typography: {
        body1: {
            lineHeight: 1.75,
        },
        body2: {
            lineHeight: 1.75,
        }
    },
});



export default theme