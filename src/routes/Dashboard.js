import { Box } from "@mui/material"
import SearchDisplay from "../search/SearchDisplay";

export default function Dashboard() {
    return (
        <Box sx={{
            Display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            textAlign: 'center',
        }}>
            <Box sx={{
                Display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                margin: 20,
                width: 600
            }}>
                <SearchDisplay />
            </Box>
        </Box>
    )
}