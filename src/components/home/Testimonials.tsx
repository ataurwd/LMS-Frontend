'use client';

import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';

export function Testimonials() {
  return (
    <section style={paleSectionStyle}>
      <div style={contentContainerStyle}>
        <SectionHeader 
          badge="SUCCESS STORIES"
          title="What Our Students Say"
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={testimonialCardStyle}>
            <p style={testimonialQuoteStyle}>
              "The General Math board question solve sheets were incredibly helpful. I went from a B grade to scoring an A+ in my final Class 10 exams!"
            </p>
            <div style={testimonialUserStyle}>
              <div style={avatarStyle}>S</div>
              <div>
                <h5 style={testimonialNameStyle}>Sajid Ahmed</h5>
                <p style={testimonialRoleStyle}>Class 10 Student</p>
              </div>
            </div>
          </div>

          <div style={testimonialCardStyle}>
            <p style={testimonialQuoteStyle}>
              "I loved the timed MCQ mock tests. They helped me manage my time better during the science exam. Highly recommend the Physics package!"
            </p>
            <div style={testimonialUserStyle}>
              <div style={avatarStyle}>R</div>
              <div>
                <h5 style={testimonialNameStyle}>Riya Sen</h5>
                <p style={testimonialRoleStyle}>Class 9 Student</p>
              </div>
            </div>
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

const testimonialCardStyle: React.CSSProperties = {
  padding: '2.5rem',
  borderRadius: '16px',
  backgroundColor: '#ffffff',
  border: '1px solid var(--border-color)',
  boxShadow: 'var(--shadow-sm)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const testimonialQuoteStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: 'var(--text-secondary)',
  lineHeight: 1.6,
  fontStyle: 'italic',
  marginBottom: '2rem',
};

const testimonialUserStyle: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
};

const avatarStyle: React.CSSProperties = {
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  backgroundColor: 'var(--bg-left-panel)',
  color: 'var(--text-primary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 700,
  fontSize: '1.1rem',
};

const testimonialNameStyle: React.CSSProperties = {
  fontSize: '0.95rem',
  fontWeight: 700,
  color: 'var(--text-primary)',
};

const testimonialRoleStyle: React.CSSProperties = {
  fontSize: '0.8rem',
  color: 'var(--text-secondary)',
};
