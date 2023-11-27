import React from "react";
import { Typography } from "@mui/material";
import { useGPTResults } from "./GPTStore.js";

const GPTSummary = () => {

    const { gptResults } = useGPTResults();

    return (
        <Typography variant='p'>
            {`GPT Results: ${gptResults}`}
        </Typography>
    )
}

export default GPTSummary;