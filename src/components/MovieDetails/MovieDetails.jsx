import { useParams } from 'react-router-dom';
import './MovieDetails.scss';
import useFetchMovies from '../../hooks/useFetchMovies';
import { MovieCast } from '../MovieCastCard/MovieCastCard';
import { MovieCrew } from '../MovieCrewCard/MovieCrewCard';

export const MovieDetails = () => {
    const { movieId } = useParams();
    const { movie, loading, error } = useFetchMovies(null, movieId);

    return (
        <main className='movie-details--container'>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {movie ? (
                <>
                    <div className='movie-details--basics'>
                        <div className='movie-details--basics-img'>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="movie-card--poster"
                            />
                        </div>
                        <div className="movie-details--basics-text">
                            <h2>{movie.title}</h2>
                            <p>{movie.tagline}</p>
                            <p className='movie-details--overview'><strong>Description:</strong> {movie.overview}</p>
                            <p><strong>Genres:</strong> {movie.genres.map(c => c.name).join(', ')}</p>
                            <p><strong>Languages:</strong> {movie.spoken_languages.map(c => c.name).join(', ')}</p>
                            <p><strong>Release Date:</strong> {movie.release_date}</p>
                            <br />
                            <p><strong>Rating: </strong> {movie.vote_average.toFixed(1)} / 10 ({movie.vote_count} votes)</p>
                            <p><strong>Budget: </strong> {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(movie.budget)}</p>
                            <p><strong>Revenue: </strong> {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(movie.revenue)}</p>
                            <br />
                            <p><strong>Production Companies:</strong> {movie.production_companies.map(c => c.name).join(', ')}</p>
                            <p><strong>Production Countries:</strong> {movie.production_countries.map(c => c.name).join(', ')}</p>
                        </div>
                    </div>
                    <br />
                    <div className="movie-details--extended">
                        <h2>Cast</h2>
                        <MovieCast cast={movie.credits.cast} />
                        <h2>Crew</h2>
                        <MovieCrew crew={movie.credits.crew} />
                    </div>
                </>
            )
            : 
            <div>No movies found.</div>
}
        </main >
    );
};
