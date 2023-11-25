import { Outlet, Link, useLoaderData, } from "react-router-dom";
import { Box, Button, Grid } from "@mui/material"; 

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
            <div style=
            {{
                backgroundImage: `url(${require('../images/logo.png')})`, 
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 50%',
                backgroundSize: '70vh', 
                backgroundBlendMode: 'difference', 
                backgroundColor: '#1A181B', 
                zIndex: 1
            }}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ 
                    minHeight: '100vh'
                }}
            >
                {/* <Grid item xs={3}>
                    <Box

                    >
                        <Button variant="outlined"><Link to={`/`}>Home</Link></Button>
                    </Box>
                </Grid> */}
                <Grid item xs={12}>
                    <Outlet />
                </Grid>
                {/* <Grid item xs={3}>
                    {data}
                </Grid> */}
            </Grid>
        </div>
    )
};

export default Layout;