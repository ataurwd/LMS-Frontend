import React from 'react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function LearnCoursePage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Learning Portal: {slug}</h1>
      <p>Watch video lectures and complete tasks. (Placeholder UI)</p>
    </main>
  );
}
