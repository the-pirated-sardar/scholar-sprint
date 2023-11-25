import React from "react";
//import { Link } from "react-router-dom"
import { Box, Button } from "@mui/material";
import { useSearchResults } from "../search/SearchStore.js"
import { useGPTResults} from "./GPTStore.js"

export default function OptimizeQueryButton() {

    const results = useSearchResults((state) => state.results)
    const setGPTResults = useGPTResults((state) => state.setGPTResults)

    const API_KEY = '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';
    //const prefix1 = "I want to optimize the search query sent to CORE API to fetch research, for which I have made a natural language prompt. "
    //    + "So I want you to reply with only an expanded prompt to be sent to CORE API and nothing else at all. "
    //    + "The natural language prompt is as follows: ";

    //const submitButton = document.querySelector('#submit'); // HTML section with id="submit" will trigger the function when clicked
    //const inputElement = document.querySelector('input'); // HTML input section will be the input for the function. Assumed only one input element exists
    //const outputElement = document.querySelector('#output'); // HTML section with id="output" will be the output for the function

    async function fetchData() {

        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-4-1106-preview",
                messages: [{ "role": "user", "content": "fullPrompt1" }],
                max_tokens: 100
            })
        }

        try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", options)
            const data = await response.json()
            console.log(data)
            
            return data.choices[0].message.content

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleClick = (event) => {

        if(false) {
        fetchData(results[0].fullText)
            .then((response) => {
                setGPTResults(response)
            })
        }
    }

    return (
        <Box

        >
            <Button
                variant="outlined"
                onClick={handleClick}
                sx={{
                    color: 'white'
                }}
            >
                Optimize
            </Button>
        </Box>

    )
}