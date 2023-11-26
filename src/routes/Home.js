import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Box, Button, Card, CardContent, Typography } from "@mui/material"
import { useAuthStore } from '../auth/AuthStore'
import { useNavigate } from "react-router-dom"

export default function Home() {
    const { currentUser, logout } = useAuthStore();
    const navigate = useNavigate();

    const { loading, init } = useAuthStore();

    useEffect(() => {
        init();
    }, [init]);

    async function handleLogout() {
        try {
            await logout()
                .then(navigate('/login'))
        } catch (e) {
            console.error(e)
        }
    }

    return !loading ? (
        <Box
            sx={{
                display: 'flex',
                blockSize: 'cover',
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
                    {currentUser ? `Welcome ${currentUser.email}` : "Not Logged In"}
                </CardContent>
                <CardContent>
                    <Button variant="outlined" component={Link} to="/profile">Profile</Button>
                    <Button variant="text" onClick={handleLogout}>Log Out</Button>
                    <Button variant="outlined" component={Link} to="/dashboard">Go To Dashboard</Button>
                </CardContent>

            </Card>
        </Box>
    ) : "loading"
}