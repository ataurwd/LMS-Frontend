'use client';

import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';

export function HowItWorks() {
  return (
    <section style={whiteSectionStyle}>
      <div style={contentContainerStyle}>
        <SectionHeader 
          badge="PROCESS"
          title="How It Works"
          description="Four simple steps to turn your school study sessions into excellent grades."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <div style={stepItemStyle}>
            <div style={stepNumberStyle}>1</div>
            <div>
              <h4 style={stepTitleStyle}>Register & Pick Your Class</h4>
              <p style={stepDescStyle}>Sign up with your details. Select Class 9 or Class 10 to personalize your dashboard and subject recommendations.</p>
            </div>
          </div>
          <div style={stepItemStyle}>
            <div style={stepNumberStyle}>2</div>
            <div>
              <h4 style={stepTitleStyle}>Watch Chapter Lectures</h4>
              <p style={stepDescStyle}>Watch high-definition, animated lectures breaking down tough theories, math formulas, and science reactions chapter-by-chapter.</p>
            </div>
          </div>
          <div style={stepItemStyle}>
            <div style={stepNumberStyle}>3</div>
            <div>
              <h4 style={stepTitleStyle}>Practice Mock MCQs</h4>
              <p style={stepDescStyle}>After completing a chapter, take a timed MCQ quiz matching the board exam pattern to test your understanding.</p>
            </div>
          </div>
          <div style={stepItemStyle}>
            <div style={stepNumberStyle}>4</div>
            <div>
              <h4 style={stepTitleStyle}>Review Board Solutions</h4>
              <p style={stepDescStyle}>Access downloadable PDF solve sheets for past board questions. Clear your doubts with help from subject-expert teachers.</p>
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

const stepItemStyle: React.CSSProperties = {
  display: 'flex',
  gap: '1.5rem',
  alignItems: 'flex-start',
};

const stepNumberStyle: React.CSSProperties = {
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  backgroundColor: 'var(--primary-color)',
  color: 'var(--text-primary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 800,
  fontSize: '1.1rem',
  flexShrink: 0,
};

const stepTitleStyle: React.CSSProperties = {
  fontSize: '1.15rem',
  fontWeight: 700,
  color: 'var(--text-primary)',
  marginBottom: '0.35rem',
};

const stepDescStyle: React.CSSProperties = {
  fontSize: '0.95rem',
  color: 'var(--text-secondary)',
  lineHeight: 1.5,
};
