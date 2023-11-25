import React from "react";
import { Box } from "@mui/material"
import OptimizeQueryButton from "./OptimizeQuery";
import SummarizeButton from "./SummarizeButton";
import GPTResults from "./GPTResults";

export default function GPTDisplay() {
    return (
        <div>
            <Box
                sx = {{
                    display: 'flex',
                    py: 10,
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                }}
            >
                <OptimizeQueryButton />
                <SummarizeButton />
            </Box>
            <GPTResults />
        </div>
    )
}