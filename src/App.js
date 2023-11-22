import React from 'react';
import { Box } from '@mui/material';
import SearchDisplay from './search/SearchDisplay.js';
import './App.css';


function App() {
  return (
    <Box
      sx = {{
        display: 'flex',
        bgcolor: "FCFCFC",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SearchDisplay />
    </Box>
  );
}

export default App;
