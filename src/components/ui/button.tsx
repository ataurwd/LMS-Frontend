'use client';

import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

interface CustomButtonProps extends ButtonProps {
  label: string;
}

export function AppButton({ label, ...props }: CustomButtonProps) {
  return (
    <Button variant="contained" color="primary" {...props}>
      {label}
    </Button>
  );
}
