import React from "react";
import { Box, Button } from "@mui/material";
import { useSearchResults } from "../search/SearchStore.js"
import { useGPTResults } from "./GPTStore.js";

export default function SummarizeButton() {

    const results = useSearchResults((state) => state.results)
    const setGPTResults = useGPTResults((state)=>state.setGPTResults)

    const API_KEY = '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'

    async function fetchData(prompt) {
        console.log("Fetching data...");

        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-4-1106-preview",
                messages: [{ "role": "user", "content": "summarize this:" + prompt }],
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

        fetchData(results[0].fullText)
            .then((response) => {
                setGPTResults(response)
            })
    }

    return (
        <Box
        >
            <Button
                variant="outlined"
                sx={{
                    color: 'white',
                }}
                onClick={handleClick}  
            >
                Summarize
            </Button>
        </Box>

    )
}