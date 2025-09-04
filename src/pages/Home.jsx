import { useState } from "react";
import songs from "../data/songs";
import SongItem from "../components/Info/SongInfo";
import "./Home.css";
function SongList({ onSelectSong }) {
  const [filterSongs, setFilterSongs] = useState(songs);
  const handleSearch = (e) => {
    const search = songs.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterSongs(search);
  };

  return (
    <div className="songlist-container">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        className="search-input"
      />
      <div className="list-lagu">
        {filterSongs.length === 0 ? (
          <div className="no-data">Data tidak ditemukan</div>
        ) : (
          filterSongs.map((song) => (
            <SongItem
              key={song.id}
              song={song}
              onClick={() => onSelectSong(song)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default SongList;
