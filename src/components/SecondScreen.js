// src/components/SecondScreen.js
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaTimes } from 'react-icons/fa';
import S1 from '../songs/S1.mp3';
import S2 from '../songs/S2.mp3';
import S3 from '../songs/S3.mp3';
import S4 from '../songs/S4.mp3';
import S5 from '../songs/S5.mp3';
import S6 from '../songs/S6.mp3';
import S7 from '../songs/S7.mp3';
import S8 from '../songs/S8.mp3';
import S9 from '../songs/S9.mp3';

const SecondScreen = ({ onClose, songIndex }) => {
    // Dummy data for the audio player
    const songs = ['S1.mp3', 'S1.mp3', 'S1.mp3', 'S1.mp3', 'S1.mp3', 'S1.mp3', 'S1.mp3', 'S1.mp3', 'S1.mp3', 'S1.mp3',];
    console.log(songIndex)
    return (
        <div>
            <button onClick={onClose}><FaTimes /></button>
            <ReactAudioPlayer
                src={`../songs/S${songIndex}.mp3`}
                autoPlay
                controls
            />
            <div className="controls">
                <button><FaStepBackward /></button>
                <button><FaPlay /></button>
                <button><FaPause /></button>
                <button><FaStepForward /></button>
            </div>
        </div>
    );
};

export default SecondScreen;
