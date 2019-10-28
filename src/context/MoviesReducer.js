export const MoviesReducer = (state, action) => {
  switch (action.type) {
    // loader =======================================================
    case 'SHOW_LOADER':
      return {...state, loading: true};
    case 'HIDE_LOADER':
      return {...state, loading: false};

    // movies =======================================================
    case 'CLEAR_MOVIES':
      return {...state, movies: [], loading: false};
    case 'FETCH_MOVIES':
      return {...state, movies: action.payload, loading: false};

    // movie details ================================================
    case 'CLEAR_MOVIE_DETAILS':
      return {...state, movieDetails: null, loading: false};
    case 'FETCH_MOVIE_DETAILS':
      return {...state, movieDetails: action.payload, loading: false};

    default:
      return state;
  }
};
