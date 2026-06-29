import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '70vh',
      padding: '2rem',
      backgroundColor: '#fafafa',
      fontFamily: 'inherit'
    }}>
      <div style={{
        maxWidth: '800px',
        textAlign: 'center',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 800,
          letterSpacing: '-0.05em',
          marginBottom: '1rem',
          color: '#111'
        }}>
          Learn Without Limits.
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#666',
          marginBottom: '2.5rem',
          lineHeight: 1.6
        }}>
          Welcome to the next generation of online education. Explore courses designed by industry specialists, participate in interactive assessments, and track your accomplishments.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
          textAlign: 'left'
        }}>
          <Link href="/courses" style={cardStyle}>
            <h3 style={cardTitleStyle}>Course Catalog &rarr;</h3>
            <p style={cardDescStyle}>Browse our catalog of professional training lectures and modules.</p>
          </Link>

          <Link href="/login" style={cardStyle}>
            <h3 style={cardTitleStyle}>Student Dashboard &rarr;</h3>
            <p style={cardDescStyle}>Access your enrolled courses, quizzes, assignments, and certificates.</p>
          </Link>

          <Link href="/login" style={cardStyle}>
            <h3 style={cardTitleStyle}>Instructor Studio &rarr;</h3>
            <p style={cardDescStyle}>Manage curriculum modules, view student analytics, and upload video content.</p>
          </Link>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link href="/courses" style={{
            backgroundColor: '#111',
            color: '#fff',
            padding: '0.8rem 2rem',
            borderRadius: '6px',
            fontWeight: 600,
            textDecoration: 'none'
          }}>
            Browse Courses
          </Link>
          <Link href="/register" style={{
            backgroundColor: '#fff',
            color: '#111',
            padding: '0.8rem 2rem',
            borderRadius: '6px',
            border: '1px solid #ddd',
            fontWeight: 600,
            textDecoration: 'none'
          }}>
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  display: 'block',
  padding: '1.5rem',
  backgroundColor: '#fff',
  borderRadius: '8px',
  border: '1px solid #eaeaea',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  fontWeight: 600,
  marginBottom: '0.5rem',
  color: '#111',
};

const cardDescStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#666',
  lineHeight: 1.5,
};

