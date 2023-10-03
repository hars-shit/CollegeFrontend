
import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import news from "../../../constant/news";

const News1 = () => {
  const Image = styled(Box)({
    background: "url(./assets/bg.png)",
    backgroundSize: "cover",
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    
    '& > div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100%',
      '& > div': {
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
      }
    }
  });

  return (
    <Container style={{ padding: 0, overflow: 'hidden', height: 'auto' }} maxWidth={'100%'}>
      <Box display={'flex'} flexDirection={'column'} gap={5}>
        {/* for news */}
        <Box fontSize={'32px'} fontWeight={700} color="#7E1717" textAlign="center">
          ITG-NEWS
        </Box>
        <Box backgroundColor="#f1f1f1" display="flex" flexDirection="column" alignItems="center" gap={5}>
          {news.map(data => (
            <Box key={data.text1} display={'flex'} flexDirection={'column'} alignItems="center">
              <Box>
                <img src={data.img} alt="" />
              </Box>
              <Box>
                <Typography fontSize={'24px'} fontWeight={500}>{data.text1}</Typography>
                <Typography width={'40vh'}>{data.text2}</Typography>
              </Box>
            </Box>
          ))}
          <Box alignSelf="center" marginBottom={'10px'}>
            <Link to={'/'}>Show all of ITG NEWS</Link>
          </Box>
        </Box>
        {/* for events */}
        <Box fontSize={'32px'} fontWeight={700} color="#7E1717" textAlign="center">
          ITG-EVENTS
        </Box>
        <Image>
          <Box backgroundColor="rgba(0, 0, 0, 0.5)" display="flex" flexDirection="column" gap={5}>
            <Box>
              <img src="./assets/Vector.png" alt="" />
              <Typography color={'white'} fontWeight={600} fontSize={'20px'} textAlign="center">
                Coding/Artificial Intelligence
              </Typography>
            </Box>
            <Box>
              <img src="./assets/Vector.png" alt="" />
              <Typography color={'white'} fontWeight={600} fontSize={'20px'} textAlign="center">
                Coding/Artificial Intelligence
              </Typography>
            </Box>
            <Box>
              <img src="./assets/Vector.png" alt="" />
              <Typography color={'white'} fontWeight={600} fontSize={'20px'} textAlign="center">
                Coding/Artificial Intelligence
              </Typography>
            </Box>
            <Box alignSelf="center">
              <Link to={'/'} style={{ color: 'white' }}>Show all of ITG EVENTS</Link>
            </Box>
          </Box>
        </Image>
      </Box>
    </Container>
  );
};

export default News1;


