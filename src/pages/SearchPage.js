import React from 'react'
import { Box } from '@mui/material'
import SearchDisplay from '../search/SearchDisplay.js'

export default function Search() {

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
      <SearchDisplay />
    </Box>
  );
}