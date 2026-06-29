'use client';

import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export function LoadingSpinner() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      minHeight: '200px'
    }}>
      <CircularProgress />
    </div>
  );
}
