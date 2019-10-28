import React from 'react';
import {Link} from 'react-router-dom';

const MoviesListItem = ({Title, Year, Poster, imdbID}) => (
  <Link to={'/movie/' + imdbID}>
    <li style={{backgroundImage: `url(${Poster})`}}>
      <span className="title">{Title}</span>
      <span className="year">{Year}</span>
    </li>
  </Link>
);

export default MoviesListItem;
