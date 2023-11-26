import { useEffect } from "react"
import { Box} from "@mui/material";
import { useGPTResults } from "./GPTStore.js"

export default function GPTResults() {

    const gptResults = useGPTResults((state) => state.gptResults)

    useEffect(() => {
        console.log(gptResults)
    }, [gptResults])

    return (
        <Box
            sx={{
                display: "flex",
                width: 1,
                height: 1,
            }}
        >
            {`GPT Results: ${gptResults}`}
        </Box>
    )
}