export const MoviesReducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_MOVIES':
      return {...state, movies: [], loading: false};
    case 'SHOW_LOADER':
      return {...state, loading: true};
    case 'FETCH_MOVIES':
      return {...state, movies: action.payload, loading: false};
    case 'HIDE_LOADER':
      return {...state, loading: false};
    default:
      return state;
  }
};
