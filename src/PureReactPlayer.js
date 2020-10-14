import React, { useState } from "react";
import {
  SkipPreviousOutlined as SkipPreviousOutlinedIcon,
  SkipNextOutlined as SkipNextOutlinedIcon,
  PlayCircleOutlineOutlined as PlayCircleOutlineOutlinedIcon,
  PauseCircleOutlineOutlined as PauseCircleOutlineOutlinedIcon,
} from "@material-ui/icons";

const songsData = [
  {
    name: "hasi",
    titie: "1",
    artist: "shubhalo1",
    coverImg: "1",
    musicSrc: "hasi",
  },
  {
    name: "kabir",
    titie: "Screenshot (119)",
    artist: "shubhalo2",
    coverImg: "Screenshot (119)",
    musicSrc: "kabir",
  },
  {
    name: "nayanne",
    titie: "Screenshot (120)",
    artist: "shubhalo3",
    coverImg: "Screenshot (120)",
    musicSrc: "nayanne",
  },
];

const PureReactPlayer = () => {
  const [pause, setPause] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  let [songIndex, setSongIndex] = useState(0);
  const [songDuration, setSongDuration] = useState("0:00");

  // Play Music
  const playMusic = () => {
    const music = document.querySelector("audio");
    const coverImg = document.querySelector("img");
    setIsPlaying(true);
    setPause(true);
    music.play();
    console.log(music);
    coverImg.classList.add("anime");
    // Progress Bar
    music.addEventListener("timeupdate", (event) => {
      let { currentTime, duration } = event.srcElement;
      let progress = document.getElementById("progress");
      let progress_time = (currentTime / duration) * 100;
      progress.style.width = `${progress_time}%`;

      // Music Duration Update
      const total_duration = document.getElementById("duration");
      //   const current_time = document.getElementById("current_time");
      let min_duration = Math.floor(duration / 60);
      let sec_duration = Math.floor(duration % 60);

      let totalSongDuration = `${min_duration}:${sec_duration}`;
      setSongDuration(totalSongDuration);
    });
  };

  // Pause Music
  const pauseMusic = () => {
    const music = document.querySelector("audio");
    const coverImg = document.querySelector("img");
    setIsPlaying(false);
    setPause(false);
    music.pause();
    coverImg.classList.remove("anime");
  };

  // Handle Play And Pause Music
  const onPlaySong = () => {
    isPlaying ? pauseMusic() : playMusic();
  };

  // Handle Next Song
  const onNextSong = () => {
    setSongIndex((songIndex + 1) % songsData.length);
  };

  // Handle Previous Song
  const onPrevSong = () => {
    setSongIndex((songIndex - 1 + songsData.length) % songsData.length);
  };

  return (
    <div className="main_div">
      <div className="music_container">
        <h2 id="title">{songsData[songIndex].name}</h2>
        <h3 id="artist">{songsData[songIndex].titie}</h3>
        <div className="img_container">
          <img
            src={require(`./images/${songsData[songIndex].coverImg}.png`)}
            alt={songsData[songIndex].titie}
          />
        </div>
        <audio
          src={require(`./music/${songsData[songIndex].musicSrc}.mp3`)}
        ></audio>
        <div className="progressbar_container">
          <div className="progressbar_duration_meter">
            <div id="current_time">0:00</div>
            <div id="duration">{songDuration} </div>
          </div>
          <div className="progress_div" id="progress_div">
            <div className="progress" id="progress"></div>
          </div>
        </div>
        {/* controls */}
        <div className="music_controls">
          <span id="prev" onClick={onPrevSong}>
            <SkipPreviousOutlinedIcon titleAccess="Prev" />
          </span>
          <span id="play" onClick={onPlaySong}>
            {pause ? (
              <PauseCircleOutlineOutlinedIcon
                titleAccess="Pause"
                className="main_button"
              />
            ) : (
              <PlayCircleOutlineOutlinedIcon
                titleAccess="Play"
                className="main_button"
              />
            )}
          </span>
          <span id="next" onClick={onNextSong}>
            <SkipNextOutlinedIcon titleAccess="Next" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PureReactPlayer;
