import { Box, Button } from "@mui/material"
import { Link } from "react-router-dom"
import theme from "../themes/theme"

export default function Header() {
    return (
        <Box sx={theme.Header}>
            <Button
                variant="contained"
                component={Link}
                to="/"
                sx={theme.buttonTheme}>
                Home
            </Button>
            ScholarSprint
        </Box>
    )
}