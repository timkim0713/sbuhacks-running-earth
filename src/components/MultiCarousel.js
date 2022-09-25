import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '@mui/material/Card';
import Box from "@mui/material/Box"
import Tooltip from '@mui/material/Tooltip';

export default function MultiCarousel({ autoPlaySpeed, rtl }) {

    const IMAGES = [
        { img: "https://pics.clipartpng.com/Tree_Transparent_PNG_Clip_Art-1108.png", title: "Tree planted From Korea" },
        { img: "https://purepng.com/public/uploads/large/purepng.com-tree-png-transparentnaturestylenaturalbeautifulgreen-541521125991uf5cl.png", title: "Tree planted From Korea" },
        { img: "https://www.transparentpng.com/thumb/tree/tree-textures-png-15.png", title: "Tree planted From USA" },
        { img: "https://www.freepnglogos.com/uploads/tree-png/tree-photoshop-garden-pinterest-1.png", title: "Tree planted From USA" },
        { img: "https://www.freepnglogos.com/uploads/tree-png/nature-trees-transparent-15.png", title: "Tree planted From Japan" },


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

                {IMAGES.map((data, idx) => (
                    // <Card sx={{ height: 75, width: 75 }}>
                    <Tooltip title={data.title}>
                        <img className={idx % 3 === 0 ? 'img-animation' : ''} src={data.img} alt={idx} width="75" style={{ paddingTop: 5, paddingBottom: 5 }}></img>
                    </Tooltip>
                    //  </Card>
                ))}



            </Carousel>

        </Box>
    );


}