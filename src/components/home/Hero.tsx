'use client';

import React from 'react';
import Link from 'next/link';

export function Hero() {
  return (
    <section style={heroSectionStyle}>
      <div style={glowBg1Style} />
      <div style={glowBg2Style} />
      
      <div style={{ maxWidth: '850px', zIndex: 1, position: 'relative' }}>
        <div style={badgeStyle}>
          🎓 SSC BOARD EXAM PREPARATION
        </div>

        <h1 style={heroHeadingStyle}>
          Ace Your Class 9 & 10 Exams & <span style={heroHeadingGradientStyle}>Build Strong Foundations</span>
        </h1>

        <p style={heroSubheadingStyle}>
          Master Mathematics, Physics, Chemistry, and English with syllabus-aligned video chapters, board question solutions, and timed MCQ mock tests.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', marginBottom: '4.5rem' }}>
          <Link href="/courses" style={primaryButtonStyle}>
            Explore Board Courses
          </Link>
          <Link href="/register" style={secondaryButtonStyle}>
            Start Free Trial
          </Link>
        </div>

        {/* Interactive Mock Student Dashboard Preview */}
        <div style={mockDashboardStyle}>
          <div style={mockHeaderStyle}>
            <span style={{ ...dotStyle, backgroundColor: '#ff5f56' }}></span>
            <span style={{ ...dotStyle, backgroundColor: '#ffbd2e' }}></span>
            <span style={{ ...dotStyle, backgroundColor: '#27c93f' }}></span>
            <div style={mockSearchStyle}>messimo.com/student-portal</div>
          </div>
          <div style={mockBodyStyle}>
            <div style={mockSidebarStyle}>
              <div style={{ ...mockNavItemStyle, background: 'rgba(155,216,82,0.2)' }}>📖 My Study Room</div>
              <div style={mockNavItemStyle}>📝 Mock Tests</div>
              <div style={mockNavItemStyle}>📊 Progress Card</div>
              <div style={mockNavItemStyle}>🏆 Certificates</div>
            </div>
            <div style={mockContentStyle}>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={mockStatCardStyle}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Chapters Completed</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>12 / 16</div>
                </div>
                <div style={mockStatCardStyle}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Model Test Rank</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>Top 5%</div>
                </div>
              </div>
              <div style={mockPlayerPlaceholderStyle}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>▶️</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>General Math: Chapter 3 - Algebraic Expressions</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>15:20 / 30:00 • Board Question Solve</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const heroSectionStyle: React.CSSProperties = {
  padding: '8rem 2rem 6rem',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const glowBg1Style: React.CSSProperties = {
  position: 'absolute',
  top: '-20%',
  left: '10%',
  width: '600px',
  height: '600px',
  background: 'radial-gradient(circle, rgba(155, 216, 82, 0.15) 0%, rgba(255,255,255,0) 70%)',
  zIndex: 0,
};

const glowBg2Style: React.CSSProperties = {
  position: 'absolute',
  bottom: '0',
  right: '10%',
  width: '500px',
  height: '500px',
  background: 'radial-gradient(circle, rgba(155, 216, 82, 0.1) 0%, rgba(255,255,255,0) 70%)',
  zIndex: 0,
};

const badgeStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.5rem 1.25rem',
  borderRadius: '99px',
  background: 'var(--accent-light)',
  border: '1px solid rgba(155, 216, 82, 0.3)',
  color: 'var(--text-primary)',
  fontSize: '0.85rem',
  fontWeight: 700,
  marginBottom: '2.5rem',
  letterSpacing: '0.03em',
  textTransform: 'uppercase'
};

const heroHeadingStyle: React.CSSProperties = {
  fontSize: '4.25rem',
  fontWeight: 800,
  letterSpacing: '-0.04em',
  lineHeight: 1.1,
  marginBottom: '1.5rem',
  color: 'var(--text-primary)'
};

const heroHeadingGradientStyle: React.CSSProperties = {
  background: 'var(--accent-gradient)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
};

const heroSubheadingStyle: React.CSSProperties = {
  fontSize: '1.25rem',
  color: 'var(--text-secondary)',
  marginBottom: '3.5rem',
  lineHeight: 1.6,
  maxWidth: '640px',
  margin: '0 auto 3.5rem'
};

const primaryButtonStyle: React.CSSProperties = {
  background: 'var(--text-primary)',
  color: '#ffffff',
  padding: '1.1rem 2.5rem',
  borderRadius: '12px',
  fontWeight: 700,
  fontSize: '1rem',
  boxShadow: 'var(--shadow-md)',
  transition: 'all 0.2s ease',
};

const secondaryButtonStyle: React.CSSProperties = {
  background: '#ffffff',
  color: 'var(--text-primary)',
  padding: '1.1rem 2.5rem',
  borderRadius: '12px',
  border: '1px solid var(--border-color)',
  fontWeight: 700,
  fontSize: '1rem',
  boxShadow: 'var(--shadow-sm)',
  transition: 'all 0.2s ease',
};

const mockDashboardStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '800px',
  margin: '0 auto',
  border: '1px solid var(--border-color)',
  borderRadius: '16px',
  overflow: 'hidden',
  backgroundColor: '#ffffff',
  boxShadow: 'var(--shadow-xl)',
  textAlign: 'left'
};

const mockHeaderStyle: React.CSSProperties = {
  padding: '0.75rem 1.25rem',
  backgroundColor: '#f8fafc',
  borderBottom: '1px solid var(--border-color)',
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem'
};

const dotStyle: React.CSSProperties = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  display: 'inline-block'
};

const mockSearchStyle: React.CSSProperties = {
  margin: '0 auto',
  backgroundColor: '#ffffff',
  border: '1px solid var(--border-color)',
  borderRadius: '6px',
  padding: '0.2rem 2rem',
  fontSize: '0.75rem',
  color: 'var(--text-muted)',
  width: '240px',
  textAlign: 'center'
};

const mockBodyStyle: React.CSSProperties = {
  display: 'flex',
  minHeight: '280px'
};

const mockSidebarStyle: React.CSSProperties = {
  width: '180px',
  borderRight: '1px solid var(--border-color)',
  padding: '1.25rem 0.75rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem'
};

const mockNavItemStyle: React.CSSProperties = {
  padding: '0.5rem 0.75rem',
  borderRadius: '8px',
  fontSize: '0.8rem',
  fontWeight: 600,
  color: 'var(--text-primary)',
  cursor: 'pointer'
};

const mockContentStyle: React.CSSProperties = {
  flex: 1,
  padding: '1.5rem'
};

const mockStatCardStyle: React.CSSProperties = {
  flex: 1,
  padding: '1rem',
  borderRadius: '10px',
  border: '1px solid var(--border-color)',
  backgroundColor: 'var(--bg-primary)'
};

const mockPlayerPlaceholderStyle: React.CSSProperties = {
  padding: '2rem',
  borderRadius: '12px',
  backgroundColor: '#0f172a',
  color: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center'
};
