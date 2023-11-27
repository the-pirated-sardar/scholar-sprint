import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Button, Card, CardContent, Typography } from "@mui/material"
import { useAuthStore } from '../auth/AuthStore'

export default function Home() {

    const { init } = useAuthStore();

    useEffect(() => {
        init();
    }, [init]);

    return (
        <Card sx={{
            backgroundColor: '#3f51b5',
            color: '#fff',
            padding: '16px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <CardContent>
                <Typography variant="h5" sx={{ fontSize: '1.5rem' }}>
                    Use now
                </Typography>
            </CardContent>
            <CardContent>
                <Button variant="contained" component={Link} color="secondary" to="/dashboard">
                    Go To Dashboard
                </Button>
            </CardContent>
            <CardContent>
                <Button variant="contained" component={Link} color="secondary" to="/profile">
                    Profile
                </Button>
            </CardContent>
        </Card>
    )
}