import React from 'react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Course: {slug}</h1>
      <p>Course detail view. (Placeholder UI)</p>
    </main>
  );
}
