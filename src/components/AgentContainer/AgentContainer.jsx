import "./AgentContainer.css";
function AgentContainer({ song }) {
  return (
    <div className="agent-container">
      <div className="agent-header">
        <h2>Agent</h2>
      </div>
      <img src={song.artistPhoto} alt={song.artist} className="agent-image" />
      <div className="agent-footer">
        <span className="status-active active">ACTIVE</span>
        <span className="name">{song.artist}</span>
      </div>
    </div>
  );
}

export default AgentContainer;