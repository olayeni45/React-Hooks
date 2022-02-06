import React from "react";
import styles from "./MainHeader.module.css";
import Navigation from "./Navigation";

const MainHeader = (props) => {
  const { isAuthenticated, onLogout } = props;
  return (
    <header className={styles["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
