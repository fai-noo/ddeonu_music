// Lyrics.jsx
import React, { useEffect, useState } from "react";
import "./lyrics.css";
import songs from "../../data/songs";

function Lyrics({ song, currentTime }) {
  // cari lyric aktif sesuai currentTime (ubah format time ke detik)
  const toSeconds = (time) => {
    if (!time) return 0;
    const [min, sec] = time.split(":");
    return parseFloat(min) * 60 + parseFloat(sec);
  };

  const currentLyric = song.lyrics.find((lyric, i) => {
    const next = song.lyrics[i + 1];
    const now = currentTime;
    return (
      now >= toSeconds(lyric.time) && (!next || now < toSeconds(next.time))
    );
  });

  return (
    <div
      className="container-lyrics"
      style={{ backgroundImage: `url(${song.backgroundLyrics})` }}
    >
      <div className="container-lyrics-now">
        <div className="lyrics-song">
          <h5>{song.title}</h5>
          <p>{currentLyric ? currentLyric.text : ""}</p>
        </div>
      </div>
    </div>
  );
}

export default Lyrics;