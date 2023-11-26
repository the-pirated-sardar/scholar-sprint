import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

import { useAuthStore } from "../auth/AuthStore"
import theme from "../themes/theme"

const Header = () => {

    const { currentUser } = useAuthStore

    const verifyAuth = () => {
        console.log(currentUser)
    }

    return (
        <AppBar position="static" sx={theme.Header}>
            <Toolbar>
                <IconButton component={Link} to="/">Home</IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>ScholarSprint</Typography>
                <Button component={Link} to="/profile" color="inherit">Profile</Button>
                <Button variant="contained" onClick={verifyAuth}>Verify Auth</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header