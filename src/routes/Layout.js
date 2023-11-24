import { Outlet, Link, useLoaderData, } from "react-router-dom";
import { Box, Button, Grid } from "@mui/material"

async function foo() {
    return `{data: "dummy data"}`
}

export async function loader() {
    const data = await foo();
    return { data };
}

const Layout = () => {

    // add sidebar, header, footer, etc
    const { data } = useLoaderData();

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
                <Outlet />
            </Grid>
            <Grid item xs={3}>
                {data}
            </Grid>
        </Grid>
    )
};

export default Layout;