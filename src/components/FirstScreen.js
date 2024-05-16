// src/components/FirstScreen.js
import React from 'react';
import A1 from '../assets/A1.png'
import A2 from '../assets/A2.png'
import A3 from '../assets/A3.png'
import A4 from '../assets/A4.png'
import A5 from '../assets/A5.png'
import A6 from '../assets/A6.png'
import A7 from '../assets/A7.png'
import A8 from '../assets/A8.png'
import A9 from '../assets/A9.png'

const FirstScreen = ({ onSelectSong }) => {
    // Dummy data for the buttons
    const songs = [A1,
        A2,
        A3,
        A4,
        A5,
        A6,
        A7,
        A8,
        A9];

    return (
        <div style={{ backgroundColor: '#A3A3A3' }}>
            <div className="button-grid">
                {songs.map((song, index) => (
                    <img src={song} alt="fireSpot" key={index} style={{ width: '100%' }} onClick={() => onSelectSong(index)} />
                ))}
            </div>
        </div>
    );
};

export default FirstScreen;
