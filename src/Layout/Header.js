import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

import theme from "../themes/theme"

const Header = () => {

    return (
        <AppBar position="fixed" sx={{...theme.Header,}}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <IconButton component={Link} to="/"><img src="home.png" alt="Home"/></IconButton>
                <Typography variant="h6" component="div" textAlign='center'>ScholarSprint</Typography>
                <IconButton component={Link} to="/profile" sx={{ maxWidth: 50, maxHeight: 50 }}><img src="profile.png" alt="profile" width='100%'
                /></IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header