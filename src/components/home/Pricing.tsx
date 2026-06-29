'use client';

import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '../ui/SectionHeader';

export function Pricing() {
  return (
    <section style={whiteSectionStyle}>
      <div style={contentContainerStyle}>
        <SectionHeader 
          badge="PREMIUM PASS"
          title="Choose Your Study Plan"
          description="Affordable pricing packages designed to give you complete subject access."
        />

        <div style={cardGridStyle}>
          {/* Plan 1 */}
          <div style={pricingCardStyle}>
            <h4 style={pricingTitleStyle}>Free Starter</h4>
            <div style={pricingPriceStyle}>$0</div>
            <p style={pricingDescStyle}>Access to the first chapter of all subjects and basic practice quizzes.</p>
            <ul style={pricingFeatureListStyle}>
              <li>✓ Chapter 1 video lectures</li>
              <li>✓ Chapter 1 practice quizzes</li>
              <li>✓ Online study dashboard</li>
            </ul>
            <Link href="/register" style={pricingButtonStyle}>Join Free</Link>
          </div>

          {/* Plan 2 */}
          <div style={{ ...pricingCardStyle, borderColor: 'var(--primary-color)', boxShadow: 'var(--shadow-xl)' }}>
            <div style={popularBadgeStyle}>Most Popular</div>
            <h4 style={pricingTitleStyle}>All-Subject Pass</h4>
            <div style={pricingPriceStyle}>$19<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/mo</span></div>
            <p style={pricingDescStyle}>Complete access to all subjects, MCQ tests, and board question solutions.</p>
            <ul style={pricingFeatureListStyle}>
              <li>✓ Math, Science, English, & ICT</li>
              <li>✓ All video chapters unlocked</li>
              <li>✓ Timed MCQ mock exams</li>
              <li>✓ Downloadable solve sheets</li>
              <li>✓ Discussion forum access</li>
            </ul>
            <Link href="/register" style={{ ...pricingButtonStyle, backgroundColor: 'var(--primary-color)', color: 'var(--text-primary)' }}>Get Pass</Link>
          </div>

          {/* Plan 3 */}
          <div style={pricingCardStyle}>
            <h4 style={pricingTitleStyle}>Premium Tuition</h4>
            <div style={pricingPriceStyle}>$49<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/mo</span></div>
            <p style={pricingDescStyle}>All-subject access plus direct doubt clearing with senior instructors.</p>
            <ul style={pricingFeatureListStyle}>
              <li>✓ All features of the Subject Pass</li>
              <li>✓ Weekly live Q&A sessions</li>
              <li>✓ Direct message to instructors</li>
              <li>✓ Personalized progress reviews</li>
            </ul>
            <Link href="/register" style={pricingButtonStyle}>Enroll Now</Link>
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

const pricingCardStyle: React.CSSProperties = {
  padding: '3rem 2rem',
  borderRadius: '20px',
  backgroundColor: '#ffffff',
  border: '1px solid var(--border-color)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
};

const popularBadgeStyle: React.CSSProperties = {
  position: 'absolute',
  top: '-12px',
  backgroundColor: 'var(--text-primary)',
  color: '#ffffff',
  padding: '0.3rem 1rem',
  borderRadius: '99px',
  fontSize: '0.75rem',
  fontWeight: 700,
};

const pricingTitleStyle: React.CSSProperties = {
  fontSize: '1.25rem',
  fontWeight: 800,
  color: 'var(--text-primary)',
  marginBottom: '1rem',
};

const pricingPriceStyle: React.CSSProperties = {
  fontSize: '3rem',
  fontWeight: 800,
  color: 'var(--text-primary)',
  marginBottom: '1.5rem',
  display: 'flex',
  alignItems: 'baseline',
  gap: '0.1rem',
};

const pricingDescStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  color: 'var(--text-secondary)',
  textAlign: 'center',
  marginBottom: '2rem',
};

const pricingFeatureListStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: '0 0 2.5rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  fontSize: '0.9rem',
  color: 'var(--text-secondary)',
  width: '100%',
  alignItems: 'flex-start',
};

const pricingButtonStyle: React.CSSProperties = {
  width: '100%',
  textAlign: 'center',
  padding: '0.8rem',
  borderRadius: '10px',
  border: '1px solid var(--border-color)',
  fontWeight: 700,
  fontSize: '0.95rem',
  textDecoration: 'none',
  color: 'var(--text-primary)',
  transition: 'all 0.2s ease',
};
export default Pricing;
