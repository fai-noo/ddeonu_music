import { useRef, useState, useEffect } from "react";
import "./MusicContainer.css";
function MusicContainer({ song, onNext, onPrev, onTimeUpdate }) {

  useEffect(() => {
    if (audioRef.current){
      audioRef.current.load();
      audioRef.current.play()
    }
  }, [song]);
  
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const updateProgress = () => {
    const duration = audioRef.current.duration;
    const current = audioRef.current.currentTime;

    if (!isNaN(duration)) {
      setProgress((current / duration) * 100);
    }

    const minutes = Math.floor(current / 60);
    const seconds = Math.floor(current % 60);
    const formatted = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    setCurrentTime(formatted);

    if (onTimeUpdate) onTimeUpdate(current); // kirim currentTime ke parent (buat lyrics)
  };

  const setProgressClick = (e) => {
    const width = e.target.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    const duration = audioRef.current.duration;
    audioRef.current.currentTime = (clickX / width) * duration;
  };

  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime("0:00");
  }, [song]);

  return (
    <div
      className="music-container"
    >
      <div className="music-content">
        <div className="vinyl">
          <img src={song.cover} alt={song.title} className="album-cover" />
        </div>

        <div className="music-info">
          <span className="song-title">{song.title}</span>
          <span className="artist-name">{song.artist}</span>
        </div>

        <div className="song-progress" onClick={setProgressClick}>
          <div className="progress" style={{ width: `${progress}%` }}></div>
          <div className="music-duration">
            <span className="current-time">{currentTime}</span>
            <span className="end-time">{song.duration}</span>
          </div>
        </div>

        <div className="player-controls">
          <i
            className="fa-solid fa-backward"
            title="Previous"
            onClick={onPrev}
          ></i>
          <i
            className={`fa-solid ${
              isPlaying ? "fa-pause" : "fa-play"
            } play-button`}
            title={isPlaying ? "Pause" : "Play"}
            onClick={togglePlay}
          ></i>
          <i className="fa-solid fa-forward" title="Next" onClick={onNext}></i>
        </div>

        <audio
          ref={audioRef}
          src={song.url}
          onTimeUpdate={updateProgress}
          onEnded={onNext}
        ></audio>
      </div>
    </div>
  );
}

export default MusicContainer;