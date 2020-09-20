import React from 'react';

function ItemTopStreams({ thumbnail_url, user_name, gameName, viewer_count }) {
  return(
    <div className="card-stream">
      <img src={thumbnail_url} alt="jeu" className="card-stream-img" />
      <div className="card-stream-body">
        <h5 className="card-stream-title">{user_name}</h5>
        <p className="card-stream-text">Jeu : {gameName}</p>
        <p className="card-stream-viewer">Viewers :{viewer_count}</p>
        <div className="card-btn">Regarder {user_name}</div>
      </div>
    </div>
  )
}

export default ItemTopStreams;
