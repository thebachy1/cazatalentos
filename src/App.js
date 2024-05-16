// src/App.js
import React, { useState } from 'react';
import FirstScreen from './components/FirstScreen';
import SecondScreen from './components/SecondScreen';
import tracks from "./components/tracks";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  const [screen, setScreen] = useState(1); // 1 for first screen, 2 for second screen
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSelectSong = (index) => {
    setSelectedSong(index);
    setScreen(2); // Navigate to second screen
  };

  const handleCloseSecondScreen = () => {
    setScreen(1); // Navigate back to first screen
  };

  return (
    <div className="App">
      {screen === 1 ? (
        <FirstScreen onSelectSong={handleSelectSong} />
      ) : (
        <AudioPlayer tracks={tracks} selectedSong={selectedSong} handleCloseSecondScreen={handleCloseSecondScreen} />
      )}
    </div>
  );
}

export default App;
