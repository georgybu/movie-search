import React from 'react';
import {Link} from 'react-router-dom';
import {MoviesContext} from '../context/MoviesContext';
import Loader from '../components/Loader';
import MovieDetails from '../components/MovieDetails';

const Movie = ({match}) => {
  const {movieDetails, getMovieDetails} = React.useContext(MoviesContext);

  React.useEffect(() => {
    const fetchData = async () => await getMovieDetails(match.params.id);
    fetchData();
  }, []);

  return (
    <>
      <Link to="/"><span className="back-button">back</span></Link>
      <Loader/>
      {movieDetails && <MovieDetails movieDetails={movieDetails}/>}
    </>
  );
};

export default Movie;
