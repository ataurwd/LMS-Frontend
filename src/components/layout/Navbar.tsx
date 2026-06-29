'use client';

import React from 'react';
import Link from 'next/link';

export function Navbar() {
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
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link href="/courses">Courses</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </nav>
  );
}
