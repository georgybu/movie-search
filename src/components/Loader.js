import React from 'react';
import {MoviesContext} from '../context/MoviesContext';

const Loader = () => {
  const {loading} = React.useContext(MoviesContext);
  return (loading && <div className="loader"/>);
};

export default Loader;
