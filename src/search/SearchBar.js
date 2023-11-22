import React from "react";
import { Box, TextField } from "@mui/material";

export default function SearchBar() {

    const apiKey = "j8F30WKHQaLkZVnEI4xU6Pd1Gc2BNwil"
    const apiEndpoint = "https://api.core.ac.uk/v3/"

    async function getEntity(urlFragment, query, limit = 10) {
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

    async function handleSubmit(event) {
        event.preventDefault()

        getEntity("search/data-providers", "location.countryCode:" + event.target.search.value)
            .then((results) => {
                const data_providers = results[0].results
                console.log(data_providers)
                
            })
        /*
                //location.countryCode can be from dropdown : [us, gb, ca]
                getEntity("search/data-providers", "location.countryCode:" + event.target.search.value)
                    .then((results) => {
                        const data_providers = results[0].results
                        console.log(data_providers)
                    })
        */

    }

    const handleChange = (event) => {
        //console.log(event.target.value)
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
                id="search"
                label="search"
                variant="filled"
                onChange={handleChange}
            />
        </Box>
    )
}