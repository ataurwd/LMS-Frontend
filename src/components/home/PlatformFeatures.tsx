'use client';

import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';

export function PlatformFeatures() {
  return (
    <section style={paleSectionStyle}>
      <div style={contentContainerStyle}>
        <SectionHeader 
          badge="PLATFORM UTILITIES"
          title="Interactive Learning Features"
          description="Smarter learning tools built directly into our student portal."
        />

        <div style={cardGridStyle}>
          <div style={featureCardStyle}>
            <h4 style={featureTitleStyle}>⏱️ Timed MCQ Exam Engine</h4>
            <p style={featureDescStyle}>Practice with countdown timers to improve your speed and accuracy for the board MCQ section.</p>
          </div>
          <div style={featureCardStyle}>
            <h4 style={featureTitleStyle}>📝 Chapter Solve Sheets</h4>
            <p style={featureDescStyle}>Get structured, downloadable PDF notes and mathematical derivations for every chapter.</p>
          </div>
          <div style={featureCardStyle}>
            <h4 style={featureTitleStyle}>📱 Distraction-Free Player</h4>
            <p style={featureDescStyle}>Ad-free, clean video streaming player designed to keep you focused on the class lectures.</p>
          </div>
          <div style={featureCardStyle}>
            <h4 style={featureTitleStyle}>💬 Discussion Q&A Threads</h4>
            <p style={featureDescStyle}>Ask questions under any video chapter and get replies from qualified teachers and peers.</p>
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

const featureCardStyle: React.CSSProperties = {
  padding: '2rem',
  borderRadius: '14px',
  backgroundColor: '#ffffff',
  border: '1px solid var(--border-color)',
};

const featureTitleStyle: React.CSSProperties = {
  fontSize: '1.05rem',
  fontWeight: 800,
  color: 'var(--text-primary)',
  marginBottom: '0.75rem',
};

const featureDescStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: 'var(--text-secondary)',
  lineHeight: 1.5,
};
