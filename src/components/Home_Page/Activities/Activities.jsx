import React from 'react'
import Carousel from 'react-multi-carousel'
import { Box, Typography, styled } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';
import activity from '../../../constant/activity';



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};
const Image = styled('img') ({
    width: '100%',
    height: '100%',
   borderRadius:'5px',
    objectFit:"cover",
    objectPosition: '0% 0%',
});
const Banner=styled(Carousel)({
width:'100%',

  '& > button':{
    // display:'none',
  },
  '& >ul':{
    '& > li':{
        '& > button':{
            // display:'none'
        }
    }
}
})

const Activities = () => {
  return (
    <Box marginTop={8} background="black">

    <Box ><Typography textAlign={'center'} fontSize={'32px'} fontWeight={700}  color="#7E1717">Recent Activity</Typography></Box>
    <Box height={'360px'}   display={'flex'} paddingRight='40px' paddingLeft='40px'>

 
    <Banner  swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={4000}
             slidesToSlide={1}
    keyBoardControl={true}
    customTransition="ease .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    
    >
       {
        activity.map(item=>(

            <Image src={item.imgPath} alt='banner' />
        ))
       }
              
          

    </Banner>
    </Box>
    </Box>
  )
}

export default Activities