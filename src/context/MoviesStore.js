import React from 'react';
import {MoviesContext} from './MoviesContext';
import {MoviesReducer} from './MoviesReducer';

const api = process.env.REACT_APP_API;    // ex: https://www.omdbapi.com
const apiKey = process.env.REACT_APP_KEY; // ex: db111111

export const MoviesStore = ({children}) => {
  const [state, dispatch] = React.useReducer(MoviesReducer, {
    loading: false,
    movies: []
  });

  const clearMovies = () => dispatch({type: 'CLEAR_MOVIES'});

  const searchMovies = async ({title, year = null}) => {
    clearMovies();
    dispatch({type: 'SHOW_LOADER'});

    try {
      const url = `${api}/?s=${title}&page=1&${year ? 'y=' + year : ''}&apikey=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();

      dispatch({type: 'FETCH_MOVIES', payload: (data && data.Search) || []});
      dispatch({type: 'HIDE_LOADER'});
    } catch (e) {
      dispatch({type: 'HIDE_LOADER'});
      throw new Error(e.message);
    }
  };

  return (
    <MoviesContext.Provider value={{
      /* properties */ ...state,
      /* methods*/ clearMovies, searchMovies
    }}>
      {children}
    </MoviesContext.Provider>
  )
};
