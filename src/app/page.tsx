'use client';

import React from 'react';
import { Hero } from '@/components/home/Hero';
import { AboutUs } from '@/components/home/AboutUs';
import { FeaturedCourses } from '@/components/home/FeaturedCourses';
import { Categories } from '@/components/home/Categories';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { HowItWorks } from '@/components/home/HowItWorks';
import { PlatformFeatures } from '@/components/home/PlatformFeatures';
import { Instructors } from '@/components/home/Instructors';
import { Testimonials } from '@/components/home/Testimonials';
import { Pricing } from '@/components/home/Pricing';
import { Blog } from '@/components/home/Blog';
import { CTA } from '@/components/home/CTA';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'var(--bg-primary)',
      minHeight: '100vh',
    }}>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Us Section */}
      <AboutUs />

      {/* 3. Featured Courses Section */}
      <FeaturedCourses />

      {/* 4. Course Categories Section */}
      <Categories />

      {/* 5. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 6. How It Works Section */}
      <HowItWorks />

      {/* 7. Platform Features Section */}
      <PlatformFeatures />

      {/* 8. Meet Our Instructors Section */}
      <Instructors />

      {/* 9. Student Testimonials Section */}
      <Testimonials />

      {/* 10. Pricing Plans Section */}
      <Pricing />

      {/* 11. Latest Blogs & Resources Section */}
      <Blog />

      {/* 12. Call to Action (CTA) & Newsletter Section */}
      <CTA />
    </div>
  );
}
