import { Box, ButtonBase, Container, InputBase } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const[form,setForm]=useState({
        email:'',
        password:'',
    })

    const navigate=useNavigate();

    const handleInput=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
   
    const handleClick=async(e)=>{
        e.preventDefault();
        try{
            let response=await axios.post('http://localhost:5002/register',{form})
            // let response=form
            console.log('data',response)
            if(response){
                navigate('/')
            }
            else {
                alert("Something went wrong")
            }
        }
        catch(error){

        }
        
        // console.log('data',submit)
    }
    return (
        <Container>
        <Box>
            Register
        </Box>
        <Box>
            <InputBase type='email' name='email' placeholder='email' onChange={(e)=>handleInput(e)}/>
            <InputBase  name='password' placeholder='password' onChange={(e)=>handleInput(e)} />
            <ButtonBase onClick={(e)=>handleClick(e)}>Enter</ButtonBase>

        </Box>
    </Container>
  )
}

export default Register