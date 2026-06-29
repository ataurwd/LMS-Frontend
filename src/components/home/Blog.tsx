'use client';

import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '../ui/SectionHeader';

export function Blog() {
  return (
    <section style={paleSectionStyle}>
      <div style={contentContainerStyle}>
        <SectionHeader 
          badge="RESOURCES"
          title="Study Tips & Academic Articles"
          description="Read guide articles written by our teachers to boost your exam scores."
        />

        <div style={cardGridStyle}>
          <div style={blogCardStyle}>
            <div style={blogDateStyle}>June 28, 2026 • 5 min read</div>
            <h4 style={blogTitleStyle}>How to Score a Perfect GPA 5.00 in Mathematics</h4>
            <p style={blogDescStyle}>Common mistakes students make in algebraic proofs and how to avoid them during board exams.</p>
            <Link href="#" style={blogLinkStyle}>Read Article &rarr;</Link>
          </div>

          <div style={blogCardStyle}>
            <div style={blogDateStyle}>June 25, 2026 • 6 min read</div>
            <h4 style={blogTitleStyle}>Physics Formula Sheet: Key Derivations for Class 10</h4>
            <p style={blogDescStyle}>A comprehensive cheat sheet covering motion, work, power, and electricity formulas.</p>
            <Link href="#" style={blogLinkStyle}>Read Article &rarr;</Link>
          </div>

          <div style={blogCardStyle}>
            <div style={blogDateStyle}>June 20, 2026 • 4 min read</div>
            <h4 style={blogTitleStyle}>Memorizing Organic Chemistry Reactions Quickly</h4>
            <p style={blogDescStyle}>Easy tips to memorize organic equations, structures, and catalysts for secondary school chemistry.</p>
            <Link href="#" style={blogLinkStyle}>Read Article &rarr;</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const paleSectionStyle: React.CSSProperties = {
  padding: '6rem 2rem',
  backgroundColor: 'var(--bg-primary)',
};

const contentContainerStyle: React.CSSProperties = {
  maxWidth: '1100px',
  margin: '0 auto',
};

const cardGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2rem',
};

const blogCardStyle: React.CSSProperties = {
  padding: '2rem',
  borderRadius: '16px',
  backgroundColor: '#ffffff',
  border: '1px solid var(--border-color)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const blogDateStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  color: 'var(--text-muted)',
  marginBottom: '0.75rem',
};

const blogTitleStyle: React.CSSProperties = {
  fontSize: '1.15rem',
  fontWeight: 800,
  color: 'var(--text-primary)',
  lineHeight: 1.4,
  marginBottom: '0.75rem',
};

const blogDescStyle: React.CSSProperties = {
  fontSize: '0.875rem',
  color: 'var(--text-secondary)',
  lineHeight: 1.5,
  marginBottom: '1.5rem',
};

const blogLinkStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  fontWeight: 700,
  color: 'var(--text-primary)',
  textDecoration: 'none',
};
export default Blog;
