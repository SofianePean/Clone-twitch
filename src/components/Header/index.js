import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './IconeTwitch.svg';
import search from './Search.svg';
import menuIco from './MenuIco.svg';
import './header.scss';

function Header() {
  const [menu, showMenu] = useState(false);
  const [smallScreen, setSmallScrenn] = useState(false);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setSmallScrenn(true);
    }
    else {
      setSmallScrenn(false);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 900px)');
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  });

  const toggleNavRes = () => {
    showMenu(!menu);
  };
  return (
    <div>
      <nav className="header-top">
        {(menu || !smallScreen) && (

        <ul className="list-menu">
          <li className="link-nav">
            <Link className="link" to="/">
              <img src={logo} alt="logo twitch" className="logo" />
            </Link>
          </li>
          <li className="link-nav">
            <Link className="link" to="/">
              Top Games
            </Link>
          </li>
          <li className="link-nav">
            <Link className="link" to="/top-streams">
              Top Streams
            </Link>
          </li>
          <li className="link-nav">
            <form className="form">
              <input type="text" className="input-search" placeholder="Rechercher" />
              <button type="submit">
                <img src={search} alt="icone loupe" className="logo-loupe" />
              </button>
            </form>
          </li>
        </ul>
        )}
      </nav>
      <div className="menuResBtn">
        <img onClick={toggleNavRes} src={menuIco} alt="icone menu responsive" className="menuResBtn-menu-icon" />
      </div>
    </div>

  );
}

export default Header;
