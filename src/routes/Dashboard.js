import { Box } from "@mui/material"
import SearchDisplay from "../search/SearchDisplay"
import GPTDisplay from "../summarize/GPTDisplay"

export default function Home() {
    return (
        <Box
            sx={{
                display: 'flex',
                bgcolor: "FCFCFC",
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <SearchDisplay />
            <GPTDisplay />
        </Box>
    )
}