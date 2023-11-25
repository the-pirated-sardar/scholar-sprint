import { Link } from "react-router-dom"
import { Box, Button, Card, CardContent, Typography } from "@mui/material"
import { useAuthStore } from '../auth/AuthStore';
import { useNavigate } from "react-router-dom"

export default function Home() {
    const { currentUser, logout } = useAuthStore();
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await logout()
                .then(navigate('/login'))
        } catch (e) {
            console.error(e)
        }
    }

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
            <Card>
                <CardContent>
                    <Typography variant="h5" align="center" gutterBottom>
                        Profile
                    </Typography>
                    <strong>Email:</strong> {currentUser ? currentUser.email : "bug"}
                </CardContent>
                <CardContent>
                    <Button variant="outlined">
                        <Link to="/update-profile">
                            Update Profile
                        </Link>
                    </Button>
                    <Button variant="text" onClick={handleLogout}>
                        Log Out
                    </Button>
                    <Button variant="outlined">
                        <Link to={`/dashboard`}>
                            Go To Dashboard
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </Box>
    )
}