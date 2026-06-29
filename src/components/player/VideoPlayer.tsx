'use client';

import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface VideoPlayerProps {
  src: string;
}

export function VideoPlayer({ src }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native Safari / iOS HLS support
      video.src = src;
    } else if (Hls.isSupported()) {
      // Chrome, Firefox, Edge HLS.js support
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', background: '#000' }}>
      <video
        ref={videoRef}
        controls
        style={{ width: '100%', display: 'block' }}
      />
    </div>
  );
}
