import React from "react";
import { Box, TextField } from "@mui/material";

const SearchBar = () => {

    const apiKey = "j8F30WKHQaLkZVnEI4xU6Pd1Gc2BNwil"
    const apiEndpoint = "https://api.core.ac.uk/v3/"

    async function getEntity(urlFragment) {
        const headers = {
            "Authorization": "Bearer " + apiKey
        };

        try {
            const response = await fetch(apiEndpoint + urlFragment, {
                method: 'GET',
                headers: headers
            });

            if (response.ok) {
                const json = await response.json();
                return { data: json, elapsed: response.elapsed };
            } else {
                console.error(`Error code ${response.status}, ${await response.text()}`);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    async function handleSubmit(event) {

        event.preventDefault()
        console.log(event.target.value)
        
        getEntity("data-providers/1")
            .then(({ data, elapsed }) => {
                console.log(JSON.stringify(data, null, 2));
                console.log('Elapsed time:', elapsed);
            })

    }

    const handleChange = (event) => {
        console.log(event.target.value)
    }

    return (
        <Box
            component="form"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            onSubmit={handleSubmit}
        >
            <TextField
                id="filled-basic"
                label="Search"
                variant="filled"
                onChange={handleChange}
            />
        </Box>
    )
}
export default SearchBar;