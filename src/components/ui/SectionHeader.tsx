'use client';

import React from 'react';
import Box from '@mui/material/Box';

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  align?: 'center' | 'left' | 'right';
}

export function SectionHeader({ badge, title, description, align = 'center' }: SectionHeaderProps) {
  const isCenter = align === 'center';
  const isRight = align === 'right';

  return (
    <Box style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: isCenter ? 'center' : isRight ? 'flex-end' : 'flex-start',
      textAlign: align,
      marginBottom: '3.5rem',
      width: '100%'
    }}>
      {/* 1. Pill Badge at the top */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.4rem 1rem',
        borderRadius: '99px',
        backgroundColor: 'var(--accent-light)',
        border: '1px solid rgba(155, 216, 82, 0.3)',
        color: 'var(--text-primary)',
        fontSize: '0.8rem',
        fontWeight: 700,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        marginBottom: '0.85rem'
      }}>
        {badge}
      </div>

      {/* 2. Main Title */}
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: 800,
        color: 'var(--text-primary)',
        letterSpacing: '-0.03em',
        lineHeight: 1.2,
        textTransform: 'uppercase',
        marginBottom: '0.75rem'
      }}>
        {title}
      </h2>

      {/* 3. Divider (Line - Dot - Line) */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '1.25rem',
        width: '100%',
        justifyContent: isCenter ? 'center' : isRight ? 'flex-end' : 'flex-start'
      }}>
        <div style={{ width: '40px', height: '1.5px', backgroundColor: 'var(--primary-hover)', opacity: 0.7 }} />
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary-hover)' }} />
        <div style={{ width: '40px', height: '1.5px', backgroundColor: 'var(--primary-hover)', opacity: 0.7 }} />
      </div>

      {/* 4. Description */}
      {description && (
        <p style={{
          fontSize: '1.05rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          maxWidth: '640px',
          margin: 0
        }}>
          {description}
        </p>
      )}
    </Box>
  );
}
