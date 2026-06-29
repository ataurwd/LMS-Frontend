'use client';

import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';

export function FeaturedCourses() {
  return (
    <section style={paleSectionStyle}>
      <div style={contentContainerStyle}>
        <SectionHeader 
          badge="POPULAR CLASSES"
          title="Most Enrolled Board Exam Courses"
          description="Start preparing with our comprehensive syllabus packages containing video lectures, chapter notes, and mock exams."
        />

        <div style={cardGridStyle}>
          {/* Course 1 */}
          <div style={courseCardStyle}>
            <div style={{ ...courseBadgeStyle, background: '#dbeafe', color: '#1e40af' }}>Class 10</div>
            <h4 style={courseTitleStyle}>General Mathematics Complete Board Syllabus</h4>
            <p style={courseInstructorStyle}>By Marcus Chen • Math Specialist</p>
            <div style={courseMetaStyle}>
              <span style={{ color: '#fbbf24' }}>★ 4.9 (450 reviews)</span>
              <span style={coursePriceStyle}>$49.00</span>
            </div>
          </div>

          {/* Course 2 */}
          <div style={courseCardStyle}>
            <div style={{ ...courseBadgeStyle, background: '#e0f2fe', color: '#0369a1' }}>Class 9-10</div>
            <h4 style={courseTitleStyle}>Physics: Core Concepts & Formula Mastery</h4>
            <p style={courseInstructorStyle}>By Sarah Jenkins • Science Instructor</p>
            <div style={courseMetaStyle}>
              <span style={{ color: '#fbbf24' }}>★ 4.8 (310 reviews)</span>
              <span style={coursePriceStyle}>$39.00</span>
            </div>
          </div>

          {/* Course 3 */}
          <div style={courseCardStyle}>
            <div style={{ ...courseBadgeStyle, background: '#fef3c7', color: '#92400e' }}>Class 9-10</div>
            <h4 style={courseTitleStyle}>Chemistry: Reactions, Equations & Organic Compounds</h4>
            <p style={courseInstructorStyle}>By Elena Rostova • Chemistry Expert</p>
            <div style={courseMetaStyle}>
              <span style={{ color: '#fbbf24' }}>★ 5.0 (280 reviews)</span>
              <span style={coursePriceStyle}>$39.00</span>
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

const cardGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2rem',
};

const courseCardStyle: React.CSSProperties = {
  padding: '2rem',
  borderRadius: '16px',
  backgroundColor: '#ffffff',
  border: '1px solid var(--border-color)',
  boxShadow: 'var(--shadow-sm)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '220px',
  position: 'relative'
};

const courseBadgeStyle: React.CSSProperties = {
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  padding: '0.25rem 0.75rem',
  borderRadius: '99px',
  fontSize: '0.75rem',
  fontWeight: 700
};

const courseTitleStyle: React.CSSProperties = {
  fontSize: '1.15rem',
  fontWeight: 800,
  color: 'var(--text-primary)',
  marginTop: '1.5rem',
  marginBottom: '0.5rem',
  lineHeight: 1.4
};

const courseInstructorStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  color: 'var(--text-secondary)',
  marginBottom: '1.5rem',
};

const courseMetaStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 700,
};

const coursePriceStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  color: 'var(--text-primary)',
};
