import * as React from 'react';
import Box from '@mui/material/Box';
import MultiCarousel from '../components/MultiCarousel';

export default function MiniGallery() {
    return (
        <>
            <Box mt={5} sx={{
                display: "flex", flexDirection: "row"
            }}>
                <Box sx={{
                    background: "linear-gradient(to left, rgba(255,255,255,0), rgb(244, 249, 244))",
                    height: 500,
                    width: 100,
                    position: "absolute",
                    zIndex: 1

                }} />
                <Box width={"100%"}>
                    <MultiCarousel autoPlaySpeed={1200} rtl={false} />
                </Box>

                <Box>
                    <Box sx={{
                        background: "linear-gradient(to right, rgba(255,255,255,0), rgb(244, 249, 244))",
                        height: 500,
                        width: 100,
                        position: "absolute",
                        zIndex: 1,
                        marginLeft: -12

                    }} />
                </Box>

            </Box>
            <Box mt={5}>
                <MultiCarousel autoPlaySpeed={1000} rtl={true} />
            </Box>
            <Box mt={5}>
                <MultiCarousel autoPlaySpeed={1100} rtl={false} />
            </Box>
        </>
    );
}

