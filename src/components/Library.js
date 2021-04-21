import React from "react";
import LibrarySongs from "./LibrarySongs";

const Library = ({ songs, setCurrentSong, isPlaying, setSongs, audioRef }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySongs
            song={song}
            setCurrentSong={setCurrentSong}
            songs={songs}
            id={song.id}
            key={song.id}
            isPlaying={isPlaying}
            setSongs={setSongs}
            audioRef={audioRef}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
