import React from "react"
import { Card, CardContent, Box, Typography, Button } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import { useAuthStore } from "../auth/AuthStore"

const Profile = () => {
    const {currentUser, logout} = useAuthStore()
    const navigate = useNavigate()

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
                    {currentUser ? `${currentUser.email.split('@')[0]}'s profile`: "Not Logged In"}
                </CardContent>
                <CardContent>
                    <Button variant="outlined" component={Link} to="/update-profile">Update Profile</Button>
                    <Button variant="text" onClick={handleLogout}>Log Out</Button>
                    <Button variant="outlined" component={Link} to="/dashboard">Go To Dashboard</Button>
                </CardContent>

            </Card>
        </Box >
    )
}

export default Profile