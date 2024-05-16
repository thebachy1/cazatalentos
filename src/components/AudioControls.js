import React from "react";
import Play from "../assets/Play.png";
import Pause from "../assets/Pause.png";
import Next from "../assets/Next.png";
import Prev from "../assets/Prev.png";

const AudioControls = ({
    isPlaying,
    onPlayPauseClick,
    onPrevClick,
    onNextClick
}) => (
    <div className="audio-controls">
        {/* <button
            type="button"
            className="prev"
            aria-label="Previous"
            onClick={onPrevClick}
        > */}
        <img src={Prev} onClick={onPrevClick} className="prev" style={{ maxWidth: '33%' }} />
        {/* </button> */}
        {isPlaying ? (
            // <button
            //     type="button"
            //     className="pause"
            //     onClick={() => onPlayPauseClick(false)}
            //     aria-label="Pause"
            // >
            <img src={Play} onClick={() => onPlayPauseClick(false)} className="pause" style={{ maxWidth: '33%' }} />
            // </button>
        ) : (
            // <button
            //     type="button"
            //     className="play"
            //     onClick={() => onPlayPauseClick(true)}
            //     aria-label="Play"
            // >
            <img src={Pause} onClick={() => onPlayPauseClick(true)} className="play" style={{ maxWidth: '33%' }} />
            // </button>
        )}
        {/* <button
            type="button"
            className="next"
            aria-label="Next"
            onClick={onNextClick}
        > */}
        <img src={Next} onClick={onNextClick} className="next" style={{ maxWidth: '33%' }} />
        {/* </button> */}
    </div>
);

export default AudioControls;
