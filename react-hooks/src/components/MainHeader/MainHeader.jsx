import React from "react";
import styles from "./MainHeader.module.css";
import Navigation from "./Navigation";

const MainHeader = (props) => {
  const { onLogout } = props;
  return (
    <header className={styles["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
