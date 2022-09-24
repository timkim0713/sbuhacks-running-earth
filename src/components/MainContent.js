import * as React from 'react';
import Grid from '@mui/material/Grid';
import MainCard from './MainCard';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Box from "@mui/material/Box"

function MainContent({ title, subtitle, content, img }) {
    return (
        <Box sx={{ width: "100%" }}>
            <Grid container
                direction={"row"}
                justifyContent={"space-between"} columnSpacing={10} rowSpacing={12}
            >
                <Grid item xs={12} md={6} >
                    <Card>

                        <CardMedia
                            component="img"
                            height="350"
                            image={img}
                        />
                    </Card>
                </Grid>

                <MainCard title={title} content={content} subtitle={subtitle} />
            </Grid>
        </Box>
    );
}

export default MainContent;
