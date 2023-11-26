import React, { useEffect } from "react"
import { Outlet, useLoaderData } from "react-router-dom"
import { Box } from "@mui/material"
import { useAuthStore } from "../auth/AuthStore"
import theme from "../themes/theme"
import Header from "../Layout/Header"
import Footer from "../Layout/Footer"

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
            <Header/>
            <Box sx={{}}>Scholar Sprint</Box>
            <Box sx={{}} ><Outlet /></Box>
            <Box sx={{}}>{data}</Box>
            <Footer/>
        </Box >
    ) : "loading"
}