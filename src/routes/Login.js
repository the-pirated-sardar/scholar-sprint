import React, { useRef, useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Box, Link } from '@mui/material';
import { useAuthStore } from '../auth/AuthStore';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import theme from '../themes/theme';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault()

    await login(emailRef.current.value, passwordRef.current.value)
      .then(() => {
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <Card sx={{}}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="email"
            label="Email"
            type="email"
            required
            inputRef={emailRef}
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            id="password"
            label="Password"
            type="password"
            required
            inputRef={passwordRef}
            variant="outlined"
            margin="normal"
          />
          <Button
            disabled={loading}
            fullWidth
            variant="contained"
            sx={theme.buttonTheme}
            type="submit"
            margin="normal"
          >
            Log In
          </Button>
        </Box>
        <Box style={{ marginTop: '16px' }} className="text-center">
          <Link to="/forgot-password" component={RouterLink}>
            Forgot Password?
          </Link>
        </Box>
      </CardContent>
      <Box style={{ marginTop: '16px' }} className="w-100 text-center mt-2">
        Need an account? <Link to="/signup" component={RouterLink}>Sign Up</Link>
      </Box>
    </Card>
  );
}