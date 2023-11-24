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
                    maxHeight: 600,
                    maxWidth: 600,
                    py: 10,
                    px: 20, 
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <OptimizeQueryButton />
                <SummarizeButton />
            </Box>
            <GPTResults />
        </div>
    )
}