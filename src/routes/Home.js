import { Link } from "react-router-dom"
import { Box, Button } from "@mui/material"

export default function Home() {
    return (

        <Box
            sx={{
                display: 'flex',
                blockSize: 'cover', 
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Button variant="outlined"><Link to={`/dashboard`}>Go To Dashboard</Link></Button>
        </Box>
    )
}