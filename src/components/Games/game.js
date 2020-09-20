import PropTypes from "prop-types";
import React from 'react';

function Game({ name, box }) {
  return (
    <div className="card">
      <img src={box} alt="jeu profil pic" className="card-img" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="card-btn">Regarder {name}</div>
      </div>
    </div>
  );
}

Game.propTypes = {
  box: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Game;
