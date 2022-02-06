import React, { Fragment, useState } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const LoginHandler = (email, password) => {
    console.log({ email, password });
    setIsLoggedIn(true);
  };

  const LogoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={LogoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={LoginHandler} />}
        {isLoggedIn && <Home onLogout={LogoutHandler} />}
      </main>
    </Fragment>
  );
};

export default App;
