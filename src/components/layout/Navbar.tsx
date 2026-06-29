'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';

export function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <nav className="glass-panel" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 3rem',
      borderBottom: '1px solid var(--border-color)',
      boxShadow: 'var(--shadow-sm)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
        <Link href="/" style={{ 
          fontWeight: 800, 
          fontSize: '1.4rem', 
          letterSpacing: '-0.03em', 
          color: 'var(--primary-color)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span style={{ 
            width: '28px', 
            height: '28px', 
            background: 'var(--accent-gradient)', 
            borderRadius: '8px',
            display: 'inline-block'
          }}></span>
          LMS
        </Link>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link href="/courses" style={navLinkStyle}>Courses</Link>
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
        {isAuthenticated ? (
          <>
            <Link href="/dashboard" style={navLinkStyle}>Dashboard</Link>
            {user?.role === 'TEACHER' && (
              <Link href="/studio/analytics" style={navLinkStyle}>Studio</Link>
            )}
            <div style={{ 
              width: '1px', 
              height: '16px', 
              backgroundColor: 'var(--border-color)' 
            }}></div>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              {user?.name}
            </span>
            <button 
              onClick={logout}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-color)',
                padding: '0.5rem 1.25rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--text-primary)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" style={{ 
              fontSize: '0.9rem', 
              fontWeight: 600, 
              color: 'var(--text-secondary)',
              padding: '0.5rem 1rem'
            }}>
              Sign In
            </Link>
            <Link href="/register" style={{
              background: 'var(--primary-color)',
              color: '#fff',
              padding: '0.6rem 1.3rem',
              borderRadius: '8px',
              fontSize: '0.9rem',
              fontWeight: 600,
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--primary-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'var(--primary-color)'}
            >
              Get Started
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

const navLinkStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  fontWeight: 500,
  color: 'var(--text-secondary)',
  padding: '0.25rem 0',
  borderBottom: '2px solid transparent',
};
