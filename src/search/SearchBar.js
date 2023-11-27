import React from "react";
import { Box, TextField } from "@mui/material";
import { useSearchResults, coreapiStore } from "./SearchStore.js"

import { fetchOptimizedQuery } from "../summarize/GPTMethods.js";

import theme from "../themes/theme.js";

export default function SearchBar() {

    const { apiKey, apiEndpoint } = coreapiStore();
    const { setResults } = useSearchResults();

    async function query_api(urlFragment, query, limit = 10) {
        const headers = {
            "Authorization": "Bearer " + apiKey,
            "Content-Type": "application/json",
        };

        const requestBody = JSON.stringify({ q: query, limit: limit });

        try {
            const response = await fetch(`${apiEndpoint}${urlFragment}`, {
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
        query = await fetchOptimizedQuery(query)
        console.log(query)
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
                defaultValue="covid"
            />
        </Box>
    )
}