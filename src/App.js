import React, { useState, useRef } from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";
import data from "./data";
import "./styles/app.scss";

function App() {
  // UseRef
  const audioRef = useRef(null);

  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  // UseState
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animatePercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  // Functions
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const currentRounded = Math.round(current);
    const durationRounded = Math.round(duration);
    const animate = Math.round((currentRounded / durationRounded) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animatePercentage: animate,
    });
  };

  const songEndHandler = async () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div className={`app ${libraryStatus ? "library-active" : ""}`}>
      <Nav setLibraryStatus={setLibraryStatus} libraryStatus={libraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        audioRef={audioRef}
        libraryStatus={libraryStatus}
      />
      <audio
        onEnded={songEndHandler}
        ref={audioRef}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
