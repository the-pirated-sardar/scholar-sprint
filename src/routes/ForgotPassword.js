import React, { useRef, useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Alert, Link } from '@mui/material';
import { useAuthStore } from '../auth/AuthStore';
import { Link as RouterLink } from 'react-router-dom';

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuthStore();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions');
    } catch {
      setError('Failed to reset password');
    }

    setLoading(false);
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Password Reset
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        {message && <Alert severity="success">{message}</Alert>}
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
          <Button
            disabled={loading}
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: '16px' }}
          >
            Reset Password
          </Button>
        </form>
        <div style={{ marginTop: '16px' }} className="text-center mt-3">
          <Link to="/login" component={RouterLink}>
            Login
          </Link>
        </div>
      </CardContent>
      <div style={{ marginTop: '16px' }} className="w-100 text-center mt-2">
        Need an account? <Link to="/signup" component={RouterLink}>Sign Up</Link>
      </div>
    </Card>
  );
}