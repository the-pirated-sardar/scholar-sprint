import React from "react";
import { Typography } from "@mui/material";
import { useGPTResults } from "./GPTStore.js";

const GPTSummary = () => {

    const { gptSummary } = useGPTResults();

    return (
        <Typography variant='p'>
            {`ChatGPT says: ${gptSummary}`}
        </Typography>
    )
}

export default GPTSummary;