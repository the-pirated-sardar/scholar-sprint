import React from "react";
import { Box } from "@mui/material"
import OptimizeQueryButton from "./OptimizeQuery";
import SummarizeButton from "./SummarizeButton";
import GPTResults from "./GPTResults";

export default function GPTDisplay() {

    return (
        <Box

        >
            <OptimizeQueryButton />
            <SummarizeButton />
            <GPTResults />
        </Box>
    )
}