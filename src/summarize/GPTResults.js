import React from "react";
import { Typography } from "@mui/material";

import { useGPTResults } from "./GPTStore.js";

export default function GPTResults() {

    const { gptResults } = useGPTResults()

    return (
        <Typography variant='p'>
            {`GPT Results: ${gptResults}`}
        </Typography>
    )
}