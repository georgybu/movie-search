import React from 'react';
import {MoviesContext} from './MoviesContext';
import {MoviesReducer} from './MoviesReducer';

const api = process.env.REACT_APP_API;    // ex: https://www.omdbapi.com
const apiKey = process.env.REACT_APP_KEY; // ex: db111111

export const MoviesStore = ({children}) => {
  const [state, dispatch] = React.useReducer(MoviesReducer, {
    loading: false,
    movieDetails: null,
    movies: []
  });

  const clearMovies = () => dispatch({type: 'CLEAR_MOVIES'});

  const clearMovieDetails = () => dispatch({type: 'CLEAR_MOVIE_DETAILS'});

  const searchMovies = async ({title, year = null}) => {
    clearMovies();
    const url = `${api}/?s=${title}&page=1&${year ? 'y=' + year : ''}&apikey=${apiKey}`;
    return httpRequest(url, (data) => {
      dispatch({type: 'FETCH_MOVIES', payload: (data && data.Search) || []});
    });
  };

  const getMovieDetails = async (id) => {
    clearMovieDetails();
    const url = `${api}/?i=${id}&apikey=${apiKey}`;
    return httpRequest(url, (data) => dispatch({type: 'FETCH_MOVIE_DETAILS', payload: data}));
  };

  const httpRequest = async (url, onSuccess) => {
    dispatch({type: 'SHOW_LOADER'});
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({type: 'HIDE_LOADER'});
      onSuccess(data);
    } catch (e) {
      dispatch({type: 'HIDE_LOADER'});
      throw new Error(e.message);
    }
  };

  return (
    <MoviesContext.Provider value={{
      /* properties */ ...state,
      /* methods*/ clearMovies, searchMovies, getMovieDetails
    }}>
      {children}
    </MoviesContext.Provider>
  )
};
