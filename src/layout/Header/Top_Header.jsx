import {  Box} from '@mui/material'
import React from 'react';
import {GoMail} from 'react-icons/go'
import {MdOutlineLocationOn} from 'react-icons/md'
import {IoIosCall} from 'react-icons/io'
import { Header, ToolBar } from './styles';


const Top_Header = () => {
  return (
   <Header position='static'>
    <ToolBar style={{padding:0}}>
      <Box>

    <a href="" className="links" ><GoMail />itgopeshwar@gmail.com</a>
        <a href="" className="links"><MdOutlineLocationOn />Institute of Technology Gopeshwar, Chamoli, UT-246424</a>
      </Box>
        <Box>

        <a href="" className="links"><IoIosCall />AICTE Feedback</a>
        <a href="" className="links">24*7 Women Helpline Number - 9389658483 </a>
        </Box>
       </ToolBar>
    
   </Header>
  )
}

export default Top_Header