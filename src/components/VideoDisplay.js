import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

function VideoDisplay({ videoUrl, captions }) {
  const playerRef = useRef(null);
  const [currentCaption, setCurrentCaption] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        const currentTime = playerRef.current.getCurrentTime();
        const newCaption = captions.find(caption =>
          currentTime >= caption.startTime && currentTime < caption.endTime
        );
        setCurrentCaption(newCaption ? newCaption.text : '');
      }
    }, 100);

    return () => clearInterval(interval);
  }, [captions]);

  return (
    <div className="video-container" style={{ maxWidth: '720px', margin: '20px auto' }}>
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        playing
        controls
        width="100%"
        height="230px"
      />
      <div className="caption-bar" style={{ marginTop: '10px', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
        {currentCaption}
      </div>
    </div>
  );
}

export default VideoDisplay;
