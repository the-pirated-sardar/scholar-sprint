import React from "react";
import { Box } from "@mui/material";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";


export default function SearchDisplay() {

    return (
        <Box
            sx={{
                display: 'flex',
                maxHeight: 600,
                maxWidth: 600,
                padding: 10,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',

            }}
        >
            <SearchBar />
            <SearchResults/>
        </Box>
    )
}