import React from "react";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  const { isLoggedIn, onLogout } = props;

  return (
    <nav className={styles.nav}>
      {isLoggedIn && (
        <ul>
          <li>
            <a href="/">Users</a>
          </li>
          <li>
            <a href="/">Admin</a>
          </li>
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
