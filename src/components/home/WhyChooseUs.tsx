'use client';

import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';

export function WhyChooseUs() {
  return (
    <section style={paleSectionStyle}>
      <div style={contentContainerStyle}>
        <div style={splitGridStyle}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <SectionHeader 
              align="left"
              badge="OUR PROMISE"
              title="Designed Specifically for School Students"
            />
            <p style={sectionParagraphStyle}>
              We understand school schedules can be hectic. Messimo provides flexible, structured, and interactive learning that fits right into your after-school routine.
            </p>
            <div style={checkListStyle}>
              <div style={checkItemStyle}>✓ <strong>Syllabus-Aligned Chapters</strong> – Lessons mapped to your school textbooks.</div>
              <div style={checkItemStyle}>✓ <strong>Chapter-wise MCQ Tests</strong> – Real-time test evaluation and rankings.</div>
              <div style={checkItemStyle}>✓ <strong>Board Question Solve Sheets</strong> – Step-by-step solutions for past papers.</div>
              <div style={checkItemStyle}>✓ <strong>Interactive Doubt Clearing</strong> – Post questions directly under lessons.</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={featurePreviewBoxStyle}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏆</div>
              <h4 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>A+ Goal Tracking</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
                Track your chapter progress and test scores to ensure you are fully prepared before the final exams start.
              </p>
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

const checkListStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '1.5rem',
};

const checkItemStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: 'var(--text-secondary)',
};

const featurePreviewBoxStyle: React.CSSProperties = {
  padding: '3rem 2rem',
  borderRadius: '24px',
  backgroundColor: '#ffffff',
  border: '1px solid var(--border-color)',
  boxShadow: 'var(--shadow-xl)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '320px',
};
