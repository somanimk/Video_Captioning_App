import React, { useState } from 'react';

function CaptionEditor({ addCaption }) {
  const [captionText, setCaptionText] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const parseTimeToSeconds = (time) => {
    const [mins, secs] = time.split(':').map(Number);
    return mins * 60 + secs;
  };

  const handleSubmit = () => {
    if (captionText && startTime && endTime) {
      addCaption({
        text: captionText,
        startTime: parseTimeToSeconds(startTime),
        endTime: parseTimeToSeconds(endTime)
      });
      setCaptionText('');
      setStartTime('');
      setEndTime('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={captionText}
        onChange={e => setCaptionText(e.target.value)}
        placeholder="Enter caption"
        className="input"
      />
      <div className="input-row">
        <input
          type="text"
          value={startTime}
          onChange={e => setStartTime(e.target.value)}
          placeholder="Start Time (mm:ss)"
          className="input"
        />
        <input
          type="text"
          value={endTime}
          onChange={e => setEndTime(e.target.value)}
          placeholder="End Time (mm:ss)"
          className="input"
        />
      </div>
      <button onClick={handleSubmit} className="button">Add Caption</button>
    </div>
  );
}

export default CaptionEditor;
