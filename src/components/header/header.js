import React from 'react';

import './header.css';

const Header = (props) => {
  const {onToggleDemo} = props;
  return (
    <div className = "header d-flex">
      <h3>
        <a href ="#/">
          Star DB
        </a>
      </h3>
      <ul className = "d-flex">
        <li>
          <a href = "#/people">People</a>
        </li>
        <li>
          <a href = "#/planets">Planets</a>
        </li>
        <li>
          <a href = "#/starship">Starships</a>
        </li>
        <li>
          <button onClick={()=>{onToggleDemo()}}>Demo</button>
        </li>
      </ul>
    </div>)
}
export default Header;