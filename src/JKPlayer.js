import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import hasi from "./music/hasi.mp3";
import kabir from "./music/kabir.mp3";
import nayanne from "./music/nayanne.mp3";
import hasiImag from "./images/1.png";

const JKPlayer = () => {
  const audioLists = [
    {
      cover: hasiImag,
      musicSrc: hasi,
      name: "shubham khunt",
      singer: "ankit",
    },
    {
      cover: hasiImag,
      musicSrc: kabir,
      name: "kabir khunt",
      singer: "kabir",
    },
    {
      cover: hasiImag,
      musicSrc: nayanne,
      name: "nayanne khunt",
      singer: "nayanne",
    },
  ];

  return (
    <>
      <ReactJkMusicPlayer
        audioLists={audioLists}
        autoPlay={false}
        showPlayMode={false}
        defaultPosition={{ top: 100, left: 100 }}
      />
    </>
  );
};
export default JKPlayer;
