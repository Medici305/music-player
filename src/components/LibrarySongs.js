import React from "react";

const LibrarySongs = ({
  songs,
  song,
  setCurrentSong,
  isPlaying,
  setSongs,
  id,
  audioRef,
}) => {
  // Functions
  const songSelectHandler = () => {
    setCurrentSong(song);
    const playPromise = audioRef.current.play();
    if (playPromise) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
    const newSong = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSong);
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt="cover" />
      <div className="song-desc">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySongs;
