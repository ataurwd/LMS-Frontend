'use client';

import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer style={{
      backgroundColor: '#ffffff',
      borderTop: '1px solid var(--border-color)',
      padding: '5rem 2rem 3rem',
      color: 'var(--text-secondary)',
      fontSize: '0.9rem'
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem',
        marginBottom: '4rem'
      }}>
        {/* Brand Column */}
        <div style={{ gridColumn: 'span 2', minWidth: '250px' }}>
          <Link href="/" style={{ 
            fontWeight: 800, 
            fontSize: '1.3rem', 
            letterSpacing: '-0.03em', 
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1.25rem'
          }}>
            <span style={{ 
              width: '24px', 
              height: '24px', 
              background: 'var(--accent-gradient)', 
              borderRadius: '6px',
              display: 'inline-block'
            }}></span>
            messimo
          </Link>
          <p style={{ lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '280px' }}>
            An enterprise-grade, AI-powered learning experience designed for modern professionals and educators.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {/* Social Icons */}
            <a href="#" style={socialIconStyle}>Twitter</a>
            <a href="#" style={socialIconStyle}>LinkedIn</a>
            <a href="#" style={socialIconStyle}>GitHub</a>
          </div>
        </div>

        {/* Categories Column */}
        <div>
          <h4 style={footerTitleStyle}>Categories</h4>
          <ul style={footerListStyle}>
            <li><Link href="/courses?category=web-dev" style={footerLinkStyle}>Web Development</Link></li>
            <li><Link href="/courses?category=design" style={footerLinkStyle}>UI/UX Design</Link></li>
            <li><Link href="/courses?category=data-science" style={footerLinkStyle}>Data Science</Link></li>
            <li><Link href="/courses?category=marketing" style={footerLinkStyle}>Digital Marketing</Link></li>
          </ul>
        </div>

        {/* Resources Column */}
        <div>
          <h4 style={footerTitleStyle}>Resources</h4>
          <ul style={footerListStyle}>
            <li><Link href="/blog" style={footerLinkStyle}>Blog & Articles</Link></li>
            <li><Link href="/help" style={footerLinkStyle}>Help Center</Link></li>
            <li><Link href="/testimonials" style={footerLinkStyle}>Success Stories</Link></li>
            <li><Link href="/faq" style={footerLinkStyle}>FAQs</Link></li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h4 style={footerTitleStyle}>Company</h4>
          <ul style={footerListStyle}>
            <li><Link href="/about" style={footerLinkStyle}>About Us</Link></li>
            <li><Link href="/careers" style={footerLinkStyle}>Careers</Link></li>
            <li><Link href="/terms" style={footerLinkStyle}>Terms of Service</Link></li>
            <li><Link href="/privacy" style={footerLinkStyle}>Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        paddingTop: '2rem',
        borderTop: '1px solid var(--border-color)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        fontSize: '0.8rem',
        color: 'var(--text-muted)'
      }}>
        <p>&copy; {new Date().getFullYear()} Messimo LMS. All rights reserved.</p>
        <p>Built with Next.js, Material UI, and Mongoose.</p>
      </div>
    </footer>
  );
}

const footerTitleStyle: React.CSSProperties = {
  fontSize: '1rem',
  fontWeight: 700,
  color: 'var(--text-primary)',
  marginBottom: '1.25rem',
  letterSpacing: '-0.01em'
};

const footerListStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem'
};

const footerLinkStyle: React.CSSProperties = {
  color: 'var(--text-secondary)',
  transition: 'color 0.2s ease',
  textDecoration: 'none'
};

const socialIconStyle: React.CSSProperties = {
  fontSize: '0.8rem',
  fontWeight: 600,
  color: 'var(--text-secondary)',
  textDecoration: 'underline'
};
