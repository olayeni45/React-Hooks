import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Card from "../UI/Card/Card";
import styles from "./Home.module.css";
import Button from "../UI/Button/Button";

const Home = () => {
  const ctx = useContext(AuthContext);
  const { onLogout } = ctx;
  return (
    <Card className={styles.home}>
      <h1>Welcome Back! </h1>
      <Button onClick={onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
