'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function CTA() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section style={{
      padding: '6rem 2rem 8rem',
      textAlign: 'center',
      background: 'linear-gradient(180deg, var(--bg-primary) 0%, #ffffff 100%)',
    }}>
      <div style={ctaCardStyle}>
        <h3 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem', zIndex: 1, position: 'relative' }}>
          Ready to start learning?
        </h3>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem', zIndex: 1, position: 'relative', lineHeight: 1.5 }}>
          Join thousands of secondary school students preparing for exam success with Messimo.
        </p>
        
        {subscribed ? (
          <div style={{
            padding: '1rem',
            borderRadius: '12px',
            backgroundColor: 'var(--accent-light)',
            border: '1px solid rgba(155, 216, 82, 0.3)',
            color: 'var(--text-primary)',
            fontWeight: 600,
            fontSize: '0.9rem',
            maxWidth: '480px',
            margin: '0 auto'
          }}>
            Thank you for subscribing! Check your inbox soon.
          </div>
        ) : (
          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.75rem', maxWidth: '480px', margin: '0 auto 2.5rem', zIndex: 1, position: 'relative' }}>
            <input
              type="email"
              required
              placeholder="Enter your email for free PDF guides"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
            <button type="submit" style={subscribeButtonStyle}>
              Get Guides
            </button>
          </form>
        )}

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', zIndex: 1, position: 'relative' }}>
          <Link href="/register" style={ctaPrimaryButtonStyle}>
            Start Learning Now
          </Link>
          <Link href="/courses" style={ctaSecondaryButtonStyle}>
            Browse Subjects
          </Link>
        </div>
      </div>
    </section>
  );
}

const ctaCardStyle: React.CSSProperties = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '4rem 3rem',
  borderRadius: '24px',
  background: 'var(--accent-gradient)',
  color: '#ffffff',
  boxShadow: 'var(--shadow-xl)',
  position: 'relative',
  overflow: 'hidden'
};

const inputStyle: React.CSSProperties = {
  flex: 1,
  padding: '0.85rem 1.25rem',
  borderRadius: '12px',
  border: '1px solid var(--border-color)',
  fontSize: '0.95rem',
  outline: 'none',
  backgroundColor: '#ffffff',
  color: 'var(--text-primary)'
};

const subscribeButtonStyle: React.CSSProperties = {
  backgroundColor: 'var(--text-primary)',
  color: '#ffffff',
  padding: '0.85rem 1.75rem',
  borderRadius: '12px',
  border: 'none',
  fontWeight: 700,
  fontSize: '0.95rem',
  cursor: 'pointer',
  boxShadow: 'var(--shadow-sm)',
};

const ctaPrimaryButtonStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  color: 'var(--text-primary)',
  padding: '1rem 2.25rem',
  borderRadius: '12px',
  fontWeight: 700,
  fontSize: '0.95rem',
  textDecoration: 'none',
  transition: 'all 0.2s ease'
};

const ctaSecondaryButtonStyle: React.CSSProperties = {
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  color: '#ffffff',
  padding: '1rem 2.25rem',
  borderRadius: '12px',
  fontWeight: 700,
  fontSize: '0.95rem',
  textDecoration: 'none',
  border: '1px solid rgba(255, 255, 255, 0.25)',
  transition: 'all 0.2s ease'
};
export default CTA;
