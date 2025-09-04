import { useState } from "react";
import songs from "./data/songs";
import SongList from "./pages/home";
import MusicPlayer from "./pages/Player";
import "./App.css";

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(null);

  // Saat pilih lagu dari playlist
  const handleSelectSong = (song) => {
    const index = songs.findIndex((s) => s.id === song.id);
    setCurrentSongIndex(index);
  };

  // Balik ke playlist
  const handleBack = () => {
    setCurrentSongIndex(null);
  };

  // Next song
  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
  };

  // Prev song
  const handlePrev = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };

  return (
    <div className="App">
      {currentSongIndex === null ? (
        // Kalau belum pilih lagu -> tampilkan playlist
        <SongList songs={songs} onSelectSong={handleSelectSong} />
      ) : (
        // Kalau sudah pilih -> tampilkan player
        <MusicPlayer
          song={songs[currentSongIndex]}
          onBack={handleBack}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}

export default App;
