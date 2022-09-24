import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid"
function MainCard({ title, subtitle, content }) {
    return (

        <Grid item xs={12} md={6}>
            <Card sx={{ height: 350, width: "100%", }}>
                <CardContent>
                    <Typography variant='h5' >{title}</Typography>

                    <Typography variant='subtitle2' paddingBottom={"15px"} color={"#a1a1a1"}>{subtitle}</Typography>

                    <Typography variant='body1'>
                        {content}
                    </Typography>

                </CardContent>
            </Card>
        </Grid>

    );
}

export default MainCard;

