import React, { useState, useEffect } from 'react';
import api from '../../../api';
import './sidebar.scss';

function Sidebar() {
  const [topStreams, setTopStreams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Appel à l'API pour récupérer les top stream
      const result = await api.get('https://api.twitch.tv/helix/streams');
      const dataArray = result.data.data;
      // Je viens map le tableau pour récupérer les id dont j'aurai besoin pour la suite
      const gameIds = dataArray.map((stream) => stream.game_id);
      const userIds = dataArray.map((stream) => stream.user_id);
      console.log(gameIds);
      console.log(userIds);
    };

    fetchData();
  }, []);

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Chaîne recommandées</h2>
      <ul className="list-stream" />
    </div>
  );
}

export default Sidebar;
