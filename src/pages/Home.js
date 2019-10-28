import React from 'react';
import Search from '../components/Search';
import Loader from '../components/Loader';
import MoviesList from '../components/MoviesList';

const Home = () => {
  return (
    <>
      <h1>Spoiler Movie Search</h1>
      <Search/>
      <Loader/>
      <MoviesList/>
    </>
  );
};

export default Home;
