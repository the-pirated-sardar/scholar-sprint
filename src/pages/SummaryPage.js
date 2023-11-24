import React from 'react'
import { Box } from '@mui/material'
import GPTDisplay from '../summarize/GPTDisplay.js'
import { useNavigate } from "react-router-dom"; 
import Search from './SearchPage.js'

export default function Summary() {
  const navigate = useNavigate(); 

  return (
    <Box
      sx={{
        display: 'flex',
        bgcolor: "Tomato",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <GPTDisplay />
      <Search />
      <button onClick={() => {navigate("/search")}}>
        go to search
      </button>
    </Box>
  );
}