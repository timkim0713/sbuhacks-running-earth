import * as React from 'react';
import Grid from '@mui/material/Grid';
import MainCard from './MainCard';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Box from "@mui/material/Box"

function MainContent({ title, subtitle, content, img, isAbout, credit }) {
    return (
        <Box sx={{ width: "100%" }}>
            <Grid container
                direction={"row"}
                justifyContent={"space-between"} columnSpacing={10} rowSpacing={12}
            >
                <Grid item xs={12} md={6} >
                    <Card className={"about"}>
                        <CardMedia
                            component="img"
                            height="350"
                            image={img}
                            className={isAbout ? "img-animation" : ""}
                        />
                    </Card>
                </Grid>

                <MainCard title={title} content={content} subtitle={subtitle} credit={credit} />
            </Grid>
        </Box>
    );
}

export default MainContent;
