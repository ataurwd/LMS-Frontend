'use client';

import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';

export function AboutUs() {
  return (
    <section style={whiteSectionStyle}>
      <div style={contentContainerStyle}>
        <div style={splitGridStyle}>
          <div>
            <SectionHeader 
              align="left"
              badge="ABOUT US"
              title="Your Dedicated SSC Board Preparation Partner"
            />
            <p style={sectionParagraphStyle}>
              At Messimo, we specialize in offering the highest quality online tutoring and study materials for Class 9 and 10 students. Our curriculum is mapped directly to secondary school board syllabuses.
            </p>
            <p style={sectionParagraphStyle}>
              We break down complex formulas, chemical equations, and grammatical rules into easy-to-understand video chapters. Combined with structured chapter-wise MCQ tests, we ensure students build the confidence needed to score an A+ in their final board examinations.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem' }}>
            <div style={statsBoxStyle}>
              <div style={statNumberStyle}>98.5%</div>
              <div style={statLabelStyle}>Student Board Success Rate</div>
            </div>
            <div style={statsBoxStyle}>
              <div style={statNumberStyle}>5,000+</div>
              <div style={statLabelStyle}>Board Exam Practice Questions</div>
            </div>
            <div style={statsBoxStyle}>
              <div style={statNumberStyle}>50+</div>
              <div style={statLabelStyle}>Topic-Specific Mock Exam Sets</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const whiteSectionStyle: React.CSSProperties = {
  padding: '6rem 2rem',
  backgroundColor: '#ffffff',
  borderTop: '1px solid var(--border-color)',
  borderBottom: '1px solid var(--border-color)',
};

const contentContainerStyle: React.CSSProperties = {
  maxWidth: '1100px',
  margin: '0 auto',
};

const splitGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '3.5rem',
};

const sectionParagraphStyle: React.CSSProperties = {
  fontSize: '1.05rem',
  color: 'var(--text-secondary)',
  lineHeight: 1.7,
  marginBottom: '1.5rem',
};

const statsBoxStyle: React.CSSProperties = {
  padding: '1.5rem 2rem',
  borderRadius: '16px',
  backgroundColor: 'var(--bg-primary)',
  border: '1px solid var(--border-color)',
};

const statNumberStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: 800,
  color: 'var(--text-primary)',
};

const statLabelStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: 'var(--text-secondary)',
  marginTop: '0.25rem',
};
