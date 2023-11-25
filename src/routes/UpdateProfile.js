import React, { useRef, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
  Alert,
} from '@mui/material';
import { useAuthStore } from "../auth/AuthStore";
import { Link, useNavigate } from "react-router-dom";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuthStore();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <Card>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Update Profile
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              type="email"
              required
              defaultValue={currentUser.email}
              inputRef={emailRef}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              id="password"
              label="Password"
              type="password"
              placeholder="Leave blank to keep the same"
              inputRef={passwordRef}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              id="password-confirm"
              label="Password Confirmation"
              type="password"
              placeholder="Leave blank to keep the same"
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
              Update
            </Button>
          </form>
        </CardContent>
      </Card>
      <div style={{ marginTop: '16px' }} className="text-center">
        <Link to="/" component={Link}>
          Cancel
        </Link>
      </div>
    </Container>
  )
}