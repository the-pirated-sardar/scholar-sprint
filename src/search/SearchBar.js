import React from "react";
import { Box, TextField } from "@mui/material";
import { useSearchResults } from "./SearchStore.js"

import { fetchOptimizedQuery } from "../summarize/GPTMethods.js";

import theme from "../themes/theme.js";

export default function SearchBar() {
    
    const { setResults } = useSearchResults();

    async function query_api(urlFragment, query, limit = 10) {
        const headers = {
            "Authorization": `Bearer ${process.env.REACT_APP_CORE_API_KEY}`,
            "Content-Type": "application/json",
        };

        const requestBody = JSON.stringify({ q: query, limit: limit });

        try {
            const response = await fetch(`https://api.core.ac.uk/v3/${urlFragment}`, {
                method: "POST",
                headers: headers,
                body: requestBody,
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                const elapsedSeconds = response.headers.get("elapsed-time");
                return [jsonResponse, elapsedSeconds];
            } else {
                console.error(`Error code ${response.status}, ${await response.text()}`);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    async function getWorks(query) {
        query = false ? await fetchOptimizedQuery(query) : query
        try {
            const response = await query_api("search/works", query)
            console.log(response[0].results)
            setResults(response[0].results)
        } catch (error) {
            console.error('Error fetching results:', error)
        }
    }

    async function handleSubmit(event) {
        event.preventDefault()
        getWorks(event.target.search.value)
    }

    return (
        <Box
            component="form"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            onSubmit={handleSubmit}
        >
            <TextField
                fullWidth
                id="search"
                variant="filled"
                sx={theme.searchBarTheme.textfield}
                label="search"
                defaultValue="ML"
            />
        </Box>
    )
}