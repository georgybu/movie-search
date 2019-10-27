import React from 'react';

const MoviesListItem = ({Title, Year, Poster}) => (
  <li style={{backgroundImage: `url(${Poster})`}}>
    <span className="title">{Title}</span>
    <span className="year">{Year}</span>
  </li>
);

export default MoviesListItem;
