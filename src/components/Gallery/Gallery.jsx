import useFetchMovies from "../../hooks/useFetchMovies";
import { useState } from "react";
import { MovieCard, MovieSearchForm } from "..";
import "./Gallery.scss";

export const Gallery = () => {
  const [query, setQuery] = useState(null)
  const { movie, loading, error } = useFetchMovies(query);
  return (
    <main className="gallery">
      <MovieSearchForm setQuery={setQuery} />
      <div className="gallery-movies">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {movie && movie.results.length > 0 ? (
          movie.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <div>No movies found.</div>
        )}
      </div>
    </main>
  );
};
