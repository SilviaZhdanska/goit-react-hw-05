import React, { useState } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";
import styles from "./MoviesPage.module.css";

function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDlmZDg2OGQ5OTA4NTA2NDk3YzE0YjFlMzVhNTY4NSIsIm5iZiI6MTcyNjM5NzU0Mi44NjUxOTYsInN1YiI6IjY2ZTZiYWExMDUwZjE0ZTRmY2NmNmViOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Odw3kxnwVPUz8ttNTUn6LDL_7luxbQrCdsVq6OtNCqI`,
          },
        }
      );
      setMovies(data.results);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <button onClick={handleSearch}>Search</button>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
