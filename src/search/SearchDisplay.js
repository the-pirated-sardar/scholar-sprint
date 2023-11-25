import React from "react";
import { Box } from "@mui/material";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";


export default function SearchDisplay() {

    return (
        <Box sx={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start'
        }}>
            <Box
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <SearchBar/>
            </Box>
            <Box
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <SearchResults/>
            </Box>
        </Box>
    )
}