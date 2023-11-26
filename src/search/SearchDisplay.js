import React from "react";
import { Box, Typography } from "@mui/material";
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
                <Typography variant="h5">
                    What are you looking for?
                </Typography>
                <SearchBar />
            </Box>
            <Box
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <SearchResults />
            </Box>
        </Box>
    )
}