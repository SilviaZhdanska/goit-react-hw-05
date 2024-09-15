import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1>Page Not Found</h1>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default NotFoundPage;
