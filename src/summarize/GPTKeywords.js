import React from "react";
import { Typography } from "@mui/material";
import { useGPTResults } from "./GPTStore.js";

const GPTSummary = () => {

    const { gptKeywords } = useGPTResults();

    return (
        <Typography variant='p'>
            {`Keywords: ${gptKeywords}`}
        </Typography>
    )
}

export default GPTSummary;