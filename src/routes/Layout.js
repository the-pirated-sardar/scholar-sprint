import React, { useEffect } from "react"
import { Outlet, Link, useLoaderData } from "react-router-dom"
import { Box, Button } from "@mui/material"
import { useAuthStore } from "../auth/AuthStore"
import theme from "../themes/theme"

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

    return !loading ? (
        <Box sx={theme.rootTheme}>
            <Box sx={{}}>Scholar Sprint</Box>
            <Box sx={{}}>
                <Button
                    variant="contained"
                    component={Link}
                    to="/"
                    sx={theme.buttonTheme}>
                    Home
                </Button>
            </Box>
            <Box sx={{}} ><Outlet /></Box>
            <Box sx={{}}>{data}</Box>
        </Box >
    ) : "loading"
}