import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card--card">
            <Link to={`/movies/${movie.id}`} className="link">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-card--poster"
                />
            </Link>
            <div className="movie-card--content">
                <h2 className="movie-card--title">{movie.title}</h2>
                <p className="movie-card--overview">{movie.overview}</p>
                <p className="movie-card--releaseDate">
                    <strong>Release Date:</strong> {movie.release_date}
                </p>
                <p className="movie-card--voteAverage">
                    <strong>Rating: </strong> {movie.vote_average.toFixed(1)} / 10 ({movie.vote_count} votes)
                </p>
            </div>
        </div>
    );
}; 
