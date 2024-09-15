import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import axios from "axios";
import styles from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDlmZDg2OGQ5OTA4NTA2NDk3YzE0YjFlMzVhNTY4NSIsIm5iZiI6MTcyNjM5NzU0Mi44NjUxOTYsInN1YiI6IjY2ZTZiYWExMDUwZjE0ZTRmY2NmNmViOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Odw3kxnwVPUz8ttNTUn6LDL_7luxbQrCdsVq6OtNCqI`,
            },
          }
        );
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className={styles.container}>
      {movie && (
        <>
          <h1>{movie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <p>{movie.overview}</p>
          <nav>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </nav>
          <Outlet />
        </>
      )}
    </div>
  );
}

export default MovieDetailsPage;
