import React from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        padding: 2,
        mt: 'auto', // Push the footer to the bottom of the container
        ml: 2, // Add left margin for whitespace
        mr: 2, // Add right margin for whitespace
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} sm={2}>
          <Box component="img"
            src="logo.png"
            alt="Logo"
            style={{ maxWidth: '50%', height: 'auto', maxHeight: '50%' }}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Link href="#" color="textPrimary" variant="body2" sx={{ display: 'block', mb: 1 }}>
            Home
          </Link>
          <Link href="#" color="textPrimary" variant="body2" sx={{ display: 'block', mb: 1 }}>
            About Us
          </Link>
          <Link href="#" color="textPrimary" variant="body2" sx={{ display: 'block', mb: 1 }}>
            Contact Us
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="h6" gutterBottom>
            Connect With Us
          </Typography>
          <Link href="#" color="textPrimary" variant="body2" sx={{ display: 'block', mb: 1 }}>
            Facebook
          </Link>
          <Link href="#" color="textPrimary" variant="body2" sx={{ display: 'block', mb: 1 }}>
            Twitter
          </Link>
          <Link href="#" color="textPrimary" variant="body2" sx={{ display: 'block', mb: 1 }}>
            Instagram
          </Link>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography variant="h6" gutterBottom>
            Lorem Ipsum
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;