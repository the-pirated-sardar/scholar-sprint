import React from "react"
import { Outlet } from "react-router-dom"
import { Box } from "@mui/material"

import Header from "./Header"
import Footer from "./Footer"

import theme from "../themes/theme"

export default function Layout() {

    return (
        <Box sx={theme.root}>
            <Header />
            <Box component="main" display="flex" alignItems="center" justifyContent="center" mt={12} mb={12}>
                <Outlet />
            </Box>
            <Footer />
        </Box >
    )
}