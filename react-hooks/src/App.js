import React, { Fragment, useContext } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AuthContext from "./store/auth-context";

const App = () => {
  const ctx = useContext(AuthContext);
  const { isLoggedIn } = ctx;

  return (
    <Fragment>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
      </main>
    </Fragment>
  );
};

export default App;
