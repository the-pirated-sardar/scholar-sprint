import React from "react";
import { Box } from "@mui/material";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

export default function SearchDisplay() {

    return (
        <Box
            sx={{
                display: 'flex',
                width: 300,
                height: 300,
                minWidth: 300,
                minHeight: 300,
                padding: 20,
                bgcolor: "FCFCFC",
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',

            }}
        >
            <SearchBar />
            <SearchResults />
        </Box>
    )
}