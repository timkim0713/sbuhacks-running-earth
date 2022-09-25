import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '@mui/material/Card';
import Box from "@mui/material/Box"

export default function MultiCarousel({ autoPlaySpeed, rtl }) {

    const IMAGES = [
        "https://pics.clipartpng.com/Tree_Transparent_PNG_Clip_Art-1108.png",
        "https://purepng.com/public/uploads/large/purepng.com-tree-png-transparentnaturestylenaturalbeautifulgreen-541521125991uf5cl.png",
        "https://www.clipartqueen.com/image-files/tree-clipart-with-fall-leaves.png",
        "https://www.transparentpng.com/thumb/tree/tree-textures-png-15.png",
        "https://www.freepnglogos.com/uploads/tree-png/tree-photoshop-garden-pinterest-1.png",
        "https://www.freepnglogos.com/uploads/tree-png/nature-trees-transparent-15.png",
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