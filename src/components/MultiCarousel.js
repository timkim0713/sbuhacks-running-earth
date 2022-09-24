import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '@mui/material/Card';
import Box from "@mui/material/Box"

export default function MultiCarousel({ autoPlaySpeed, rtl }) {

    const IMAGES = [
        "https://i.pinimg.com/originals/7f/c7/17/7fc717724414a8f51fbb592c1a36b33d.png",
        "https://i.pinimg.com/originals/4b/6f/0f/4b6f0f786d32460c3eb9b9f1c68dcf69.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCAcf1R1YoyiNeLoXcWAgejQNwLfzXySf-vA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXExn76EXhcWk_TfeKVnIUdJQxHEVuairF_Q&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWVEdOmLEVMLSNRg1-lendVl_IxNDb4PDvLA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxh2ciyaHCTQDas_FeGoCdDENFvhkyco7-iA&usqp=CAU",
    ]

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Box >

            <Carousel responsive={responsive}
                arrows={false}
                swipeable={true}
                showDots={false}
                draggable={true}
                infinite={true}
                autoPlay={true}
                rewind={false}
                autoPlaySpeed={autoPlaySpeed}
                rtl={rtl}
            >

                {IMAGES.map((img, idx) => (
                    // <Card sx={{ height: 75, width: 75 }}>
                    <img src={img} alt={idx} width="75"></img>
                    //  </Card>
                ))}



            </Carousel>

        </Box>
    );


}