# Video Captioning App

## Overview
The Video Captioning App allows users to load videos via YouTube URLs and add timed captions that appear during the specified intervals. This tool is ideal for enhancing video accessibility, providing translations, or including additional commentary.

## Features
- **Load Video**: Users can enter a YouTube URL to load a video.
- **Add Captions**: Users can input captions with specific start and end times, formatted in `mm:ss`.
- **Display Captions**: Captions appear on the video at the specified times.

## How It Works
1. **Enter Video URL**: Paste a YouTube link into the video URL input field.
2. **Load Video**: Click the "Load Video" button to start playing the video.
3. **Enter Caption Data**:
   - **Caption Text**: Type the text that you want to appear as a caption.
   - **Start Time**: Enter the start time for the caption to appear on the video (format `mm:ss`).
   - **End Time**: Enter the end time for the caption to disappear from the video (format `mm:ss`).
4. **Add Caption**: Click the "Add Caption" button to submit the caption. The caption will now appear on the video during the specified times.

## Example Usage
To see this application in action, try loading the following YouTube video:
- **URL**: `https://www.youtube.com/watch?v=4hEDKrIM724`

Once loaded, you might add a caption like:
- **Caption Text**: "Welcome to our presentation"
- **Start Time**: "00:10"
- **End Time**: "00:20"

This caption will display from the 10th to the 20th second of the video.

## Project Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (https://nodejs.org/)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://yourrepositoryurl.com
   cd video-captioning-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

This will start the application on `http://localhost:3000`. Open your browser and navigate to this address to start using the app.
