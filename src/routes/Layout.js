import React from "react"
import { Outlet } from "react-router-dom"
import { Box } from "@mui/material"

import Header from "../Layout/Header"
import Footer from "../Layout/Footer"

import theme from "../themes/theme"

export default function Layout() {

    return (
        <Box sx={theme.rootTheme}>
            <Header/>
            <Outlet />
            <Footer/>
        </Box >
    )
}