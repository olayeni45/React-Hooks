import React from "react";
import styles from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

const Navigation = (props) => {
  const { onLogout } = props;

  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <nav className={styles.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
