import React from 'react'
import { Box } from '@mui/material'
import SearchBar from "../search/SearchBar";
import { useNavigate } from "react-router-dom"; 
import SearchResults from "../search/SearchResults";
import OptimizeQueryButton from '../summarize/OptimizeQuery';

export default function Results() {
  const navigate = useNavigate(); 

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 600, 
      }}
    >
        <SearchResults/>
        <SearchBar/>
        <OptimizeQueryButton />
    </Box>
  );
}