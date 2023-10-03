import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material'

const theme=createTheme();
ReactDOM.createRoot(document.getElementById('root')).render(
   <ThemeProvider theme={theme}>
      <BrowserRouter>
    <App />
      </BrowserRouter>
   </ThemeProvider>
 
  
)
