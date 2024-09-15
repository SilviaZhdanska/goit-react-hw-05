import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./MovieCast.module.css";

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDlmZDg2OGQ5OTA4NTA2NDk3YzE0YjFlMzVhNTY4NSIsIm5iZiI6MTcyNjM5NzU0Mi44NjUxOTYsInN1YiI6IjY2ZTZiYWExMDUwZjE0ZTRmY2NmNmViOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Odw3kxnwVPUz8ttNTUn6LDL_7luxbQrCdsVq6OtNCqI`,
            },
          }
        );
        setCast(data.cast);
      } catch (error) {
        console.error("Error fetching movie cast:", error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div className={styles.container}>
      <h2>Cast</h2>
      <ul>
        {cast.map((member) => (
          <li key={member.id}>
            <p>{member.name}</p>
            <p>{member.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCast;
