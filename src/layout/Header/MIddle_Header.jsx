import { Box, Toolbar } from '@mui/material'
import React from 'react'
import {useNavigate} from "react-router-dom"
import {IoIosMenu} from 'react-icons/io'
import { Container, Deemd, English, Hindi, Icon, Image, ImageBox, Items, Loc, Menu, Signin } from './styles'

const MIddle_Header = () => {

  const navigate = useNavigate()

  const handleLogin=()=>{
    navigate('/register')
  }

  return (
    <Container position='static'>
        <Toolbar sx={{height:'100%'}}>
            {/* for clg logo */}
            <Icon>
                <ImageBox >
                    {/* img  */}
                  <Image src="https://storage.googleapis.com/ezap-prod/colleges/3615/institute-of-technology-gopeshwar-chamoli-logo.png" alt="" />


                </ImageBox>
                <Box display={'flex'}   flexDirection={'column'} >
                    

                    <Hindi >प्रौद्योगिकी संस्थान, गोपेश्वर</Hindi>
                    <English >Institute of Technology, Gopeshwar</English>
                    <Deemd >VEER MADHO SINGH BHANDARI UTTARAKHAND TECHNICAL UNIVERSITY,</Deemd>
                    <Loc >CAMPUS INSTITUTE ,Approved By AICTE, NEW DELHI</Loc>
                </Box>

            </Icon>

            <Items>
                
                    <button >HOME</button>
                    <button>ABOUT</button>
                    <button >ADMINISTRATION</button>
                    <button >DEPARTMENTS</button>
                    <button>ACADEMIC</button>
               
            </Items>

            {/* for login  */}

            <Signin>
                <button onClick={handleLogin}>Login</button>
            </Signin>

            <Menu>
              <IoIosMenu />
            </Menu>
        </Toolbar>
    </Container>
  )
}

export default MIddle_Header