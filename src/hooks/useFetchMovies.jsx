import { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'https://api.themoviedb.org/3'
const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzNkMmFjN2NkM2YxZTUzNTJhMDRhYjE4N2RlZWRmYSIsIm5iZiI6MTcxOTY0NDkzMS4wNDEzODMsInN1YiI6IjY2N2ZiMjEyZmMwNmQ0YWY2ZWZlZjNmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zPM1jayZt0PRZf1YQQOe7oXmIh0bWWHJXvBXT5-f3Pg'

const useFetchMovies = (movieName = null, movieId = null) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let endpoint, params;
  if (movieId) {
    endpoint = `${API}/movie/${movieId}`
    params = {
      language: 'en-US',
      append_to_response: 'credits,videos'
    }
  } else if (movieName != null) {
    endpoint = `${API}/search/movie`
    params = {
      query: movieName
    }
  } else {
    endpoint = `${API}/discover/movie`
    params = {
      include_adult: false,
      include_video: false,
      language: 'en-US',
      page: 1,
      sort_by: 'popularity.desc'
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint, {
          params: params,
          headers: {
            accept: 'application/json',
            Authorization: TOKEN
          }
        });
        setMovie(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [movieName, movieId]);

  return { movie, loading, error };
};

export default useFetchMovies;
