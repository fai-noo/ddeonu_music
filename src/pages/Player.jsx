import { useState } from "react";
import "./Player.css"
import Lyrics from "../components/Lyrics/LyricsBox";
import MusicContainer from "../components/PlayerControl/MusicContainer";
import AgentContainer from "../components/AgentContainer/AgentContainer";
import "@fortawesome/fontawesome-free/css/all.min.css";

function MusicPlayer({ song, onBack, onNext, onPrev }) {
  const [currentTime, setCurrentTime] = useState(0);

  return (
    <div
      className="music-player"
    >
      <div className="background"> <img src={song.background}/>
      </div>
      <button className="back-button" onClick={onBack}>
        ⬅ Back
      </button>
      <AgentContainer song={song} />
      <MusicContainer
        song={song}
        onNext={onNext}
        onPrev={onPrev}
        onTimeUpdate={setCurrentTime}
      />
      <Lyrics song={song} currentTime={currentTime} />
    </div>
  );
}

export default MusicPlayer;
