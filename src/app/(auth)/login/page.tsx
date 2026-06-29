'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
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
    alert('Google Login initiated. Configure NEXT_PUBLIC_GOOGLE_CLIENT_ID in your environment variables.');
  };

  return (
    <Box style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      padding: '2rem 1rem'
    }}>
      <Box style={{
        display: 'flex',
        minHeight: '55vh',
        borderRadius: '24px',
        overflow: 'hidden',
        border: '1px solid var(--border-color)',
        backgroundColor: '#ffffff',
        boxShadow: 'var(--shadow-xl)',
        width: '100%',
        maxWidth: '960px', // Standard desktop size, which will scale down beautifully
        justifyContent: 'center',
        alignItems: 'stretch'
      }}>
      {/* Left Panel: Pistachio Illustration Side */}
      <Box style={{
        flex: 1.2,
        backgroundColor: 'var(--bg-left-panel)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem',
        position: 'relative',
        minHeight: '600px'
      }}>
        {/* Placeholder SVG Illustration */}
        <svg width="80%" height="80%" viewBox="0 0 400 400" fill="none" style={{ maxWidth: '360px' }}>
          <circle cx="200" cy="200" r="160" fill="#e4f8d4" />
          <rect x="80" y="240" width="240" height="12" rx="6" fill="#1e3f20" />
          <line x1="110" y1="252" x2="110" y2="330" stroke="#1e3f20" strokeWidth="6" strokeLinecap="round" />
          <line x1="290" y1="252" x2="290" y2="330" stroke="#1e3f20" strokeWidth="6" strokeLinecap="round" />
          <rect x="150" y="190" width="70" height="46" rx="4" fill="#a0aec0" />
          <path d="M140 236h90l-5 6h-80z" fill="#718096" />
          <circle cx="200" cy="110" r="24" fill="#fed7d7" />
          <path d="M185 105h30" stroke="#4a5568" strokeWidth="2" />
          <path d="M170 160h60l10 70h-80z" fill="#9bd852" />
        </svg>

        <Typography variant="h5" style={{ fontWeight: 800, color: 'var(--text-primary)', marginTop: '2rem', textAlign: 'center', letterSpacing: '-0.02em' }}>
          Welcome Back to Messimo
        </Typography>
        <Typography variant="body2" style={{ color: 'var(--text-primary)', opacity: 0.8, marginTop: '0.5rem', textAlign: 'center' }}>
          Login to access your learning portal, courses, and student analytics.
        </Typography>
      </Box>

      {/* Right Panel: White Form Side */}
      <Box style={{
        flex: 1,
        padding: '4rem 3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
      }}>
        {/* Logo and Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
          <span style={{ 
            width: '24px', 
            height: '24px', 
            background: 'var(--accent-gradient)', 
            borderRadius: '6px',
            display: 'inline-block'
          }}></span>
          <Typography variant="h6" style={{ fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
            messimo
          </Typography>
        </Box>

        <Typography component="h1" variant="h3" style={{ fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--text-primary)', marginBottom: '2.5rem' }}>
          Log in
        </Typography>

        {error && <Alert severity="error" sx={{ marginBottom: 3, borderRadius: '10px' }}>{error}</Alert>}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            margin="none"
            required
            fullWidth
            id="email"
            placeholder="Email address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ 
              marginBottom: 2,
              '& .MuiOutlinedInput-root': { 
                borderRadius: '12px',
                backgroundColor: '#ffffff',
                '& fieldset': { borderColor: 'var(--border-color)', borderWidth: '1.5px' },
                '&:hover fieldset': { borderColor: 'var(--border-hover)' },
                '&.Mui-focused fieldset': { borderColor: 'var(--text-primary)', borderWidth: '2px' }
              }
            }}
          />

          <TextField
            margin="none"
            required
            fullWidth
            name="password"
            placeholder="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ 
              marginBottom: 3,
              '& .MuiOutlinedInput-root': { 
                borderRadius: '12px',
                backgroundColor: '#ffffff',
                '& fieldset': { borderColor: 'var(--border-color)', borderWidth: '1.5px' },
                '&:hover fieldset': { borderColor: 'var(--border-hover)' },
                '&.Mui-focused fieldset': { borderColor: 'var(--text-primary)', borderWidth: '2px' }
              }
            }}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{
              marginBottom: 3,
              backgroundColor: 'var(--primary-color)',
              color: 'var(--text-primary)',
              '&:hover': { backgroundColor: 'var(--primary-hover)' },
              borderRadius: '12px',
              padding: '0.85rem',
              textTransform: 'none',
              fontWeight: 700,
              fontSize: '1rem',
              boxShadow: 'none',
              border: 'none'
            }}
          >
            {loading ? 'Logging in...' : 'Log in'}
          </Button>

          <Typography variant="body2" align="center" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
            or log in with
          </Typography>

          {/* Social Icons Container */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <Button onClick={handleGoogleLogin} sx={socialButtonStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#1e3f20"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#1e3f20"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#1e3f20"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#1e3f20"/>
              </svg>
            </Button>
            <Button onClick={() => {}} sx={socialButtonStyle}>
              <svg width="20" height="20" viewBox="0 0 23 23" fill="none">
                <rect x="0" y="0" width="11" height="11" fill="#1e3f20" />
                <rect x="12" y="0" width="11" height="11" fill="#1e3f20" />
                <rect x="0" y="12" width="11" height="11" fill="#1e3f20" />
                <rect x="12" y="12" width="11" height="11" fill="#1e3f20" />
              </svg>
            </Button>
            <Button onClick={() => {}} sx={socialButtonStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e3f20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </Button>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
              {"Don't have an account? "}
              <Link href="/register" style={{ color: 'var(--primary-hover)', fontWeight: 700 }}>
                Sign up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
      </Box>
    </Box>
  );
}

const socialButtonStyle = {
  minWidth: '50px',
  height: '50px',
  borderRadius: '12px',
  backgroundColor: '#f1fbf0',
  border: 'none',
  padding: 0,
  '&:hover': {
    backgroundColor: '#e3f8de',
  }
};
