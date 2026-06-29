'use client';

import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';

export function Categories() {
  return (
    <section style={whiteSectionStyle}>
      <div style={contentContainerStyle}>
        <SectionHeader 
          badge="CURRICULUM"
          title="Subjects We Cover"
          description="Explore our syllabus-focused subject tracks designed to make your school learning easy and engaging."
        />

        <div style={categoryGridStyle}>
          <div style={categoryCardStyle}>
            <div style={categoryIconStyle}>📐</div>
            <h4 style={categoryTitleStyle}>Mathematics</h4>
            <p style={categoryDescStyle}>General Math & Higher Math solutions.</p>
          </div>
          <div style={categoryCardStyle}>
            <div style={categoryIconStyle}>🔬</div>
            <h4 style={categoryTitleStyle}>Science Group</h4>
            <p style={categoryDescStyle}>Physics, Chemistry, and Biology modules.</p>
          </div>
          <div style={categoryCardStyle}>
            <div style={categoryIconStyle}>📝</div>
            <h4 style={categoryTitleStyle}>English & Bangla</h4>
            <p style={categoryDescStyle}>Grammar, comprehension, and literature.</p>
          </div>
          <div style={categoryCardStyle}>
            <div style={categoryIconStyle}>🖥️</div>
            <h4 style={categoryTitleStyle}>ICT & Tech</h4>
            <p style={categoryDescStyle}>School ICT syllabus & basic programming.</p>
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

const categoryGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '1.5rem',
};

const categoryCardStyle: React.CSSProperties = {
  padding: '2rem',
  borderRadius: '16px',
  backgroundColor: 'var(--bg-primary)',
  border: '1px solid var(--border-color)',
  transition: 'all 0.2s ease',
  cursor: 'pointer'
};

const categoryIconStyle: React.CSSProperties = {
  fontSize: '2rem',
  marginBottom: '1.25rem',
};

const categoryTitleStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: 800,
  color: 'var(--text-primary)',
  marginBottom: '0.5rem',
};

const categoryDescStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  color: 'var(--text-secondary)',
};
