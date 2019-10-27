import React from 'react';
import MoviesListItem from './MoviesListItem';
import {MoviesContext} from '../context/MoviesContext';

const MoviesList = () => {
  const {movies} = React.useContext(MoviesContext);
  return (
    <ul className='movies'>
      {movies.map((movie) => <MoviesListItem {...movie} key={movie.imdbID}/>)}
    </ul>
  );
};

export default MoviesList;
