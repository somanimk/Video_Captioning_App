import React, { useState } from 'react';

function VideoInput({ setVideoUrl }) {
  const [url, setUrl] = useState('');

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = () => {
    setVideoUrl(url);
  };

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={handleInputChange}
        placeholder="URL of the video"
        className="input"
      />
      <button onClick={handleSubmit} className="button">Load Video</button>
    </div>
  );
}

export default VideoInput;
