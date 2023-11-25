import React, { useEffect } from "react"
import { Outlet, Link, useLoaderData } from "react-router-dom"
import { Box, Button, Grid } from "@mui/material"
import { useAuthStore } from "../auth/AuthStore"

async function foo() {
    return `{data: "dummy data"}`
}

export async function loader() {
    const data = await foo()
    return { data }
}

export default function Layout() {

    const { data } = useLoaderData();
    const { loading, init } = useAuthStore();

    useEffect(() => {
        init();
    }, [init]);
    // add sidebar, header, footer, etc

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh' }}
        >
            <Grid item xs={3}>
                <Box

                >
                    <Button variant="outlined"><Link to={`/`}>Home</Link></Button>
                </Box>
            </Grid>
            <Grid item xs={3}>
                {!loading ? <Outlet /> : "loading"}
            </Grid>
            <Grid item xs={3}>
                {0 ? data : ""}
            </Grid>
        </Grid>
    )
}