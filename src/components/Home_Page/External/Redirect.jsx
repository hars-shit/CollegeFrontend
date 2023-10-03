import { Box, Typography } from '@mui/material'
import React from 'react';
import {PiBankFill} from 'react-icons/pi';
import {BsCurrencyRupee} from 'react-icons/bs'
import { Container, Heading } from './style';


const Redirect = () => {
  return (
   <Container>
    <Heading>
        PORTALS
       
    </Heading>
    <Box>

    <Box>
        <PiBankFill />
        <Typography>Question-Bank</Typography>
    </Box>
    <Box>
        <BsCurrencyRupee />
        <Typography>Institute Fee</Typography>
    </Box>
    </Box>
   </Container>
  )
}

export default Redirect