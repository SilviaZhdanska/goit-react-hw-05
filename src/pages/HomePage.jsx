import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";
import styles from "./HomePage.module.css";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const { data } = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/week",
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDlmZDg2OGQ5OTA4NTA2NDk3YzE0YjFlMzVhNTY4NSIsIm5iZiI6MTcyNjM5NzU0Mi44NjUxOTYsInN1YiI6IjY2ZTZiYWExMDUwZjE0ZTRmY2NmNmViOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Odw3kxnwVPUz8ttNTUn6LDL_7luxbQrCdsVq6OtNCqI`,
            },
          }
        );
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
