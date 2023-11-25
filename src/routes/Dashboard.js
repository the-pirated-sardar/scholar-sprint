import { Box, Typography} from "@mui/material"
import SearchBar from "../search/SearchBar";

export default function Dashboard() {
    return (
        <Box sx={{
            Display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end', 
            textAlign: 'center', 
        }}>
            <Typography variant="h5">
                What are you looking for?
            </Typography>
            <Box sx={{
                Display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center', 
                textAlign: 'center', 
                margin: 20, 
                width: 600
            }}>
                <SearchBar/>
            </Box>
        </Box>
    )
}