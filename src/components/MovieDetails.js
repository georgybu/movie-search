import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({movieDetails}) => (
  <div className="movie-details">
    <div className="movie-details-bg" style={{backgroundImage: `url(${movieDetails.Poster})`}}/>
    <div className="movie-details-content">
      <p>{movieDetails.Title}</p>
      <p>Spoiler: {movieDetails.Plot}</p>
    </div>
  </div>
);

export default MovieDetails;
