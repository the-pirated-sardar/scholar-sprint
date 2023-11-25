import React from 'react'; 
import { Box, Button, ListItem } from '@mui/material'; 
import GPTResults from '../summarize/GPTResults.js'; 
import { useNavigate, Link } from "react-router-dom"; 
import SummarizeButton from "../summarize/SummarizeButton";
import SearchBar from "../search/SearchBar";
import { useGPTResults } from "../summarize/GPTStore.js"; 

export default function Summary() {
  const navigate = useNavigate(); 
  const gptResults = useGPTResults((state) => state.gptResults)

  return (
    <Box
      sx={{
        display: 'flex',
        bgcolor: "gray",
        backgroundSize: 'cover', 
        flexDirection: 'column',
        width: 1000, 
        height: 600, 
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Box       
        sx={{
        display: 'flex',
        backgroundSize: 'cover', 
        flexDirection: 'row',
        width: 1000, 
        py: 5, 
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        }}
        >        
        <SummarizeButton />
        <Button 
          variant="outlined"
          onClick={() => {navigate("/results")}}
          sx={{
              color: 'white'
          }}>
          links
        </Button>
        <Button 
          variant="outlined"
          sx={{
              color: 'white'
          }}
        >
          Download
          {/* <Link href={listitem.downloadUrl}>
              {"download "}
          </Link> */}
        </Button>
      </Box>
      <Box sx={{
        width: 800, 
        py: 10, 
        }}
      >
        <GPTResults />
      </Box>
      <Box sx={{
        width: 600, 
        py: 10, 
        }}
      >
        <SearchBar/>
      </Box>
    </Box>
  );
}