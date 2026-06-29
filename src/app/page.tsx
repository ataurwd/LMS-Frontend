'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '5rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glow Effects */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '15%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, rgba(255,255,255,0) 70%)',
        zIndex: -1,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, rgba(255,255,255,0) 70%)',
        zIndex: -1,
      }} />

      <div style={{
        maxWidth: '900px',
        textAlign: 'center',
        margin: '0 auto',
        zIndex: 1,
      }}>
        {/* Banner Pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.4rem 1rem',
          borderRadius: '99px',
          background: 'var(--accent-light)',
          border: '1px solid rgba(79, 70, 229, 0.15)',
          color: '#4f46e5',
          fontSize: '0.8rem',
          fontWeight: 600,
          marginBottom: '2rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}>
          ✨ Next-Gen Learning Platform
        </div>

        <h1 style={{
          fontSize: '3.75rem',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          color: 'var(--primary-color)'
        }}>
          Master New Skills.<br />
          <span style={{
            background: 'var(--accent-gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Shape Your Future.
          </span>
        </h1>
        
        <p style={{
          fontSize: '1.2rem',
          color: 'var(--text-secondary)',
          marginBottom: '3rem',
          lineHeight: 1.6,
          maxWidth: '640px',
          margin: '0 auto 3rem'
        }}>
          Access specialized courses, timed assessments, and live analytics. Experience a modern, distraction-free learning environment built for builders.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', marginBottom: '5rem' }}>
          <Link href="/courses" style={{
            background: 'var(--primary-color)',
            color: '#fff',
            padding: '1rem 2.25rem',
            borderRadius: '10px',
            fontWeight: 600,
            fontSize: '0.95rem',
            boxShadow: 'var(--shadow-md)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--primary-hover)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'var(--primary-color)'}
          >
            Explore Catalog
          </Link>
          <Link href="/register" style={{
            background: '#fff',
            color: 'var(--primary-color)',
            padding: '1rem 2.25rem',
            borderRadius: '10px',
            border: '1px solid var(--border-color)',
            fontWeight: 600,
            fontSize: '0.95rem',
            boxShadow: 'var(--shadow-sm)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-hover)';
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-color)';
            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
          }}
          >
            Create Free Account
          </Link>
        </div>

        {/* Feature Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          textAlign: 'left',
        }}>
          <div style={cardStyle} 
               onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'translateY(-4px)';
                 e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.boxShadow = 'var(--shadow-md)';
               }}>
            <div style={iconWrapperStyle}>📚</div>
            <h3 style={cardTitleStyle}>Structured Modules</h3>
            <p style={cardDescStyle}>Clean, distraction-free curriculums designed to help you absorb knowledge efficiently.</p>
          </div>

          <div style={cardStyle}
               onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'translateY(-4px)';
                 e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.boxShadow = 'var(--shadow-md)';
               }}>
            <div style={iconWrapperStyle}>⏱️</div>
            <h3 style={cardTitleStyle}>Timed Assessments</h3>
            <p style={cardDescStyle}>Challenge your understanding with interactive quizzes and detailed progress reviews.</p>
          </div>

          <div style={cardStyle}
               onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'translateY(-4px)';
                 e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.boxShadow = 'var(--shadow-md)';
               }}>
            <div style={iconWrapperStyle}>📊</div>
            <h3 style={cardTitleStyle}>Instructor Studio</h3>
            <p style={cardDescStyle}>Empower educators with course management tools and rich student analytics.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  display: 'block',
  padding: '2rem',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  border: '1px solid var(--border-color)',
  boxShadow: 'var(--shadow-md)',
  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
};

const iconWrapperStyle: React.CSSProperties = {
  fontSize: '1.75rem',
  marginBottom: '1.25rem',
  width: '48px',
  height: '48px',
  borderRadius: '10px',
  backgroundColor: '#f1f5f9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: '1.15rem',
  fontWeight: 700,
  marginBottom: '0.5rem',
  color: 'var(--primary-color)',
};

const cardDescStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: 'var(--text-secondary)',
  lineHeight: 1.6,
};
