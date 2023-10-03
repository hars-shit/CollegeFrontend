import React from 'react'
import {BiSolidRightArrow} from 'react-icons/bi'
import Marquee from "react-fast-marquee";
import { Bottom, MarqText, Text } from './styles'
import { Box, Toolbar, Typography } from '@mui/material';

const Bottom_Header = () => {
    return (
        <Bottom position='static'>
            <Toolbar>
                <Text>
                    <Typography>Announcements</Typography>
                <BiSolidRightArrow fontSize={10} style={{color:'white'}}/>
                </Text>
                {/* for running text  */}
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Box display={'grid'} justifyContent={'center'} alignItems={'center'}  overflow={'hidden !important'}>
                    <Marquee>
    
                    <MarqText >&nbsp;77th Independence Day Celebrations at IIT Madras - Live Webcast &nbsp;</MarqText>
                    <MarqText >| &nbsp;</MarqText>
                    <MarqText >77th Independence Day Celebrations at IIT Madras - Live Webcast &nbsp;</MarqText>
                    <MarqText>| &nbsp;</MarqText>
                    <MarqText >77th Independence Day Celebrations at IIT Madras - Live Webcast</MarqText>
                    </Marquee>
                </Box>
                
    
                </Box>
    
    
    
            </Toolbar>
        </Bottom>
      )
}

export default Bottom_Header