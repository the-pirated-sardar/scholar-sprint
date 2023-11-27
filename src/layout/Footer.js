import React from 'react';
import { AppBar, Toolbar, Link } from '@mui/material';
import theme from '../themes/theme';

const Footer = () => {

  return (
    <AppBar position="static" sx={{ ...theme.Footer, top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Link color="#FFFFFF" href="https://github.com/the-pirated-sardar/1Sky-Project-276/">
          GitHub
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Footer;