import React from 'react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function QuizRunnerPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Assessment Runner: Quiz #{id}</h1>
      <p>Answer questions before the timer runs out. (Placeholder UI)</p>
    </main>
  );
}
