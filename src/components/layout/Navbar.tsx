'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';

export function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      borderBottom: '1px solid #eaeaea',
      background: '#fff'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
        <Link href="/">LMS Platform</Link>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link href="/courses">Courses</Link>
        
        {isAuthenticated ? (
          <>
            <Link href="/dashboard">Dashboard</Link>
            {user?.role === 'TEACHER' && (
              <Link href="/studio/analytics">Studio</Link>
            )}
            <span style={{ fontSize: '0.9rem', color: '#666' }}>
              Hi, {user?.name}
            </span>
            <button 
              onClick={logout}
              style={{
                background: 'none',
                border: '1px solid #ddd',
                padding: '0.4rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register" style={{
              backgroundColor: '#111',
              color: '#fff',
              padding: '0.4rem 1rem',
              borderRadius: '4px'
            }}>
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
