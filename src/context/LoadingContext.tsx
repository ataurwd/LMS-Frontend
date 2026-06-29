'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

interface LoadingContextType {
  setLoadingState: (isLoading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [activeRequests, setActiveRequests] = useState(0);

  // Global event listeners for API requests
  useEffect(() => {
    const handleStart = () => {
      setActiveRequests((prev) => {
        const next = prev + 1;
        if (next > 0) setLoading(true);
        return next;
      });
    };

    const handleEnd = () => {
      setActiveRequests((prev) => {
        const next = Math.max(0, prev - 1);
        if (next === 0) setLoading(false);
        return next;
      });
    };

    window.addEventListener('api-request-start', handleStart);
    window.addEventListener('api-request-end', handleEnd);

    return () => {
      window.removeEventListener('api-request-start', handleStart);
      window.removeEventListener('api-request-end', handleEnd);
    };
  }, []);

  const setLoadingState = (isLoading: boolean) => {
    setLoading(isLoading);
  };

  return (
    <LoadingContext.Provider value={{ setLoadingState }}>
      {children}
      
      {/* Global Glassmorphic Loading Overlay */}
      {loading && (
        <Box
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(244, 251, 240, 0.8)', // Matching --bg-primary with transparency
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 9999,
            transition: 'all 0.3s ease',
          }}
        >
          <Box style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2.5rem',
            borderRadius: '24px',
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-xl)',
          }}>
            <CircularProgress 
              size={50} 
              thickness={4.5} 
              style={{ color: 'var(--primary-hover)', marginBottom: '1.5rem' }} 
            />
            <Typography variant="body1" style={{ 
              fontWeight: 700, 
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em'
            }}>
              Loading...
            </Typography>
            <Typography variant="caption" style={{ 
              color: 'var(--text-secondary)',
              marginTop: '0.25rem'
            }}>
              Please wait a moment
            </Typography>
          </Box>
        </Box>
      )}
    </LoadingContext.Provider>
  );
}

export function useGlobalLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useGlobalLoading must be used within a LoadingProvider');
  }
  return context;
}
