import React from "react";
import { Typography } from "@mui/material";
import { useGPTResults } from "./GPTStore.js";

const GPTKeywords = () => {

    const { gptKeywords } = useGPTResults();

    return (
        <Typography variant='p'>
            {`Keywords: ${gptKeywords}`}
        </Typography>
    )
}

export default GPTKeywords;