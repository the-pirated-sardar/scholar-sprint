import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useSearchResults, coreapiStore } from "./SearchStore.js"
import { useNavigate } from "react-router-dom"; 

export default function SearchBar() {

    const apiKey = coreapiStore(((state) => state.apiKey))
    const apiEndpoint = coreapiStore(((state) => state.apiEndpoint))
    const setResults = useSearchResults((state) => state.setResults)

    async function query_api(urlFragment, query, limit = 5) {
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

    /*
    async function getDataPoviders(event) {
        event.preventDefault()
        getEntity("search/data-providers")
            .then((results) => {
                const data_providers = results[0].results
                setResults(data_providers)
            })
    }
    */

    async function getWorks(query = "covid AND yearPublished>=2010 AND yearPublished<=2021") {
        query_api("search/works", query)
            .then((results) => {
                console.log(results)
                const hits = results[0].results
                setResults(hits)
            })
    }

    const navigate = useNavigate(); 

    async function handleSubmit(event) {
        event.preventDefault()

        getWorks(event.target.search.value)
        navigate("/results")
    }

    return (
        <Box
            component="form"
            sx={{
                height: 1,
                width: 1,
                color: "gray"
            }}
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
                color="secondary"
                sx={{
                    bgcolor: 'gray', 
                    opacity: 0.6
                }}
                label="search"
                defaultValue="Machine Learning"
            />
        </Box>
    )
}