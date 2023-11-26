import React, { useEffect } from "react"
import { Outlet, Link, useLoaderData } from "react-router-dom"
import { Box, Button } from "@mui/material"
import { useAuthStore } from "../auth/AuthStore"
import Header from "../Layout/Header"
import Footer from "../Layout/Footer"
import theme from "../themes/theme"

async function foo() {
    return `{data: "dummy data"}`
}

export async function loader() {
    const data = await foo()
    return { data }
}

export default function Layout() {

    const { data } = useLoaderData()
    const { currentUser } = useAuthStore()
    
    const verifyAuth = () => {
        console.log(currentUser)
    }

    return (
        <Box sx={theme.rootTheme}>
            <Header/>
            <Box sx={{}}>Scholar Sprint</Box>
            <Box sx={{}}>
                <Button
                    variant="contained"
                    component={Link}
                    to="/"
                    sx={theme.buttonTheme}
                >
                    Home
                </Button>
                <Button
                    variant="contained"
                    sx={theme.buttonTheme}
                    onClick={verifyAuth}
                >
                    Verify Auth
                </Button>
            </Box>
            <Box sx={{}} ><Outlet /></Box>
            <Box sx={{}}>{data}</Box>
            <Footer/>
        </Box >
    )
}