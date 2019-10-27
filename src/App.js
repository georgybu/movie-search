import React from 'react';
import MoviesList from './components/MoviesList';
import Search from './components/Search';
import Loader from './components/Loader';
import {MoviesStore} from './context/MoviesStore';

function App() {
  return (
    <MoviesStore>
      <h1>Movies Search</h1>
      <Search/>
      <Loader/>
      <MoviesList/>
    </MoviesStore>
  );
}

export default App;
