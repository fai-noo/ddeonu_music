import "./songInfo.css";

function SongItem({ song, onClick }) {
  return (
    <div className="song-card" onClick={onClick}>
      <div className="song-row" key={song.id}>
        <img src={song.cover} alt={song.title} className="song-cover" />
        <p className="song-title">{song.title}</p>
        <p className="song-artist">{song.artist}</p>
        <p className="song-duration">{song.duration}</p>
      </div>
    </div>
  );
}

export default SongItem;
