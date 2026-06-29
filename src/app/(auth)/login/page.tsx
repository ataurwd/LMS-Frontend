'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import Link from 'next/link';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await login({ email, password });
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // In a real application, you would trigger the Google GIS client or redirect.
    // For now, we simulate this call or point to the Google Client flow.
    alert('Google Login initiated. Configure NEXT_PUBLIC_GOOGLE_CLIENT_ID in your environment variables.');
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Paper elevation={0} sx={{ padding: 4, border: '1px solid #eaeaea', borderRadius: 2, width: '100%' }}>
          <Typography component="h1" variant="h5" align="center" sx={{ fontWeight: 700, marginBottom: 3 }}>
            Sign In
          </Typography>

          {error && <Alert severity="error" sx={{ marginBottom: 2 }}>{error}</Alert>}

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1.5 } }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1.5 } }}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                marginTop: 3,
                marginBottom: 2,
                backgroundColor: '#111',
                '&:hover': { backgroundColor: '#333' },
                borderRadius: 1.5,
                padding: '0.8rem',
                textTransform: 'none',
                fontWeight: 600
              }}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>

            <Button
              fullWidth
              variant="outlined"
              onClick={handleGoogleLogin}
              sx={{
                marginBottom: 2,
                borderColor: '#ddd',
                color: '#555',
                '&:hover': { borderColor: '#999', backgroundColor: '#f9f9f9' },
                borderRadius: 1.5,
                padding: '0.8rem',
                textTransform: 'none',
                fontWeight: 600
              }}
            >
              Continue with Google
            </Button>

            <Box sx={{ textAlign: 'center', marginTop: 2 }}>
              <Typography variant="body2" color="text.secondary">
                {"Don't have an account? "}
                <Link href="/register" style={{ color: '#111', fontWeight: 600, textDecoration: 'underline' }}>
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
