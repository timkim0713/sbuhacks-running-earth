import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid"

import Box from "@mui/material/Box"
function MainCard({ title, subtitle, content, credit }) {
    return (

        <Grid item xs={12} md={6}>
            <Card sx={{ height: 350, width: "100%", }}>
                <CardContent >
                    <Box display={'flex'} justifyContent="space-between" flexDirection={"column"}>
                        <Box>
                            <Typography variant='h5' color={"#444"}>{title}</Typography>

                            <Typography variant='subtitle2' paddingBottom={"15px"} color={"#8AAE92"}>{subtitle}</Typography>

                            <Typography variant='body1' color={'#777'}>
                                {content}
                            </Typography>
                        </Box>

                        <Box mt={20} hidden={!credit}>
                            <Typography variant='body1' color={'#608368'}>
                                {credit}
                            </Typography>

                            <a href="https://timkim0713.github.io/" target="_blank" rel="noopener noreferrer" style={{ color: "#96c1a1", }}>
                                Personal Website Profile
                            </a>
                            <a href="https://www.linkedin.com/in/timkim0713/" target="_blank" rel="noopener noreferrer" style={{ color: "#96c1a1", marginLeft: 15 }}>
                                Linkedin Profile
                            </a>
                            <a href="https://github.com/timkim0713/" target="_blank" rel="noopener noreferrer" style={{ color: "#96c1a1", marginLeft: 15 }}>
                                Github Profile
                            </a>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Grid >

    );
}

export default MainCard;

