import React, { useState, useEffect } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AuthContext from "./store/auth-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const LoginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const LogoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
      }}
    >
      <MainHeader onLogout={LogoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={LoginHandler} />}
        {isLoggedIn && <Home onLogout={LogoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
};

export default App;
