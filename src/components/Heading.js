import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"
function Heading({ title, content }) {
    return (

        <Box sx={{ mt: 15, mb: 10, dislpay: "flex", flexDirection: "column" }}>
            <Box >
                <Typography variant={"overline"} color={"primary"} sx={{ fontSize: 36, mb: 0 }}>
                    {title}
                </Typography>
                <Box sx={{ height: 10, width: "300px", mt: -5.2 }} backgroundColor="#E4eee4" />

            </Box>

            <Box mt={2}>
                <Typography variant={"overlilne"} sx={{ fontSize: 16, color: "gray" }}>
                    {content}
                </Typography>
            </Box>

        </Box >

    );
}

export default Heading;
