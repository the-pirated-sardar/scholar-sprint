import React, { useRef, useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Alert, Link } from '@mui/material';
import { useAuthStore } from '../auth/AuthStore';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuthStore();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch {
      setError('Failed to create an account');
    }

    setLoading(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Sign Up
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
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
          <TextField
            fullWidth
            id="password-confirm"
            label="Password Confirmation"
            type="password"
            required
            inputRef={passwordConfirmRef}
            variant="outlined"
            margin="normal"
          />
          <Button
            disabled={loading}
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: '16px' }}
          >
            Sign Up
          </Button>
        </form>
      </CardContent>
      <div style={{ marginTop: '16px' }} className="text-center">
        Already have an account?{' '}
        <Link to="/login" component={RouterLink}>
          Log In
        </Link>
      </div>
    </Card>
  );
}