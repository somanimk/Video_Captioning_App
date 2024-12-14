import React, { useState } from 'react';
import VideoInput from './components/VideoInput';
import CaptionEditor from './components/CaptionEditor';
import VideoDisplay from './components/VideoDisplay';
import './App.css';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [captions, setCaptions] = useState([]);

  const addCaption = (caption) => {
    console.log(caption);
    setCaptions([...captions, caption]);
  };

  return (
    <div className="App">
      <div className="title">CaptionMate</div>
      <div className="left-panel">
        <VideoInput setVideoUrl={setVideoUrl} />
        <CaptionEditor addCaption={addCaption} />
      </div>
      <div className="right-panel">
        <VideoDisplay videoUrl={videoUrl} captions={captions} />
      </div>
    </div>
  );
}

export default App;
