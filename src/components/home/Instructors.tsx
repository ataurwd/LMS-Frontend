'use client';

import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';

export function Instructors() {
  return (
    <section style={whiteSectionStyle}>
      <div style={contentContainerStyle}>
        <SectionHeader 
          badge="TEACHERS"
          title="Meet Our Subject Specialists"
          description="Learn from experienced educators dedicated to secondary school syllabus excellence."
        />

        <div style={cardGridStyle}>
          <div style={instructorCardStyle}>
            <div style={instructorAvatarStyle}>MC</div>
            <h4 style={instructorNameStyle}>Marcus Chen</h4>
            <p style={instructorRoleStyle}>General & Higher Math Specialist</p>
            <p style={instructorDescStyle}>Over 8 years of school teaching experience. Makes algebraic equations and geometry proofs simple.</p>
          </div>

          <div style={instructorCardStyle}>
            <div style={instructorAvatarStyle}>SJ</div>
            <h4 style={instructorNameStyle}>Sarah Jenkins</h4>
            <p style={instructorRoleStyle}>Physics & Science Lead</p>
            <p style={instructorDescStyle}>Graduated in Physics. Explains mechanics, electricity, and wave theories with real-world animations.</p>
          </div>

          <div style={instructorCardStyle}>
            <div style={instructorAvatarStyle}>ER</div>
            <h4 style={instructorNameStyle}>Elena Rostova</h4>
            <p style={instructorRoleStyle}>Chemistry & Biology Expert</p>
            <p style={instructorDescStyle}>Passionate about organic chemistry and human biology. Makes memorizing reactions and structures easy.</p>
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

const cardGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2rem',
};

const instructorCardStyle: React.CSSProperties = {
  padding: '2.5rem 2rem',
  borderRadius: '16px',
  backgroundColor: 'var(--bg-primary)',
  border: '1px solid var(--border-color)',
  textAlign: 'center',
};

const instructorAvatarStyle: React.CSSProperties = {
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  backgroundColor: 'var(--primary-color)',
  color: 'var(--text-primary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 800,
  fontSize: '1.3rem',
  margin: '0 auto 1.5rem',
};

const instructorNameStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  fontWeight: 800,
  color: 'var(--text-primary)',
  marginBottom: '0.25rem',
};

const instructorRoleStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  color: 'var(--primary-hover)',
  fontWeight: 700,
  marginBottom: '1rem',
};

const instructorDescStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  color: 'var(--text-secondary)',
  lineHeight: 1.5,
};
